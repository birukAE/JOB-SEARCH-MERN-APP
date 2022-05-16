import React from "react";
import styled from "styled-components";
import IMG from "../../assets/company_team.jpg";
import { Link } from 'react-router-dom';



const Container=styled.div`
align-items: center;
color: black;
background-image: url(${IMG});
display: flex;
flex-direction: column;
width: 100%;
height: 100vh;
justify-content: center;

`;
const Container2=styled.div`
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
margin-bottom: 300px;
margin-top: 50px;
display: flex;
flex-direction: column;
width: 500px;
height: 500px;
border-radius:5px ;
background-color:transparent gray `;
const Button=styled.button`
width: 90%;
height: 15%;
color: white;
margin: 5px;
border-radius:15px;
background-color: blue;

&:hover{
    background-color:purple;
    cursor:pointer;
color:active;
}`;
const Label=styled.div`
font-size: 25px;
font-style: arial;
color:black;
`;
const LINK=styled(Link)`

`;
function Regbutton() {

  return (
    <>
    <Container>
    <Container2>
        <Label>register as a member</Label> 
        <LINK to='/memberreg'> <Button >register</Button></LINK>
      <Label>register as a company</Label>
      <LINK to='/companyreg'><Button>register</Button></LINK>
      <Label>register without both</Label>
      <LINK to='/memberreg'><Button> register</Button></LINK>
      </Container2>
</Container>

 
</>)}
export default Regbutton;
