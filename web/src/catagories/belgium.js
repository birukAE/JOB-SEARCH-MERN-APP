import React from 'react'
import styled from "styled-components";
import{useState,useEffect} from 'react'
import Axios from 'axios';
import { AiFillLike } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '../globalestyles';
import { Share } from '../share/share';


import Moment from 'react-moment';

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






function Belgium() {
const[scholarlist,setScholarlist]=useState([])
let history=useHistory();
useEffect(() => {
Axios.get("http://localhost:3006/scholar/Belgium").then((response)=>{
 setScholarlist(response.data);
       })}, []);
const likepost=(id)=>{
   Axios.post(`http://localhost:3006/scholar/likes/${id}`).then((response)=>{
      console.log(response.data);
   })
};



    return (
          <Inputs>  <Cata>
             <h2>Catagories</h2>
        <Catagory  to ="/Poland">Poland</Catagory>
        <Catagory to ="/Ethiopian">Ethiopian</Catagory>
       <Catagory to ="/Japan">Japan</Catagory>
       <Catagory  to ="/Southafrican">south african</Catagory>
       <Catagory to ="/India">indian</Catagory>
       <Catagory to ="/China">China</Catagory>
       <Catagory to ="/German">germany</Catagory>
       <Catagory to ="/France">french</Catagory>
       <Catagory to ="/Russian">Russian</Catagory>
       <Catagory to ="/Canada">canadian</Catagory>
       <Catagory to ="/Dinmark">dinmark</Catagory>
       <Catagory to ="/England">England</Catagory>
       <Catagory to ="/Nigeria">Nigerian</Catagory>
       <Catagory to ="/Belgium">belgiem</Catagory>
       <Catagory to ="/Norway">norway</Catagory>
       <Catagory to ="/Spain">spain</Catagory>
       <Catagory to ="/Ghana">ghana</Catagory>
       <Catagory to ="/Turky">turky</Catagory>
       <Catagory to ="/Tanzania">tanzanian</Catagory>
       <Catagory to ="/Dubai">dubai</Catagory>
       <Catagory to ="/Saudi">saudia-arebian</Catagory>
       <Catagory to ="/Brazil">brazile</Catagory>
       <Catagory to ="/Argentina">argentina</Catagory>
       <Catagory to ="/australia">australian</Catagory>
      

       <h2>scholar types</h2>
       <Catagory to ="/America">for american</Catagory>
       
       <Catagory to ="/Eastafrica">for east africa</Catagory>
       <Catagory to ="/Subsahara">for sub-sharan</Catagory>
       <Catagory to ="/Esian">for easians</Catagory>
       <Catagory to ="/Africa">for african</Catagory>
       <Catagory to ="/Developing">for developing countries</Catagory>
       <Catagory  to ="/International">for international</Catagory>
       <Catagory to ="/Africa">for europians</Catagory>
       <Catagory to ="/Europe">for south american</Catagory>
       <Catagory to ="/Southamerica">for american</Catagory>

               </Cata>
    
         <GET> <h1>All Scholarships</h1>
        
        
            {scholarlist.map((val,key)=> { 
              
             return( 
              
             
             
                 
        
           <Get >       
          <Label>University/College Name:</Label>  
          <Req><h5> {val.sname}</h5></Req>
      
         <Label>Country: </Label> 
         <Req> {val.country}</Req>
          <Label>Programs:</Label> 
          <Req><h5>{val.program}</h5></Req>
          <Label>Scholarship For:</Label> 
          <Req><h5>{val.sfor}</h5></Req>
          <Label>Fields of Study:</Label>
          <Req><h5>{val.field}</h5> </Req>  
          <Label>Deadline:</Label> 
          <Req><h5><Moment format="YYYY/MM/DD HH:MM">{val.deadline}</Moment></h5> </Req>
          <Label>Requirments:</Label> 
          <Req> {val.requirment.length>50?val.requirment.substring(0,50)+ ".....showmore" :val.requirment}</Req>
          
          <Label>How to Apply:</Label> 
          <Req> {val.apply.length>20?val.apply.substring(0,20)+ ".....showmore" :val.apply}</Req>
          
      
          
          
          <Click><LIKES>{val.likes} <LIKE onClick={()=>{likepost(val.id)}}> < AiFillLike size="20"/></LIKE></LIKES>
          <button key={key}   onClick={()=>{history.push(`/shows/${val.id}`);}}>showmore</button>
         <Req>posted on<h5><Moment format="YYYY/MM/DD HH:MM">{val.deadline}</Moment></h5> </Req>
        < Share/>  </Click>

         
              
      </Get>
            )})}
       
            </GET>
           </Inputs>
          ) ;
    
}

export default Belgium;

    