const mongoose = require('../database/index');

const GlobalSchema = new mongoose.Schema({
    NewConfirmed:{
        type: Number,
        required:true,
    },
    TotalConfirmed:{
        type: Number,
        required:true,
    },
    NewDeaths:{
        type: Number,
        required:true,
    },
    TotalDeaths:{
        type: Number,
        required:true,
    },
    NewRecovered:{
        type: Number,
        required:true,
    },
    TotalRecovered:{
        type: Number,
        required:true,
    },
});

const GlobalCovid = mongoose.model('GlobalCovid',GlobalSchema);

module.exports = GlobalCovid;