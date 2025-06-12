import { eventlisteners } from '../controller/eventlisteners';
import { domElements } from './domElements';
import { renderLogic } from './renderLogic';
import { frontendController } from './frontendController';
import { todoController } from '../controller/todoController';
import { UIStateManager } from './stateManager';

class UIState {
  constructor(dataObj) {
    this.name = dataObj.name;
    this.todoFormContent = dataObj.todoFormContent;
    this.availableButtons = dataObj.availableButtons;
    this.unavailableButtons = dataObj.unavailableButtons;
  }

  static createState(dataObj) {
    console.log('createstate ' + dataObj.name);
    const newUIState = new UIState(dataObj);
    UIStateManager.UIStateStorage[dataObj.name] = newUIState;
  }

  applyState() {
    UIStateManager.currentUIState = this.name;
    this.enableDisableButtons(this.availableButtons, this.unavailableButtons);
    this.applyStateUI(this.todoFormContent);
  }

  enableDisableButtons(availableButtons, unavailableButtons) {
    renderLogic.enableDomElements(availableButtons);
    renderLogic.disableDomElements(unavailableButtons);
  }

  applyStateUI() {
    frontendController.applyStateUI(this.name);
  }
}

export { UIState };
