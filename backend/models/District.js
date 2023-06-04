const mongoose = require("mongoose")

const districtSchema = new mongoose.Schema({
    
    districtName:{
        type: String,
        required: true
    },
    districtReports: [{type: mongoose.Schema.Types.ObjectId, ref: "Report"}]
    
})

module.exports = mongoose.model("District", districtSchema)