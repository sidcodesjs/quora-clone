const mongoose = require('mongoose')

const Queschema = new mongoose.Schema({
    questionName: String,
    questionUrl: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    answers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ans'
    } 

})

module.exports = mongoose.model("Que", Queschema);