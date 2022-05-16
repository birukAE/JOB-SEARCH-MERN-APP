import styled from 'styled-components'
import {Box} from '../../globalestyles';
import { FaAffiliatetheme, FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';



export const Nav = styled.div`

background: black;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items:center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  @media screen and (max-width: 600px) {
    height:150px;
  }
`;
export const NavbarContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  height: 80px;
 color: red;
 
  ${Box}
  @media screen and (max-width: 600px) {
    height:200px;
  width:100px;}
  `;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  &:hover {
    color: #adadad;}
    @media screen and (max-width: 600px) {
    font-size:20px;
  margin-bottom:80px;}
 `;
 
 export const Select = styled.select`
 color: black;

 border:none;


 text-decoration: none;
 font-size: 1rem;




 `;
  


export const NavIcon = styled(FaAffiliatetheme)`
  margin-right: 0.5rem;
  @media screen and (max-width: 600px) {
    display:none}
    @media screen and (max-width: 900px) {
  display:none;}

`;
export const MobileIcon = styled.div`
  

    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  color:white;
  &:hover {
    color: #adadad;}
`;
export const NavMenu = styled.ul`

  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width:600px) {
    padding-right: 25px;
    
    
    margin-right:5px;}
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;


`;


    

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
&:hover {
    color:  darkgoldenrod;}
    @media screen and (max-width:600px) {
    padding-right: 0.5px;
    justify-self: flex-start;
    margin-top:50px;
    margin-right:5px;
    padding-left: 0.5px;
    padding: 3px;
  font-size:18;}
    @media screen and (max-width: 900px) {
      font-size:15px;}




  
  
`;



export const Navtool = styled.ul`
  display: flex;
  
  @media screen and (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100vh;
    position: absolute;
    top: 80px;
    right: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: darkslategray;
    align-items :center;
   
  }
  @media screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100vh;
    position: absolute;
    top: 80px;
    right: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: darkslategray;
    align-items :center;
  }
`;

export const Navkit = styled.li`
  display: felx;
  align-items:center;
  
  @media screen and (max-width: 1500px) {
    
    align-items:center;
    justify-content:center;
     
  }
`;


export const Navlog = styled(Link)`
  text-decoration: none;
  display: flex;
font-size: 20px;
text-align: center;
  @media screen and (max-width: 1500px) {
   align-items:center;
    padding: 2rem;
    width: 200px;
    color:white;
justify-content: center;
    &:hover {
     color:darkgoldenrod ;
      transition: all 0.3s ease;
    }
  }
`;
export const Search = styled.div`
 
position: relative;
width:360px;
height:48px;
border-radius: 20px;
background-color: none;
display: flex;
justify-content: space-between;
align-items:center;
padding-left: 315px;
transition: all 0.3s ease;

@media screen and (max-width: 600px) {
position: absolute;
width:300px;
height:35px;
border-radius: 20px; 
margin-top: 10px;
padding-left: 250px;
display: flex;
margin-left:15px;
}

`;
export const Searchinput= styled.input`
padding-left: 48px;
border: none;
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
background-color: white;
color:black;
outline: none;
font-size: 25px;
border: 1px solid transparent;
&:focus{
  border-color: rgba(0,0,0,0.3);
}
@media screen and (max-width: 600px) {
  width:300px;
  position: absolute;
  padding-left:10px;
  }

`;
export const Searchicon= styled.button`
position: absolute;

border:none;
z-index: 1;
cursor: pointer;
background:none ;
color:black;
&:hover{
  color:burlywood;
}
border: 2px solid black;
&:focus{
  border-color: rgba(0,0,0,0.3);
}
@media screen and (max-width: 600px) {
border:none;
position: absolute;
 margin-top:3px;
}
`;
export const Searchresult= styled.div`
margin-top:10px;
margin-left:250px;
margin-right:100px;
width:300px;
height: 300px;
background-color:black ;
overflow-y: auto;
position: absolute;
`;
export const Searchitems= styled.p`

width:100%;
height: 50px;
color:black ;
display:flex;
align-items: center;
margin-left: 10px;

`;
export const NavItemBtn = styled.li`
  @media screen and (max-width: 600px) {
  padding-right:300px;
  position:absolute;
  margin-bottom: 100px;
  }
  @media screen and (max-width: 900px) {
  margin-right:60px;}



`;



export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  @media screen and (max-width: 600px) {
  
  position: absolute;
  padding-right:100px;}
  @media screen and (max-width: 900px) {
  margin-right:55px;}


`;
