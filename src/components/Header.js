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
        await window.ethereum
          .request({
            method: 'eth_requestAccounts',
            params: [],
          })
          .then(function (accounts) {
            console.log('accounts', accounts);
          })
          .catch(function (error) {
            console.error('eth_requestAccounts ERROR::', error);
          });

        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();

        if (accounts.length > 0) {
          navigationStore.setWalletAddress(accounts[0]);
          navigate('/staking');
        }
        // isConnected
        const isConnected = window.ethereum.isConnected();
        console.log('isConnected', isConnected);

        // request permission
        await window.ethereum
          .request({
            method: 'wallet_requestPermissions',
            params: [
              {
                eth_accounts: {},
              },
            ],
          })
          .then(permissions => {
            const accountsPermission = permissions.find(
              permission => permission.parentCapability === 'eth_accounts',
            );
            if (accountsPermission) {
              console.log('eth_accounts permission successfully requested!');
            }
          })
          .catch(error => {
            if (error.code === 4001) {
              // EIP-1193 userRejectedRequest error
              console.log('Permissions needed to continue.');
            } else {
              console.error(error);
            }
          });
      } catch (error) {
        console.error('Error connecting wallet:', error);
        navigationStore.setWalletAddress(null); // 연결 끊김
      }
    } else {
      console.error('MetaMask not found. Please install it.');
      navigationStore.setWalletAddress(null); // 연결 끊김
    }
  };

  const handleLaunchAppBtnClick = () => {
    if (navigationStore.activeMenu !== 'staking') {
      navigate('/staking');
      navigationStore.setActiveMenu('staking');
    } else {
      if (navigationStore.walletAddress) {
        navigate('/staking');
      } else {
        connectWallet();
      }
    }
  };

  return (
    <div>
      <HeaderContainer>
        <Logo src={logo} />
        <StyledMenuItem
          onClick={() => handleMenuItemClick('about')}
          $active={navigationStore.activeMenu === 'about'}
        >
          about
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => handleMenuItemClick('staking')}
          $active={navigationStore.activeMenu === 'staking'}
        >
          staking
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => handleMenuItemClick('governance')}
          $active={navigationStore.activeMenu === 'governance'}
        >
          governance
        </StyledMenuItem>
        <LaunchAppBtn onClick={handleLaunchAppBtnClick}>
          {navigationStore.activeMenu !== 'staking'
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
