const jwt = require("jsonwebtoken")

// PLEASE BE CAREFUL WITH THE jwtSecret use only ["auth-secret", "refresh-secret"]
const getJwt = (userId, expiresIn, jwtSecret) => {

    const allowedParams = ["auth-secret", "refresh-secret"]
    if(allowedParams.indexOf(jwtSecret) === -1) {
        const error = "[SERVER ERROR] Unsuccessfull - Invalid jwtSecret paramater, please use one that is allowed - ['auth-secret', 'refresh-secret']"

        console.log("\x1b[31m%s\x1b[0m",error)
        throw new Error(error)
    }

    const token = jwt.sign({_id: userId}, jwtSecret, {expiresIn:expiresIn})

    return token
}

module.exports = getJwt