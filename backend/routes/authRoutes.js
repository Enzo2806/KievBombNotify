const router = require("express").Router();
const bcrypt = require("bcrypt")
const User = require("../models/User")
const getJwt = require("../jwt/getJWT")
const refreshToken = require("../jwt/verifyRefreshJWT")

router.post("/login", async (req,res) => {
    
    try{

        // try finding user, if not return status 400 and an error message
        const user = await User.findOne({"username": req.body.username})
        if (!user) return res.status(400).send("Wrong login or password")

        // try comparing passwords, if comparison failds return status 400 and error message
        const validPass = req.body.password === user.password ? true : false
        if(!validPass) return res.status(400).send("Wrong login or password")

        // create and assign tokens
        const authToken = getJwt(user.id, 15*60)
        const refreshToken = getJwt(user.id, 60*60*24*7) 

        // set them as a header and send a response
        res.status(200).set({
            "auth-token": authToken,
            "refresh-token": refreshToken,
            "id-token": user.id
        }).send("Successful login!")

    }catch(err){
        res.status(500).send(err)
    }

})

router.get("/refresh", refreshToken,(req, res) => {

    try{

        const idToken = req.header("id-token")
        if(!idToken) return res.status(400).header("is-token-valid", false).send("Access Denied - No id-token header or it is empty")

        // create and assign fresh token
        const authToken = getJwt(idToken, 15*60)

        // set them as a header and send a response
        res.status(200).set({
            "auth-token": authToken
        }).send("Successful refresh!")

    }catch(err){
        
        res.status(500).send(err)

    }

})

module.exports = router
