const express = require('express');
const router = express.Router();
const University = require('../models/university');

//retrieving data
//router.get('/universities',(req,res,next)=>{
  //  University.find(function(err,universities){
    //    if(err)
      //  {
        //    res.json(err);
        //}
       // res.json(universities);
    //});
//});

//router.get('/',function(req,res,next){
  //University.find()
   //.then(function(doc){
     //res.json({universities:doc});
  //});
//});
router.get('/universitylist/:id',function(req,res){
  University.find({country:req.params.id},function(err,universities){
    if(err) res.json(err);
    else res.json(universities);
  });
});

router.get('/:id',(req,res,next)=>{
  University.findById(req.params.id, function (err, universities){
     if(err)
     {
       res.json(err);
     }
     else{
       res.json(universities);
     }
  });
});
module.exports= router;