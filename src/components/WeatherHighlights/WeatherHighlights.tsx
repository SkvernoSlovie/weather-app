import React from 'react';
import styled from 'styled-components';
import Map from '../Map/Map';
import AtmosphericPressure from './AtmosphericPressure';
import Humidity from './Humidity';
import MinMaxTemp from './MinMaxTemp';
import SunRiseSet from './SunRiseSet';
import UVIndex from './UVIndex';
import WindSpeed from './WindSpeed';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 90px;
`;

const WeatherHighlightsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const HighlightsCart = styled.div`
  width: 250px;
  height: 200px;
  background: #ffff;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 15px 15px 0;
`;

const HighlightsFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 60%;
`;

const HighlightsTitle = styled.p`
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 20px;
`;
const MapContainer = styled.div`
  hight: 100%;
  width: 40%;
  padding: 9px 30px 13.5px 0;
`;

const WeatherHighlights: React.FC = () => {
  return (
    <Wrapper>
      <HighlightsTitle>Today’s Highlights</HighlightsTitle>
      <WeatherHighlightsContainer>
        <HighlightsFlex>
          <SunRiseSet />
          <Humidity />
          <WindSpeed />
          <AtmosphericPressure />
          <UVIndex />
          <MinMaxTemp />
        </HighlightsFlex>
        <MapContainer>
          <Map />
        </MapContainer>
      </WeatherHighlightsContainer>
    </Wrapper>
  );
};

export default WeatherHighlights;
