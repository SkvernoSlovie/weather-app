import React from 'react';
import styled from 'styled-components';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import Card from './Card';

const IndexWrapper = styled.div`
  display: flex;
  margin-left: 20px;
  justify-content: space-around;
  align-items: center;
  p {
    font-size: 48px;
    line-height: 56px;

    color: #202020;
  }
`;

const Index = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 35px;
  height: 110px;
  border-radius: 15px;
  border: 1px solid #c9c9c9;
  padding: 3px;
`;
interface Props {
  height: string;
}

const IndexScale = styled.div<Props>`
  height: ${(props) => props.height || '5px'};
  width: 25px;
  background: #ffb901;
  border-radius: 15px;
`;
const UVIndex = () => {
  const index = useTypeSelector((state) => state.weather.data.current.uvi);

  return (
    <Card title="UV Index">
      <IndexWrapper>
        <p>{index && Math.round(index)}</p>
        <Index>
          <IndexScale height={`${index && index * 10}px`} />
        </Index>
      </IndexWrapper>
    </Card>
  );
};

export default UVIndex;
