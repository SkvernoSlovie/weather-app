import styled from 'styled-components';
import cloudy from '../../assets/cloudy.png';


const WeatherCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 30px 0 90px;
`;

const TimeWeatherCart = styled.div`
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
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    margin-top: 15px;
    font-size: 18px;
    font-weight: 700;
  }
`;

const DayTimeWeather = () => {
  return (
    <WeatherCartContainer>
      <TimeWeatherCart>
        <p>14:00</p>
        <img src={cloudy} alt="" />
        <span>10°</span>
      </TimeWeatherCart>
      <TimeWeatherCart>
        <p>17:00</p>
        <img src={cloudy} alt="" />
        <span>6°</span>
      </TimeWeatherCart>
      <TimeWeatherCart>
        <p>20:00</p>
        <img src={cloudy} alt="" />
        <span>12°</span>
      </TimeWeatherCart>
      <TimeWeatherCart>
        <p>23:00</p>
        <img src={cloudy} alt="" />
        <span>14°</span>
      </TimeWeatherCart>
      <TimeWeatherCart>
        <p>02:00</p>
        <img src={cloudy} alt="" />
        <span>15°</span>
      </TimeWeatherCart>
      <TimeWeatherCart>
        <p>05:00</p>
        <img src={cloudy} alt="" />
        <span>10°</span>
      </TimeWeatherCart>
      <TimeWeatherCart>
        <p>08:00</p>
        <img src={cloudy} alt="" />
        <span>10°</span>
      </TimeWeatherCart>
      <TimeWeatherCart>
        <p>11:00</p>
        <img src={cloudy} alt="" />
        <span>10°</span>
      </TimeWeatherCart>
    </WeatherCartContainer>
  );
};

export default DayTimeWeather;
