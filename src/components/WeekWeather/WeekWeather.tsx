import styled from 'styled-components';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import cloudy from '../../assets/cloudy.png';

import { CSSTransition } from 'react-transition-group';
import '../DayTimeWeather/style.css';
import React from 'react';

const WeekWeatherContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 30px 0 90px;
  min-height: 15.5vh;
`;

const WeekWeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 110px;
  height: 150px;
  background: #fffdfd;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  transition: 0.5s;
  transform: scale(1);
  span {
    color: #c4c4c4;
  }
  h3,
  p,
  span {
    font-size: 18px;
    font-weight: 700;
  }
  h3 {
    margin-top: 15px;
  }
  p {
    margin-bottom: 15px;
  }
  &:hover {
    transition: 0.5s;
    transform: scale(1.05);
  }

  &.fade-enter {
    transform: scale(0);
  }

  // enter to
  &.fade-enter-active {
    transform: scale(1);
  }

  &.fade-exit {
    transform: scale(0);
  }

  &.fade-exit-active {
    transform: scale(1);
  }
`;

const WeekWeather: React.FC = () => {
  const dayWeather = useTypeSelector((state) => state.weather.data.daily);
  const { ...currentDay } = useTypeSelector((state) => state.date);
  const [transition, setTransition] = React.useState(false);
  React.useEffect(() => {
    setTransition(true);
    () => {
      setTransition(false);
    };
  }, []);
  const newArr = currentDay.date
    .slice(currentDay.dayIndex + 1)
    .concat(currentDay.date.slice(0, currentDay.dayIndex))
    .concat(currentDay.date[currentDay.dayIndex]);

  return (
    <WeekWeatherContainer>
      {dayWeather &&
        dayWeather.slice(0, dayWeather.length - 1).map((day, index) => (
          <CSSTransition
            in={transition}
            timeout={300}
            classNames="fade"
            mountOnEnter
            unmountOnExit
            key={day.dt + index}>
            <WeekWeatherCard>
              <h3>{newArr[index]}</h3>
              <img src={cloudy} alt="" />
              <p>
                {`${Math.floor(day.temp.day - 273.15)}°`}{' '}
                <span>{`${Math.floor(day.temp.night - 273.15)}°`}</span>
              </p>
            </WeekWeatherCard>
          </CSSTransition>
        ))}
    </WeekWeatherContainer>
  );
};

export default WeekWeather;
