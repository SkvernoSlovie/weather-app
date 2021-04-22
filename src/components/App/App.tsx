import React from 'react';
import styled from 'styled-components';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import LeftSideLoader from '../LeftSideBar/LeftSideLoader';
import MainContent from '../MainContent/MainContent';
import { useActions } from '../../hooks/useAction';
import { useTypeSelector } from '../../hooks/useTypeSelector';

const AppWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  @media (max-width: 1370px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function App() {
  const { setGeolocation, fetchWeather, setCurrentData } = useActions();
  const coords = useTypeSelector((state) => state.geolocation.userGeo);
  const isLoad = useTypeSelector((state) => state.weather.loading);

  React.useEffect(() => {
    setGeolocation();
    setCurrentData();
  }, []);

  React.useEffect(() => {
    if (coords) {
      fetchWeather(coords);
    }
  }, [coords]);

  return (
    <AppWrapper>
      {isLoad ? <LeftSideLoader /> : <LeftSideBar />}
      <MainContent />
    </AppWrapper>
  );
}

export default App;
