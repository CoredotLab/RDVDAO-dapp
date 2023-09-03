import { React, useState, useEffect } from 'react';
import Header from '../components/Header';
import backgroundImg from '../assets/images/background2.png';
import {
  MainContainer,
  BackgroundImg,
  Title,
  People,
  SubTitle,
  Highlight,
  Picker,
  PickerContainer,
  BlackContainer,
  SproutImg,
  TreeImg,
  SomeoneImg,
  ImgContainer,
  Column,
  ConfirmButton,
} from '../styles/Staking.module';
import Web3 from 'web3';
import someoneImg from '../assets/images/someone.png';
import sproutImg from '../assets/images/sprout.png';
import treeImg from '../assets/images/tree.png';
import navigationStore from '../components/NavigationStore';
import { VireoETHContract } from '../contracts/modules/VireoETH';
import { VireoXContract } from '../contracts/modules/VireoX';
import { VireoStakerContract } from '../contracts/modules/VireoStaker';

function Staking(props) {
  const [peopleAmount, setPeopleAmount] = useState('0'); // 초기값 0으로 설정
  const [stakedAmount, setStakedAmount] = useState('0'); // 초기값 0으로 설정
  const [textFieldValue, setTextFieldValue] = useState(''); // 텍스트 필드의 값 상태
  const [activeIndex, setActiveIndex] = useState(0);
  const [donation, setDonation] = useState(0);
  const [lives, setLives] = useState(0);
  const [tree, setTree] = useState(0);

  useEffect(() => {
    const vireoETHContract = new VireoETHContract();
    const vireoXContract = new VireoXContract();

    if (navigationStore.walletAddress) {
      vireoETHContract
        .balanceOf(navigationStore.walletAddress)
        .then(balance => {
          setStakedAmount(balance.toString());
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    vireoXContract
      .getTotalSupply()
      .then(totalSupply => {
        setPeopleAmount(totalSupply.toString());
      })
      .catch(error => {
        console.error('Error getting total supply:', error);
      });
  }, []);

  const handleTextFieldChange = event => {
    setTextFieldValue(event.target.value);

    setDonation(parseInt((parseInt(stakedAmount) + event.target.value) * 1.5));
    setLives(parseInt((parseInt(stakedAmount) + event.target.value) * 1.0));
    setTree(parseInt((parseInt(stakedAmount) + event.target.value) * 0.5));
  };

  const handleMaxButtonClick = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);

        // MetaMask로부터 Ethereum 주소 가져오기
        const ethereumAddress = window.ethereum.selectedAddress;

        if (ethereumAddress) {
          // 연결된 지갑의 Ethereum 잔액 가져오기
          const balance = await web3.eth.getBalance(ethereumAddress);

          // Ethereum를 wei에서 ether로 변환 (18자리 숫자를 사용)
          const balanceInEther = web3.utils.fromWei(balance, 'ether');
          console.log('Balance in Ether:', balanceInEther);

          // 텍스트 필드에 최대값으로 설정
          setTextFieldValue(balanceInEther.toString());
        } else {
          console.error('Ethereum address not found.');
        }
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    } else {
      console.error('MetaMask not found. Please install it.');
    }
  };

  const handleContainerClick = index => {
    setActiveIndex(index);
  };

  const onClickConfirm = () => {
    console.log(textFieldValue);
    console.log(Web3.utils.toWei(textFieldValue, 'ether'));
    console.log(navigationStore.walletAddress);

    const vireoStakerContract = new VireoStakerContract();

    vireoStakerContract
      .stakeEth(
        Web3.utils.toWei(textFieldValue, 'ether'),
        navigationStore.walletAddress,
        '0x9041EC7D30913afD3d55F09238B5e6CF74736888',
      )
      .then(() => {
        console.log('success');
        alert('stake succeed!');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <BackgroundImg src={backgroundImg} />
      <MainContainer>
        <Header />
        <Title>
          Sustainable healing the planet <br /> Without risk
        </Title>
        <People>
          <div>
            <Highlight>{peopleAmount} </Highlight>people
          </div>
          <div>Already joined!</div>
        </People>
        <SubTitle>Now your turn!</SubTitle>
        <Picker>
          <PickerContainer
            $active={activeIndex === 0}
            onClick={() => handleContainerClick(0)}
          >
            Stake
          </PickerContainer>
          <PickerContainer
            $active={activeIndex === 1}
            onClick={() => handleContainerClick(1)}
          >
            Unstake
          </PickerContainer>
        </Picker>
        <BlackContainer>
          <div>Already Staked</div>
          <div
            style={{
              color: 'white',
              fontWeight: '700',
              fontSize: '48px',
              paddingLeft: '250px',
            }}
          >
            {stakedAmount} eth
          </div>
        </BlackContainer>
        <BlackContainer>
          <div>Add</div>
          <input
            type="text"
            style={{
              marginLeft: '250px',
              backgroundColor: 'black', // 배경색을 검정색으로 설정
              color: 'white', // 글자색을 흰색으로 설정
              padding: '30px 0px', // 가로와 세로 패딩을 설정 (위, 아래, 왼쪽, 오른쪽)
              fontSize: '40px',
              width: '150px',
            }}
            defaultValue={textFieldValue}
            onChange={handleTextFieldChange}
          />{' '}
          <div
            style={{
              color: 'white',
              fontWeight: '700',
              fontSize: '48px',
              paddingLeft: '10px',
            }}
          >
            eth
          </div>
          <button
            onClick={handleMaxButtonClick}
            style={{
              marginLeft: '300px',
              fontSize: '30px',
              color: 'white',
              backgroundColor: 'black',
            }}
          >
            Max
          </button>
        </BlackContainer>
        <ImgContainer>
          <Column>
            <SproutImg src={sproutImg} />
            <div
              style={{ color: 'white', fontSize: '30px', paddingTop: '40px' }}
            >
              ${donation} donation
            </div>
            <div
              style={{ color: 'gray', fontSize: '24px', paddingTop: '10px' }}
            >
              for charity
            </div>
          </Column>
          <Column>
            <SomeoneImg src={someoneImg} />
            <div
              style={{ color: 'white', fontSize: '30px', paddingTop: '30px' }}
            >
              {lives} lives
            </div>
            <div
              style={{ color: 'gray', fontSize: '24px', paddingTop: '10px' }}
            >
              from starvation
            </div>
          </Column>
          <Column>
            <TreeImg src={treeImg} />
            <div
              style={{ color: 'white', fontSize: '30px', paddingTop: '10px' }}
            >
              {tree} trees
            </div>
            <div
              style={{ color: 'gray', fontSize: '24px', paddingTop: '10px' }}
            >
              on amazon
            </div>
          </Column>
        </ImgContainer>
        <ConfirmButton onClick={onClickConfirm}>Confirm</ConfirmButton>
      </MainContainer>
    </div>
  );
}

export default Staking;
