import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '../../globalestyles';

import styled from 'styled-components';
import Img from '../../assets/bgf.jpeg';
 const InfoSec = styled.div`
  color:gold;
   padding: 150px 0;
  background-image: url(${Img});

  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    padding-right: 15px;
  }
`;

 
 

 const TextWrapper = styled.div`
 max-width:540px;
  padding-top: 0;
  padding-left:40px;
  padding-bottom: 65px;
    align-items:center;
    justify-content: center;
    @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
    
  
`;

 

const TopLine = styled.div`
  color: black;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px
 
`;
 
 const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? 'gold' : '#1c2237')};
  
`;

const Subtitle = styled.p`
max-width: 660px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#070707' : '#1c2237')};
`;


 function FirstPage({
  primary,
  
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  
  
  
  
}) {
  return (
    
      <InfoSec >

              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to='/sign-up'>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
           
     
            
               
          
          
          
        
        
      </InfoSec>
  
  );
}
export default FirstPage;

 

