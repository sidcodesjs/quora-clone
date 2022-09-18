const mongoose = require('mongoose')

const url =
"mongodb+srv://siddhesh16:vishnu123@cluster0.hxksb.mongodb.net/?retryWrites=true&w=majority"

module.exports.connect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('MongoDB connected succesfully')
    }).catch((error) => console.log("Error" ,error))
}