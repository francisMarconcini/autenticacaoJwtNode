const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app=express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));

require('./controllers/authController')(app);
require('./controllers/projectController')(app);

app.listen(3001,function(){
    console.log('servidor rodando na porta 3001');
});
