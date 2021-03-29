import React from 'react';
import styled from 'styled-components';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import Card from './Card';

const PressureContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 45px 0 0 20px;
  color: #202020;
  span {
    font-size: 36px;
    line-height: 42px;
  }
`;
const StyledInfo = styled.div`
  p {
    font-size: 18px;
    line-height: 21px;
  }
  margin-left: 10px;
`;

const AtmosphericPressure: React.FC = () => {
  const pressure = useTypeSelector((state) => state.weather.data.current.pressure);
  return (
    <Card title="Atmospheric Pressure">
      <PressureContainer>
        <span>{pressure}</span>
        <StyledInfo>
          <p>mm</p>
          <p>of mercury</p>
        </StyledInfo>
      </PressureContainer>
    </Card>
  );
};

export default AtmosphericPressure;
