const mongoose = require('mongoose');
const ServerLessPocSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: false
    },
    passportId: {
        type: String,
        required: false
    },
    nId: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: true
    }
});

const ServerLessPoc = mongoose.model("ServerLessPoc", ServerLessPocSchema);
module.exports.ServerLessPoc = ServerLessPoc;