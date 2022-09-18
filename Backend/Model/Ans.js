const mongoose = require('mongoose')

const AnsSchema = new mongoose.Schema({
    Ans: String,
    questionId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Que"

    },
    // questionUrl: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    // answers: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Ans'
    // } 

})

module.exports = mongoose.model("Ans", AnsSchema);