
import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
  import {  FaUser } from 'react-icons/fa';

const CardContainer = styled.div`
  width: 350px;
  height: 430px;
  background-color:white;
  box-shadow:   3px 3px 6px 3px rgba(19, 20, 19, 0.2);
  border-radius: 3px;
  margin: 5px 0;
  position: relative;
  padding: 0px 1em;
 
  
  
`;



const ReviewText = styled.p`
  font-size: 17px;
  color: #585858;
  font-weight: normal;
  display: flex;
  justify-content: center;
  
`;

const Line = styled.span`
  min-width: 100%;
  min-height: 1px;
  margin-bottom: 1.5px;
  background-color: #cdcdcd;
  display: flex;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
   
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Username = styled.span`
  font-size: 15px;
  color: #000;
`;

 export function Reviewcard(props) {
  const { reviewText, username, userImgUrl } = props;

  return (
    <CardContainer>
      <FaUser />
      <Marginer direction="vertical" margin="4em" />
      <ReviewText>{reviewText}</ReviewText>
      <Marginer direction="vertical" margin="11em" />
      <Line />
      <UserDetails>
        <UserImg src={userImgUrl} />
        <Username>{username}</Username>
      </UserDetails>
    </CardContainer>
  );
}
