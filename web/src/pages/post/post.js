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



function Post() { const [cname,setCname]=useState("");
const [username,setUsername]=useState("");
const [jname,setJname]=useState("");
const [location,setLocation]=useState("");
const [salary,setSalary]=useState("");
const [candidate,setCandidate]=useState(0);
const [deadline,setDeadline]=useState("");
const [type,setType]=useState("");
const [catagory,setCatagory]=useState("");
const [responsiblity,setResponsiblity]=useState("");
const [requirment,setRequirment]=useState("");
const [apply,setApply]=useState("");
const [link,setLink]=useState("");
const [image,setImage]=useState([]);
const upload =()=>{

const formData=new FormData()
formData.append("file",image[0]);
formData.append("upload_preset","bkbkbkbk");
Axios.post('https://api.cloudinary.com/v1_1/biruk-emiru/image/upload/w_100,h_100,c_fit',formData).then((response)=>{

const fileName=response.data.public_id;








  Axios.post("http://localhost:3006/upload/uploading",
  {cname:cname,username:username,
 jname:jname,location:location,salary:salary,candidate:candidate,deadline:deadline
,type:type,catagory:catagory,responsiblity:responsiblity,requirment:requirment,apply:apply
,link:link,image:fileName,}).then((response)=>{
 console.log(response);
       });
})


}



    return (
        <>
         <Inputs>
        <h1>WELCOME TO JOBS POSTING PAGE</h1>
        <Label>Username:</Label> 
          <Forminput type="text" placeholder="carefully write your username" onChange={(event)=>{setUsername(event.target.value);}} />      
               
          <Label>COMPANY NAME:</Label> 
          <Forminput type="text" placeholder="e.g commercial bank of ethiopia" onChange={(event)=>{setCname(event.target.value);}} /> 
          <Label>JOB NAME:</Label> 
          <Forminput type="text" placeholder="e.g senior/junior" onChange={(event)=>{setJname(event.target.value);}}/> 
          <Label>JOB LOCATION:</Label> 
          <Forminput type="varchar" placeholder=" e.g Adiss abeba" onChange={(event)=>{setLocation(event.target.value);}}/> 
          <Label>SALARY:</Label> 
          <Forminput type="varchar" placeholder="e,g per company scale"onChange={(event)=>{setSalary(event.target.value); }}/> 
          <Label>CANDIDATE DEMAND:</Label> 
          <Forminput type="varchar"placeholder="e.g 10 personels" onChange={(event)=>{setCandidate(event.target.value);}}/> 
          <Label>DEADLINE DATE:</Label> 
          <Forminput type="date" placeholder="e.g 23/5/2021 E.C"onChange={(event)=>{setDeadline(event.target.value);}}/> 
          <Label>JOB TYPE:</Label> 
          <Select value={type}placeholder="e,g per company scale"onChange={e=>setType(e.target.value) }> 
         <option> contract</option>
         <option>long-term</option>
         <option>NGO</option>
         <option>freelacing</option>
         
         </Select>
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
         <option>psicology</option>
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
          <Label>JOB RESPONSIBLITIES:</Label> 
          <Ftextarea   placeholder="e.g: the candidate should be resposibele to administrate computers in the office and he/she shoulde be abel to speak english language perfectly"onChange={(event)=>{setResponsiblity(event.target.value);}}/> 
          <Label>JOB REQUIRMENTS:</Label> 
          <Ftextarea placeholder="e.g: the applicate required to attach 8th grade and university temporary certeficates"onChange={(event)=>{setRequirment(event.target.value); }}/> 
          <Label>HOW TO APPLAY:</Label> 
          <Ftextarea placeholder="e.g: anyone who fullfile all the requirments can apply at our office in adiss abeba or in the link bellow" onChange={(event)=>{setApply(event.target.value);}}/> 
          <Label>APPLYING LINK:</Label> 
          <Forminput type="link" placeholder="e.g www.cbe.vaccancy.com"onChange={(event)=>{setLink(event.target.value);}}/>
             <Label>COMPANY LOGO:</Label> 
              <Fileinput type="file"onChange={(event)=>{setImage(event.target.files);}} />  
                  <Button onClick={upload}> SUBMIT JOB</Button>
          
           </Inputs>
          </>
    )
}

export default Post;
