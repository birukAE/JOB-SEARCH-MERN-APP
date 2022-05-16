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
import "../coudnary.css";

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
font-size: 12px;
font-style: arial;
color: blue;
`;

const Get=styled.div`
color:red;
width:600px;
height:470px;
margin: 15px;
margin-bottom: 10px;

box-shadow:1px black;
border:2px red;
background-color: wheat;
border-radius: 100px;
display: flex;

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
 
margin-left:500px;

 `;
const Get1=styled.div`

margin-right: 25px;
margin-bottom:10px;
box-shadow:1px black;
border:2px red;
background-color: wheat;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;




  const IC=styled.img`
  width: 100px;
  height: 100px;
  
`;

    const Req=styled.div`
    max-width:90%;
    max-height: 300px;
    justify-content: center;
    align-items: center;
   
    word-wrap: break-word;
    padding:  0 1px;
    
    font-size: 11px;
   color: black;

    `;
const Click=styled.button`
display: flex;
flex-direction: row; 
align-items :center ;
width: 150%;
justify-content: space-evenly;
border: none;
background:none;
margin-top:0px;

 `;


const Ict=styled.div`
display:flex;
flex-direction:column;
align-items: center;
margin-bottom: 200px;
`;

const Apply=styled.button`
margin-bottom: 4px;
padding: 4px;
background-color: black;
color:whitesmoke;
&:hover{
  background-color: purple;
  cursor:pointer;
}
`;
const BB=styled.button`
background-color:black;
color:white;
border-radius:2px;
&:hover {

    background-color:blue ;
    cursor: pointer;
   color:active;
   }

padding:2px;

`;

function JOBS() {
const[joblist,setJoblist]=useState([])
let history=useHistory();
useEffect(() => {


  Axios.get("http://localhost:3006/upload/reciving").then((response)=>{
 setJoblist(response.data);
       })}, []);
       const likepost=(id)=>{  
        Axios.post(`http://localhost:3006/upload/like/${id}`).then((response)=>{
         
        console.log(response.data);
        })
     };
    return (
    
         <Inputs>
         <Cata>
           <h2>Catagories</h2>
        <Catagory  to ="/engineering">engineering and manfucturing</Catagory>
        <Catagory to ="/accounting">accounting and managment</Catagory>
       <Catagory to ="/business">business and economics</Catagory>
       <Catagory  to ="/low ">low and related</Catagory>
       <Catagory to ="/agricuture">agricutural scince</Catagory>
       <Catagory to ="/sport  ">sport and tradition</Catagory>
       <Catagory to ="/medicene ">medicene and pharmacy</Catagory>
       <Catagory to ="/it ">it and software</Catagory>
       <Catagory to ="/poletica">poletics and adminstration</Catagory>
       <Catagory to ="/social ">social and community</Catagory>
       <Catagory to ="/hotel">hotel and tourism</Catagory>
       <Catagory to ="/journalisem">jornalisem and media</Catagory>
       <Catagory to ="/lingustics">lingustics</Catagory>
       <Catagory to ="/applied">applied scince</Catagory>
       <Catagory to ="/education ">teaching and education</Catagory>
       <Catagory to ="/secratary">secratary</Catagory>
       <Catagory to ="/psyicology ">psyicology</Catagory>
       
       <Catagory to ="/land ">land and geology</Catagory>
       <Catagory to ="/history">history and archiology</Catagory>
       <Catagory to ="/fashion ">fashion and design</Catagory>
       <Catagory to ="/art ">art and music</Catagory>
       <Catagory to ="/video  ">video and graphics</Catagory>
       
       <Catagory to ="/sells ">sells and trade</Catagory>
       <Catagory to ="/communication ">communication and networking</Catagory>
       <Catagory to ="/road ">road and transport</Catagory>
       <Catagory to ="/physical ">physical work</Catagory>
       <Catagory to ="/shefe">shefe</Catagory>
       <Catagory to ="/web ">web developer</Catagory>
       <Catagory to ="/agent">agent</Catagory>
       
      
       
       <h2>JOB types</h2>
       <Catagory to ="/ngo">NGO</Catagory>
       <Catagory to ="/fresh">FRESH GRADUATES</Catagory>
       <Catagory to ="/contrat">CONTRAT</Catagory>
       <Catagory to ="/long">LONG-TERM</Catagory>
       <Catagory to ="/freelacing">fREELANCING</Catagory>
       
      
               </Cata>
    <GET>  <HH>ALL JOBS</HH> 
      
            {joblist.map((val,key)=> { 
              return( 
                        <Get><Ict>
                       
                          <h3>{val.cname}</h3>
        <div className="Image"><Image cloudName="biruk-emiru" publicId={val.image} /></div>
        
        </Ict>
          
<Get1>



            <Label>JOB NAME </Label> 
            <Req> <h6> {val.jname}</h6> </Req>
          <Label>JOB LOCATION</Label> 
          <Req><h6>{val.location}</h6> </Req>
          <Label>SALARY:</Label> 
          <Req><h6>{val.salary}</h6> </Req>
          <Label>CANDIDATE DEMAND</Label> 
          <Req><h6>{val.candidate}</h6> </Req>
          <Label>DEADLINE DATE</Label> 
          <Req><h6><Moment format="YYYY/MM/DD HH:MM">{val.deadline}</Moment></h6> </Req>
          <Label>JOB TYPE:</Label> 
          <Req><h6>{val.type}</h6> </Req>
          
          <Label>JOB REQUIRMENTS</Label> 
          <Req> <h6>{val.requirment.length>50?val.requirment.substring(0,50)+ ".....showmore" :val.requirment}</h6></Req>
          <Label>HOW TO APPLAY</Label> 
          <Req><h6> {val.apply.length>20?val.apply.substring(0,20)+ ".....showmore" :val.apply}</h6></Req>
           
          
          
          <Click><LIKES>{val.likes} <LIKE onClick={()=>{likepost(val.id)}}> < AiFillLike size="20"/></LIKE></LIKES>
          <BB key={key}   onClick={()=>{history.push(`/show/${val.id}`);}}>showmore</BB>
         <Req>posted on<h6><Moment format="YYYY/MM/DD ">{val.deadline}</Moment></h6> </Req>
        < Share/>  </Click>
       
</Get1>
           
            </Get>
       
           
          ) })} 
 </GET> 
    
           </Inputs>
            
    );
}

export default JOBS;
