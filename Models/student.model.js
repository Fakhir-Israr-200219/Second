const mongoose = require("mongoose");

const studentModel = mongoose.Schema({
    name: {
        type: String,
        required: [true, "pls enter name"]
    },
    email: {
        type: String,
        required: [true, "pls enter unique emaill id"],
        unique: [true, "email is alredy taken"]
    },
    phone: {
        type: String,
        required: [true, "phone is required"],
    }
}, { timestamp: true })

module.exports = mongoose.model("Second",studentModel);