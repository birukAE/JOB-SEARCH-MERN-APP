import React from 'react';
import { homeObjOne, homeObjTwo,homeObjThree } from './Data';
import  {Middel} from '../../container';



function Services() {
  return (
    <>
       
      <Middel {...homeObjOne} />
      <Middel {...homeObjThree} />
      
      
     
    </>
  );
}

export default Services;