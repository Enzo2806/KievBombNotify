const router = require("express").Router();
const User = require("../models/User")
const Report = require("../models/Report")
const District = require("../models/District")


router.post("/report/:district", async (req, res) => {

    // Simple check for a valid paramete
    const parameters = ["shevchenko","obolon","dnipro", "darnytsia", "holosiiv", "pechersk", "solomyansk", "svyatoshni", "podil"]
    
    if(parameters.indexOf(req.params.district) === -1){
        res.status(400).send("Invalid parameter")
        return
    }


    // ID should be sent with the post request for us to find the user in the db and increment his daily report quota
    
    const id = req.body.id


    try{
        // INCREMENT USERS DAILY QUOTA

        const user = await User.findById(id)
        await user.updateOne({$set:{amountOfRequestToday: user.amountOfRequestToday + 1}}, {upsert: true, new: true, runValidators: true, setDefaultsOnInsert: true})

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
            console.log(err)
            res.status(400).send(err)

        }

        res.status(200).send("Report accepted")

    }catch(err){

        res.status(400).send(err)

    }


})


module.exports = router