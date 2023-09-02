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
  font-size: 100px;
  text-align: center;
  padding-top: 200px;
  line-height: 86.4px;
  font-weight: 600;
`;

export const SubtitleContainer = styled.div`
  color: rgb(255, 255, 255, 0.7);
  font-size: 30px;
  text-align: center;
  padding-top: 120px;
  line-height: 33px;
`;

export const LaunchAppBtn = styled.img`
  width: 220px;
  height: 70px;
  display: block;
  margin: 0 auto;
  padding-top: 40px;
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 150px;
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
  margin-left: 100px;
  margin-right: 100px;
  width: 300px;
`;

export const DataContainer = styled.div`
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
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

export const DataSubContainer = styled.div`
  font-size: 25px;
  padding: 20px;
  margin-right: 30px;
  margin-left: 30px;
`;

export const Data = styled.div`
  color: #3ae000;
  text-shadow: 0 0 8px rgba(58, 224, 0, 0.7);
  font-size: 90px;
`;

export const TextByStep1 = styled.div`
  text-align: center;
  color: white;
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;
  padding-top: 650px;
  padding-left: 600px;
`;

export const TextByStep2 = styled.div`
  text-align: center;
  color: white;
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;
  padding-top: 680px;
  padding-right: 560px;
`;

export const TextByStep3 = styled.div`
  text-align: center;
  color: white;
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;
  padding-top: 750px;
  padding-left: 520px;
`;

export const TextByStep4 = styled.div`
  text-align: center;
  color: white;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  padding-top: 850px;
`;

export const GreenSpan = styled.span`
  text-align: center;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  padding-top: 850px;
  background: linear-gradient(135deg, #78fca4, #25bc9c);
  -webkit-background-clip: text; /* 텍스트에 그라데이션 적용 */
  color: transparent; /* 텍스트 색상을 투명하게 설정 */
`;

export const NFTImg = styled.img`
  width: 600px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  padding-top: 150px;
`;

export const LaunchAppBtnGreen = styled.button`
  cursor: pointer;
  background-color: #78fca4;
  color: #1e1e2b;
  width: 400px;
  height: 100px;
  font-size: 40px;
  border-radius: 75px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 700px;
`;

export const MidTitle = styled.div`
  font-size: 72px;
  color: white;
  font-weight: 600;
  text-align: center;
  padding-top: 250px;
`;
export const MidTitleGreen = styled.div`
  font-size: 64px;
  font-weight: 600;
  text-align: center;
  padding-top: 30px;
  background: linear-gradient(135deg, #78fca4, #25bc9c);
  -webkit-background-clip: text; /* 텍스트에 그라데이션 적용 */
  color: transparent; /* 텍스트 색상을 투명하게 설정 */
`;

export const BenefitWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  margin: 0 auto;
  justify-content: center;
  align-items: flex-start;
  padding-top: 200px;
`;

export const BenefitContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-wrap: start;
  font-size: 25px;
  padding: 20px;
  font-size: 40px;
`;

export const BenefitSubContainer = styled.div`
  text-align: center;
  background-color: #313146;
  border-radius: 18px;
  width: 300px;
  height: 250px;
  padding: 20px;
  font-weight: 500;
  margin-top: 20px;
  font-size: 25px;
  padding-top: 40px;
  line-height: 25px;
`;

export const SproutImg = styled.img`
  width: 140px;
  height: 90px;
  margin: 0 auto;
  display: flex;
  padding-top: 40px;
`;

export const TreeImg = styled.img`
  width: 120px;
  height: 140px;
  margin: 0 auto;
  display: flex;
  padding-top: 50px;
`;

export const SomeoneImg = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  padding-top: 90px;
`;

export const FaqTitle = styled.div`
  display: flex;
  margin: 0 auto;
  font-size: 82px;
  background: linear-gradient(180deg, #78fca4 0%, #25bc9c 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  align-items: center;
  justify-content: center;
  padding-top: 150px;
  padding-bottom: 100px;
`;
export const FaqWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;
export const FaqContainer = styled.div`
  background: linear-gradient(180deg, #313146 0%, rgba(49, 49, 70, 0) 100%);
  width: 916px;
  height: 230px;
  border-radius: 26px;
  padding: 30px;
  margin-bottom: 60px;
`;
export const Question = styled.div`
  color: #78fca4;
  font-size: 32px;
  margin-bottom: 20px;
  font-weight: 700;
  padding-top: 20px;
`;
export const Answer = styled.div`
  color: rgba(255, 255, 255, 0.76);
  font-size: 29px;
  font-weight: 500;
  line-height: 35px;
`;
