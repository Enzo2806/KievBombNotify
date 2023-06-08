const jwt = require("jsonwebtoken")

const refreshToken = (req, res, next) => {
    
    // get the token and store as a variable from a request header
    const token = req.header("refresh-token")

    // check if token exists, otherwise status 401 access denied
    if(!token) return res.status(400).send("Access Denied - No refresh-token header or it is empty")

    try{
        // try verifying the token, if all good and no error thrown, next() is called which proceeds to execute the next middleware in the stack
        const verified = jwt.verify(token, "refresh-secret")
        next()
    }catch(err){
        // if there is an error send status 400 with a invalid token message
        res.status(400).header("is-token-valid", false).send("Access denied - Invalid refresh token")
    }

}

module.exports = refreshToken