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
import { VireoETHContract } from '../contracts/modules/VireoETH';
import { BigInteger } from 'big-integer';
import axios from 'axios';

function About() {
  var [stakersAmount, setStakersAmount] = useState('');
  var [stakingAmount, setStakingAmount] = useState('');
  var amount = 0;
  var [treasuryAmount, setTreasuryAmount] = useState('100');
  var [apy, setApy] = useState('');
  const navigate = useNavigate('/staking');

  useEffect(() => {
    let ethCurrencyPrice = 1600;
    // axios로 api에서 treasury amount 가져오기
    const treasuryApiUrl =
      'https://stake.testnet.fi/api/rewards?address=0x9041EC7D30913afD3d55F09238B5e6CF74736888&currency=usd&onlyRewards=false&archiveRate=true&skip=0&limit=10';

    axios.get(treasuryApiUrl).then(response => {
      // console.log('response', response);
      const data = response.data;
      // console.log('data', data);
      const ethRewards = data['totals']['ethRewards'];
      // console.log('ethRewards', ethRewards);
      const ethCurrencyPriceInStr = data['stETHCurrencyPrice']['usd'];
      ethCurrencyPrice = parseFloat(ethCurrencyPriceInStr);

      setTreasuryAmount(
        (
          (parseInt(ethRewards) / 1000000000000000000) *
          ethCurrencyPrice
        ).toFixed(2),
      );

      const averageApy = data['averageApr'];
      setApy(parseFloat(averageApy).toFixed(2));
    });

    const vireoXContract = new VireoXContract();

    vireoXContract
      .getTotalSupply()
      .then(totalSupply => {
        setStakersAmount(totalSupply.toString());
      })
      .catch(error => {
        console.error('Error getting total supply:', error);
      });

    const vireoEthContract = new VireoETHContract();

    vireoEthContract
      .totalSupply()
      .then(totalSupply => {
        // total supply는 wei인데 eth로 바꾸고 eth의 $ 환율을 곱함
        amount = (totalSupply / 1000000000000000000) * ethCurrencyPrice;
        setStakingAmount(amount.toFixed(2));
      })
      .catch(error => {
        console.error('Error getting total supply:', error);
      });
  }, []);

  return (
    <div
      style={{
        width: '1440px',
        margin: '0 auto',
      }}
    >
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
        >
          Launch app
        </LaunchAppBtn>
        <DataWrapper>
          <SideText>You can</SideText>
          <DataContainer>
            <StakingDataContainer>
              <DataSubContainer>
                <Data>{stakingAmount}$</Data>Total Staked
              </DataSubContainer>
            </StakingDataContainer>
            <StakingDataContainer>
              <DataSubContainer>
                <Data>{treasuryAmount}$</Data>Treasury
              </DataSubContainer>
              <DataSubContainer>
                <Data>{apy}%</Data>Estimated APY
              </DataSubContainer>
            </StakingDataContainer>
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
      <LaunchAppBtnGreen
        onClick={() => {
          navigationStore.setActiveMenu('staking');
          navigate('/staking');
        }}
      >
        Launch app
      </LaunchAppBtnGreen>
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
      <LaunchAppBtnGreen
        onClick={() => {
          navigationStore.setActiveMenu('staking');
          navigate('/staking');
        }}
      >
        Launch app
      </LaunchAppBtnGreen>
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
