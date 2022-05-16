const express = require("express");
const router=express.Router();
const db= require('../connection/db');



router.post("/mempost",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;
    const comfirm=req.body.comfirm;  
    const fullname=req.body.fullname;
    const phone=req.body.phone;
    const pack=req.body.email;
    const bank=req.body.bank;  
    const transaction=req.body.transaction;
    const payer=req.body.payer;
    const upcv=req.body.upcv;
    const cvsta=req.body.cvsta;  
    const tempo=req.body.tempo;
    const other=req.body.other;
    const catagory=req.body.catagory;
    const date=req.body.date;  
   
db.query( "INSERT INTO memberreg (username,password,comfirm,email,date,catagory,other,tempo,cvsta,upcv ,payer,transaction,bank,pack,phone,fullname,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,now())",
   [username,password,comfirm,email,date,catagory,other,tempo,cvsta,upcv,payer,transaction,bank,pack,phone,fullname],
       
        (err,results)=>{
        
                console.log(err);
            res.send(results);
            }
            );
        
   

});
router.post("/memlog",(req,res)=>{
    const username=req.body.username;
       const password=req.body.password;   
   db.query(
           "SELECT * FROM memberreg WHERE username=? ",
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

   router.get("/memuser/:username",(req,res)=>{
    const username= req.params.username
        db.query(
                "SELECT * FROM memberreg WHERE username=?",username,(err,result)=>
                {    
                
        if(err){
                        console.log(err);
                    }
                   res.send(result) 
                }
            );
        
        }); 
        
router.put("/update",(req,res)=>{
const id= req.body.id;
const deadline=req.body.deadline;
    db.query(
            "UPDATE memberreg SET deadline=? WHERE id=?",[deadline,id],(err,result)=>
            {    
            
    if(err){
                    console.log(err);
                }
               res.send(result) 
            }
        );
    
    });

    router.delete("/delete/:id",(req,res)=>{
        const id= req.params.id;
        
                db.query(
                        "DELETE FROM memberreg WHERE id=?",id, (err,result)=>{
                     
                if(err){
                                console.log(err);
                            }
                        else{   res.send(result) 
                        }
                        }
                        );
                   } );
 
        
module.exports= router;