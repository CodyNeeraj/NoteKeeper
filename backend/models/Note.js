const mongoose = require("mongoose")
const { Schema } = mongoose

const NotesSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    title: { String, required: true },
    description: { String, required: true },
    tag: { String, required: true },
    date: { type: Date, default: Date.now },
})

// collection classifier name ahead in the first parameter of the model
module.exports = mongoose.model("notes", NotesSchema)
