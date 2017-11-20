const express = require('express');
const router = express.Router();
const City = require('../models/city');

router.get('/cities', function(req, res, next){
  console.log(req.query.country);
  City.find({country:req.query.country}).then(function(cities){
    res.send(cities);
  });

});

router.post('/cities', function(req, res, next){
  City.create(req.body).then(function(city){
    res.send(city);
  }).catch(next);
});

router.put('/cities/:id', function(req, res, next){
  City.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
    City.findOne({_id:req.params.id}).then(function(city){
      res.send(city);
    });
  });
});

router.delete('/cities/:id', function(req, res, next){
  City.findByIdAndRemove({_id:req.params.id}).then(function(city){
    res.send(city);

  });
});

module.exports = router;
