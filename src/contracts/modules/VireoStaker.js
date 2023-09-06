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
      injectProvider: true,
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
    // metaamsk connect first call eth_requestAccounts
    // https://docs.metamask.io/guide/ethereum-provider.html#methods-new-api
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!', window.ethereum.isMetaMask);
      try {
        await this.provider
          .request({ method: 'eth_requestAccounts' })
          .then(function (accounts) {
            console.log('accounts', accounts);
          })
          .catch(function (error) {
            console.error('eth_requestAccounts ERROR::', error);
          });
        console.log(
          "MetaMask's Ethereum address:",
          window.ethereum.selectedAddress,
        );
        const fromAddress = window.ethereum.selectedAddress;
        await this.contract.methods.stakeETH().send({
          from: fromAddress,
          value: value,
          to: to,
          // gasLimit: '0x5028',
          // maxPriorityFeePerGas: '0x3b9aca00',
          // maxFeePerGas: '0x2540be400',
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
    } else {
      console.log('MetaMask is not installed!');
    }
  }
}
