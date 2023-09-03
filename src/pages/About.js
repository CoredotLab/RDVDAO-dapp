import { React, useEffect, useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
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
  TextByStep1,
  TextByStep2,
  TextByStep3,
  TextByStep4,
  GreenSpan,
  NFTImg,
  LaunchAppBtnGreen,
  MidTitle,
  MidTitleGreen,
  BenefitContainer,
  BenefitSubContainer,
  BenefitWrapper,
  SproutImg,
  TreeImg,
  SomeoneImg,
  FaqContainer,
  FaqTitle,
  FaqWrapper,
  Question,
  Answer,
} from '../styles/About.module';
import backgroundImg from '../assets/images/background.png';
import Nft from '../assets/images/NFT.png';
import launchApp from '../assets/images/launchapp.png';
import someoneImg from '../assets/images/someone.png';
import sproutImg from '../assets/images/sprout.png';
import treeImg from '../assets/images/tree.png';
import navigationStore from '../components/NavigationStore';
import { VireoXContract } from '../contracts/modules/VireoX';

function About() {
  var [stakersAmount, setStakersAmount] = useState('');
  var [stakingAmount, setStakingAmount] = useState('');
  var amount = 0;
  var [treasuryAmount, setTreasuryAmount] = useState('100');
  const navigate = useNavigate('/staking');

  useEffect(() => {
    const vireoXContract = new VireoXContract();

    vireoXContract
      .getTotalSupply()
      .then(totalSupply => {
        setStakersAmount(totalSupply);
        setStakingAmount(parseInt(totalSupply) * 1600);
      })
      .catch(error => {
        console.error('Error getting total supply:', error);
      });
  }, []);

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
        <LaunchAppBtn
          onClick={() => {
            navigationStore.setActiveMenu('staking');
            navigate('/staking');
          }}
          src={launchApp}
        />
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
      <TextByStep1>
        The climate crisis is
        <br /> no longer a distant threat,
        <br /> it's at our doorstep.
      </TextByStep1>
      <TextByStep2>
        With validators generating <br />
        consistent returns,
        <br /> you can contribute to
        <br />
        environmental causes <br />
        without taking on any risk.
      </TextByStep2>
      <TextByStep3>
        Through our DAO, <br />
        propose and vote on the
        <br /> environmental initiatives that
        <br />
        matter to you. Take an active
        <br /> and leading role in shaping a<br /> sustainable future.
      </TextByStep3>
      <TextByStep4>
        Raise your own adorable character through
        <br />
        <span style={{ color: '#06B4FF' }}>Dynamic NFT</span>s that '
        <span style={{ color: '#06B4FF' }}>evolve</span>' based on
        <br /> your <GreenSpan>environmental impact</GreenSpan> via staking!
      </TextByStep4>
      {/* <NFTImg src={Nft} /> */}
      <LaunchAppBtnGreen>Launch app</LaunchAppBtnGreen>
      <MidTitle>
        If you stake 100 $ <span style={{ color: '#62EBA5' }}>now</span>
      </MidTitle>
      <BenefitWrapper>
        <BenefitContainer>
          1
          <BenefitSubContainer>
            Generate a<br /> $10 donation to
            <br />
            <span style={{ color: '#62EBA5' }}>
              environmental
              <br /> charities
            </span>{' '}
            each year.
            <SproutImg src={sproutImg} />
          </BenefitSubContainer>
        </BenefitContainer>
        <BenefitContainer>
          2
          <BenefitSubContainer>
            Plant <span style={{ color: '#62EBA5' }}>12 trees</span>
            <br /> every year
            <TreeImg src={treeImg} />
          </BenefitSubContainer>
        </BenefitContainer>
        <BenefitContainer>
          3
          <BenefitSubContainer>
            Save <span style={{ color: '#62EBA5' }}>10 lives</span> from <br />
            starvation annually
            <SomeoneImg src={someoneImg} />
          </BenefitSubContainer>
        </BenefitContainer>
      </BenefitWrapper>
      <MidTitle>before unstake forever,</MidTitle>
      <MidTitleGreen>take your adorable!</MidTitleGreen>
      <div style={{ height: '400px' }} />
      <LaunchAppBtnGreen>Launch app</LaunchAppBtnGreen>
      <FaqTitle>FAQ</FaqTitle>
      <FaqWrapper>
        <FaqContainer>
          <Question>Q. Is my staked amount being donated?</Question>
          <Answer>
            No, not at all! When you stake, you receive rdv Tokens as a<br />
            representation of your staked amount. These rdv Tokens allow you to
            <br />
            reclaim your original amount whenever you choose to. 😊
          </Answer>
        </FaqContainer>
        <FaqContainer>
          <Question>Q. How do I raise my dNFT?</Question>
          <Answer>
            Your rdv monster evolves automatically based on the amount <br />{' '}
            you've staked and how long you've been staking it. Think of its
            evolution
            <br />
            as a reflection of your positive impact on the environment. 🌱
          </Answer>
        </FaqContainer>
      </FaqWrapper>
    </div>
  );
}

export default About;
