const mongoose = require('mongoose');
require('dotenv').config();
const mongoUrl = process.env.MONGO_URL;
const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Mongodb zala connect');


    } catch (error) {
        console.log('Mongo db connection cha error',error);
    }
}

module.exports=connectDB;