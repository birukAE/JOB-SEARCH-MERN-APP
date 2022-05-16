import React from 'react';
import {  homeObjTwo,  homeObjFour } from './data';
import  {Middel} from '../../container';


function Programs() {
  return (
    <>
     
     
     
      <Middel {...homeObjTwo} />
      
     <Middel {...homeObjFour} />
    </>
  );
}

export default Programs;