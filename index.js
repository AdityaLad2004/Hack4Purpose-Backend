const express = require('express');
const connectDB = require('../neuro-backend/config/db');
const patientRoutes= require('../neuro-backend/routes/patientRoutes');
const app=express();
const cors = require('cors');
const port = process.env.PORT;

app.use(cors());
require('dotenv').config();

connectDB();

app.use(express.json());

app.use('/patients',patientRoutes);

app.listen(port,()=>{
    console.log("App running 5000 var");
})



