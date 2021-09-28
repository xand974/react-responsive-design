import React from "react";
import styled from "styled-components";

const CardPrice = styled.div`
  position: relative;
  padding: 20px;
  width: 300px;
  height: 500px;
  margin: 0 60px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 0 10px black;
`;

const SubscriptionText = styled.h3`
  margin-bottom: 20px;

  display: flex;
  align-items: center;

  font-size: 20px;
  font-weight: lighter;
`;
const NumberText = styled.span`
  font-size: 50px;
  font-weight: bold;
`;

const Button = styled.button`
  margin-bottom: 30px;
  padding: 10px;

  background: none;
  border: 1px solid red;
  border-radius: 15px;

  font-size: 16px;
  color: red;
  cursor: pointer;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Infotext = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const JoinButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 15px;

  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  background: #0000ff;
  padding: 10px 20px;

  font-size: 18px;
`;
export default function Card({ price, type }) {
  return (
    <CardPrice>
      <SubscriptionText>
        $<NumberText>{price}</NumberText>/month
      </SubscriptionText>
      <Button>{type}</Button>
      <Wrapper>
        <Infotext>Lorem ipsum dolor sit.</Infotext>
        <Infotext>Lorem, ipsum dolor.</Infotext>
        <Infotext>Lorem ipsum dolor sit amet.</Infotext>
        <Infotext>Lorem, ipsum.</Infotext>
      </Wrapper>
      <JoinButton>Join Now</JoinButton>
    </CardPrice>
  );
}
