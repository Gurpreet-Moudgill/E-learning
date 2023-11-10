const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_PRIVATE_URL)
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
