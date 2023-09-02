import { styled } from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  color: white;
  text-align: center;
`;

export const BackgroundImg = styled.img`
  height: auto;
  width: 100%;
  max-width: 100%;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
`;
