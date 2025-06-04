import { eventlisteners } from '../controller/eventlisteners';
import { domElements } from './domElements';
import { frontendUtils } from './frontendUtils';
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

  applyStateUI(state) {
    console.log(state);
    if (state == 'createTodo') {
      renderLogic.placeEmptyTodoForm();
      domElements.makeTodoFormNodes();
      eventlisteners.applyTodoCreationFormListeners();
    } else if (state == 'empty') {
      domElements.todoForm.innerHTML = '';
    }
  }

  applyEisenhowerMatrix(array) {
    const orderedArray = frontendUtils.orderIntoEisenhowerMatrix(array);
    renderLogic.renderEisenhowerMatrix(orderedArray);
  }
}

const frontendController = FrontendController.getSingleton();

export { frontendController };
