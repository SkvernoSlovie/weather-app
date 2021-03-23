import styled from 'styled-components';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import cloudy from '../../assets/cloudy.png';

const WeekWeatherContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 30px 0 90px;
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
`;

const WeekWeather: React.FC = () => {
  const dayWeather = useTypeSelector((state) => state.weather.data.daily);
  const { ...currentDay } = useTypeSelector((state) => state.date);
  
  const newArr = currentDay.date
    .slice(currentDay.dayIndex + 1)
    .concat(currentDay.date.slice(0, currentDay.dayIndex))
    .concat(currentDay.date[currentDay.dayIndex]);

  return (
    <WeekWeatherContainer>
      {dayWeather &&
        dayWeather.slice(0, dayWeather.length - 1).map((day, index) => (
          <WeekWeatherCard key={day.dt + index}>
            <h3>{newArr[index]}</h3>
            <img src={cloudy} alt="" />
            <p>
              {`${Math.floor(day.temp.day - 273.15)}°`}{' '}
              <span>{`${Math.floor(day.temp.night - 273.15)}°`}</span>
            </p>
          </WeekWeatherCard>
        ))}
    </WeekWeatherContainer>
  );
};

export default WeekWeather;
