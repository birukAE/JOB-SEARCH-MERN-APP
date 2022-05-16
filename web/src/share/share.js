import React from 'react'
import {FacebookShareButton,FacebookIcon, WhatsappShareButton, WhatsappIcon, TelegramShareButton, TelegramIcon} from 'react-share'
import styled from 'styled-components';
 

  export function Share(){
     const Shares=styled.div`
     display: flex;
      justify-content: space-evenly;
     flex-direction: row;
     &:hover{
        color: brown;
     }
     padding-left: 5px;
     padding-bottom: 10px;
     padding-top:5px;
     `;
     const Share=styled.div`
     display: flex;
     flex-direction: column;
    
     align-items: center;
     `;
     
     
    const shareurl='http://www.google.com';
    return(

    
   <Share>
    <u>share on</u><Shares>
 <FacebookShareButton url={shareurl} quote={'the fastest job website'} hashtag={'profile'}>
    <FacebookIcon size={30} round={true} margin right='2px'/>
 </FacebookShareButton>
    
     <WhatsappShareButton url={shareurl} quote={'the fastest job website'} hashtag={'profile'}>
     <WhatsappIcon size={30} round={true} margin right='2px' />
  </WhatsappShareButton>
    
    
  <TelegramShareButton url={shareurl} quote={'the fastest job website'} hashtag={'profile'}>
     <TelegramIcon size={30} round={true} margin right='5px'/>
  
  </TelegramShareButton>
    
     </Shares>
     </Share>
    )
    } 
  