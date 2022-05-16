const express = require("express");
const router=express.Router();
const db= require('../connection/db')



router.post("/applying",(req,res)=>{
    const experiance=req.body.experiance;
    const cgpa=req.body.cgpa;   
    const position=req.body.position; 
    const date=req.body.date; 
    const avaliblity=req.body.avaliblity; 
    const catagory=req.body.catagory; 
    const cv=req.body.cv; 
    const jobcode=req.body.jobcode;
    
db.query(
        "INSERT INTO application (experiance,cgpa,position,date,avaliblity,catagory,cv,jobcode) VALUES (?,?,?,?,?,?,?,?)",
        [experiance,cgpa,position,date,avaliblity,catagory,cv,jobcode],
            
        (err,results)=>
        {
            if(err){
                console.log(err);
            }else{
                res.send("values inserted");
            }
        }
    );

});


router.get("/resumes/:username",(req,res)=>{
    const username= req.params.username
        db.query(
                "SELECT * FROM application WHERE jobcode=?",username,(err,result)=>
                {    
                
        if(err){
                        console.log(err);
                    }
                   res.send(result) 
                }
            );
        
        }); 
    router.get("/resume/:id",(req,res)=>{
        const id= req.params.id
            db.query(
                    "SELECT * FROM application WHERE id=?",id,(err,result)=>
                    {    
                    
            if(err){
                            console.log(err);
                        }
                       res.send(result) 
                    } );
               
            
            });
           
    module.exports = router;