import React from 'react'
import styled from "styled-components";
import{useState,useEffect} from 'react'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import Moment from 'react-moment';
import { AiFillLike } from 'react-icons/ai';
import { Share } from '../../share/share';
import {Image} from "cloudinary-react";
import "../coudnary.css";
import { Link }  from 'react-router-dom';

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
height:800px;
margin: 5px;
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


function Profile() {
    const[profile,setProfile]=useState([])
    let history=useHistory();
    useEffect(()=>{
     Axios.get(`http://localhost:3006/memberregs/memuser/${localStorage.getItem("username")}`).then((response)=>{
        
        setProfile(response.data);
       })}, []);
     
       const deletmember=(id)=>{
        Axios.delete(`http://localhost:3006/memberregs/delete/${id}`).then((response)=>{
          setProfile(profile.filter((val)=>{
            return val.id!=id;
          }))
        })
        
        
            }
            
        
            return (
             
            
                 <Inputs> 
              
                <h1> Welcome {localStorage.getItem("username")}</h1>
                
                
                 
                    {
                    profile.map((val,key)=> { 
                      return( 
                      
        
                   <Get>       
             
            <Label>username:- </Label> 
            <Req> <h5> {val.username}</h5> </Req>
          <Label>fullname:</Label> 
          
          <Label>cv stutes:</Label> 
          <Req><h5>{val.cvsta}</h5> </Req>
          <Label>phone number:</Label> 
          <Req><h5>{val.phone}</h5> </Req>
          
        
          <Label>your package:</Label> 
          <Req><h5>{val.pack}</h5> </Req>
         
          <Label>your email:</Label> 
          <Req> {val.email}</Req>
<Label>your cv:</Label> 
          
<div className="Image"><Image cloudName="biruk-emiru" publicId={val.upcv} /></div> 
        
          <Label>your temporary:</Label> 
          
        <div className="Image"><Image cloudName="biruk-emiru" publicId={val.tempo} /></div> 
        

          <Label>your supporting doucments:</Label> 
          
        <div className="Image"><Image cloudName="biruk-emiru" publicId={val.other} /></div> 
        
          
        
    <Label>registration date:</Label> 
          <Req><h5><Moment format="YYYY/MM/DD HH:MM">{val.timestamp}</Moment></h5> </Req>
               
                 
                  
                  <button onClick={()=>{deletmember(val.id)}}>delet account</button>
                  <button    onClick={()=>{history.push('/updatemem');}}>showmore</button>
                    </Get>
                 
                   
                  ) ; })} 
        
                  
                   </Inputs>
                  
            )
        }

export default Profile;
