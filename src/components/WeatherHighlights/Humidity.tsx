import React from 'react';
import styled from 'styled-components';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import Card from './Card';

const StyledHimidity = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    font-size: 48px;
    line-height: 56px;
    color: #202020;
  }
  span {
    font-size: 24px;
    line-height: 28px;
    margin: 5px 0 0 2px;
  }
  @media (max-width: 1600px) {
    p {
      font-size: 18px;
      line-height: 21px;
    }
    span {
      font-size: 12px;
      line-height: 14px;
      margin: 2px 0 0 2px;
    }
  }
`;

const HimidityLevel = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 35px;
  height: 110px;
  border-radius: 15px;
  border: 1px solid #c9c9c9;
  padding: 3px;
  @media (max-width: 1600px) {
    width: 25px;
    height: 100px;
    margin: 0 15px 0 10px;
  }
`;

const Text = styled.div`
  display: flex;
  align-items: flex-start;
`;

interface Props {
  height: string;
}

const HimidityScale = styled.div<Props>`
  height: ${(props) => props.height || '5px'};
  width: 25px;
  background: #3e8bff;
  border-radius: 15px;
`;

const Humidity: React.FC = () => {
  const humidity = useTypeSelector((state) => state.weather.data.current.humidity);

  return (
    <Card title="Himidity">
      <StyledHimidity>
        <Text>
          <p>{humidity}</p>
          <span>%</span>
        </Text>

        <HimidityLevel>
          <HimidityScale height={`${humidity}px`}></HimidityScale>
        </HimidityLevel>
      </StyledHimidity>
    </Card>
  );
};

export default Humidity;
