import { domElements } from './domElements';

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
    this.currentUIState = newState;
    // UIStateManagement.runNewUIState;
  }

  updateTodoOverview() {}

  fillTodoCreationDisplay(state) {
    console.log(state);
    if (state == 'createTodo') {
      domElements.todoDisplay.innerHTML = domElements.todoCreationForm;
    }
  }
}

const frontendController = FrontendController.getSingleton();

export { frontendController };
