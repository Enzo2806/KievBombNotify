const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next) => {
    // get the token as a variable from a request header
    const token = req.header("auth-token")

    // check if token exists, otherwise status 401 access denied
    if(!token) return res.status(401).send("Access Denied")

    try{
        // try verifying the token, if all good and no error thrown, next() is called which proceeds to execute the next middleware in the stack
        const verified = jwt.verify(token, "KBNteamSecret")
        next()
    }catch(err){
        // if there is an error send status 400 with a invalid token message
        res.status(400).send("Invalid Token")
    }
}

module.exports = verifyToken