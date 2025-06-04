import { eventlisteners } from '../controller/eventlisteners';
import { domElements } from './domElements';
import { renderLogic } from './renderLogic';

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
      renderLogic.placeEmptyTodoForm();
      domElements.makeTodoFormNodes();
      eventlisteners.applyTodoFormListeners();
    } else if (state == 'empty') {
      domElements.todoForm.innerHTML = '';
    }
  }
}

const frontendController = FrontendController.getSingleton();

export { frontendController };
