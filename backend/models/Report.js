const mongoose = require("mongoose")


const reportSchema = mongoose.Schema({
    reporterId: {
        type: String,
        required: true
    },
    reportDistrict: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 7200
    }
})

reportSchema.index(({"createdAt": 1 },{ expireAfterSeconds: 7200 }))


module.exports = mongoose.model("Report", reportSchema)