import React from 'react';
import Header from '../components/Header';
import backgroundImg from '../assets/images/proposal.png';
import { MainContainer, BackgroundImg } from '../styles/Governance.module';

function Proposal(props) {
  return (
    <div>
      <BackgroundImg src={backgroundImg} />
      <MainContainer>
        <Header />
      </MainContainer>
    </div>
  );
}

export default Proposal;
