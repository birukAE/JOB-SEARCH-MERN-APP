import React from 'react'
import styled from "styled-components";
import{useState} from 'react'
import Axios from 'axios';
import {useEffect} from 'react'
import { useParams } from 'react-router';
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
width:15%;
margin-top:10px;
height: 20%;
font-size: medium;
`;
const Select=styled.select`
width: 500px;
  height: 65px;
  padding-left: 40px;
  margin: 7px;
  
  border-color:brown;
  border-width: 2px;
  border-radius:19px;
  color: blue;
  font-size: medium;
`;



function Application() {

const [experiance,setExperiance]=useState("");
const [position,setPosition]=useState("");
const [cgpa,setCgpa]=useState("");
const [catagory,setCatagory]=useState("");
const [cv,setCv]=useState(0);
const [date,setDate]=useState("");
const [avaliblity,setAvaliblity]=useState("");
const[jobcode,setJobcode]=useState("")
const[show,setShow]=useState({});
    let{showId}=useParams();
    useEffect(() => { Axios.get(`http://localhost:3006/upload/showapp/${showId}`).then((response)=>{

      setShow({
       
       username: response.data[0].username,
       });
     
      });}, []);
const upload =()=>{

const formData=new FormData()
formData.append("file",cv[0]);
formData.append("upload_preset","bkbkbkbk");
Axios.post('https://api.cloudinary.com/v1_1/biruk-emiru/image/upload',formData).then((response)=>{

const fileName=response.data.public_id;








  Axios.post("http://localhost:3006/application/applying",
  {experiance:experiance,
 position:position,cgpa:cgpa,avaliblity:avaliblity,date:date,jobcode:jobcode
,catagory:catagory
,cv:fileName,}).then((response)=>{
 console.log(response);
       });
})


}

 
     



    return (
        <>
         <Inputs>
         <p>job code:  </p>   
    <h3> {show.username}</h3>
           
        <h1>FILL AL THE REQUIRMENTS CAREFULLY!</h1>
        <Label>JOB POSITION YOU ARE APPLYING FOR:</Label> 
          <Forminput type="varchar" placeholder=" e.g hardware designer" onChange={(event)=>{setJobcode(event.target.value);}}/> 
          <Label>JOB POSITION YOU ARE APPLYING FOR:</Label> 
          <Forminput type="varchar" placeholder=" e.g hardware designer" onChange={(event)=>{setPosition(event.target.value);}}/> 
          <Label>CGPA:</Label> 
          <Forminput type="number" placeholder="e,g 3.2"onChange={(event)=>{setCgpa(event.target.value); }}/> 
          <Label>YOUR EXPERIANCE(YEARS):</Label> 
          <Forminput type="number" placeholder="e.g 3"onChange={(event)=>{setExperiance(event.target.value);}}/> 
          <Label>CV SUBMITION DATE(G.C):</Label> 
          <Forminput type="date" placeholder="the date you submited this form"onChange={(event)=>{setDate(event.target.value);}}/> 
          <Label>AVALIBLITY :</Label> 
          <Select value={avaliblity}placeholder="e,g per company scale"onChange={e=>setAvaliblity(e.target.value) }> 
         <option>Immidiately</option>
         <option>In weeks</option>
         <option>In MONTHS</option>
         <option>In A Year</option>
         <option>I don't know</option>
        
         
         </Select>
          <Label>TYPE OF CV:</Label> 
          
          <Label>JOB CATAGORY:</Label> 
          <Select value={catagory}placeholder="e,g per company scale"onChange={e=>setCatagory(e.target.value) }> 
         <option> engineering and manfucturing</option>
         <option>accounting and managment</option>
         <option>business and economics</option>
         <option>agricutural sceince</option>
         <option>sport and tradition</option>
         <option>medicene and pharmacy</option>
         <option> it and software</option>
         <option>administration and politics</option>
         <option>society and community</option>
         <option>hotel and tourism</option>
         <option>media and journalisem</option>
         <option>lingustics</option>
         <option> applied sceince</option>
         <option>teaching and education</option>
         <option>secretary</option>
         <option>psycology</option>
         <option>land and geology</option>
         <option>history and arciology</option>
         <option> fashion and design</option>
         <option>art and musics</option>
         <option>video and graphics</option>
         <option>sells and trade</option>
         <option>communication and networking</option>
         <option>road and transport</option>
         <option>physical work</option>
         <option> arcuticture</option>
         <option>fooding andshefe</option>
         <option>web developer</option>
         <option>agricutural sceince</option>
         <option>sportn and tradition</option>
         <option>All Programs</option>
</Select>
             <Label>your CV</Label> 
              <Fileinput type="file"onChange={(event)=>{setCv(event.target.files);}} />  
                  <Button onClick={upload}> SUBMIT </Button>
          
           </Inputs>
          </>
    )
}

export default Application;
