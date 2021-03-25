import React from 'react';
import styled from 'styled-components';
const MinMaxTempCard = styled.div`
  width: 250px;
  height: 200px;
  background: #ffff;
  border-radius: 20px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  margin: 0 15px 15px 0;
  cursor: default;
  &:hover {
    transition: 0.5s;
    transform: scale(1.05);
  }
  transition: 0.5s;
  transform: scale(1);
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin: 20px;
  color: #c5c5c5;
`;

const MinMaxTemp = () => {
  return (
    <MinMaxTempCard>
      <Title>Min & Max Temperature</Title>
    </MinMaxTempCard>
  );
};

export default MinMaxTemp;
