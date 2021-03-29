import styled from 'styled-components';
import React from 'react';
import cloudy from '../../assets/cloudy.png';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { CSSTransition } from 'react-transition-group';
import { weatherIcon } from '../../utils/weatherIcon';

const WeatherCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 30px 0 90px;
  min-height: 15.5vh;

  @media (max-width: 980px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const TimeWeatherCart = styled.div`
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
  margin-bottom: 5px;
  img {
    width: 50%;
    height: 50%;
  }
  span {
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    margin-top: 15px;
    font-size: 18px;
    font-weight: 700;
  }
  &:hover {
    transition: 0.5s;
    transform: scale(1.05);
  }

  &.fade-enter {
    transform: scale(0);
  }

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

const DayTimeWeather: React.FC = () => {
  const timeWeather = useTypeSelector((state) => state.weather.data.hourly);
  const curTimeWeather = timeWeather?.slice(0, 24).filter((obj, index) => !(index % 3));
  const [transition, setTransition] = React.useState(false);

  React.useEffect(() => {
    setTransition(true);
    return () => {
      setTransition(false);
    };
  }, []);

  const trueTime = (arr: any) => {
    let counter = new Date().getHours();
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        arr[i].time = counter;
        newArr.push(arr[i]);
      } else if (counter < 24) {
        arr[i].time = counter;
        newArr.push(arr[i]);
      } else {
        counter -= 24;
        arr[i].time = counter;
        newArr.push(arr[i].time);
      }
      counter += 3;
    }
    return newArr;
  };
  trueTime(curTimeWeather);
  console.log(curTimeWeather);
  return (
    <WeatherCartContainer>
      {curTimeWeather &&
        curTimeWeather.map((hour, index) => (
          <CSSTransition
            in={transition}
            timeout={300}
            classNames="fade"
            key={hour.dt + index}
            mountOnEnter
            unmountOnExit>
            <TimeWeatherCart>
              <p>{`${hour.time}:00`}</p>
              <img src={weatherIcon(hour.weather[0].id)} alt="" />
              <span>{`${Math.floor(hour.temp - 273.15)}°`}</span>
            </TimeWeatherCart>
          </CSSTransition>
        ))}
    </WeatherCartContainer>
  );
};

export default DayTimeWeather;
