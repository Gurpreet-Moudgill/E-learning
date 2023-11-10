const mongoose = require("mongoose")

mongoose.connect(mongodb+srv://new:new@cluster0.57qjyvf.mongodb.net/?retryWrites=true&w=majority)
    .then(() => {
        console.log("mongodb connceted")

    })

    .catch(() => {
        console.log("failed");
    })

    const LogInSchema = new mongoose.Schema({
        email:{
            type: String,
            required:true
        },
        name:{
            type: String,
            required:true
        },
        password:{
            type: String,
            required:true
        }
    })

    const collection = new mongoose.model("collection1", LogInSchema)

    module.exports = collection;
