const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://next:next@cluster0.cvnyhjo.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("mongodb connceted")

    })

    .catch((err) => {
        console.log("failed", err);
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
