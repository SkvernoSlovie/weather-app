import React from 'react';
import styled from 'styled-components';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import Card from './Card';

const Humidity: React.FC = () => {
  const humidity = useTypeSelector((state) => state.weather.data.current.humidity);
  return <Card title="Himidity">{humidity}</Card>;
};

export default Humidity;
