const router = require("express").Router();
const User = require("../models/User")
const Report = require("../models/Report")
const District = require("../models/District")
const verifyToken = require("../jwt/verifyJWT");

router.post("/report/:district", verifyToken, async (req, res) => {

    // Simple check for a valid paramete
    const parameters = ["shevchenko","obolon","dnipro", "darnytsia", "holosiiv", "pechersk", "solomyansk", "svyatoshni", "podil"]
    
    if(parameters.indexOf(req.params.district) === -1){
        res.status(400).send("Invalid parameter")
        return
    }


    // ID should be sent with the post request for us to find the user in the db and increment his daily report quota
    
    const id = req.header("id-token")
    if(!id) return res.status(400).header("is-token-valid", false).send("Access Denied - No id-token header or it is empty")


    try{
        // INCREMENT USERS DAILY QUOTA
        const user = await User.findById(id)
        // Increment daily request quota
        await user.updateOne({$set:{amountOfRequestToday: user.amountOfRequestToday + 1, lastRequestTime: Date.now()}}, {upsert: true, new: true, runValidators: true, setDefaultsOnInsert: true})
        // 


        // UPDATE THE DISTRICT INFORMATION

        // Create a report entry for report table
        const reportEntry = new Report({
            reporterId: id, 
            reportDistrict: req.params.district
        })

        try{
            // Save new report entry in report table
            await reportEntry.save();            
            // Find the according district and push its according report id
            const district = await District.findOne({districtName: req.params.district})
            district.districtReports.push(reportEntry)
            // save the new district entry
            await district.save()
        }catch(err){

            res.status(500).send(err)

        }

        res.status(200).send("Report accepted")

    }catch(err){

        res.status(500).send(err)

    }


})


module.exports = router