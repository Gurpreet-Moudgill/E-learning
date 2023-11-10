const mongoose = require("mongoose")

mongoose.connect("mongodb://mongo:4dG4cD-65E5aDBdG---H1143DahgAC65@roundhouse.proxy.rlwy.net:20687")
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
