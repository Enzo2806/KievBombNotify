const express = require("express")
const app = express();
const mongoose = require("mongoose")
const User = require("./models/User")
const District = require("./models/District");
const distRoutes = require("./routes/districtRoutes")

// CONNECT TO DB
mongoose.connect("mongodb+srv://KBNDev:KBNDevucg567@kyiv-bomb-notification.z8ok2ge.mongodb.net/?retryWrites=true&w=majority"
).then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
});

// Db reference
const db = mongoose.connection

// Middleware
app.use(express.json())

app.use("/", distRoutes)


// App is lsitening on port 8080
app.listen(8080, ()=> {console.log("Listening PORT:8080")})