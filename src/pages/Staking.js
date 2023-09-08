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
import axios from 'axios';

function Staking(props) {
  const [peopleAmount, setPeopleAmount] = useState('0'); // 초기값 0으로 설정
  const [stakedAmount, setStakedAmount] = useState('0'); // 초기값 0으로 설정
  const [textFieldValue, setTextFieldValue] = useState('0'); // 텍스트 필드의 값 상태
  const [stakingAmount, setStakingAmount] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [donation, setDonation] = useState(0);
  const [lives, setLives] = useState(0);
  const [tree, setTree] = useState(0);
  const [treasuryAmount, setTreasuryAmount] = useState('100');
  const [apy, setApy] = useState('');

  const vireoETHContract = new VireoETHContract();
  const vireoXContract = new VireoXContract();

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

    vireoXContract
      .getTotalSupply()
      .then(totalSupply => {
        setPeopleAmount(totalSupply.toString());
      })
      .catch(error => {
        console.error('Error getting total supply:', error);
      });

    vireoETHContract
      .totalSupply()
      .then(totalSupply => {
        // total supply는 wei인데 eth로 바꾸고 eth의 $ 환율을 곱함
        const amount = (totalSupply / 1000000000000000000) * ethCurrencyPrice;
        setStakingAmount(amount.toFixed(0));
      })
      .catch(error => {
        console.error('Error getting total supply:', error);
      });
  }, []);

  useEffect(() => {
    console.log('useEffect');
    if (window.ethereum) {
      console.log('useEffect2');

      requestAccounts();
    }
  }, []);

  const requestAccounts = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum
          .request({
            method: 'eth_requestAccounts',
            params: [],
          })
          .then(function (accounts) {
            console.log('accounts', accounts);
            navigationStore.setWalletAddress(accounts[0]);
          })
          .catch(function (error) {
            console.error('eth_requestAccounts ERROR::', error);
          });
      } catch (error) {
        console.error('Error connecting wallet:', error);
        navigationStore.setWalletAddress(null); // 연결 끊김
      }
    }
  };

  useEffect(() => {
    if (navigationStore.walletAddress === null) {
      return;
    }
    vireoETHContract
      .balanceOf(navigationStore.walletAddress)
      .then(balance => {
        // balance는 wei 단위이므로 ether로 변환
        balance = Web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance).toFixed(3);
        setStakedAmount(balance.toString());
        handleTextFieldChange({ target: { value: '' } });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [navigationStore.walletAddress]);

  const handleTextFieldChange = event => {
    setTextFieldValue(event.target.value);
    console.log(typeof parseInt(event.target.value));
    console.log(event.target.value);
    if (event.target.value === '') {
      setDonation(parseInt(parseInt(stakedAmount) * 1.5));
      setLives(parseInt(parseInt(stakedAmount) * 1.0));
      setTree(parseInt(parseInt(stakedAmount) * 0.5));
      return;
    }

    setDonation(
      parseInt((parseInt(stakedAmount) + parseInt(event.target.value)) * 1.5),
    );
    setLives(
      parseInt((parseInt(stakedAmount) + parseInt(event.target.value)) * 1.0),
    );
    setTree(
      parseInt((parseInt(stakedAmount) + parseInt(event.target.value)) * 0.5),
    );
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
        window.location.reload();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

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
        <Title>
          Sustainable healing the planet <br /> Without risk
        </Title>
        <People>
          <div>
            <Highlight>{stakingAmount} $ </Highlight>
          </div>
          <div>already staked!</div>
        </People>
        <SubTitle>Now your turn!</SubTitle>
        <Picker>
          <PickerContainer
            active={activeIndex === 0}
            onClick={() => handleContainerClick(0)}
          >
            Stake
          </PickerContainer>
          <PickerContainer
            active={activeIndex === 1}
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
              fontWeight: '700',
              textAlign: 'right',
              border: '1px solid white',
              borderRadius: '25px',
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
              marginLeft: '100px',
              fontSize: '30px',
              color: 'white',
              backgroundColor: 'black',
            }}
          >
            Max
          </button>
        </BlackContainer>
        <div
          style={{
            color: 'white',
            fontWeight: '700',
            fontSize: '18px',
            textAlign: 'right',
            paddingRight: '400px',
            paddingTop: '10px',
          }}
        >
          * APY {apy} %
        </div>
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
