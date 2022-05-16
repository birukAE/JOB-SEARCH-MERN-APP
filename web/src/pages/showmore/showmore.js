import React from 'react'
import { useParams } from 'react-router-dom';
import  Axios  from 'axios';
import{useState,useEffect} from "react"
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
const Inputs=styled.div`
justify-content: space-between;

display: flex;
`;


const Label=styled.div`
    color: blue;
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
    const Get=styled.div`
    color:purple;
    min-width: 500px;
    min-height: 540px;
    width: auto;
    height: auto;
    margin: 15px;
    margin-left: 400px;
    padding: 5px;
    box-shadow:1px black;
    border:2px red;
    background-color: wheat;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    `;
    const Req=styled.div`
    max-width:90%;
    max-height: 400px;
    justify-content: center;
    align-items: center;
    border: 2px solid green;
    word-wrap: break-word;
    padding:  0 5px;
    margin-bottom: 5px;
    `; 
     const Catagory=styled(Link)`

  color: black;
     `;
   
function Show() {
  
    const[show,setShow]=useState({});
    let{showId}=useParams();
   useEffect(() => { Axios.get(`http://localhost:3006/scholar/shows/${showId}`).then((response)=>{

  setShow({
   
   sname: response.data[0].sname,
  country: response.data[0].country,
  program: response.data[0].program,
    sfor: response.data[0].sfor,
    field: response.data[0].field,
   requirment: response.data[0].requirment,
   apply: response.data[0].apply,
   deadline: response.data[0].deadline, });
 
  });}, []);
     
    return (

        <Inputs>

        <Cata>
        <h2>Catagories</h2>
   <Catagory  to ="/catagory">Poland</Catagory>
   <Catagory>Ethiopian</Catagory>
  <Catagory>American</Catagory>
  <Catagory>south african</Catagory>
  <Catagory>indian</Catagory>
  <Catagory>China</Catagory>
  <Catagory>germany</Catagory>
  <Catagory>french</Catagory>
  <Catagory>Russian</Catagory>
  <Catagory>canadian</Catagory>
  <Catagory>australian</Catagory>
  <Catagory>australian</Catagory>
  <Catagory>australian</Catagory>
  <Catagory>australian</Catagory>
  <Catagory>australian</Catagory>
  <Catagory>australian</Catagory>
  <Catagory>australian</Catagory>
  <Catagory>australian</Catagory>
  <Catagory>australian</Catagory>
  <Catagory>australian</Catagory>
  <Catagory>australian</Catagory>
  <Catagory>australian</Catagory>
  <Catagory>australian</Catagory>
  <Catagory>australian</Catagory>
  <Catagory>australian</Catagory>
  <Catagory>australian</Catagory>

  <h2>scholar types</h2>
  <Catagory>for ethiopians</Catagory>
  
  <Catagory>for east africa</Catagory>
  <Catagory>for sub-sharan</Catagory>
  <Catagory>for west africa</Catagory>
  <Catagory>for african</Catagory>
  <Catagory>for developing countries</Catagory>
  <Catagory>for international</Catagory>
  <Catagory>for international</Catagory>
  <Catagory>for international</Catagory>
  <Catagory>for international</Catagory>

          </Cata>

         <Get>

    <Label>UNIVERSITY/COLLEGE NAME:  </Label>   
    <Req> {show.sname}</Req>
           
      
    <Label>COUNTRY: </Label> 
        <Req>  {show.country}</Req>
         <Label>PROGRAM:</Label> 
        <Req> <h5>{show.program}</h5></Req>
         <Label>SCHOLARSHIP FOR:</Label> 
         <Req> <h5>{show.sfor}</h5></Req>
         <Label>FIELDS OF STUDYIES:</Label> 
         <Req><h5>{show.field}</h5></Req>
         
         <Label>DEADLINE DATE:</Label> 
         <Req><h5><Moment format="YYYY/MM/DD">{show.deadline}</Moment></h5> </Req>
            <Label>REQUIRMENTS:</Label> 
         <Req> <h5>{show.requirment}</h5></Req>
       
         <Label>HOW TO APPLAY:</Label> 
         <Req><h5>{show.apply}</h5></Req>
        </Get>
          </Inputs>
    );
}



export default Show;
