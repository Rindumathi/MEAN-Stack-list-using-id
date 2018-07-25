const mongoose = require('mongoose');

const UniversitySchema = mongoose.Schema({
    worldranking:String,
    countryranking:String,
    universityname:String,
    bachelorprogram:String,
    masterprogram:String,
    phdprogram:String,
    ug :{
        tutionfees :{
            type: String
        }
    },
    country:String
},{collection:'alluni'});

const University =module.exports = mongoose.model('University',UniversitySchema);
