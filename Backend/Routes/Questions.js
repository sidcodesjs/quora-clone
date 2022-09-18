const express = require('express');
const { send } = require('express/lib/response');
const res = require('express/lib/response');
const { message } = require('statuses');
const router = express.Router();

const questionDB = require("../model/Que")

router.post('/',async (req, res) => {
    console.log(req.body)

    try{
        await questionDB.create({
            questionName: req.body.questionName,
            questionUrl: req.body.questionUrl,

        }).then(() =>{
            res.status(201).send({
                status: true,
                message: "Question added successfully"
            })

        }).catch((err)=> {
            res.status(400).send({
                status: false,
                message: "Bad format"
            })
        })

    }catch (e){
        res.status(500).send({
            status: false,
            message: "Error while adding question"
        })

    }
});


router.post("/")



router.get('/', async (req, res) => {
    try{
        await questionDB.aggregate([{
            $lookup: {
                from: "Ans",
                localField: "_id",
                foreignField: "questionID",
                as: "allAns"
            }
        }]).exact().then((doc) => {
            res.status(200).send.doc
    }).catch((error) => {
        res.status(500),send({
            status: false,
            message: "Unable to get a Answer"
        })

    })
    } catch{
        
    }

})


module.exports = router