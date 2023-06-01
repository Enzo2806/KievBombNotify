const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    password:{
        type: String,
        required: true,
        min:6,
        max: 1024
    },
    flagged:{
        type: Boolean,
        default: false
    },
    amountOfRequestToday:{
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    lastRequestTime:{
        type: Date,
        default: null
    }

})

module.exports = mongoose.model("User", userSchema)