import { makeObservable, observable, action } from 'mobx';

class NavigationStore {
  activeMenu = 'about';

  constructor() {
    makeObservable(this, {
      activeMenu: observable,
      setActiveMenu: action,
    });
  }

  setActiveMenu(menuItem) {
    this.activeMenu = menuItem;
  }
}

const navigationStore = new NavigationStore();
export default navigationStore;
