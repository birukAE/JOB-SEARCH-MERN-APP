import React from "react";
import styled from "styled-components";
import IMG from "../../assets/company_team.jpg";
import {useState} from "react";
import Axios from 'axios' ;
import {useHistory} from 'react-router-dom'
import { Link } from "react-router-dom";


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


`;
const Button=styled.button`
width: 50%;
height: 30%;
color: red;
margin: 5px;
cursor: pointer;
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
const LINK=styled(Link)`
cursor: pointer;

`;
function Login() {

    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");

    const [errmessage,setErrMessage]=useState("")
let history=useHistory()





const login = ()=>{
Axios.post("http://localhost:3006/companyregs/comlog",
 {username:username,
password:password,}).then((response)=>{
if (response.data.Submited){
  localStorage.setItem("Submited",true)
  localStorage.setItem("username",response.data.username);
  history.push('/Help');
}else{
setErrMessage(response.data.message)
}
      });
  };



  

  return (
    <>
    <Container>
      <label>userName:</label>
      <Input type="text" onChange={(event)=>{setUsername(event.target.value);}}/>
      <label>password:</label>
      <Input type="password" onChange={(event)=>{setPassword(event.target.value);}}  />
      
     <Button  onClick={login}>LOGIN</Button>
     
       {errmessage}
</Container> 

 
</>)}
export default Login;
