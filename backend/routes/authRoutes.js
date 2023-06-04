const router = require("express").Router();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

router.post("/login", async (req,res) => {
    
    try{

        // try finding user, if not return status 400 and an error message
        const user = await User.findOne({"username": req.body.username})
        if (!user) return res.status(400).send("Wrong login or password")

        // try comparing passwords, if comparison failds return status 400 and error message
        const validPass = req.body.password === user.password ? true : false
        if(!validPass) return res.status(400).send("Wrong login or password")

        // create and asign token
        const token = jwt.sign({_id: user.id}, "KBNteamSecret", {expiresIn:60*60*6})
        res.header("auth-token", token).send({"token":token, "id": user.id})

    }catch(err){
        res.send(err)
    }

})

module.exports = router
