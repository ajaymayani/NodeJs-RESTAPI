const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/student-api")
    .then(() => {
        console.log("connection success")
    })
    .catch((e) => {
        console.log(e)
    })