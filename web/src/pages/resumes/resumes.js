import React from 'react'
import styled from "styled-components";
import{useState,useEffect} from 'react'
import Axios from 'axios';
import { AiFillLike } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '../../globalestyles';
import { Share } from '../../share/share';
import {Image} from "cloudinary-react";
import Lastseen from '../../timeago/timeago';
import Moment from 'react-moment';
import "../coudnary.css";

const Inputs=styled.div`
justify-content: space-between;

display: flex;
`;
const Label=styled.div`
font-size: 15px;
font-style: arial;
color: green;
`;
const GET=styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top:10px;
margin-left:500px;

`;

const ICT=styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:0.3px;
height: 0.3px;
margin: 2px;

`;

const Get=styled.div`
color:purple;
width: 500px;
height: 400px;
margin: 10px;
padding: 5px;
box-shadow:1px black;
border:2px red;
background-color: wheat;
border-radius: 20px;

display: flex;
flex-direction: column;
align-items: center;
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
const LIKE=styled.button`
 &:hover {
    color: blue;
    cursor: pointer;
   color:active;
   }
   margin-left :5px ;
  `;
 
 const Click=styled.button`
 display: flex;
 flex-direction: row; 
 align-items :center ;
 width: 100%;
justify-content: space-between;
border: none;
background:none;
margin-top:25px;
 
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
const IC=styled.div`

`;










function Resumes() {
const[resumes,setResumes]=useState([])
let history=useHistory();
useEffect(() => {
Axios.get(`http://localhost:3006/application/resumes/${localStorage.getItem("username")}`).then((response)=>{
 setResumes(response.data);
       })}, []);
      
    


    return (
          <Inputs>  <Cata>
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
    
         <GET> <h1>All Scholarships</h1>
        
        
            {resumes.map((val,key)=> { 
              
             return( 
              
             
             
                 
        
           <Get >       
          <Label>RESUME TYPE:</Label>  
          <Req><h5> {val.catagory}</h5></Req>
          <Label>POSTED ON(G.C):</Label> 
          <Req><h5><Moment format="YYYY/MM/DD HH:MM">{val.date}</Moment></h5> </Req>
         <Label>EXPERIANCE(YEARS): </Label> 
         <Req> {val.experiance}</Req>
          <Label>CGPA:</Label> 
          <Req><h5>{val.cgpa}</h5></Req>
          <Label>JOB POSITION:</Label>
          <Req><h5>{val.position}</h5> </Req> 
          <Label>AVALIBLITY:</Label>
          <Req><h5>{val.avaliblity}</h5> </Req>  
           <Label>CURICULUM VIATE(CV):</Label> 
           
                                     
        <ICT>
                            <h2>{val.cname}</h2>
        <div className="Image"><Image cloudName="biruk-emiru" publicId={val.image} /></div>
     
        </ICT>
          
      
          
          
          
          <button key={key}   onClick={()=>{history.push(`/resume/${val.id}`);}}>showmore</button>
         
        
         
              
      </Get>
            )})}
       
            </GET>
           </Inputs>
          ) ;
    
}

export default Resumes;

    