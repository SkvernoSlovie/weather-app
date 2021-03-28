import React from 'react';
import styled from 'styled-components';
import { useTypeSelector } from '../../hooks/useTypeSelector';
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
  const { sunrise, sunset } = useTypeSelector((state) => state.weather.data.current);
  const sunriseTime = sunrise ? new Date(sunrise * 1000) : null;
  const sunsetTime = sunset ? new Date(sunset * 1000) : null;
  return (
    <Card title="Sunrise & Sunset">
      {sunriseTime && sunsetTime && (
        <InfoContainer>
          <StyledInfo>
            <StyledImg />

            <InfoDescription>{`0${sunriseTime.getHours()}:${sunriseTime.getMinutes()}`}</InfoDescription>
          </StyledInfo>

          <StyledInfo>
            <StyledImg />
            <InfoDescription>{`${sunsetTime.getHours()}:${sunsetTime.getMinutes()}`}</InfoDescription>
          </StyledInfo>
        </InfoContainer>
      )}
    </Card>
  );
};

export default SunRiseSet;
