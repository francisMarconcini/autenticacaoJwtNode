const mongoose = require('../database/index');

const CountriesSchema = new mongoose.Schema({
    Country:{
        type: String,
        required:true,
    },
    CountryCode:{
        type: String,
        required:true,
    },
    Slug: {
        type: String,
        required: true,
    },
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
    Date:{
        type:Date,
        required:true,
    },
});

const CountriesCovid = mongoose.model('CountriesCovid',CountriesSchema);

module.exports = CountriesCovid;