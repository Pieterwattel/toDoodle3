import { eventlisteners } from '../controller/eventlisteners';
import { domElements } from './domElements';
import { renderLogic } from './renderLogic';
import { frontendController } from './frontendController';
import { todoController } from '../controller/todoController';

class UIState {
  constructor(dataObj) {
    this.name = dataObj.name;
    this.todoDisplayContent = dataObj.todoDisplayContent;
    this.availableButtons = dataObj.availableButtons;
    this.unavailableButtons = dataObj.unavailableButtons;
  }

  static createState(dataObj) {
    const newUIState = new UIState(dataObj);
    return newUIState;
  }

  applyState() {
    this.enableDisableButtons(this.availableButtons, this.unavailableButtons);
    this.updateTodoDisplayContent(this.todoDisplayContent);
  }

  enableDisableButtons(availableButtons, unavailableButtons) {
    renderLogic.enableDomElements(availableButtons);
    renderLogic.disableDomElements(unavailableButtons);
  }

  updateTodoDisplayContent() {
    frontendController.fillTodoCreationDisplay(this.name);
  }
}

export { UIState };
