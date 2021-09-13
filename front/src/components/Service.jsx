import React from "react";
import styled from "styled-components";
import imageSrc from "../images/Cyber.png";
import InfoCard from "components/InfoCard";

const Container = styled.div`
  height: 100vh;

  display: flex;
`;

const Left = styled.div`
  display: flex;
  width: 50%;
`;

const Right = styled.div`
  display: flex;
  width: 50%;
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  font-size: 20px;
  margin-top: 30px;
  color: #565656;
`;

const Image = styled.img`
  width: 100%;
`;

const Video = styled.video``;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 300px;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  background: #0000ff;
  padding: 20px 30px;
  margin-top: 50px;
  font-size: 20px;
`;

export default function Service() {
  return (
    <Container>
      <Left>
        <Image src={imageSrc} />
      </Left>
      <Right>
        <Wrapper>
          <Title>Ne craignez rien...</Title>
          <Description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
            reprehenderit tempora placeat tenetur illum magni blanditiis maxime
            tempore ipsum alias voluptates, eius dicta optio dolore deserunt,
            modi ex harum odit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Qui optio aut commodi quas porro tenetur quaerat
            dignissimos corrupti neque veritatis?
          </Description>
          <CardContainer>
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </CardContainer>
          <Button>EN SAVOIR +</Button>
        </Wrapper>
      </Right>
    </Container>
  );
}