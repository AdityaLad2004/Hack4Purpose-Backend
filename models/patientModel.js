const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    patient_id: {
        type: String,
        required: true
    },

    name: {
        type: String, required: true
    },

    age: { 
        type: Number, 
        required: true 
    },

    gender: { 
        type: String, 
        enum: ['Male', 'Female'], 
        required: true 
    },

    bloodgroup: { 
        type: String, 
        required: true 
    },

    dob: { 
        type: Date, 
        required: true 
    },

    severity: { 
        type: String, 
        required: true 
    },

    address: { 
        type: String, 
        required: true 
    }
});

module.exports = mongoose.model('patients',patientSchema);

