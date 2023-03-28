const mongoose = require("mongoose")
const { Schema } = mongoose

const UserSchema = new Schema({
    name: { String, required: true },
    email: { String, required: true },
    password: { String, required: true, unique: true },
    date: { type: Date, default: Date.now },
})

// collection classifier name ahead in the first parameter of the model
module.exports = mongoose.model("users", UserSchema)
