const express = require('express');
const router = express.Router();
const {getDetails} = require('../model/UserModel');
const {getAdminDetails} = require('../model/AdminModel');
const {signToken} = require('../functions/jwt');
const {comparePassword} = require('../functions/encrypt');

router.post('/adminlogin',(req,res)=>{
    const data = {email : req.body.email};
     const pass = req.body.pass;
     //veriify username
     getAdminDetails(data).then(result=>{
         if(!result){
             res.json({msg:'Invalid Credentials'})
         }else{
             //verify password
            comparePassword(result,pass).then(response=>{
             if(response == 'verified'){
                 //sign token
                 signToken(data).then(token=>{
                    const returnData = {token:token,msg:'login success'}
                    res.json(returnData);
                 });
                 
             }else{
              res.json({msg:'Invalid Credentials'});
             }
            })
            
         }
     });
});

router.post('/userlogin',(req,res)=>{
    const data = {email : req.body.email};
     const pass = req.body.pass;
     //veriify username
     getDetails(data).then(result=>{
         if(!result){
             res.json({msg:'Invalid Credentials'})
         }else{
             //verify password
            comparePassword(result,pass).then(response=>{
             if(response == 'verified'){
                 //sign token
                 signToken(data).then(token=>{
                    const returnData = {token:token,msg:'login success'}
                    res.json(returnData);
                 });
                 
             }else{
              res.json({msg:'Invalid Credentials'});
             }
            })
            
         }
     });
})



  module.exports = router;

