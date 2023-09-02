import { styled } from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
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
export const BackgroundImgMiddle = styled.img`
  height: auto;
  width: 100%;
  max-width: 100%;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 1400px;
`;

export const TitleContainer = styled.div`
  color: white;
  font-size: 72px;
  text-align: center;
  padding-top: 200px;
  line-height: 86.4px;
  font-weight: 600;
`;

export const SubtitleContainer = styled.div`
  color: rgb(255, 255, 255, 0.7);
  font-size: 22px;
  text-align: center;
  padding-top: 120px;
  line-height: 33px;
`;

export const LaunchAppBtn = styled.img`
  width: 205px;
  height: 60px;
  display: block;
  margin: 0 auto;
  padding-top: 40px;
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SideText = styled.div`
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255 0.7);
  font-size: 62px;
  font-weight: 600;
  justify-content: center;
  margin-left: 50px;
  margin-right: 50px;
  width: 300px;
`;

export const DataContainer = styled.div`
  border: 2px dashed white;
  display: block;
  width: 500px;
  height: 300px;
  margin: 0;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StakingDataContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DataSubContainer = styled.div`
  font-size: 20px;
  padding: 10px;
`;

export const Data = styled.div`
  color: #3ae000;
  text-shadow: 0 0 8px rgba(58, 224, 0, 0.7);
  font-size: 70px;
`;
