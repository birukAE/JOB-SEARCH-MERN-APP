import React from 'react'
import styled from "styled-components";
import{useState,useEffect} from 'react'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import Moment from 'react-moment';
import { AiFillLike } from 'react-icons/ai';
import { Share } from '../../share/share';

const Inputs=styled.div`
color: blue;
display: flex;
flex-direction: column;
height: 100;
align-items: center;
justify-content: center;
    `;
const Label=styled.div`
font-size: 13px;
font-style: arial;
color: green;
`;

const Get=styled.div`
color:red;
width:50%;
height:550px;
margin: 10px;
box-shadow:1px black;
border:2px red;
background-color: wheat;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const LIKES=styled.button`
 display: flex;
 flex-direction: row; 
 align-items :center ;
 margin-right: 15px;
width: 50px;
border: none;
background: none;

  `;
const LIKE=styled.button`
&:hover {
   color: blue;
   cursor: pointer;
  color:active;
  }
  margin-left :5px ;
 `;
 
 const Req=styled.div`
 max-width:90%;
 max-height: 400px;
 justify-content: center;
 align-items: center;
 border: 2px solid green;
 word-wrap: break-word;
 padding:  0 5px;
 margin: 1px;
 `;
const Click=styled.button`
display: flex;
flex-direction: row; 
align-items :center ;
width: 150%;
justify-content: space-evenly;
border: none;
background:none;
margin-top:5px;

`;


function Account() {
    const[account,setAccount]=useState([])
    const[newdeadline,setNewdeadline]=useState("")
    let history=useHistory();
    useEffect(()=>{
    
    Axios.get(`http://localhost:3006/upload/usern/${localStorage.getItem("username")}`).then((response)=>{
        
 setAccount(response.data);
       })}, []);
       const likepost=(id)=>{
        Axios.post(`http://localhost:3006/upload/like/${id}`).then((response)=>{
           console.log(response.data);
        })
     };
       const deletupload=(id)=>{
        Axios.delete(`http://localhost:3006/upload/delete/${id}`).then((response)=>{
          setAccount(account.filter((val)=>{
            return val.id!=id;
          }))
        })
        
        
            }
            
        const updatedeadline=(id)=>{
          Axios.put("http://localhost:3006/upload/update",
          {deadline:newdeadline,id:id}
          ).then((response)=>{
            setAccount(account.map((val)=>{
              return val.id==id?
              {id:val.id,sname:val.sname,country:val.country,program:val.program,sfor:val.sfor,
              requirment:val.requirment,apply:val.apply,deadline:newdeadline,}:val;
            })
            
            ) ;     
            }
          );
        
          };
            return (
             
            
                 <Inputs> 
              
                <h1> Welcome {localStorage.getItem("username")}</h1>
                
                
                 
                    {
                    account.map((val,key)=> { 
                      return( 
                      
        
                   <Get>       
             
            <Label>Job name:- </Label> 
            <Req> <h5> {val.jname}</h5> </Req>
          <Label>JOB LOCATION:</Label> 
          <Req><h5>{val.location}</h5> </Req>
          <Label>SALARY:</Label> 
          <Req><h5>{val.salary}</h5> </Req>
          <Label>CANDIDATE DEMAND:</Label> 
          <Req><h5>{val.candidate}</h5> </Req>
          <Label>DEADLINE DATE:</Label> 
          <Req><h5><Moment format="YYYY/MM/DD HH:MM">{val.deadline}</Moment></h5> </Req>
          <Label>JOB TYPE:</Label> 
          <Req><h5>{val.type}</h5> </Req>
          <Label>JOB CATAGORY:</Label> 
          <Req><h5>{val.catagory}</h5> </Req>
          <Label>JOB RESPONSIBLITIES:</Label> 
          <Req><h5>{val.responsiblity}</h5> </Req>
          <Label>JOB REQUIRMENTS:</Label> 
          <Req> {val.requirment.length>50?val.requirment.substring(0,50)+ ".....showmore" :val.requirment}</Req>
          <Label>HOW TO APPLAY:</Label> 
          <Req> {val.apply.length>20?val.apply.substring(0,20)+ ".....showmore" :val.apply}</Req>
          <Label>APPLYING LINK:</Label> 
          <Req><h5>{val.link}</h5> </Req>
          
          <Click><LIKES>{val.likes} <LIKE onClick={()=>{likepost(val.id)}}> < AiFillLike size="20"/></LIKE></LIKES>
          <button key={key}   onClick={()=>{history.push(`/show/${val.id}`);}}>showmore</button>
         <Req>posted on<h5><Moment format="YYYY/MM/DD HH:MM">{val.deadline}</Moment></h5> </Req>
        < Share/>  </Click>
                 
                  <input type="text" onChange={(e)=>{setNewdeadline(e.target.value);}}/>
                  <button onClick={()=>{updatedeadline(val.id);}}>{""}update</button>
                  <button onClick={()=>{deletupload(val.id)}}>delet</button>
                
                    </Get>
                 
                   
                  ) ; })} 
        
                  
                   </Inputs>
                  
            )
        }

export default Account;
