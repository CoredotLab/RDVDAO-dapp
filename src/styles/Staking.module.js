import { styled } from 'styled-components';
export const MainContainer = styled.div`
  width: 1440px;
  height: 1718px;
  position: relative;
  margin: 0 auto;
`;

export const BackgroundImg = styled.img`
  width: 1440px;
  height: 1718px;
  z-index: -1;
  position: absolute;
  top: 0;
`;

export const Title = styled.div`
  font-size: 48px;
  font-weight: 700;
  line-height: 120%;
  color: white;
  padding-left: 270px;
  padding-top: 160px;
`;

export const People = styled.div`
  font-size: 29px;
  font-weight: 500;
  color: white;

  padding-left: 850px;
  padding-top: 40px;
`;

export const Highlight = styled.span`
  font-size: 59px;
  color: black;
`;

export const SubTitle = styled.div`
  color: white;
  font-size: 48px;
  font-weight: 700;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
`;

export const Picker = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 280px;
  padding-top: 100px;
`;

export const PickerContainer = styled.div`
  color: ${props => (props.active ? 'black' : 'white')};
  background-color: ${props =>
    props.active ? 'white' : 'rgba(255, 255, 255, 0.06)'};
  border-radius: 12px;
  font-size: 24px;
  padding: 20px 50px;
  text-align: center;
  cursor: pointer;
  width: 200px;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const BlackContainer = styled.div`
  background-color: black;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  align-items: center;
  width: 816px;
  height: 152px;
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 25px;
  padding-left: 80px;
  padding-right: 80px;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1090px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 50px;
`;

export const SproutImg = styled.img`
  width: 120px;
  height: 80px;
  margin: 0 auto;
  display: flex;
`;

export const TreeImg = styled.img`
  width: 100px;
  height: 120px;
  margin: 0 auto;
  display: flex;
`;

export const SomeoneImg = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 80px;
  padding-right: 80px;
`;

export const ConfirmButton = styled.button`
  background-color: #78fca4;
  border-radius: 40px;
  width: 205px;
  height: 60px;
  font-size: 28px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
