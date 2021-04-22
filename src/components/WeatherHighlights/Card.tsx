import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
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
  @media (max-width: 1600px) {
    width: 200px;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin: 20px;
  color: #c5c5c5;
  @media (max-width: 1600px) {
    font-size: 18px;
    line-height: 21px;
    margin: 0;
    padding-left: 10px;
    p {
      display: table-caption;
    }
  }
`;

interface CardProps {
  title: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <StyledCard>
      <Title>{title}</Title>
      <div>{children}</div>
    </StyledCard>
  );
};

export default Card;
