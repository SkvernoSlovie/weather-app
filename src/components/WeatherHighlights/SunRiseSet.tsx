import React from 'react';
import styled from 'styled-components';
import Card from './Card';

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
    <Card title="Sunrise & Sunset">
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
    </Card>
  );
};

export default SunRiseSet;
