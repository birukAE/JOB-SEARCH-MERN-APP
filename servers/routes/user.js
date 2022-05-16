const express = require("express");
const router=express.Router();
const db= require('../connection/db');



router.post("/register",(req,res)=>{
 const username=req.body.username;
 const password=req.body.password;
 const email=req.body.email;
 const regtype=req.body.regtype;  

db.query(
        "INSERT INTO registration (username,password,email,regtype) VALUES (?,?,?,?)",[username,password,email,regtype],
        (err,results)=>{
        
                console.log(err);
            res.send(results);
            }
            );
        
   

});
router.post("/login",(req,res)=>{
    const username=req.body.username;
       const password=req.body.password;   
   db.query(
           "SELECT * FROM registration WHERE username=? and regtype='company/employer '",
           username,
           (err,results)=>
           {
               if(err){
                   console.log(err);
               }if(results.length>0){
                   if(password==results[0].password){
                   
                       res.json({LoggedIn: true, username: username});
                  
                   }else{
                   res.json({LoggedIn: false, message:"wrong username password comnbination"});
              
            };
               }  else{
                res.json({LoggedIn: false, message:"user doesn't exist"});  
               }
           }
       );
   
   });

   router.post("/melogin",(req,res)=>{
    const username=req.body.username;
       const password=req.body.password;   
   db.query(
           "SELECT * FROM registration WHERE username=? and regtype='candidate/employee'",
           username,
           (err,results)=>
           {
               if(err){
                   console.log(err);
               }if(results.length>0){
                   if(password==results[0].password){
                   
                       res.json({LoggedMe: true, username: username});
                  
                   }else{
                   res.json({LoggedMe: false, message:"wrong username password comnbination"});
              
            };
               }  else{
                res.json({LoggedMe: false, message:"user doesn't exist"});  
               }
           }
       );
   
   });


   router.post("/admin",(req,res)=>{
    const username=req.body.username;
       const password=req.body.password;   
   db.query(
           "SELECT * FROM registration WHERE username='birukemiru' and password='bkbk1989'",
          
           (err,results)=>
           {
               if(err){
                   console.log(err);
               }if(results.length>0){
                   if(password==results[0].password){
                       res.json({LoggedAdmin: true, username: username});

                   }else
                   res.json({LoggedAdmin: false, message:"wrong username password comnbination"});
               }
               else{
                res.json({LoggedAdmin: false, message:"user doesn't exist"});  
               }
           }
       );
   
   });
module.exports= router;