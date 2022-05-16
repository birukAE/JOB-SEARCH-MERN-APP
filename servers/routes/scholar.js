const express = require("express");
const router=express.Router();
const db= require('../connection/db')


router.post("/spost",(req,res)=>{
    const sname=req.body.sname;
    const country=req.body.country;   
    const program=req.body.program; 
    const sfor=req.body.sfor; 
    const requirment=req.body.requirment; 
    const apply=req.body.apply; 
    const deadline=req.body.deadline; 
    const field=req.body.field;
db.query(
        "INSERT INTO scholarship (sname,country,program,sfor,requirment,apply,deadline,field) VALUES (?,?,?,?,?,?,?,?)",
        [sname,country,program,sfor,requirment,apply,deadline,field ],
            
        (err,result)=>
        {
            if(err){
                console.log(err);
            }else{
                res.send("values inserted");
            }
        }
    );

});


router.get("/getscholarship",(req,res)=>{
    
    db.query(
            "SELECT * FROM scholarship ORDER BY id DESC",(err,result)=>
            {    
            
    if(err){
                    console.log(err);
                }
               res.send(result) 
            }
        );
    
    });
    
    router.get("/scholarid/:id",(req,res)=>{
    const id= req.params.id
        db.query(
                "SELECT * FROM scholarship WHERE id=?",id,(err,result)=>
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
                    "UPDATE scholarship SET deadline=? WHERE id=?",[deadline,id],(err,result)=>
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
                                "DELETE FROM scholarship WHERE id=?",id, (err,result)=>{
                             
                        if(err){
                                        console.log(err);
                                    }
                                else{   res.send(result) ;
                                }
                           } );
                        
                        });           
                        router.get("/shows/:id",(req,res)=>{
                            const id= req.params.id
                                db.query(
                                        "SELECT * FROM scholarship WHERE id=?",id,(err,result)=>
                                        {    
                                        
                                if(err){
                                                console.log(err);
                                            }
                                           res.send(result) 
                                        } );
                                   
                                
                                });

                               
router.post("/likes/:id",(req,res)=>{
const id= req.params.id;

db.query(
 "UPDATE scholarship SET likes=likes+1 WHERE id=?",id,(err,result)=>
 {    
   if(err){                                                      
    console.log(err); }                                   
                                                             
         res.send(result)                                                   
      }                                                     
                                                        
     );
                                                
     });
     router.get("/Turky",(req,res)=>{
    
        db.query(
                "SELECT * FROM scholarship WHERE sfor='Turky'",(err,result)=>
                {    
                
        if(err){
                        console.log(err);
                    }
                   res.send(result) 
                }
            );
        
        });  
        router.get("/Subsaharan",(req,res)=>{
    
            db.query(
                    "SELECT * FROM scholarship WHERE sfor='Subsaharan'",(err,result)=>
                    {    
                    
            if(err){
                            console.log(err);
                        }
                       res.send(result) 
                    }
                );
            
            });  
            router.get("/Developing",(req,res)=>{
    
                db.query(
                        "SELECT * FROM scholarship WHERE sfor='Developing Countries'",(err,result)=>
                        {    
                        
                if(err){
                                console.log(err);
                            }
                           res.send(result) 
                        }
                    );
                
                });  
                router.get("/International",(req,res)=>{
    
                    db.query(
                            "SELECT * FROM scholarship WHERE sfor='International Students'",(err,result)=>
                            {    
                            
                    if(err){
                                    console.log(err);
                                }
                               res.send(result) 
                            }
                        );
                    
                    });  
                    router.get("/Ethiopian",(req,res)=>{
    
                        db.query(
                                "SELECT * FROM scholarship WHERE sfor='Ethiopian'",(err,result)=>
                                {    
                                
                        if(err){
                                        console.log(err);
                                    }
                                   res.send(result) 
                                }
                            );
                        
                        });  
                        router.get("/American",(req,res)=>{
    
                            db.query(
                                    "SELECT * FROM scholarship WHERE sfor='American'",(err,result)=>
                                    {    
                                    
                            if(err){
                                            console.log(err);
                                        }
                                       res.send(result) 
                                    }
                                );
                            
                            });  
                            router.get("/German",(req,res)=>{
    
                                db.query(
                                        "SELECT * FROM scholarship WHERE sfor='German'",(err,result)=>
                                        {    
                                        
                                if(err){
                                                console.log(err);
                                            }
                                           res.send(result) 
                                        }
                                    );
                                
                                });  
                                router.get("/china",(req,res)=>{
    
                                    db.query(
                                            "SELECT * FROM scholarship WHERE sfor='China'",(err,result)=>
                                            {    
                                            
                                    if(err){
                                                    console.log(err);
                                                }
                                               res.send(result) 
                                            }
                                        );
                                    
                                    });  
                                    router.get("/Ghana",(req,res)=>{
    
                                        db.query(
                                                "SELECT * FROM scholarship WHERE sfor='Ghana'",(err,result)=>
                                                {    
                                                
                                        if(err){
                                                        console.log(err);
                                                    }
                                                   res.send(result) 
                                                }
                                            );
                                        
                                        });  
                                        router.get("/australia",(req,res)=>{
    
                                            db.query(
                                                    "SELECT * FROM scholarship WHERE sfor='Australian'",(err,result)=>
                                                    {    
                                                    
                                            if(err){
                                                            console.log(err);
                                                        }
                                                       res.send(result) 
                                                    }
                                                );
                                            
                                            });  
                                            router.get("/Brazil",(req,res)=>{
    
                                                db.query(
                                                        "SELECT * FROM scholarship WHERE sfor='Brazil'",(err,result)=>
                                                        {    
                                                        
                                                if(err){
                                                                console.log(err);
                                                            }
                                                           res.send(result) 
                                                        }
                                                    );
                                                
                                                });  
                                                router.get("/Belgium",(req,res)=>{
    
                                                    db.query(
                                                            "SELECT * FROM scholarship WHERE sfor='Belgium'",(err,result)=>
                                                            {    
                                                            
                                                    if(err){
                                                                    console.log(err);
                                                                }
                                                               res.send(result) 
                                                            }
                                                        );
                                                    
                                                    });  
                                                    router.get("/canada",(req,res)=>{
    
                                                        db.query(
                                                                "SELECT * FROM scholarship WHERE sfor='Canada'",(err,result)=>
                                                                {    
                                                                
                                                        if(err){
                                                                        console.log(err);
                                                                    }
                                                                   res.send(result) 
                                                                }
                                                            );
                                                        
                                                        });  
                                                        router.get("/Dubai",(req,res)=>{
    
                                                            db.query(
                                                                    "SELECT * FROM scholarship WHERE sfor='Dubai'",(err,result)=>
                                                                    {    
                                                                    
                                                            if(err){
                                                                            console.log(err);
                                                                        }
                                                                       res.send(result) 
                                                                    }
                                                                );
                                                            
                                                            });  
                                                            router.get("/Africa",(req,res)=>{
    
                                                                db.query(
                                                                        "SELECT * FROM scholarship WHERE sfor='Africa'",(err,result)=>
                                                                        {    
                                                                        
                                                                if(err){
                                                                                console.log(err);
                                                                            }
                                                                           res.send(result) 
                                                                        }
                                                                    );
                                                                
                                                                });  
     
                                                                router.get("/Saudi",(req,res)=>{
    
                                                                    db.query(
                                                                            "SELECT * FROM scholarship WHERE sfor='Saudi'",(err,result)=>
                                                                            {    
                                                                            
                                                                    if(err){
                                                                                    console.log(err);
                                                                                }
                                                                               res.send(result) 
                                                                            }
                                                                        );
                                                                    
                                                                    });                                                            
                                                                    router.get("/International",(req,res)=>{
    
                                                                        db.query(
                                                                                "SELECT * FROM scholarship WHERE sfor='Italian'",(err,result)=>
                                                                                {    
                                                                                
                                                                        if(err){
                                                                                        console.log(err);
                                                                                    }
                                                                                   res.send(result) 
                                                                                }
                                                                            );
                                                                        
                                                                        });                    
                                                                        router.get("/Argintina",(req,res)=>{
    
                                                                            db.query(
                                                                                    "SELECT * FROM scholarship WHERE sfor='Argentina'",(err,result)=>
                                                                                    {    
                                                                                    
                                                                            if(err){
                                                                                            console.log(err);
                                                                                        }
                                                                                       res.send(result) 
                                                                                    }
                                                                                );
                                                                            
                                                                            });                    
                                                                            router.get("/southamerican",(req,res)=>{
    
                                                                                db.query(
                                                                                        "SELECT * FROM scholarship WHERE sfor='South american'",(err,result)=>
                                                                                        {    
                                                                                        
                                                                                if(err){
                                                                                                console.log(err);
                                                                                            }
                                                                                           res.send(result) 
                                                                                        }
                                                                                    );
                                                                                
                                                                                });                    
                                                                                router.get("/Poland",(req,res)=>{
    
                                                                                    db.query(
                                                                                            "SELECT * FROM scholarship WHERE sfor='Poland'",(err,result)=>
                                                                                            {    
                                                                                            
                                                                                    if(err){
                                                                                                    console.log(err);
                                                                                                }
                                                                                               res.send(result) 
                                                                                            }
                                                                                        );
                                                                                    
                                                                                    });                    
                                                                                    router.get("/Russian",(req,res)=>{
    
                                                                                        db.query(
                                                                                                "SELECT * FROM scholarship WHERE sfor='Russia'",(err,result)=>
                                                                                                {    
                                                                                                
                                                                                        if(err){
                                                                                                        console.log(err);
                                                                                                    }
                                                                                                   res.send(result) 
                                                                                                }
                                                                                            );
                                                                                        
                                                                                        });                    
                                                                                        router.get("/southafrican",(req,res)=>{
    
                                                                                            db.query(
                                                                                                    "SELECT * FROM scholarship WHERE sfor='south african'",(err,result)=>
                                                                                                    {    
                                                                                                    
                                                                                            if(err){
                                                                                                            console.log(err);
                                                                                                        }
                                                                                                       res.send(result) 
                                                                                                    }
                                                                                                );
                                                                                            
                                                                                            });                    
                                                                                            router.get("/Tanzanian",(req,res)=>{
    
                                                                                                db.query(
                                                                                                        "SELECT * FROM scholarship WHERE sfor='Tanzanian'",(err,result)=>
                                                                                                        {    
                                                                                                        
                                                                                                if(err){
                                                                                                                console.log(err);
                                                                                                            }
                                                                                                           res.send(result) 
                                                                                                        }
                                                                                                    );
                                                                                                
                                                                                                });                    
                                                                                                router.get("/subshara",(req,res)=>{
    
                                                                                                    db.query(
                                                                                                            "SELECT * FROM scholarship WHERE sfor='subsharan'",(err,result)=>
                                                                                                            {    
                                                                                                            
                                                                                                    if(err){
                                                                                                                    console.log(err);
                                                                                                                }
                                                                                                               res.send(result) 
                                                                                                            }
                                                                                                        );
                                                                                                    
                                                                                                    });                    
                                                                                                    router.get("/Norway",(req,res)=>{
    
                                                                                                        db.query(
                                                                                                                "SELECT * FROM scholarship WHERE sfor='Norway'",(err,result)=>
                                                                                                                {    
                                                                                                                
                                                                                                        if(err){
                                                                                                                        console.log(err);
                                                                                                                    }
                                                                                                                   res.send(result) 
                                                                                                                }
                                                                                                            );
                                                                                                        
                                                                                                        });                    

                                                                                                        router.get("/Nigeria",(req,res)=>{
    
                                                                                                            db.query(
                                                                                                                    "SELECT * FROM scholarship WHERE sfor='Nigeria'",(err,result)=>
                                                                                                                    {    
                                                                                                                    
                                                                                                            if(err){
                                                                                                                            console.log(err);
                                                                                                                        }
                                                                                                                       res.send(result) 
                                                                                                                    }
                                                                                                                );
                                                                                                            
                                                                                                            });                    
                                                                                                            router.get("/Japan",(req,res)=>{
    
                                                                                                                db.query(
                                                                                                                        "SELECT * FROM scholarship WHERE sfor='Japan'",(err,result)=>
                                                                                                                        {    
                                                                                                                        
                                                                                                                if(err){
                                                                                                                                console.log(err);
                                                                                                                            }
                                                                                                                           res.send(result) 
                                                                                                                        }
                                                                                                                    );
                                                                                                                
                                                                                                                });                    
                                                                                                                router.get("/India",(req,res)=>{
    
                                                                                                                    db.query(
                                                                                                                            "SELECT * FROM scholarship WHERE sfor='India'",(err,result)=>
                                                                                                                            {    
                                                                                                                            
                                                                                                                    if(err){
                                                                                                                                    console.log(err);
                                                                                                                                }
                                                                                                                               res.send(result) 
                                                                                                                            }
                                                                                                                        );
                                                                                                                    
                                                                                                                    });                    
                                                                                                                    router.get("/Europ",(req,res)=>{
    
                                                                                                                        db.query(
                                                                                                                                "SELECT * FROM scholarship WHERE sfor='Europ'",(err,result)=>
                                                                                                                                {    
                                                                                                                                
                                                                                                                        if(err){
                                                                                                                                        console.log(err);
                                                                                                                                    }
                                                                                                                                   res.send(result) 
                                                                                                                                }
                                                                                                                            );
                                                                                                                        
                                                                                                                        });                 
                                                                                                                            router.get("/Esian",(req,res)=>{
    
                                                                                                                            db.query(
                                                                                                                                    "SELECT * FROM scholarship WHERE sfor='Esian'",(err,result)=>
                                                                                                                                    {    
                                                                                                                                    
                                                                                                                            if(err){
                                                                                                                                            console.log(err);
                                                                                                                                        }
                                                                                                                                       res.send(result) 
                                                                                                                                    }
                                                                                                                                );
                                                                                                                            
                                                                                                                            }); 
                                                                                                                            router.get("/Spain",(req,res)=>{
    
                                                                                                                                db.query(
                                                                                                                                        "SELECT * FROM scholarship WHERE sfor='Spain'",(err,result)=>
                                                                                                                                        {    
                                                                                                                                        
                                                                                                                                if(err){
                                                                                                                                                console.log(err);
                                                                                                                                            }
                                                                                                                                           res.send(result) 
                                                                                                                                        }
                                                                                                                                    );
                                                                                                                                
                                                                                                                                });                                       
module.exports= router;