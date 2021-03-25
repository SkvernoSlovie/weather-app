import React from 'react';
import styled from 'styled-components';

const SunCard = styled.div`
  width: 250px;
  height: 200px;
  background: #ffff;
  border-radius: 20px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  margin: 0 15px 15px 0;
  cursor: default;
  &:hover {
    transition: 0.5s;
    transform: scale(1.05);
  }
  transition: 0.5s;
  transform: scale(1);
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin: 20px;
  color: #c5c5c5;
`;
const StyledImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ffb901;
`;

const StyledInfo = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 0 0 20px 20px;
`;

const InfoDescription = styled.p`
  font-weight: 500;
  font-size: 21px;
  line-height: 21px;
  margin-left: 25px;

  color: #202020;
`;

const InfoContainer = styled.div``;

const SunRiseSet: React.FC = () => {
  return (
    <SunCard>
      <Title>Sunrise & Sunset</Title>
      <InfoContainer>
        <StyledInfo>
          <StyledImg />
          <InfoDescription>06:18</InfoDescription>
        </StyledInfo>
        <StyledInfo>
          <StyledImg />
          <InfoDescription>18:45</InfoDescription>
        </StyledInfo>
      </InfoContainer>
    </SunCard>
  );
};

export default SunRiseSet;
