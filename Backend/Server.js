const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const req = require('express/lib/request')
// const { path } = require('express/lib/application')
const res = require('express/lib/response')
const PORT = 80
const path = require('path');
const cors = require('cors');
const db = require('./db')
const router = require('./Routes')

db.connect(); 

app.use(bodyParser.json({ limit : "50mb"}))
app.use(bodyParser.urlencoded({ extended: true, limit:"50mb"}))

app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*")
    req.header("Access-Control-Allow-Headers", "*");
    next()
})

app.use("/api", router);


app.use('/uploads', express.static(path.join(__dirname, "/../uploads")))
app.use(express.static(path.join(__dirname, "/../frontend/build")));


app.get("*", (req ,res) =>{
    try{
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`))
    } catch(e){

        res.send("Oops! unexpected error.")

    }
})

app.use(cors())

app.listen(process.env.PORT || 80, () =>{
    console.log('Running on Port 80')
})

// module.exports = router;