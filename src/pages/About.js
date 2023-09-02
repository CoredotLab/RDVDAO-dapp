import React from 'react';
import Header from '../components/Header';
import {
  MainContainer,
  BackgroundImg,
  TitleContainer,
  SubtitleContainer,
  LaunchAppBtn,
  DataWrapper,
  DataContainer,
  SideText,
  StakingDataContainer,
  DataSubContainer,
  Data,
} from '../styles/About.module';
import backgroundImg from '../assets/images/background.png';
import launchApp from '../assets/images/launchapp.png';

function About() {
  var stakersAmount = 0;
  var stakingAmount = 0;
  var treasuryAmount = 0;

  return (
    <div>
      <BackgroundImg src={backgroundImg} />
      <MainContainer>
        <Header />
        <TitleContainer>
          Empower the Planet <br /> with Your Stake
        </TitleContainer>
        <SubtitleContainer>
          Vireo redefines environmental stewardship through Web3.0—turn
          <br />
          your stake into sustainable impact, without sacrificing your capital.
        </SubtitleContainer>
        <LaunchAppBtn src={launchApp} />
        <DataWrapper>
          <SideText>You can</SideText>
          <DataContainer>
            <StakingDataContainer>
              <DataSubContainer>
                <Data>{stakersAmount}</Data>Total Stakers
              </DataSubContainer>
              <DataSubContainer>
                <Data>{stakingAmount}$</Data>Total Staked
              </DataSubContainer>
            </StakingDataContainer>
            <DataSubContainer>
              <Data>{treasuryAmount}$</Data>Treasury
            </DataSubContainer>
          </DataContainer>
          <SideText>Join us</SideText>
        </DataWrapper>
      </MainContainer>
    </div>
  );
}

export default About;
