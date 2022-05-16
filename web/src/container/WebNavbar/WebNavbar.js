import React, {useState,useEffect} from 'react';
import {Nav, NavbarContainer,NavLogo,NavIcon,MobileIcon,NavMenu,
NavItem,NavLinks,Navtool,Navkit,Searchresult,Searchitems,Navlog,Search,Searchicon,Searchinput,NavBtnLink,NavItemBtn} from './WebNavbarcss';
import { FaBars, FaTimes } from 'react-icons/fa';
import {AiOutlineSearch } from 'react-icons/ai';
import {Button } from '../../globalestyles';
import {Marginer}  from "../../components/marginer";
import { Select } from './WebNavbarcss';
import { useHistory } from 'react-router';
import {NavDropdown} from 'react-bootstrap'
import'bootstrap/dist/css/bootstrap.min.css'





const TopContainer =({data})=> {
  
const username=localStorage.getItem('username');
console.warn(username);

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);
const [button, setButton] = useState(true);
const [Submited,setSubmited]=useState(false);
const[LoggedAdmin,setLoggedAdmin]=useState(false);
const[LoggedMe,setLoggedMe]=useState(false);

const[filtereddata,setFiltereddata]=useState([]);
const[typing,setTyping]=useState("")
const handlefilter =  (event)=>{
  const Searchword=event.target.value;
  setTyping(Searchword)
  const newFilter=data.filter((value)=>{
    return value.name.toLowerCase().
    includes(Searchword.toLowerCase())
 
});
if(Searchword===""){
setFiltereddata([])
}else{
setFiltereddata(newFilter);
}
};
const clearsearch=()=>{
  setFiltereddata([])
  setTyping("")
};
useEffect(()=>{
   setSubmited(localStorage.getItem("Submited")); 
},localStorage.getItem("Submited"));

useEffect(()=>{
  setLoggedAdmin(localStorage.getItem("LoggedAdmin"))
},localStorage.getItem("LoggedAdmin"));

  let history=useHistory();
const logout=()=>{
  
 localStorage.clear();
 alert("successfully loged out")
history.push('/programs');
}

useEffect(()=>{
  setLoggedMe(localStorage.getItem("LoggedMe"))
},localStorage.getItem("LoggedMe"));




const showButton = () => {
  if (window.innerWidth <= 960) {
    setButton(false);
  } else {
    setButton(true);
  }
};

useEffect(() => {
  showButton();
}, []);

window.addEventListener('resize', showButton);

  
    return( <>
    <Nav><NavbarContainer><NavLogo to ='/' onClick={closeMobileMenu}>የኛ ስራ
    
    <Marginer direction="horizontal" margin="0.5em" />
    <NavIcon /></NavLogo>
    <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <Search >
              <Searchicon>
              { filtereddata.length===0? <AiOutlineSearch size={25}/>:<FaTimes size={20} onClick={clearsearch} />}

             </Searchicon>
                <Searchinput placeholder ='Search here' value={typing} onChange={handlefilter}/> 
                
             </Search>
             
            <NavMenu  >
              <NavItem>
                <NavLinks to='/'onClick={closeMobileMenu} >
                  Home
                </NavLinks>
              </NavItem>
              {LoggedAdmin ?(
                <>
              <NavItem>
                <NavLinks to='/jobs'onClick={closeMobileMenu} >
                 Edit Jobs
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/scholar' onClick={closeMobileMenu}>
                Edit Scholarships
                </NavLinks>
              </NavItem>
              
               <NavItem>
                <NavLinks to='/scholar' onClick={closeMobileMenu}>
                 Members
                </NavLinks>
              </NavItem>
              
              <NavDropdown title={username}>
           
              <NavDropdown.Item onClick={logout} >logout</NavDropdown.Item>      
              </NavDropdown> 
            
              
              </>
              
              ):(
                   <>
               <NavItem>
                <NavLinks to='/jobs'onClick={closeMobileMenu} >
                  Jobs
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/scholar' onClick={closeMobileMenu}>
                 Scholarships
                </NavLinks>
              </NavItem>
              

              {Submited ? (
                <>
                
              <NavItem>
                <NavLinks to='/resumes' onClick={closeMobileMenu}>
                 Resumes
                </NavLinks>
              </NavItem> 
              
              
              
             
              <NavDropdown title={username} bsperfix="dropmenu">
           
           <NavDropdown.Item onClick={logout} >logout</NavDropdown.Item> 
           <NavDropdown.Item  href='/account'>profile</NavDropdown.Item>     
              <NavDropdown.Item href='/update' >update package</NavDropdown.Item>      
           </NavDropdown> 
         
           
                 
              </>

              
              
                
                 ): (
                   <>
                  
               


 
              
            
                    { LoggedMe ?(
                      <>
                    <NavItem>
                      <NavLinks to='/apply'onClick={closeMobileMenu} >
                       apply 
                      </NavLinks>
                    </NavItem>
                  
                    <NavDropdown  title={username} bsperfix="dropmenu">
           
              <NavDropdown.Item onClick={logout} >logout</NavDropdown.Item>  
              <NavDropdown.Item  href='/profile'>profile</NavDropdown.Item>     
              <NavDropdown.Item href='/updatepackmem' >update package</NavDropdown.Item> 
              </NavDropdown> 
            
              
              
                    </>
                    
                    ):(
                         <>


<NavItem>
                  <NavLinks to='/memebership' onClick={closeMobileMenu}>
                    Membership
                  </NavLinks>
                </NavItem>
                     
                     <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/log in'onClick={closeMobileMenu}>
                    <Button primary>SIGN-UP </Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'onClick={closeMobileMenu}>
                    <Button fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
                     
                      
               
              </>
              )}
              
              </>
              
              )}       
                    
      </>

                 )};
              
             
              </NavMenu>
           
            <Navtool onClick={handleClick} click={click} >
           
             
              <Navkit>
                <Navlog to='/scholarpost' >
                  POST SCHOLARSHIPS
                </Navlog>
              </Navkit>
              
              {Submited ? (
                <>
              <Navkit>
                <Navlog to='/loginpost' >
                  POST JOB
                </Navlog>
              </Navkit>
              </>):(<>
              <Navkit>
                <Navlog to='/post' >
                  POST JOBS
                </Navlog>
              </Navkit>
              <Navkit>
              <Navlog to='/admin' >
                ADMIN
              </Navlog>
            </Navkit>
            </>
            
              )}<Navkit>
              <Navlog to='/About us'>
                ABOUT US
              </Navlog>
            </Navkit>
            <Navkit>
              <Navlog to='/Contact Us' >
                Contact Us
              </Navlog>
            </Navkit>

            <Navkit>
              <Navlog to='/Your Account' >
                Help
              </Navlog>
              </Navkit>
              
            </Navtool>

            </NavbarContainer>
    </Nav> { filtereddata.length!=0 && (
    <Searchresult> {filtereddata.slice(0,15).map((value,key)=>{
                  return (<Searchitems><a href={value.version}>
                   <p>{value.name}</p></a></Searchitems>
                ); })}   </Searchresult> )} 
       </>
       ); 
       
    
};
export default TopContainer;


