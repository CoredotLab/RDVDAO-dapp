import Web3 from 'web3';
import { MetaMaskSDK } from '@metamask/sdk';
import detectEthereumProvider from '@metamask/detect-provider';

// 스마트 계약 ABI 및 주소를 가져옵니다
const VireoStaker = require('../abis/VireoStaker.json');
const contractAddress = '0x9041EC7D30913afD3d55F09238B5e6CF74736888';
const infuraUrl = process.env.REACT_APP_INFURA_MAINNET;

export class VireoStakerContract {
  constructor() {
    const options = {
      injectProvider: false,
    };
    const MMSDK = new MetaMaskSDK(options);
    this.provider = MMSDK.getProvider();
    // this.provider = new Web3.providers.HttpProvider(infuraUrl);
    this.web3 = new Web3(this.provider);
    this.contract = new this.web3.eth.Contract(
      VireoStaker.abi,
      contractAddress,
    );
  }

  getContract() {
    return this.contract;
  }

  async stakeEth(value, from, to) {
    // if (window.ethereum) {
    //   this.web3 = new Web3(window.ethereum);
    //   try {
    //     await this.contract.methods.stakeETH().send({
    //       from: from,
    //       value: value,
    //       to: to,
    //       gasLimit: '0x5028',
    //       maxPriorityFeePerGas: '0x3b9aca00',
    //       maxFeePerGas: '0x2540be400',
    //     });
    //   } catch (error) {
    //     console.error(error);
    //     throw error;
    //   }
    // } else

    if (typeof window.web3 !== 'undefined') {
      this.web3 = new Web3(window.web3.currentProvider);
      try {
        await this.contract.methods.stakeETH().send({
          from: from,
          value: value,
          to: to,
          gasLimit: '0x5028',
          maxPriorityFeePerGas: '0x3b9aca00',
          maxFeePerGas: '0x2540be400',
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  }
}
