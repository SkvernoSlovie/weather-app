import styled from 'styled-components';

const WeekWeatherContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const WeekWeatherCard = styled.div`
  width: 100px;
  height: 150px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const WeekWeather: React.FC = () => {
  return (
    <WeekWeatherContainer>
      <WeekWeatherCard />
      <WeekWeatherCard />
      <WeekWeatherCard />
      <WeekWeatherCard />
      <WeekWeatherCard />
      <WeekWeatherCard />
      <WeekWeatherCard />
    </WeekWeatherContainer>
  );
};

export default WeekWeather;
