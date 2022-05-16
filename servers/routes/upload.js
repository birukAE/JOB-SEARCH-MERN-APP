const express = require("express");
const router=express.Router();
const db= require('../connection/db')






router.post("/uploading",(req,res)=>{
    const cname=req.body.cname;
    const jname=req.body.jname;   
    const location=req.body.location; 
    const salary=req.body.salary; 
    const candidate=req.body.candidate; 
    const deadline=req.body.deadline; 
    const type=req.body.type; 
    const catagory=req.body.catagory; 
    const responsiblity=req.body.responsiblity; 
    const requirment=req.body.requirment; 
    const apply=req.body.apply; 
    const link=req.body.link; 
    const username=req.body.username; 
    const image=req.body.image; 
db.query(
        "INSERT INTO upload (username,cname,jname,location,salary,candidate,deadline,type,catagory, responsiblity,requirment,apply,link,image) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [username,cname,jname,location,salary,candidate,deadline,type,catagory,responsiblity,requirment,apply,link,image ],
            
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

router.get("/showapp/:id",(req,res)=>{
    const id= req.params.id
        db.query(
                "SELECT * FROM upload WHERE id=?",id,(err,result)=>
                {    
                
        if(err){
                        console.log(err);
                    }
                   res.send(result) 
                }
            );
        
        });         
router.get("/reciving",(req,res)=>{
    
    db.query(
            "SELECT * FROM upload",(err,result)=>
            {    
            
    if(err){
                    console.log(err);
                }
               res.send(result) 
            }
        );
    
    });
    router.get("/show/:id",(req,res)=>{
    const id= req.params.id
        db.query(
                "SELECT * FROM upload WHERE id=?",id,(err,result)=>
                {    
                
        if(err){
                        console.log(err);
                    }
                   res.send(result) 
                }
            );
        
        });
    
        router.get("/usern/:username",(req,res)=>{
            const username= req.params.username
                db.query(
                        "SELECT * FROM upload WHERE username=?",username,(err,result)=>
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
                    "UPDATE upload SET deadline=? WHERE id=?",[deadline,id],(err,result)=>
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
                                "DELETE FROM upload WHERE id=?",id, (err,result)=>{
                             
                        if(err){
                                        console.log(err);
                                    }
                                else{   res.send(result) 
                                }
                                }
                                );
                           } );
                           router.post("/like/:id",(req,res)=>{
                            const id= req.params.id;
                            
                            db.query(
                             "UPDATE upload SET likes=likes+1 WHERE id=?",id,(err,result)=>
                             {    
                               if(err){                                                      
                                console.log(err); }                                   
                                                                                         
                                     res.send(result)                                                   
                                  }                                                     
                                                                                    
                                 );
                                                                            
                                 });                
                                 router.get("/engineering",(req,res)=>{
    
                                    db.query(
                                            "SELECT * FROM upload WHERE catagory='engineering and manfucturing'",(err,result)=>
                                            {    
                                            
                                    if(err){
                                                    console.log(err);
                                                }
                                               res.send(result) 
                                            }
                                        );
                                    
                                    });  
                                    router.get("/accounting",(req,res)=>{
                                
                                        db.query(
                                                "SELECT * FROM upload WHERE catagory='accounting and managment'",(err,result)=>
                                                {    
                                                
                                        if(err){
                                                        console.log(err);
                                                    }
                                                   res.send(result) 
                                                }
                                            );
                                        
                                        });  
                                        router.get("/business",(req,res)=>{
                                
                                            db.query(
                                                    "SELECT * FROM upload WHERE upload='business and economics'",(err,result)=>
                                                    {    
                                                    
                                            if(err){
                                                            console.log(err);
                                                        }
                                                       res.send(result) 
                                                    }
                                                );
                                            
                                            });  
                                            router.get("/low",(req,res)=>{
                                
                                                db.query(
                                                        "SELECT * FROM upload WHERE catagory='low and related'",(err,result)=>
                                                        {    
                                                        
                                                if(err){
                                                                console.log(err);
                                                            }
                                                           res.send(result) 
                                                        }
                                                    );
                                                
                                                });  
                                                router.get("/agriculture",(req,res)=>{
                                
                                                    db.query(
                                                            "SELECT * FROM upload WHERE catagory='agricultural scince'",(err,result)=>
                                                            {    
                                                            
                                                    if(err){
                                                                    console.log(err);
                                                                }
                                                               res.send(result) 
                                                            }
                                                        );
                                                    
                                                    });  
                                                    router.get("/sport",(req,res)=>{
                                
                                                        db.query(
                                                                "SELECT * FROM upload WHERE catagory='sport and tradition'",(err,result)=>
                                                                {    
                                                                
                                                        if(err){
                                                                        console.log(err);
                                                                    }
                                                                   res.send(result) 
                                                                }
                                                            );
                                                        
                                                        });  
                                                        router.get("/medicene",(req,res)=>{
                                
                                                            db.query(
                                                                    "SELECT * FROM upload WHERE catagory='medicene and pharmacy'",(err,result)=>
                                                                    {    
                                                                    
                                                            if(err){
                                                                            console.log(err);
                                                                        }
                                                                       res.send(result) 
                                                                    }
                                                                );
                                                            
                                                            });  
                                                            router.get("/it",(req,res)=>{
                                
                                                                db.query(
                                                                        "SELECT * FROM upload WHERE catagory='it and software'",(err,result)=>
                                                                        {    
                                                                        
                                                                if(err){
                                                                                console.log(err);
                                                                            }
                                                                           res.send(result) 
                                                                        }
                                                                    );
                                                                
                                                                });  
                                                                router.get("/poletica",(req,res)=>{
                                
                                                                    db.query(
                                                                            "SELECT * FROM upload WHERE catagory='poletics and adminstration'",(err,result)=>
                                                                            {    
                                                                            
                                                                    if(err){
                                                                                    console.log(err);
                                                                                }
                                                                               res.send(result) 
                                                                            }
                                                                        );
                                                                    
                                                                    });  
                                                                    router.get("/social ",(req,res)=>{
                                
                                                                        db.query(
                                                                                "SELECT * FROM upload WHERE catagory='social and community'",(err,result)=>
                                                                                {    
                                                                                
                                                                        if(err){
                                                                                        console.log(err);
                                                                                    }
                                                                                   res.send(result) 
                                                                                }
                                                                            );
                                                                        
                                                                        });  
                                                                        router.get("/hotel",(req,res)=>{
                                
                                                                            db.query(
                                                                                    "SELECT * FROM upload WHERE catagory='hotel and tourism'",(err,result)=>
                                                                                    {    
                                                                                    
                                                                            if(err){
                                                                                            console.log(err);
                                                                                        }
                                                                                       res.send(result) 
                                                                                    }
                                                                                );
                                                                            
                                                                            });  
                                                                            router.get("/journalisem",(req,res)=>{
                                
                                                                                db.query(
                                                                                        "SELECT * FROM upload WHERE catagory='jornalisem and media'",(err,result)=>
                                                                                        {    
                                                                                        
                                                                                if(err){
                                                                                                console.log(err);
                                                                                            }
                                                                                           res.send(result) 
                                                                                        }
                                                                                    );
                                                                                
                                                                                });  
                                                                                router.get("/lingustics",(req,res)=>{
                                
                                                                                    db.query(
                                                                                            "SELECT * FROM upload WHERE catagory='lingustics'",(err,result)=>
                                                                                            {    
                                                                                            
                                                                                    if(err){
                                                                                                    console.log(err);
                                                                                                }
                                                                                               res.send(result) 
                                                                                            }
                                                                                        );
                                                                                    
                                                                                    });  
                                                                                    router.get("/applied",(req,res)=>{
                                
                                                                                        db.query(
                                                                                                "SELECT * FROM upload WHERE catagory='applied scince'",(err,result)=>
                                                                                                {    
                                                                                                
                                                                                        if(err){
                                                                                                        console.log(err);
                                                                                                    }
                                                                                                   res.send(result) 
                                                                                                }
                                                                                            );
                                                                                        
                                                                                        });  
                                                                                        router.get("/education",(req,res)=>{
                                
                                                                                            db.query(
                                                                                                    "SELECT * FROM upload WHERE catagory='teaching and education'",(err,result)=>
                                                                                                    {    
                                                                                                    
                                                                                            if(err){
                                                                                                            console.log(err);
                                                                                                        }
                                                                                                       res.send(result) 
                                                                                                    }
                                                                                                );
                                                                                            
                                                                                            });  
                                 
                                                                                            router.get("/secratary",(req,res)=>{
                                
                                                                                                db.query(
                                                                                                        "SELECT * FROM upload WHERE catagory='secratary'",(err,result)=>
                                                                                                        {    
                                                                                                        
                                                                                                if(err){
                                                                                                                console.log(err);
                                                                                                            }
                                                                                                           res.send(result) 
                                                                                                        }
                                                                                                    );
                                                                                                
                                                                                                });                                                            
                                                                                                router.get("/psyicology",(req,res)=>{
                                
                                                                                                    db.query(
                                                                                                            "SELECT * FROM upload WHERE catagory='psyicology'",(err,result)=>
                                                                                                            {    
                                                                                                            
                                                                                                    if(err){
                                                                                                                    console.log(err);
                                                                                                                }
                                                                                                               res.send(result) 
                                                                                                            }
                                                                                                        );
                                                                                                    
                                                                                                    });                    
                                                                                                    router.get("/land",(req,res)=>{
                                
                                                                                                        db.query(
                                                                                                                "SELECT * FROM catagory WHERE catagory='land and geology'",(err,result)=>
                                                                                                                {    
                                                                                                                
                                                                                                        if(err){
                                                                                                                        console.log(err);
                                                                                                                    }
                                                                                                                   res.send(result) 
                                                                                                                }
                                                                                                            );
                                                                                                        
                                                                                                        });                    
                                                                                                        router.get("/history",(req,res)=>{
                                
                                                                                                            db.query(
                                                                                                                    "SELECT * FROM upload WHERE catagory='history and archiology'",(err,result)=>
                                                                                                                    {    
                                                                                                                    
                                                                                                            if(err){
                                                                                                                            console.log(err);
                                                                                                                        }
                                                                                                                       res.send(result) 
                                                                                                                    }
                                                                                                                );
                                                                                                            
                                                                                                            });                    
                                                                                                            router.get("/fashion",(req,res)=>{
                                
                                                                                                                db.query(
                                                                                                                        "SELECT * FROM upload WHERE  catagory='fashion and design'",(err,result)=>
                                                                                                                        {    
                                                                                                                        
                                                                                                                if(err){
                                                                                                                                console.log(err);
                                                                                                                            }
                                                                                                                           res.send(result) 
                                                                                                                        }
                                                                                                                    );
                                                                                                                
                                                                                                                });                    
                                                                                                                router.get("/art",(req,res)=>{
                                
                                                                                                                    db.query(
                                                                                                                            "SELECT * FROM upload WHERE catagory='art and music'",(err,result)=>
                                                                                                                            {    
                                                                                                                            
                                                                                                                    if(err){
                                                                                                                                    console.log(err);
                                                                                                                                }
                                                                                                                               res.send(result) 
                                                                                                                            }
                                                                                                                        );
                                                                                                                    
                                                                                                                    });                    
                                                                                                                    router.get("/sells",(req,res)=>{
                                
                                                                                                                        db.query(
                                                                                                                                "SELECT * FROM upload WHERE catagory='sells and trade'",(err,result)=>
                                                                                                                                {    
                                                                                                                                
                                                                                                                        if(err){
                                                                                                                                        console.log(err);
                                                                                                                                    }
                                                                                                                                   res.send(result) 
                                                                                                                                }
                                                                                                                            );
                                                                                                                        
                                                                                                                        });                    
                                                                                                                        router.get("/video",(req,res)=>{
                                
                                                                                                                            db.query(
                                                                                                                                    "SELECT * FROM upload WHERE catagory='video and graphics'",(err,result)=>
                                                                                                                                    {    
                                                                                                                                    
                                                                                                                            if(err){
                                                                                                                                            console.log(err);
                                                                                                                                        }
                                                                                                                                       res.send(result) 
                                                                                                                                    }
                                                                                                                                );
                                                                                                                            
                                                                                                                            });                    
                                                                                                                            router.get("/communication",(req,res)=>{
                                
                                                                                                                                db.query(
                                                                                                                                        "SELECT * FROM upload WHERE catagory='communication and networking'",(err,result)=>
                                                                                                                                        {    
                                                                                                                                        
                                                                                                                                if(err){
                                                                                                                                                console.log(err);
                                                                                                                                            }
                                                                                                                                           res.send(result) 
                                                                                                                                        }
                                                                                                                                    );
                                                                                                                                
                                                                                                                                });                    
                                                                                                                                router.get("/road",(req,res)=>{
                                
                                                                                                                                    db.query(
                                                                                                                                            "SELECT * FROM catagory WHERE catagory='road and transport'",(err,result)=>
                                                                                                                                            {    
                                                                                                                                            
                                                                                                                                    if(err){
                                                                                                                                                    console.log(err);
                                                                                                                                                }
                                                                                                                                               res.send(result) 
                                                                                                                                            }
                                                                                                                                        );
                                                                                                                                    
                                                                                                                                    });                    
                            
                                                                                                                                    router.get("/physical",(req,res)=>{
                                
                                                                                                                                        db.query(
                                                                                                                                                "SELECT * FROM upload WHERE catagory='physical work'",(err,result)=>
                                                                                                                                                {    
                                                                                                                                                
                                                                                                                                        if(err){
                                                                                                                                                        console.log(err);
                                                                                                                                                    }
                                                                                                                                                   res.send(result) 
                                                                                                                                                }
                                                                                                                                            );
                                                                                                                                        
                                                                                                                                        });                    
                                                                                                                                        router.get("/shefe",(req,res)=>{
                                
                                                                                                                                            db.query(
                                                                                                                                                    "SELECT * FROM upload WHERE catagory='shefe'",(err,result)=>
                                                                                                                                                    {    
                                                                                                                                                    
                                                                                                                                            if(err){
                                                                                                                                                            console.log(err);
                                                                                                                                                        }
                                                                                                                                                       res.send(result) 
                                                                                                                                                    }
                                                                                                                                                );
                                                                                                                                            
                                                                                                                                            });                    
                                                                                                                                            router.get("/web",(req,res)=>{
                                
                                                                                                                                                db.query(
                                                                                                                                                        "SELECT * FROM upload WHERE catagory='web developer'",(err,result)=>
                                                                                                                                                        {    
                                                                                                                                                        
                                                                                                                                                if(err){
                                                                                                                                                                console.log(err);
                                                                                                                                                            }
                                                                                                                                                           res.send(result) 
                                                                                                                                                        }
                                                                                                                                                    );
                                                                                                                                                
                                                                                                                                                });                    
                                                                                                                                                router.get("/agent",(req,res)=>{
                                
                                                                                                                                                    db.query(
                                                                                                                                                            "SELECT * FROM upload WHERE catagory='agent'",(err,result)=>
                                                                                                                                                            {    
                                                                                                                                                            
                                                                                                                                                    if(err){
                                                                                                                                                                    console.log(err);
                                                                                                                                                                }
                                                                                                                                                               res.send(result) 
                                                                                                                                                            }
                                                                                                                                                        );
                                                                                                                                                    
                                                                                                                                                    });                 
                                                                                                                                                        router.get("/ngo",(req,res)=>{
                                
                                                                                                                                                        db.query(
                                                                                                                                                                "SELECT * FROM upload WHERE type='NGO'",(err,result)=>
                                                                                                                                                                {    
                                                                                                                                                                
                                                                                                                                                        if(err){
                                                                                                                                                                        console.log(err);
                                                                                                                                                                    }
                                                                                                                                                                   res.send(result) 
                                                                                                                                                                }
                                                                                                                                                            );
                                                                                                                                                        
                                                                                                                                                        }); 
                                                                                                                                                        router.get("/fresh",(req,res)=>{
                                
                                                                                                                                                            db.query(
                                                                                                                                                                    "SELECT * FROM upload WHERE type='FRESH GRADUATES'",(err,result)=>
                                                                                                                                                                    {    
                                                                                                                                                                    
                                                                                                                                                            if(err){
                                                                                                                                                                            console.log(err);
                                                                                                                                                                        }
                                                                                                                                                                       res.send(result) 
                                                                                                                                                                    }
                                                                                                                                                                );
                                                                                                                                                            }); 
                                                                                                                                                                router.get("/contrat",(req,res)=>{
                                
                                                                                                                                                                    db.query(
                                                                                                                                                                            "SELECT * FROM upload WHERE type='CONTRAT'",(err,result)=>
                                                                                                                                                                            {    
                                                                                                                                                                            
                                                                                                                                                                    if(err){
                                                                                                                                                                                    console.log(err);
                                                                                                                                                                                }
                                                                                                                                                                               res.send(result) 
                                                                                                                                                                            }
                                                                                                                                                                        );
                                                                                                                                                                    }); 

                                                                                                                                                                        router.get("/long",(req,res)=>{
                                
                                                                                                                                                            db.query(
                                                                                                                                                                    "SELECT * FROM upload WHERE type='LONG-TERM'",(err,result)=>
                                                                                                                                                                    {    
                                                                                                                                                                    
                                                                                                                                                            if(err){
                                                                                                                                                                            console.log(err);
                                                                                                                                                                        }
                                                                                                                                                                       res.send(result) 
                                                                                                                                                                    }
                                                                                                                                                                );
                                                                                                                                                            }); 
                                                                                                                                                                router.get("/freelancing",(req,res)=>{
                                
                                                                                                                                                                    db.query(
                                                                                                                                                                            "SELECT * FROM upload WHERE type='FREELANCING'",(err,result)=>
                                                                                                                                                                            {    
                                                                                                                                                                            
                                                                                                                                                                    if(err){
                                                                                                                                                                                    console.log(err);
                                                                                                                                                                                }
                                                                                                                                                                               res.send(result) 
                                                                                                                                                                            }
                                                                                                                                                                        ) ;
                                                                                                                                                                    }
                                                                                                                                                                    );                                                                                                                                              
                                                                                                                                                                   
                                                                                                                                                                   
                                                                                                                                                                   
                                                                                                                                                                    module.exports= router;                                                                                                                                                                                                   
                                                                                    
