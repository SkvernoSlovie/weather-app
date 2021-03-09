import styled from 'styled-components';

import LeftSideBar from '../LeftSideBar/LeftSideBar';
import MainContent from '../MainContent/MainContent';

const AppWrapper = styled.div`
  display: flex;
`;

function App() {
  return (
    <AppWrapper>
      <LeftSideBar />
      <MainContent />
    </AppWrapper>
  );
}

export default App;
