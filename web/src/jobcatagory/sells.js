import React from 'react'
import styled from "styled-components";
import{useState,useEffect} from 'react'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import {Image} from "cloudinary-react";
import Moment from 'react-moment';
import { AiFillLike } from 'react-icons/ai';
import { Share } from '../share/share';
import { Link } from 'react-router-dom';

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
  height: 550px;
 
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
width:600px;
height:480px;
margin: 10px;
box-shadow:1px black;
border:2px red;
background-color: wheat;
border-radius: 40px;
display: flex;

align-items: center;
justify-content: space-evenly;
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
margin: 10px;
margin-right: 20px;
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
  min-zoom:2px;
  max-zoom:1px;
  width: 5px;
  height: 3px;
  border-radius: 50%;
  align-items:center;
  margin-bottom: 8px;
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

const Ict=styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:0.3px;
height: 0.3px;
margin: 2px;

`;


function SELLS() {
const[joblist,setJoblist]=useState([])
let history=useHistory();
useEffect(() => {


  Axios.get("http://localhost:3006/upload/sells").then((response)=>{
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
    
      
            {joblist.map((val,key)=> { 
              return( <GET>   <HH>SELLS AND TRADE JOBS</HH> 
                       <Get><Ict>
                       
                          <h2>{val.cname}</h2>
        <IC> <Image cloudName="biruk-emiru" publicId="bkbkbkbk/g6xx1e5pbkymiqyakbek"/></IC>
        </Ict>
          
<Get1>



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
        
</Get1>
           
            </Get>
       </GET> 
           
          ) ; })} 

     
           </Inputs>
            
    )
}

export default SELLS;
