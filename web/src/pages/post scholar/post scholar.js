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
height:550px;
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

  
function SCHOLAR() {
const[scholarlist,setScholarlist]=useState([])
const[newdeadline,setNewdeadline]=useState("")

let history=useHistory();
useEffect(() => {


  Axios.get("http://localhost:3006/scholar/getscholarship").then((response)=>{
 setScholarlist(response.data);
       })}, []);

    const deletscholar=(id)=>{
Axios.delete(`http://localhost:3006/scholar/delete/${id}`).then((response)=>{
  setScholarlist(scholarlist.filter((val)=>{
    return val.id!=id;
  }))
})


    }
    
const updatedeadline=(id)=>{
  Axios.put("http://localhost:3006/scholar/update",
  {deadline:newdeadline,id:id}
  ).then((response)=>{
    setScholarlist(scholarlist.map((val)=>{
      return val.id==id?
      {id:val.id,sname:val.sname,country:val.country,program:val.program,sfor:val.sfor,
      requirment:val.requirment,apply:val.apply,deadline:newdeadline,}:val;
    })
    
    ) ;     
    }
  );

  };
    return (
     
    
         <Inputs> 
      
        <h1>WELCOME TO SCHOLARSHIP POSTING PAGE</h1>
        
        
         
            {scholarlist.map((val,key)=> { 
              return( 
              

           <Get>       
     <Label>University/College Name:</Label>
             <h5>{val.sname}</h5> 
           
      
            <Label>Programs: </Label> 
             <h5> {val.program}</h5>
           <Label>Country:</Label> 
          <h5>{val.country}</h5>
          <Label>Scholarship For:</Label> 
          <h5>{val.sfor}</h5>
          <Label>Fields of Studies:</Label> 
          <h5>{val.field}</h5> 
          <Label>deadline:</Label> 
          <h5>{val.deadline}</h5>
          
          <Label>Requirments:</Label> 
          <h5>{val.requirment}</h5>
          <Label>How to Apply:</Label> 
          <h5>{val.apply}</h5>
         
          <input type="text" onChange={(e)=>{setNewdeadline(e.target.value);}}/>
          <button onClick={()=>{updatedeadline(val.id);}}>{""}update</button>
          <button onClick={()=>{deletscholar(val.id)}}>delet</button>
          <button key={key} onClick={()=>{history.push(`/shows/${val.id}`);}}>showmore</button>
            </Get>
         
           
          ) ; })} 

          
           </Inputs>
          
    )
}

export default SCHOLAR;
