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

const PAYER_REGEX = /^[a-zA-Z][a-zA-Z- ]{6,23}$/;
const TRANSACTION_REGEX =/^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const BANK_REGEX = /^[a-zA-Z][a-zA-Z-]{1,23}$/;
const PACK_REGEX =/^[a-zA-Z0-9 ]{1,12}$/;
const DATE_REGEX =/^[a-zA-Z0-9][0-9_-]{1,12}$/;


function  Updatepackmem() {
  const userRef = useRef();
  const errRef = useRef();

  
  const[payer,setPayer]=useState("");
  const [validPayer, setValidpayer] = useState(false);
  const [payerFocus, setPayerFocus] = useState(false);

  const[pack,setPack]=useState("");
  const [validPack, setValidpack] = useState(false);
  const [packFocus, setPackFocus] = useState(false);

  const [bank,setBank]=useState("");
  const [validBank, setValidbank] = useState(false);
  const [bankFocus, setBankFocus] = useState(false);

  const[transaction,setTransaction]=useState("");
  const [validTransaction, setValidtransaction] = useState(false);
  const [transactionFocus, setTransactionFocus] = useState(false);

  const[date,setDate]=useState("");
  const [validDate, setValiddate] = useState(false);
  const [dateFocus, setDateFocus] = useState(false);

  const[updatepackmem,setUpdatepackmem]=useState([])
 
  

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
    
    

  
useEffect(() => {
  setValidpayer(PAYER_REGEX.test(payer));
}, [payer])
useEffect(() => {
setValidtransaction(TRANSACTION_REGEX.test(transaction));
}, [transaction])

useEffect(() => {
  setValidbank(BANK_REGEX.test(bank));
}, [bank])

useEffect(() => {
  setValidpack(PACK_REGEX.test(pack));
}, [pack])

useEffect(() => {

  setValiddate(DATE_REGEX.test(date));
  }, [date])

 
  useEffect(() => {

      setErrMsg('');
  }, [transaction,date ,payer,pack,bank])
 







    const Submit =()=>{

      


Axios.post("http://localhost:3006/memberregs/mempost",
 {bank:bank,
pack:pack,date:date,payer:payer,transaction:transaction})
.then((response)=>{
  console.log(response);
});
}



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
   
   <Label1>PAYMENT METHODES</Label1>
   
   <label htmlFor="pack">
   pack:
   <GiCrystalBars  className={validPack ? "valid" : "hide"} />
   <FaTimes className={validPack || !pack ? "hide" : "invalid"} />
</label>
  <IconContext.Provider value={{ color: '#a9b3c1', size: 20 }}>
    <PricingSection>
      <PricingWrapper>
        <PricingHeading>Our packages</PricingHeading>
        <PricingContainer>
        <Pricing1>
          <PricingCard >
            <PricingCardInfo>
      <PricingCardIcon>
  
        <INPUT 
        id="pack"
        
        required
        aria-invalid={validPack ? "false" : "true"}
        aria-describedby="packnote"
        onFocus={() => setPackFocus(true)}
        onBlur={() => setPackFocus(false)} 
        type="radio" 
        name="package" value="1 day" onChange={(event)=>{setPack(event.target.value);}}/>

        <p id="packnote" className={packFocus && !validPack ? "instructions" : "offscreen"}>
        <GiCrystalBars  />
        8 to 24 characters.<br />
        Must include uppercase and lowercase letters, a number and a special character.<br />
        Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
    </p>         
              </PricingCardIcon>
              
              <PricingCardPlan>Starter Pack</PricingCardPlan>
              <PricingCardCost>$99.99</PricingCardCost>
              <PricingCardLength>per month</PricingCardLength>
              <PricingCardFeatures>
                <PricingCardFeature>100 New Users</PricingCardFeature>
                <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                <PricingCardFeature>Retargeting analytics</PricingCardFeature>
              </PricingCardFeatures>
             
            </PricingCardInfo>
           
        </PricingCard>
          <PricingCard >
            <PricingCardInfo>
              <PricingCardIcon>
              <INPUT 
              id="pack"
            
              required
              aria-invalid={validPack ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setPackFocus(true)}
              onBlur={() => setPackFocus(false)}  
              type="radio" 
              name="package" value="2 months" onChange={(event)=>{setPack(event.target.value);}}/> 
              <p id="packnote" className={packFocus && !validPack ? "instructions" : "offscreen"}>
              <GiCrystalBars  />
              8 to 24 characters.<br />
              Must include uppercase and lowercase letters, a number and a special character.<br />
              Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
          </p>    
              </PricingCardIcon>
              <PricingCardPlan>Gold Rush</PricingCardPlan>
              <PricingCardCost>$299.99</PricingCardCost>
              <PricingCardLength>per month</PricingCardLength>
              <PricingCardFeatures>
                <PricingCardFeature>1000 New Users</PricingCardFeature>
                <PricingCardFeature>$50,000 Budget</PricingCardFeature>
                <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
              </PricingCardFeatures>
              
            </PricingCardInfo>
          </PricingCard>  
          </Pricing1>
          <Pricing2>
          <PricingCard >
          
            <PricingCardInfo>
            
            <PricingCardIcon>
            <INPUT

             type="radio" 
            name="package" value="4 months" onChange={(event)=>{setPack(event.target.value);}}/>
           
              </PricingCardIcon>
              <PricingCardPlan>Diamond Kings</PricingCardPlan>
              <PricingCardCost>$999.99</PricingCardCost>
              <PricingCardLength>per month</PricingCardLength>
              <PricingCardFeatures>
                <PricingCardFeature>Unlimited Users</PricingCardFeature>
                <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                <PricingCardFeature>24/7 Support</PricingCardFeature>
              </PricingCardFeatures>
              
            </PricingCardInfo>
            </PricingCard>
           <PricingCard>
             <PricingCardInfo>
              <PricingCardIcon>
              <INPUT 
           
              type="radio" 
              name="package" value="6 months" onChange={(event)=>{setPack(event.target.value);}}/>
              
              </PricingCardIcon>
              <PricingCardPlan>Diamond Kings</PricingCardPlan>
              <PricingCardCost>$999.99</PricingCardCost>
              <PricingCardLength>per month</PricingCardLength>
              <PricingCardFeatures>
                <PricingCardFeature>Unlimited Users</PricingCardFeature>
                <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                <PricingCardFeature>24/7 Support</PricingCardFeature>
              </PricingCardFeatures>
             
            </PricingCardInfo>
          </PricingCard>
          </Pricing2>
        </PricingContainer>
      </PricingWrapper>
    </PricingSection>
  </IconContext.Provider>

<label htmlFor="bank">
   pack:
   <GiCrystalBars  className={validBank ? "valid" : "hide"} />
   <FaTimes className={validBank || !bank ? "hide" : "invalid"} />
</label> 
  <Label> select your bank</Label><Banks><Bank>
  

  <INPUT 
id="bank"
onChange={(e) => setBank(e.target.value)}

required
aria-invalid={validBank ? "false" : "true"}
aria-describedby="pwdnote"
onFocus={() => setBankFocus(true)}
onBlur={() => setBankFocus(false)}
  type="radio" 
  name="bank" 
  value="CBE" 
  />
  <BANK><p>BIRUK EMIRU</p><p>BIRUK EMIRU</p><p>1000146859405</p></BANK></Bank>

  <Bank>
  <INPUT type="radio" name="bank" value="ABYSINYA" onChange={(event)=>{setBank(event.target.value);}}/>
  <BANK><p>BIRUK EMIRU</p><p>BIRUK EMIRU</p><p>1000146859405</p></BANK></Bank>
  <Bank>
  <INPUT type="radio" name="bank" value="AWASH" onChange={(event)=>{setBank(event.target.value);}}/>
  <BANK><p>BIRUK EMIRU</p><p>BIRUK EMIRU</p><p>1000146859405</p></BANK></Bank>
  
  <Bank> 
      <INPUT type="radio" name="bank" value="ZEMEN" onChange={(event)=>{setBank(event.target.value);}}/>
  <BANK>
  <p>BIRUK EMIRU</p>
  <p>BIRUK EMIRU</p>
  <p>1000146859405</p>
  </BANK>
  </Bank>
 
  <Bank> 
      <INPUT type="radio" name="bank" value="ambessa" onChange={(event)=>{setBank(event.target.value);}}/>
  <BANK><p>BIRUK EMIRU</p><p>BIRUK EMIRU</p><p>1000146859405</p></BANK></Bank> </Banks>

  <label htmlFor="payer">
  payer:
  <GiCrystalBars  className={validPayer ? "valid" : "hide"} />
  <FaTimes className={validPayer || !payer ? "hide" : "invalid"} />
</label> 
    <Input 
    type="text" 
    id="payer"
    value={payer}
    required
    aria-invalid={validPayer ? "false" : "true"}
    aria-describedby="payernote"
    onFocus={() => setPayerFocus(true)}
    onBlur={() => setPayerFocus(false)} 
    onChange={(event)=>{setPayer(event.target.value);}}/>

    <p id="payernote" className={payerFocus && !validPayer ? "instructions" : "offscreen"}>
    <GiCrystalBars />
    8 to 24 characters.<br />
    Must include uppercase and lowercase letters, a number and a special character.<br />
    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p>

    <label htmlFor="transaction">
    transaction:
    <GiCrystalBars  className={validTransaction ? "valid" : "hide"} />
    <FaTimes className={validTransaction || !transaction ? "hide" : "invalid"} />
</label>
    <Input 
    id="transaction"
    value={transaction}
    required
    aria-invalid={validTransaction ? "false" : "true"}
    aria-describedby="transactionnote"
    onFocus={() => setTransactionFocus(true)}
    onBlur={() => setTransactionFocus(false)} 
    type="varchar" 
    onChange={(event)=>{setTransaction(event.target.value);}}/>

    <p id="transactionnote" className={transactionFocus && !validTransaction ? "instructions" : "offscreen"}>
    <GiCrystalBars />
    8 to 24 characters.<br />
    Must include uppercase and lowercase letters, a number and a special character.<br />
    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p>

    <label htmlFor="date">
    date
    <GiCrystalBars  className={validDate ? "valid" : "hide"} />
    <FaTimes className={validDate || !date ? "hide" : "invalid"} />
</label>                         
  <Input 
  id="date"
  value={date}
  required="please fill"
  aria-invalid={validDate ? "false" : "true"}
  aria-describedby="datenote"
  onFocus={() => setDateFocus(true)}
  onBlur={() => setDateFocus(false)}  
  type="date" placeholder="e.g 23/5/2021 E.C"
  onChange={(event)=>{setDate(event.target.value);}}/> 
  <p id="datenote" className={dateFocus && !validDate ? "instructions" : "offscreen"}>
  <GiCrystalBars />
  8 to 24 characters.<br />
  Must include uppercase and lowercase letters, a number and a special character.<br />
  Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
</p>

 
    <Button disabled={!validBank || !validPayer|| !validTransaction ||!validDate ? true : false}onClick={Submit}>submit</Button>
    </Form>
  
    </Section>
)
}

</>
)}

export default Updatepackmem;
