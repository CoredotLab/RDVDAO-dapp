import { makeObservable, observable, action } from 'mobx';

class NavigationStore {
  activeMenu = 'about';
  walletAddress = null;

  setActiveMenu(menuItem) {
    this.activeMenu = menuItem;
  }

  setWalletAddress(walletAddress) {
    this.walletAddress = walletAddress;
  }
}

const navigationStore = new NavigationStore();
export default navigationStore;
