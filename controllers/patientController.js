const patients=require('../models/patientModel');

exports.getPatientById = async (req,res)=>{
    const patientId = req.params.patient_id;

    try {
        const patient = await patients.findOne({patient_id:patientId});

        if(!patient){
            return res.status(404).json({error: 'Patient nahi milala'});
        }

        res.json(patient);
    } catch (error) {
        console.log('Error in patient finding',error);
        res.status(500).json({ error: 'Server error' });
    }
}

