const router = require("express").Router();
const District = require("../models/District");
const verifyToken = require("../verifyJWT");

// create a route for this endpoint /get-districts
router.get("/get-districts",verifyToken, async (req,res) => {

    try{
        // this gets all districts
        const districts = await District.find()
        // send them back with a 200 ok status
        res.status(200).send({"districts": districts})
    }catch(err){
        // send back an error if caught wioth a 400 status
        res.status(400).send(err)
    }

})

module.exports = router