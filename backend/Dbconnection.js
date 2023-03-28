const mongoose = require("moogoose")

mongodbURI = "mongodb://localhost:27017/"

export default connectToMongo = () => {
    mongoose.connect(mongodbURI, () => {
        console.log(
            "Connected with Specified Database inside MongoDB : Success"
        )
    })
}

// module.exports = connectToMongo
