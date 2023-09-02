import { React, useState } from 'react';
import {
  HeaderContainer,
  GreenContainer,
  LaunchAppBtn,
  StyledMenuItem,
} from '../styles/Header.module';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import navigationStore from './NavigationStore';

function Header() {
  const navigate = useNavigate('/');
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

  return (
    <div>
      <HeaderContainer>
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
      </HeaderContainer>
    </div>
  );
}

export default observer(Header);
