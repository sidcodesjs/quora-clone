const express = require('express');
const router = express.Router();
const questionRouter = require('./Questions');
// const answerRouter = require('./Answers');

router.get('/', (req, res) => {
    res.send("This is reserved API.")
})

router.use('/questions', questionRouter)
// router.use('/Answers', answerRouter)

module.exports = router ;