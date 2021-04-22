import React from 'react';
import styled from 'styled-components';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import Card from './Card';

const StyledWindCard = styled.div`
  margin-left: 20px;
  height: 100%;
  p {
    color: #202020;
    font-size: 48px;
    line-height: 56px;
    margin: 0px 0 30px 0;
    span {
      font-size: 18px;
      line-height: 21px;
      margin-left: 5px;
    }
  }
  p:nth-last-child(1) {
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
  }
  @media (max-width: 1600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    p {
      color: #202020;
      font-size: 24px;
      line-height: 26px;
      margin: 0 10px 10px 0;
      span {
        font-size: 14px;
        line-height: 16px;
        margin-left: 5px;
      }
    }
    p:nth-last-child(1) {
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
    }
  }
`;

const WindSpeed: React.FC = () => {
  const windSpeed = useTypeSelector((state) => state.weather.data.current.wind_speed);
  return (
    <Card title="Wind Speed">
      <StyledWindCard>
        <p>
          {windSpeed}
          <span>m/s</span>
        </p>
        <p>Light air</p>
      </StyledWindCard>
    </Card>
  );
};

export default WindSpeed;
