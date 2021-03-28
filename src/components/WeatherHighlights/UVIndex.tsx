import React from 'react';
import styled from 'styled-components';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import Card from './Card';

const UVIndex = () => {
  const index = useTypeSelector((state) => state.weather.data.current.uvi);

  return <Card title="UV Index">{index}</Card>;
};

export default UVIndex;
