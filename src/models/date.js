const mongoose = require('../database/index');

const DateSchema = new mongoose.Schema({
    Date:{
        type:Date,
        required:true,
    },
});

const Data = mongoose.model('Date',DateSchema);

module.exports = Data;