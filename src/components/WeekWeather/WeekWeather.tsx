import styled from 'styled-components';
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
  width: 100px;
  height: 150px;
  background: #fffdfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  return (
    <WeekWeatherContainer>
      <WeekWeatherCard>
        <h3>Sunday</h3>
        <img src={cloudy} alt="" />
        <p>
          12° <span>10°</span>
        </p>
      </WeekWeatherCard>
      <WeekWeatherCard>
        <h3>Monday</h3>
        <img src={cloudy} alt="" />
        <p>
          12° <span>10°</span>
        </p>
      </WeekWeatherCard>
      <WeekWeatherCard>
        <h3>Tue</h3>
        <img src={cloudy} alt="" />
        <p>
          12° <span>10°</span>
        </p>
      </WeekWeatherCard>
      <WeekWeatherCard>
        <h3>Wed</h3>
        <img src={cloudy} alt="" />
        <p>
          12° <span>10°</span>
        </p>
      </WeekWeatherCard>
      <WeekWeatherCard>
        <h3>Thu</h3>
        <img src={cloudy} alt="" />
        <p>
          12° <span>10°</span>
        </p>
      </WeekWeatherCard>
      <WeekWeatherCard>
        <h3>Sat</h3>
        <img src={cloudy} alt="" />
        <p>
          12° <span>10°</span>
        </p>
      </WeekWeatherCard>
      <WeekWeatherCard>
        <h3>Sun</h3>
        <img src={cloudy} alt="" />
        <p>
          12° <span>10°</span>
        </p>
      </WeekWeatherCard>
    </WeekWeatherContainer>
  );
};

export default WeekWeather;
