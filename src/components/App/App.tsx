import React from 'react';
import styled from 'styled-components';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import MainContent from '../MainContent/MainContent';
import { useActions } from '../../hooks/useAction';

const AppWrapper = styled.div`
  display: flex;
`;

function App() {
  const { setGeolocation, fetchWeather } = useActions();
  React.useEffect(() => {
    setGeolocation();
    fetchWeather();
  }, []);
  return (
    <AppWrapper>
      <LeftSideBar />
      <MainContent />
    </AppWrapper>
  );
}

export default App;
