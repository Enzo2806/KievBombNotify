const mongoose = require("mongoose")

const districtSchema = new mongoose.Schema({

    districtName:{
        type: String,
        required: true
    },
    districtActivelyBombed:{
        type: Boolean,
        required: true
    },
    districtReports: {
        type: Number,
        required: true,
        expires: 60
    }
    
})

module.exports = mongoose.model("District", districtSchema)