import Web3 from 'web3';

// 스마트 계약 ABI 및 주소를 가져옵니다
const VireoETH = require('../abis/VireoETH.json');
const contractAddress = '0x05E81b53369E70e7243413e992d2208D5AEe7977';
const infuraUrl = process.env.REACT_APP_INFURA_MAINNET;

export class VireoETHContract {
  constructor() {
    this.provider = new Web3.providers.HttpProvider(infuraUrl);
    this.web3 = new Web3(this.provider);
    this.contract = new this.web3.eth.Contract(VireoETH.abi, contractAddress);
  }

  getContract() {
    return this.contract;
  }

  async balanceOf(account) {
    try {
      const balance = await this.contract.methods.balanceOf(account).call();
      return balance;
    } catch (error) {
      console.error('Error fetching balance:', error);
      throw error;
    }
  }

  async totalSupply() {
    try {
      const totalSupply = await this.contract.methods.totalSupply().call();
      return totalSupply;
    } catch (error) {
      console.error('Error fetching total supply:', error);
      throw error;
    }
  }
}
