import React from 'react'
import styled from "styled-components";

function Loginpost() {
    const Inputs=styled.div`
color: blue;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 20px;

    `;
    const Forminput=styled.input`
  width: 500px;
  height: 70px;
  padding-left: 40px;
  margin: 7px;
  border-color:brown;
  border-width: 2px;
  color: black;
  font-family: Georgia, 'Times New Roman', Times, serif;
  `; 
  const Ftextarea=styled.textarea`
  width: 700px;
  height: 250px;
padding-left:40px;
padding-top:40px;  
  margin: 5px;
  border-color:brown;
  border-width: 2px;
  color: black;
  font-family: Georgia, 'Times New Roman', Times, serif;
  `; 
  const Label=styled.h3`

margin-top: 25px;
color: green;
`;
const Formfile=styled.input`
width: 600px;
height:50px;

font-family: Georgia, 'Times New Roman', Times, serif;
font-size:25px;
margin-left: 300px;

margin-top: 25px;
`;

  
    const Button=styled.button`
    width: 200px;
    height: 50px;
    margin-bottom:100px;
    margin-top:20px;
    border-radius: 4px;
    border-color:green;
    background-color:gray;
    :hover{
     cursor: pointer;
     font-weight:bolder;
     background-color: green;
    }
    
    `;
    return (
        <>
         <Inputs>
        <h1>WELCOME TO JOBS POSTING PAGE</h1>
               
          <Label>COMPANY LOGO:</Label> 
          <Formfile type="file" /> 
          <Label>COMPANY NAME:</Label> 
          <Forminput type="text" placeholder="e.g commercial bank of ethiopia"/> 
          <Label>JOB NAME:</Label> 
          <Forminput type="text" placeholder="e.g senior/junior" /> 
          <Label>JOB LOCATION:</Label> 
          <Forminput type="varchar" placeholder=" e.g Adiss abeba" /> 
          <Label>SALARY:</Label> 
          <Forminput type="varchar" placeholder="e,g per company scale" /> 
          <Label>CANDIDATE DEMAND:</Label> 
          <Forminput type="varchar"placeholder="e.g 10 personels" /> 
          <Label>DEADLINE DATE:</Label> 
          <Forminput type="date" placeholder="e.g 23/5/2021 E.C"/> 
          <Label>JOB TYPE:</Label> 
          <Forminput type="text" placeholder="e,g contrat"/> 
          <Label>JOB CATAGORY:</Label> 
          <Forminput type="text" placeholder="e.g enginnering" /> 
          <Label>JOB RESPONSIBLITIES:</Label> 
          <Ftextarea   placeholder="e.g: the candidate should be resposibele to administrate computers in the office and he/she shoulde be abel to speak english language perfectly"/> 
          <Label>JOB REQUIRMENTS:</Label> 
          <Ftextarea placeholder="e.g: the applicate required to attach 8th grade and university temporary certeficates" /> 
          <Label>HOW TO APPLAY:</Label> 
          <Ftextarea placeholder="e.g: anyone who fullfile all the requirments can apply at our office in adiss abeba or in the link bellow" /> 
          <Label>APPLYING LINK:</Label> 
          <Forminput type="link" placeholder="e.g www.cbe.vaccancy.com"/>
         
                  <Button>JOB SUBMIT</Button>
          
           </Inputs>
        </>
    )
}

export default Loginpost;
