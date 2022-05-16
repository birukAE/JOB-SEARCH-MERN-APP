import React from 'react'
import styled from "styled-components";
import{useState,useEffect} from 'react'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import {Image} from "cloudinary-react";
import Moment from 'react-moment';
import { AiFillLike } from 'react-icons/ai';
import { Share } from '../../share/share';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
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
const Inputs=styled.div`
justify-content: space-between;

display: flex;
`;

    const Catagory=styled(Link)`


    color: black;
    `;
  const Cata=styled.div`
  display: flex;
  flex-direction: column;
  background-color: orchid;
  overflow:hidden;
  overflow-y:auto;
  position: fixed;
  height: 565px;
  
  align-items:center;
  color: black;
  width: 350px;
  `;
  
const Label=styled.div`
font-size: 13px;
font-style: arial;
color: green;
`;

const Get=styled.div`
color:red;
width:700px;
height:600px;
margin: 10px;
box-shadow:1px black;
border:2px red;
background-color: wheat;
border-radius: 40px;
display: flex;
margin-left:30%;
align-items: center;
justify-content: center;
`;
const HH=styled.h1`
color:red;
`
 const GET=styled.div`
 align-items: center;
 display: flex;
 flex-direction: column;
 margin-top:10px;
margin-left:500px;
padding-top: 5px;
 `;
const Get1=styled.div`
margin: 5px;
margin-right: 100px;
box-shadow:1px black;
border:2px red;
background-color: wheat;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;




  const IC=styled.div`
  width: 1/4%;
  height: 400px;
  border-radius: 50%;
  align-items:center;
  margin-bottom: 10px;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: bold;
  margin-right:150px;

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


function Showcv() {
    const[showcv,setShowcv]=useState({});
    let{showId}=useParams();

   useEffect(() => { Axios.get(`http://localhost:3006/application/resume/${showId}`).then((response)=>{

  setShowcv({
    catagory: response.data[0].catagory,
   experiance: response.data[0].experiance,
   cgpa: response.data[0].cgpa,
  position: response.data[0].position,
  avaliblity: response.data[0].avaliblity,
    date: response.data[0].date,
    filename: response.data[0].filename,
    } );
   
 
   
   
  });}, []);
     
    return (
    
         
        <Get>
             
             
                       
                       
     <IC><h2>{showjob.cname}</h2> </IC>
    

<Get1>


            <Label>:- RESUME TYPE</Label> 
            <Req> <h5> {showcv.catagory}</h5> </Req>
          <Label>EXPERIANCE:</Label> 
          <Req><h5>{showcv.experiance}</h5> </Req>
          <Label>CGPA:</Label> 
          <Req><h5>{showcv.cv}</h5> </Req>
          <Label>JOB POSITION:</Label> 
          <Req><h5>{showCV.position}</h5> </Req>
          <Label>POSTED ON:</Label> 
          <Req><h5><Moment format="YYYY/MM/DD HH:MM">{showjob.deadline}</Moment></h5> </Req>
          <Label>AVALIBLITY:</Label> 
          <Req><h5>{showcv.avaliblity}</h5> </Req>
          <Label>CURICULEM VIATE(CV):</Label> 
          <Image cloudName="biruk-emiru" publicId="bkbkbkbk/g6xx1e5pbkymiqyakbek"/>
         
         
</Get1>

        
            </Get>
          
       );    
           
  
     }
   
export default Showcv;
