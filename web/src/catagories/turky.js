import React from 'react'
import styled from "styled-components";
import{useState,useEffect} from 'react'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
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
height:450px;
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

  
function  Turky() {
const[scholarlist,setScholarlist]=useState([])

let history=useHistory();
useEffect(() => {


  Axios.get("http://localhost:3006/scholar/Turky").then((response)=>{
 setScholarlist(response.data);
       })}, []);

    
    return (
     
    
         <Inputs> 
      
        <h1>WELCOME TO SCHOLARSHIP POSTING PAGE</h1>
        
        
         
            {scholarlist.map((val,key)=> { 
              return( 
              

           <Get>       
<h5>university name:{val.sname}</h5> 
           
      
            <Label>program:- {val.program}</Label> 
           
          <Label>country:</Label> 
          <h5>{val.country}</h5>
          <Label>scholarship for:</Label> 
          <h5>{val.sfor}</h5>
          <Label>requirment:</Label> 
          <h5>{val.requirment}</h5>
          <Label>how to apply:</Label> 
          <h5>{val.apply}</h5>
          <Label>deadline:</Label> 
          <h5>{val.deadline}</h5>
         
          <button key={key} onClick={()=>{history.push(`/shows/${val.id}`);}}>showmore</button>
            </Get>
         
           
          ) ; })} 

          
           </Inputs>
          
    )
}

export default Turky;
