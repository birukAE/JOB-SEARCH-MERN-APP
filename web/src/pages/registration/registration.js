import React from "react";
import styled from "styled-components";
import IMG from "../../assets/company_team.jpg";
import {useState} from "react";
import Axios from 'axios' ;




const Container=styled.div`
align-items: center;
color: black;
background-image: url(${IMG});
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
justify-content: center;

`;
const Input=styled.input`
width: 300px;
height: 50px;
align-items: center;
font-family: Georgia, 'Times New Roman', Times, serif;

`;
const Dropdown=styled.select`
width: 300px;
height: 50px;
align-items: center;
font-family: Georgia, 'Times New Roman', Times, serif;
font-size: 15px;
justify-content: center;


`;
const Button=styled.button`
width: 30%;
height: 20%;
color: red;
margin: 5px;
`;
const Tutton=styled.button`
width: 30%;
height: 20%;
color: red;
margin-bottom: 100px;
`;
const Respo= styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
function Registration() {

    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");
    const[regtype,setRegtype]=useState("");


const register = ()=>{
Axios.post("http://localhost:3006/user/register",
 {username:username,
password:password,email:email,regtype:regtype,}).then((response)=>{
  console.log(response);
}
      );
  };



  

  return (
    <>
    <Container>
      <label>Name:</label>
      <Input type="varchar" onChange={(event)=>{setUsername(event.target.value);}}/>
      <label>PASSWORD:</label>
      <Input type="password" onChange={(event)=>{setPassword(event.target.value);}}  />
      <label>email:</label>
      <Input type="email" onChange={(event)=>{setEmail(event.target.value);}}  />
      <label>Register as:</label>
      <Dropdown value={regtype}placeholder="employee/employer" onChange={(event)=>{setRegtype(event.target.value)} }> 
      <option>choose one</option>
         <option>company/employer</option>
         <option>candidate/employee</option>
        
        </Dropdown>
         
      <Button onClick={register}>register</Button>
    
</Container>

 
</>)}
export default Registration;
