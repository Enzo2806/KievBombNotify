const jwt = require("jsonwebtoken")

const getJwt = (userId, expiresIn) => {

    const token = jwt.sign({_id: userId}, "KBNteamSecret", {expiresIn:expiresIn})

    return token
}

module.exports = getJwt