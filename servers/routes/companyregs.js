const express = require("express");
const router=express.Router();
const db= require('../connection/db');



router.post("/compost",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;
    const comfirm=req.body.comfirm;  
    const fullname=req.body.fullname;
    const phone=req.body.phone;
    const pack=req.body.pack;
    const bank=req.body.bank;  
    const transaction=req.body.transaction;
    const payer=req.body.payer;
    const cvsta=req.body.cvsta
    const adress=req.body.adress;
    const date=req.body.date;  
   
db.query( "INSERT INTO companyreg (username,password,comfirm,email,date,cvsta,payer,adress,transaction,bank,pack,phone,fullname,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,now())",
   [username,password,comfirm,email,date,cvsta,payer,adress,transaction,bank,pack,phone,fullname],
       
        (err,results)=>{
        if(err){
            if (err.code=='ER_DUP_ENTRY'||err.errno==1062){    
            res.json({ Submited:false,message:"username tooken"});
           
         
        } ;
    }
                
        else  {  res.json({Submited: true,message:"congra"})
        
             
          } 
           
        
 
            }
            );
           

});
router.post("/comlog",(req,res)=>{
    const username=req.body.username;
       const password=req.body.password;   
   db.query(
           "SELECT * FROM companyreg WHERE username=? ",
           username,
           (err,results)=>
           {
               if(err){
                   console.log(err);
               }if(results.length>0){
                   if(password==results[0].password){
                   
                       res.json({Submited: true, username: username});
                  
                   }else{
                   res.json({Submited: false, message:"wrong username password comnbination"});
              
            };
               }  else{
                res.json({Submited: false, message:"user doesn't exist"});  
               }
           }
       );
   
   });

   router.post("/oddlogin",(req,res)=>{
    const username=req.body.username;
       const password=req.body.password;   
   db.query(
           "SELECT * FROM companyreg WHERE username=? and role='odd' ",
           username,
           (err,results)=>
           {
               if(err){
                   console.log(err);
               }if(results.length>0){
                   if(password==results[0].password){
                   
                       res.json({LoggedAdmin: true, username: username});
                  
                   }else{
                   res.json({LoggedAdmin: false, message:"wrong username password comnbination"});
              
            };
               }  else{
                res.json({LoggedAdmin: false, message:"user doesn't exist"});  
               }
           }
       );
   
   });

  
module.exports= router;