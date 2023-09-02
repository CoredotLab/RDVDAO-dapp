import { React, useState, useEffect } from 'react';
import {
  HeaderContainer,
  GreenContainer,
  LaunchAppBtn,
  StyledMenuItem,
  Logo,
} from '../styles/Header.module';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import navigationStore from './NavigationStore';
import Web3 from 'web3';
import logo from '../assets/images/logo.png';

function Header() {
  const navigate = useNavigate();

  const handleMenuItemClick = menuItem => {
    navigationStore.setActiveMenu(menuItem);
    switch (menuItem) {
      case 'about':
        navigate('/');
        break;
      case 'staking':
        navigate('/staking');
        break;
      case 'governance':
        navigate('/governance');
        break;
      default:
        break;
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        window.ethereum.request({ method: 'eth_requestAccounts', params: [] });

        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();

        if (accounts.length > 0) {
          navigationStore.setWalletAddress(accounts[0]);
          navigate('/staking');
        }
      } catch (error) {
        console.error('Error connecting wallet:', error);
        navigationStore.setWalletAddress(null); // 연결 끊김
      }
    } else {
      console.error('MetaMask not found. Please install it.');
      navigationStore.setWalletAddress(null); // 연결 끊김
    }
  };

  return (
    <div>
      <HeaderContainer>
        <Logo src={logo} />
        <StyledMenuItem
          onClick={() => handleMenuItemClick('about')}
          active={navigationStore.activeMenu === 'about'}
        >
          about
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => handleMenuItemClick('staking')}
          active={navigationStore.activeMenu === 'staking'}
        >
          staking
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => handleMenuItemClick('governance')}
          active={navigationStore.activeMenu === 'governance'}
        >
          governance
        </StyledMenuItem>
        <LaunchAppBtn
          onClick={navigationStore.walletAddress ? null : connectWallet}
        >
          {navigationStore.activeMenu === 'about'
            ? 'Launch app'
            : navigationStore.walletAddress
            ? `${navigationStore.walletAddress.substring(0, 6)}...`
            : 'Connect Wallet'}
        </LaunchAppBtn>
      </HeaderContainer>
    </div>
  );
}

export default observer(Header);
