import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  font-family: 'quicksand';
  font-size: 22px;
  font-weight: 350;
  padding-left: 550px;
  padding-right: 550px;
  padding-top: 75px;
  position: relative;
  z-index: 1;
`;

export const StyledMenuItem = styled.div`
  cursor: pointer;
  color: ${props => (props.$active ? 'green' : 'white')};
`;

export const LaunchAppBtn = styled.button`
  cursor: pointer;
  color: #039423;
  width: 174px;
  height: 50px;
  text-align: center;
  justify-content: center;
  font-size: 22px;
  position: absolute;
  right: 100px;
  top: 60px;
  border-radius: 40px;
`;

export const Logo = styled.img`
  width: 170px;
  height: 40px;
  position: absolute;
  left: 150px;
  top: 60px;
`;
