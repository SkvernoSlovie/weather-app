import styled from 'styled-components';

const WeatherHighlightsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HighlightsCart = styled.div`
  width: 250px;
  height: 200px;
  background: #c4c4c4;
  border-radius: 20px;
`;

const HighlightsFlex = styled.div`
  display: flex;
`;

const WeatherHighlights = () => {
  return (
    <WeatherHighlightsContainer>
      <HighlightsFlex>
        <HighlightsCart />
        <HighlightsCart />
        <HighlightsCart />
      </HighlightsFlex>
      <HighlightsFlex>
        <HighlightsCart />
        <HighlightsCart />
        <HighlightsCart />
      </HighlightsFlex>
    </WeatherHighlightsContainer>
  );
};

export default WeatherHighlights;
