import { display } from './display';

class FrontendController {
  constructor() {
    this.currentUIState = 'empty';
  }

  static instance;

  static getSingleton() {
    if (this.instance) return this.instance;
    this.instance = new FrontendController();
    return this.instance;
  }

  changeUIState(newState) {
    switch (newState) {
      case 'empty':
        display.triggerStateEmpty();
        break;
      case 'createTodo':
        display.triggerStateCreateTodo();
        break;
      case 'selectTodo':
        display.triggerStateSelectTodo();
        break;
      case 'editTodo':
        display.triggerStateEditTodo();
        break;
    }
  }
}

const frontendController = FrontendController.getSingleton();

export { frontendController };
