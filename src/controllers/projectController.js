const express = require('express');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();
const http = require('https');
const covidCountry = require('../models/covidCountries');
const globalCovid = require('../models/covidGlobal');
const date_ = require('../models/date');
const url='https://api.covid19api.com/summary';

router.use(authMiddleware);

router.get('/',(req,res)=>{
    res.send({ok:"ok"});
});

router.get('/listallcountries', async (req,res)=>{
  const data = date_.findOne({});
  const user = req.body;
  console.log(user);
  //res.setHeader('Content-Type', 'application/json');
  //console.log(data);
  var dados;
  dados = await covidCountry.find(data);
  
  if(!dados){
      return res.status(400).send({erro:"Erro na query mongo"}); 
  }
  res.send(dados);
      
  //console.log(dados);
  //res.send(dados);
  //res.send({ok:"testes"}); 
  })


router.get('/coletacovid', (req,res) => {
    //res.send({ok:true, user: req.userId});
        http.get(url, resp => {
        resp.setEncoding("utf8");
        let body = "";
        resp.on("data", data => {
          body += data;
        });
        resp.on("end", () => {
          body = JSON.parse(body);
          //console.log(date_.findOne({Date:body.Date}));
          date_.remove();
          if(date_.findOne({Date:body.Date})){
            date_.insertMany({Date:body.Date});
            globalCovid.insertMany(body.Global);
            covidCountry.insertMany(body.Countries, function(err, result) {
                if (err) {
                  console.log(err);
                } else {
                  console.log(result);
                }
              }); 
          }

          }       

        );
      }); 
      
      res.status(200).send({resposta: "Requisição a api covid executada com sucesso"});
});

//listar 1 campo somente em mongodb: db.dates.findOne({},{"Date":1,"_id":0})
// remover todos documentos db.mycol.remove()



module.exports = app => app.use('/projects',router);