import React from 'react';
import styled from 'styled-components';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import Card from './Card';
import minTemp from '../../assets/minTemp.svg';
import maxTemp from '../../assets/maxTemp.svg';

const MinMaxTempContainer = styled.div`
  margin-left: 20px;
  height: 100%;
  @media (max-width: 1600px) {
    margin: 0 10px 0 10px;
  }
`;

const StyledTemp = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  p {
    font-size: 36px;
    line-height: 42px;

    color: #202020;
  }
  img {
    margin-right: 30px;
  }
  @media (max-width: 1600px) {
    &:first-child {
      margin-bottom: 10px;
    }
    margin-bottom: 0;
    p {
      font-size: 18px;
      line-height: 21px;
    }
    img {
      margin-right: 0;
      max-height: 40px;
    }
  }
`;

const MinMaxTemp = () => {
  const temp = useTypeSelector((state) => state.weather.data.daily);
  const min = temp ? Math.round(temp[0].temp.min - 273.15) : 0;
  const max = temp ? Math.round(temp[0].temp.max - 273.15) : 0;

  return (
    <Card title="Min & Max Temperature">
      <MinMaxTempContainer>
        <StyledTemp>
          <img src={minTemp} alt="" />
          <p>{`${min}°`}</p>
        </StyledTemp>
        <StyledTemp>
          <img src={maxTemp} alt="" />
          <p>{`${max}°`}</p>
        </StyledTemp>
      </MinMaxTempContainer>
    </Card>
  );
};

export default MinMaxTemp;
