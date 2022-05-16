import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PricingSection = styled.div`
  padding: 20px 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #fff;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const PricingContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled.div`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 300px;
  height: 280px;
  text-decoration: none;
  border-radius: 4px;
  margin-left: 15px;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  padding: 14px;
  align-items: center;
  color: #fff;
`;

export const PricingCardIcon = styled.div`
  margin: 5px 0;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 2px;
  font-size: 14px;
`;

export const PricingCardCost = styled.h4`
  font-size: 15px;
`;

export const PricingCardLength = styled.p`
  font-size: 15px;
  margin-bottom: 10px;
`;

export const PricingCardFeatures = styled.ul`
  margin: 10px 0 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`;
