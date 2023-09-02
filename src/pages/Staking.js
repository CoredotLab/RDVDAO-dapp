import { React, useState } from 'react';
import Header from '../components/Header';
import backgroundImg from '../assets/images/background.png';
import { MainContainer, BackgroundImg } from '../styles/Staking.module';
import Web3 from 'web3';
import navigationStore from '../components/NavigationStore';

function Staking(props) {
  const [peopleAmount, setPeopleAmount] = useState(0); // 초기값 0으로 설정
  const [stakedAmount, setStakedAmount] = useState(0); // 초기값 0으로 설정
  const [textFieldValue, setTextFieldValue] = useState(''); // 텍스트 필드의 값 상태

  const handleTextFieldChange = event => {
    // 텍스트 필드의 값이 변경될 때 호출되는 함수
    setTextFieldValue(event.target.value);
  };

  const handleMaxButtonClick = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();

        if (accounts.length > 0) {
          // Goerli 테스트넷의 Ethereum 주소
          const goerliAddress = navigationStore.wallertAddress; // 자신의 Goerli 주소로 바꿔주세요

          // 연결된 지갑의 Goerli 이더 잔액 가져오기
          const balance = await web3.eth.getBalance(goerliAddress);

          // 이더를 wei에서 ether로 변환 (18자리 숫자를 사용)
          const balanceInEther = web3.utils.fromWei(balance, 'ether');

          // 텍스트 필드에 최대값으로 설정
          setTextFieldValue(balanceInEther);
        }
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    } else {
      console.error('MetaMask not found. Please install it.');
    }
  };

  return (
    <div>
      <BackgroundImg src={backgroundImg} />
      <MainContainer>
        <Header />
        <div>
          Sustainable healing the planet <br /> Without risk
        </div>
        <div>
          <div>${peopleAmount} people</div>
          <div>Already joined</div>
        </div>
        <div>Now your turn</div>
        <div>
          <div>Stake</div>
          <div>Unstake</div>
        </div>
        <div>Already Staked</div>
        <div>{stakedAmount}</div>
        <div>add</div>
        <div>
          <input type="text" defaultValue={textFieldValue} />
          <button onClick={handleMaxButtonClick}>Max</button>
        </div>
      </MainContainer>
    </div>
  );
}

export default Staking;
