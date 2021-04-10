import React from 'react';
import styled from 'styled-components';
import WeekWeather from '../WeekWeather/WeekWeather';
import WeatherHighlights from '../WeatherHighlights/WeatherHighlights';
import DayTimeWeather from '../DayTimeWeather/DayTimeWeather';
import { TempButtonProps } from '../../types/styledComponents';

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;
  height: 100vh;
  @media (max-width: 980px) {
    width: 100vw;
    margin-top: 100px;
    background: #f5f5f5;
  }
`;

const TempButton = styled.button<TempButtonProps>`
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 40px;
  height: 40px;
  border-radius: 50px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  &:focus {
    outline: none;
  }
`;

const TimeButton = styled.button`
  border: none;
  background: none;
  width: 96px;
  height: 42px;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  color: ${(props) => props.color};
  &:focus {
    outline: none;
    color: #202020;
  }
  &:hover {
    color: #717171;
  }
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0 100px 0;
`;

const TimeButtonContainer = styled.div`
  button:first-child {
    margin: 0 90px 0 90px;
  }
`;

const TempButtonContainer = styled.div`
  button {
    margin-right: 30px;
  }
`;

const WeatherSecondary = styled.div`
  display: flex;
  margin-top: 160px;
`;

const MainContent: React.FC = () => {
  const [toggleTime, setToggleTime] = React.useState(false);
  const [toggleTemp, setToggleTemp] = React.useState(true);
  return (
    <MainContentWrapper>
      <MainHeader>
        <TimeButtonContainer>
          <TimeButton
            onClick={() => setToggleTime(true)}
            color={toggleTime ? '#202020' : '#c4c4c4'}>
            Today
          </TimeButton>
          <TimeButton
            onClick={() => setToggleTime(false)}
            color={toggleTime ? '#c4c4c4' : '#202020'}>
            Week
          </TimeButton>
        </TimeButtonContainer>
        <TempButtonContainer>
          <TempButton
            onClick={() => setToggleTemp(true)}
            color={toggleTemp ? '#ffff' : '#202020'}
            background={toggleTemp ? '#202020' : '#ffff'}>
            °C
          </TempButton>
          <TempButton
            onClick={() => setToggleTemp(false)}
            color={toggleTemp ? '#202020' : '#ffff'}
            background={toggleTemp ? '#ffff' : '#202020'}>
            °F
          </TempButton>
        </TempButtonContainer>
      </MainHeader>
      {toggleTime ? <DayTimeWeather /> : <WeekWeather />}
      <WeatherSecondary>
        <WeatherHighlights />
      </WeatherSecondary>
    </MainContentWrapper>
  );
};

export default MainContent;
