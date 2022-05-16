import React from "react";
import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import {useState,useEffect,useRef} from "react";
import Axios from 'axios' ;
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import "../registration/company.css"
import { useHistory } from "react-router-dom";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from '../package/package.elements';



const  Section=styled.div`
align-items: center;
color: black;
background-color: goldenrod ;
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
justify-content: center;

`;
const Form=styled.div`
display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-grow: 1;
    padding-bottom: 1rem;
    align-items: center;
`;
const Container=styled.div`
align-items: center;
color: black;
background-color: goldenrod ;
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
width:45%;
margin-top:5px;
height: 30%;
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
const Label=styled.div`
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size:15px;
color: black;
margin-top:5px;
`;
const Label1=styled.div`
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size:20px;

margin-top: 30px;
color:blue;
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
const BANK= styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
const Bank= styled.div`
display: flex;
flex-direction:column;
align-items: center;
margin:5px;
padding-top: 1px;
width:160px;
height:150px;
justify-content: center;
background-color: gray;
`;
const Banks= styled.div`
display: flex;
padding: 1px;
align-items: center;
`;
const Pricing1= styled.div`
display: flex;
align-items: center;
`;
const Pricing2= styled.div`
display: flex;
align-items: center;
flex-direction: row;
`;
const INPUT=styled.input`
width:20px;
height: 20px;
&:hover{
  cursor:pointer;
}
`;
const USER_REGEX=/^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX =/^[a-zA-Z0-9-_@!%$#]{6,23}$/;
const PHONE_REGEX=/^[0-9]{10}$/;
const CVSTA_REGEX=/^[a-zA-Z ]{3,25}$/;
const EMAIL_REGEX =/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-.]+(?:\. [a-zA-Z0-9-]+)*$/;
const FULLNAME_REGEX =/^[a-zA-Z][a-zA-Z0-9 ]{3,23}$/;
const PAYER_REGEX = /^[a-zA-Z][a-zA-Z- ]{6,23}$/;
const TRANSACTION_REGEX =/^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const BANK_REGEX = /^[a-zA-Z][a-zA-Z-]{1,23}$/;
const PACK_REGEX =/^[a-zA-Z0-9 ]{1,12}$/;
const DATE_REGEX =/^[a-zA-Z0-9][0-9_-]{1,12}$/;
const CATAGORY_REGEX=/^[a-zA-Z ]{3,25}$/;

function Updatemem() {
  const userRef = useRef();
  const errRef = useRef();

  const[username,setUsername]=useState("");
  const [validName, setValidName] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);



  const[password,setPassword]=useState("");
  const [validpassword, setValidpassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const[comfirm,setComfirm]=useState("");
  const [validComfirm, setValidcomfirm] = useState(false);
  const [comfirmFocus, setComfirmFocus] = useState(false);

  const[email,setEmail]=useState("");
  const [validEmail, setValidemail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const[cvsta,setCvSta]=useState("");
  const [validcvsta, setValidcvsta] = useState(false);
  const [cvstaFocus, setCvstaFocus] = useState(false);
  const [phone,setPhone]=useState(0);

  const [validPhone, setValidphone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [other,setOther]=useState("");
  

  

  const [fullname,setFullname]=useState("");
  const [validFullname, setValidfullname] = useState(false);
  const [fullnameFocus, setFullnameFocus] = useState(false);

  const[upcv,setUpcv]=useState([]);
  
  const [tempo,setTempo]=useState([]);
  

  const [catagory,setCatagory]=useState("");
  const [validcatagory, setValidcatagory] = useState(false);
  const [catagoryFocus, setCatagoryFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const[updatemember,setUpdatemember]=useState([]);
    

 
  useEffect(() => {
      setValidName(USER_REGEX.test(username));
  }, [username])

  useEffect(() => {
      setValidpassword(PWD_REGEX.test(password));
      setValidcomfirm(password === comfirm);
  }, [password, comfirm])

  useEffect(() => {
    setValidphone(PHONE_REGEX.test(phone));
}, [phone])

useEffect(() => {
  setValidfullname(FULLNAME_REGEX.test(fullname));
}, [fullname])

useEffect(() => {
  setValidemail(EMAIL_REGEX.test(email));
}, [email])
useEffect(() => {
setValidcvsta(CVSTA_REGEX.test(cvsta));
}, [cvsta])

  useEffect(() => {

    setValidcatagory(CATAGORY_REGEX.test(catagory));
    }, [catagory])
 useEffect(() => {

      setErrMsg('');
  }, [username, password, comfirm,phone,,fullname,other,email,upcv,tempo,catagory])
 
 






    const Submit =()=>{

      const formData=new FormData()
      formData.append("file",other[0]); 
      formData.append("file",upcv[0]);
      formData.append("file",tempo[0]);
      
      formData.append("upload_preset","bkbkbkbk");

      Axios.post('https://api.cloudinary.com/v1_1/biruk-emiru/image/upload/',formData).then((response)=>{
      
      const fileName=response.data.public_id;
      const fileName1=response.data.public_id;
      const fileNames=response.data.public_id;




Axios.post("http://localhost:3006/memberregs/mempost",
 {username:username,
password:password,email:email,fullname:fullname,upcv:fileName,cvsta:cvsta,tempo:fileName1,phone:phone,other:fileNames,comfirm:comfirm,catagory:catagory})
.then((response)=>{
  console.log(response);
});
})

}



    
    useEffect(()=>{
     Axios.get(`http://localhost:3006/memberregs/memuser/${localStorage.getItem("username")}`).then((response)=>{
        
        setUpdatemember(response.data);
       })}, []);
return (
  updatemember.map((val,key)=> { 
    return( 
    
  

  
  <>
  
  {success ? (
         <Section>
                  <h1>Success!</h1>
                  <p>
                      <a href="#">Sign In</a>
                  </p>
                  </Section>
          ) : (
              <Section>
                  <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                  <h1>Register</h1>
                  <Form>
  <Label1>REGISTRATION INFO</Label1>
  <label htmlFor="username">
  Username:
 <span className={validName ? "valid" : "hide"} > <GiCrystalBars /></span>
  <span className={validName || !username ? "hide" : "invalid"} ><FaTimes /></span>
</label>
    <Input 
    type="text" 
    defaultValue={val.username}
    id="username"
    ref={userRef}
    autoComplete="off"
    onChange={(event)=>setUsername(event.target.value)}
    required
    aria-invalid={validName ? "false" : "true"}
    aria-describedby="uidnote"
    onFocus={() => setUsernameFocus(true)}
    onBlur={() => setUsernameFocus(false)}  
    />
<p id="uidnote" className={usernameFocus && username && !validName ? "instructions" : "offscreen"} >
    <GiCrystalBars />
    4 to 24 characters.<br />
     Must begin with a letter.<br />
      Letters, numbers, underscores, hyphens allowed.
                       </p>    


    <label htmlFor="email">
    email:
    < GiCrystalBars  className={validEmail ? "valid" : "hide"} />
    <FaTimes className={validEmail || !email? "hide" : "invalid"} />
</label>
    <Input 
    type="email" 
    id="email"
    
    defaultValue={val.email}
    required
    aria-invalid={validEmail? "false" : "true"}
    aria-describedby="emailnote"
    onFocus={() => setEmailFocus(true)}
    onBlur={() => setEmailFocus(false)} 
    onChange={(event)=>{setEmail(event.target.value);}}  />
    <p id="emailnote" className={emailFocus && !validEmail ? "instructions" : "offscreen"}>
    <GiCrystalBars  />
    8 to 24 characters.<br />
    Must include uppercase and lowercase letters, a number and a special character.<br />
    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">.</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p>
    <label htmlFor="password">
    password:
    < GiCrystalBars className={validpassword ? "valid" : "hide"} />
    <FaTimes className={validpassword || !password ? "hide" : "invalid"} />
</label>
    <Input 
    type="password"
    id="password"

    defaultValue={val.password}
    required
    aria-invalid={validpassword ? "false" : "true"}
    aria-describedby="pwdnote"
    onFocus={() => setPasswordFocus(true)}
    onBlur={() => setPasswordFocus(false)} 
     onChange={(event)=>{setPassword(event.target.value);}}  />
     <p id="pwdnote" className={passwordFocus && !validpassword ? "instructions" : "offscreen"}>
     <GiCrystalBars />
     8 to 24 characters.<br />
     Must include uppercase and lowercase letters, a number and a special character.<br />
     Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
 </p>
     <label htmlFor="comfirm">
     comfrimation:
< GiCrystalBars className={validComfirm && comfirm ? "valid" : "hide"} />
<FaTimes className={validComfirm || !comfirm ? "hide" : "invalid"} />
 </label>  
    <Input 
    type="comfirm" 
    id="comfirm"
    defaultValue={val.comfirm}
    required
    aria-invalid={validComfirm ? "false" : "true"}
    aria-describedby="comnote"
    onFocus={() => setComfirmFocus(true)}
    onBlur={() => setComfirmFocus(false)}  
    onChange={(event)=>{setComfirm(event.target.value);}}  />
    <p id="comnote" className={comfirmFocus && !validComfirm ? "instructions" : "offscreen"}>
    <GiCrystalBars />
    8 to 24 characters.<br />
    Must include uppercase and lowercase letters, a number and a special character.<br />
    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p>  
    <Label1>YOUR PERSONAL DOCMENTS</Label1>
    <label htmlFor="fullname">
    fullname:
    <GiCrystalBars className={validFullname ? "valid" : "hide"} />
    <FaTimes className={validFullname || !fullname ? "hide" : "invalid"} />
</label> 
    <Input 
    id="fullname"
    defaultValue={val.fullname}
    required
    aria-invalid={validFullname ? "false" : "true"}
    aria-describedby="fullnote"
    onFocus={() => setFullnameFocus(true)}
    onBlur={() => setFullnameFocus(false)} 
    type="varchar"
     onChange={(event)=>{setFullname(event.target.value);}}/>
     <p id="fullnote" className={fullnameFocus && !validFullname ? "instructions" : "offscreen"}>
     <GiCrystalBars />
     8 to 24 characters.<br />
     Must include uppercase and lowercase letters, a number and a special character.<br />
     Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
 </p>   
    
    
    <Label>phone number</Label>
    <label htmlFor="phone">
    phone:
    <GiCrystalBars className={validPhone ? "valid" : "hide"} />
    <FaTimes className={validPhone || !phone ? "hide" : "invalid"} />
    </label>

    <Input 
    type="tel" 
    
    id="phone"
    
    autoComplete="off"
    defaultValue={val.phone}
    required
    aria-invalid={validPhone ? "false" : "true"}
    aria-describedby="phonenote"
    onFocus={() => setPhoneFocus(true)}
    onBlur={() => setPhoneFocus(false)}
     onChange={(event)=>{setPhone(event.target.value);}}/>
<p id="phonenote" className={phoneFocus && !validPhone ? "instructions" : "offscreen"}>
     <GiCrystalBars />
     8 to 24 characters.<br />
     Must include uppercase and lowercase letters, a number and a special character.<br />
     Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p>   

<label htmlFor="cvsta">
cvsta:
<GiCrystalBars className={validcvsta ? "valid" : "hide"} />
<FaTimes className={validcvsta || !cvsta ? "hide" : "invalid"} />
</label>
<Select
 defaultValue={val.cvsta}
 id="cvsta"

 required
 aria-invalid={validcvsta ? "false" : "true"}
 aria-describedby="cvstanote"
 onFocus={() => setCvstaFocus(true)}
 onBlur={() => setCvstaFocus(false)} 
placeholder="e,g per company scale"
onChange={e=>setCvSta(e.target.value) }> 
   <option value="">cv type</option>
   <option>accounting and managment</option>
   <option>business and economics</option>
   </Select>
   <p id="cvstanote" className={cvstaFocus && !validcvsta ? "instructions" : "offscreen"}>
 <GiCrystalBars />
 8 to 24 characters.<br />
 Must include uppercase and lowercase letters, a number and a special character.<br />
 Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p> 

<label htmlFor="catagory">
    catagory:
    <GiCrystalBars className={validcatagory ? "valid" : "hide"} />
<FaTimes className={validcatagory || !catagory ? "hide" : "invalid"} />
</label>
    <Select
     
     id="catagory"
     defaultValue={val.catagory}
     required
     aria-invalid={validcatagory ? "false" : "true"}
     aria-describedby="catagorynote"
     onFocus={() => setCatagoryFocus(true)}
     onBlur={() => setCatagoryFocus(false)} 
    placeholder="e,g per company scale"
    onChange={e=>setCatagory(e.target.value) }> 
       <option value="">catagory</option>
       <option>accounting and managment</option>
       <option>business and economics</option>
       </Select>
       <p id="catagorynote" className={catagoryFocus && !validcatagory ? "instructions" : "offscreen"}>
     <GiCrystalBars />
     8 to 24 characters.<br />
     Must include uppercase and lowercase letters, a number and a special character.<br />
     Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
 </p>  
 <label htmlFor="upcv">
    upload your cv:
    
</label>
    <Fileinput
     
     type="file"
     
    placeholder="e,g per company scale"
    onChange={e=>setUpcv(e.target.files) }/> 
       
       

 <label htmlFor="tempo">
    your tempo:
    
</label>
    <Fileinput
    
     type="file"
    
     required
     
     
    placeholder="e,g per company scale"
    onChange={e=>setTempo(e.target.files) }/> 
       
       

      

 <label htmlFor="other">
    additional docments:
  </label>
    <Fileinput
    type="file"
    
   
    required
    
    
     onChange={(event)=>{setOther(event.target.files);}}/>

  
 
    <Button disabled={!validName||!validpassword||!validFullname||!phone ||!validEmail||!validcatagory ||!validcvsta? true : false}onClick={Submit}>submit</Button>
    </Form>
  
    </Section>
)
}

</>
  )})
)
}
export default Updatemem;
