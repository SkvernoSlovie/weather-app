import React from 'react';
import styled from 'styled-components';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import LeftSideLoader from '../LeftSideBar/LeftSideLoader';
import MainContent from '../MainContent/MainContent';
import { useActions } from '../../hooks/useAction';
import { useTypeSelector } from '../../hooks/useTypeSelector';

const AppWrapper = styled.div`
  display: flex;
`;

function App() {
  const { setGeolocation, fetchWeather } = useActions();
  const [l, g] = useTypeSelector((state) => state.geolocation.userGeo);
  const isLoad = useTypeSelector((state) => state.weather.loading);
  React.useEffect(() => {
    setGeolocation();
  }, []);
  React.useEffect(() => {
    fetchWeather([l, g]);
  }, [l, g]);
  return (
    <AppWrapper>
      {isLoad ? <LeftSideLoader /> : <LeftSideBar />}
      <MainContent />
    </AppWrapper>
  );
}

export default App;
