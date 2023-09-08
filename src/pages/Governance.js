import React from 'react';
import Header from '../components/Header';
import backgroundImg from '../assets/images/governance.png';
import { MainContainer, BackgroundImg } from '../styles/Governance.module';

function Governance(props) {
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
      </MainContainer>
    </div>
  );
}

export default Governance;
