import React from 'react'
import styled from "styled-components";
import{useState} from 'react'
import Axios from 'axios';

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
  height: 65px;
  padding-left: 40px;
  margin: 7px;
  
  border-color:brown;
  border-width: 2px;
  border-radius:19px;
  color: blue;
  font-size: small;
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
const Select=styled.select`
width: 500px;
height: 60px;
border-color:brown;
 border-width: 2px;
  border-radius:19px;
  color: blue;
  align-items: center;
  font-size: 20px;
  justify-content: center;
  padding-left: 60px; 
  overflow:hidden;
  overflow-y: auto;
  padding-right:15px;
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
  

const Fileinput=styled.input`
width:20%;
height: 20%;

`;

function SPOST() {

const [sname,setSname]=useState("");
const [country,setCountry]=useState("");
const [program,setProgram]=useState("");
const [field,setField]=useState("");
const [sfor,setSfor]=useState();
const [requirment,setRequirment]=useState(0);
const [apply,setApply]=useState("");
const [deadline,setDeadline]=useState("");

const scholar =()=>{


  Axios.post("http://localhost:3006/scholar/spost",
  {sname:sname,
 country:country,program:program,sfor:sfor,requirment:requirment,apply:apply
,deadline:deadline,field:field}).then((response)=>{
 console.log(response);
       });  
     }
    return (
        <>
         <Inputs>
        <h1>WELCOME TO JOBS POSTING PAGE</h1>
        
               
          <Label>University/College Name:</Label> 
          <Forminput type="text" placeholder="e.g commercial bank of ethiopia" onChange={(event)=>{setSname(event.target.value);}} /> 
          <Label>Country:</Label> 
          <Forminput type="text" placeholder="e.g senior/junior" onChange={(event)=>{setCountry(event.target.value);}}/> 
          <Label>Program:</Label> 
          <Select value={program}placeholder="e,g per company scale"onChange={e=>setProgram(e.target.value) }> 
         <option> Post-Graduate</option>
         <option>Bachelor</option>
         <option>Masters</option>
         <option>Bachelor/Masters</option>
         <option>Masters/Phd</option>
         <option>All Programs</option>
         
         
         </Select>
        
         <Label>Scholarship for:</Label>
          <Select value={sfor}placeholder="e,g per company scale"onChange={e=>setSfor(e.target.value) }> 
         <option> Nigeria</option>
         <option>East Africa</option>
         <option>Subsaharan</option>
         <option>Africa</option>
         <option>Developing Countries</option>
         <option>International Students</option>
         <option> Ethiopian</option>
         <option>American</option>
         <option>German</option>
         <option>France</option>
         <option>Italian</option>
         <option>Australian</option>
         <option> Brazil</option>
         <option>Belgium</option>
         <option>Canada</option>
         <option>Dubai</option>
         <option>England</option>
         <option>Russia</option>
         <option> China</option>
         <option>Japan</option>
         <option>South african</option>
         <option>Ghana</option>
         <option>Denmark</option>
         <option>Norway</option>
         <option> Argentina</option>
         <option>Turky</option>
         <option>Poland</option>
         <option>Spain</option>
         <option>South american</option>
         <option>Saudi</option>
         <option> Esian</option>
         <option>India</option>
         <option>Tanzanian</option>
         <option>Europ</option>
          </Select>
          <Label>Fields of Studies:</Label> 
          <Forminput type="varchar" placeholder=" e.g Adiss abeba" onChange={(event)=>{setField(event.target.value);}}/> 
          <Label> Requirments:</Label> 
          <Ftextarea placeholder="e.g: the applicate required to have grade 3.o and more and also university temporary certeficates"onChange={(event)=>{setRequirment(event.target.value); }}/> 
          <Label>How to Apply:</Label> 
          <Ftextarea placeholder="e.g: the applicate required to have grade 3.o and more and also university temporary certeficates"onChange={(event)=>{setApply(event.target.value); }}/> 
          <Label>Deadline:</Label> 
          <Forminput type="date" placeholder="e,g contrat"onChange={(event)=>{setDeadline(event.target.value);}}/> 
           
                  <Button onClick={scholar}> SUBMIT SCHOLAR</Button>
          
           </Inputs>
          </>
    )
}

export default SPOST;
