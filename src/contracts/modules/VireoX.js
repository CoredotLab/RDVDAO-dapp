import Web3 from 'web3';

// 스마트 계약 ABI 및 주소를 가져옵니다
const VireoX = require('../abis/VireoX.json');
const contractAddress = '0xdd0bab6f636c57825164a01ac130431F06F9F561';
const infuraUrl = process.env.REACT_APP_INFURA_MAINNET;

export class VireoXContract {
  constructor() {
    this.provider = new Web3.providers.HttpProvider(infuraUrl);
    this.web3 = new Web3(this.provider);
    this.contract = new this.web3.eth.Contract(VireoX.abi, contractAddress);
  }

  getContract() {
    return this.contract;
  }

  async getTotalSupply() {
    const totalSupply = await this.contract.methods.totalSupply().call();
    return totalSupply.toString();
  }
}
