import React from 'react';
import styled from 'styled-components';
import { useTypeSelector } from '../../hooks/useTypeSelector';

import searcIcon from '../../assets/SearchIcon.svg';
import homeIcon from '../../assets/HomeIcon.svg';
import { weatherIcon } from '../../utils/weatherIcon';

import weatherCloud from '../../assets/cloudy.png';
import weatherRain from '../../assets/rain.png';

const LeftBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  min-height: 100%;
  background: #ffffff;
  box-shadow: 5px 0px 4px rgba(83, 108, 131, 0.25);
  @media (max-width: 1370px) {
    box-shadow: none;
    width: 60vw;
    align-items: center;
    margin-bottom: 50px;
  }
`;

const LeftBarHeader = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 25px;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-left: 25px;
  button:first-child {
    margin-right: 10px;
  }
`;

const Button = styled.button`
  border: none;
  background: #f1f1f1;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #dddddd;
  }
  &:active {
    background: #ffff;
  }
`;

const Input = styled.input.attrs((props) => ({
  type: 'text',
}))`
  background: #f1f1f1;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  font-size: 24px;
  border: none;
  width: 80%;
  &:focus {
    outline: none;
  }
`;

const WeatherContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const WeatherMainContent = styled.div`
  border-bottom: 1px solid #cccc;
  margin: 0 0 30px 30px;
  h1 {
    font-size: 96px;
    line-height: 112px;
    font-weight: 300;
    padding-bottom: 60px;
  }
  p {
    font-size: 36px;
    line-height: 42px;
    font-weight: 400;
    padding-bottom: 30px;
    &:nth-last-child(1) {
      font-size: 24px;
      font-weight: 300;
      line-height: 28px;
    }
  }
  span {
    color: #c4c4c4;
  }
`;

const WeatherSecondaryContent = styled.div`
  margin-left: 30px;
  p {
    font-size: 24px;
    line-height: 28px;
    font-size: 200;
  }
`;

const SecondaryContentFlex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const LeftSideBar: React.FC = () => {
  const weather = useTypeSelector((state) => state.weather.data);
  const date = useTypeSelector((state) => state.date);
  const [currentTime, setCurrentTime] = React.useState(date.time);
  const weatherId = weather.current.weather && weather.current.weather[0].id;
  const [inputValue, setInputValue] = React.useState('');
  React.useEffect(() => {
    const clock = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString().slice(0, 5));
    }, 60000);
    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <LeftBarContainer>
      <LeftBarHeader>
        <Input onChange={(e) => setInputValue(e.target.value)} />
        <ButtonContainer>
          <Button onClick={() => alert('search')}>
            <img src={searcIcon} />
          </Button>
          <Button onClick={() => alert('home')}>
            <img src={homeIcon} />
          </Button>
        </ButtonContainer>
      </LeftBarHeader>
      <WeatherContent>
        <img src={weatherIcon(weatherId)} />
        <WeatherMainContent>
          <h1>{`${weather.current.temp}°`}</h1>
          <p>{weather.timezone?.split('/').reverse().join(', ')}</p>
          <p>
            {`${date.day}, `} <span>{currentTime}</span>
          </p>
        </WeatherMainContent>
        <WeatherSecondaryContent>
          <SecondaryContentFlex>
            <div>
              <img src={weatherCloud} />
            </div>
            <div>
              <p>{`Clouds - ${weather.current.clouds}%`}</p>
            </div>
          </SecondaryContentFlex>
          <SecondaryContentFlex>
            <img src={weatherRain} />
            <p>{weather.current.weather && weather.current.weather[0].description}</p>
          </SecondaryContentFlex>
        </WeatherSecondaryContent>
      </WeatherContent>
    </LeftBarContainer>
  );
};

export default LeftSideBar;
