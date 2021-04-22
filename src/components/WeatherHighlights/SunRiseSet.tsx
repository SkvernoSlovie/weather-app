import React from 'react';
import styled from 'styled-components';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import Card from './Card';

const StyledImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ffb901;
  @media (max-width: 1600px) {
    width: 40px;
    height: 40px;
  }
`;

const StyledInfo = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 0 0 20px 20px;
  @media (max-width: 1600px) {
    margin: 0 0 0 15px;
    &:first-child {
      margin-bottom: 5px;
    }
  }
`;

const InfoDescription = styled.p`
  font-weight: 500;
  font-size: 21px;
  margin-left: 25px;
  color: #202020;
  @media (max-width: 1600px) {
    font-size: 18px;
    margin: 0 15px 0 10px;
  }
`;

const InfoContainer = styled.div`
  @media (max-width: 1600px) {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const SunRiseSet: React.FC = () => {
  const { sunrise, sunset } = useTypeSelector((state) => state.weather.data.current);
  const sunriseTime = sunrise ? new Date(sunrise * 1000) : null;
  const sunsetTime = sunset ? new Date(sunset * 1000) : null;
  return (
    <Card title="Sunrise & Sunset">
      {sunriseTime && sunsetTime && (
        <InfoContainer>
          <StyledInfo>
            <StyledImg />

            <InfoDescription>{`0${sunriseTime.getHours()}:${
              sunsetTime.getMinutes() < 10 ? `0${sunsetTime.getMinutes()}` : sunsetTime.getMinutes()
            }`}</InfoDescription>
          </StyledInfo>

          <StyledInfo>
            <StyledImg />
            <InfoDescription>{`${sunsetTime.getHours()}:${
              sunsetTime.getMinutes() < 10 ? `0${sunsetTime.getMinutes()}` : sunsetTime.getMinutes()
            }`}</InfoDescription>
          </StyledInfo>
        </InfoContainer>
      )}
    </Card>
  );
};

export default SunRiseSet;
