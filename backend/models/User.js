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
        require:true
    },
    amountOfRequestToday:{
        type: Number,
        required: true
    },
    lastRequestTime:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("User", userSchema)