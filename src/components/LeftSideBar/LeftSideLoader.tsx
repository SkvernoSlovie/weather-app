import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 100vh;
  background: #ffffff;
  box-shadow: 5px 0px 4px rgba(83, 108, 131, 0.25);
  padding-left: 15px;
`;

const LeftSideLoader: React.FC = (props) => (
  <LoaderWrapper>
    <ContentLoader
      speed={5}
      width={480}
      height={1000}
      viewBox="0 0 480 1000"
      backgroundColor="#f0f0f0"
      foregroundColor="#ecebeb"
      {...props}>
      <rect x="4" y="649" rx="3" ry="3" width="119" height="21" />
      <rect x="41" y="818" rx="3" ry="3" width="140" height="11" />
      <rect x="41" y="878" rx="3" ry="3" width="140" height="11" />
      <rect x="5" y="546" rx="3" ry="3" width="177" height="84" />
      <rect x="5" y="680" rx="3" ry="3" width="115" height="20" />
      <rect x="7" y="17" rx="3" ry="3" width="266" height="40" />
      <rect x="3" y="739" rx="3" ry="3" width="357" height="10" />
      <circle cx="305" cy="37" r="20" />
      <circle cx="351" cy="37" r="20" />
      <rect x="3" y="160" rx="0" ry="0" width="341" height="279" />
      <circle cx="20" cy="821" r="18" />
      <circle cx="20" cy="881" r="18" />
    </ContentLoader>
  </LoaderWrapper>
);

export default LeftSideLoader;
