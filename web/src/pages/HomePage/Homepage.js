import React, { useEffect } from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './data';
import  {Middel,Review,FirstPage} from '../../container';


function Homepage() {
  useEffect(()=>{
if(!localStorage.getItem["LoggedIn"]){
localStorage.getItem("LoggedIn",false);
}

  },[]);
  return (
    <>
       <FirstPage {...homeObjOne} />
      <Middel {...homeObjOne} />
      <Middel {...homeObjThree} />
      <Middel {...homeObjTwo} />
      <Review />
     <Middel {...homeObjFour} />
    </>
  );
}

export default Homepage;