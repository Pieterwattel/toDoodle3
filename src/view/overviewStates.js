import { todoController } from '../controller/todoController';

class overviewState {
  constructor(dataObj) {
    this.name = dataObj.name;
    this.fillOverview = dataObj.fillOverview;
    this.todoRequirements = dataObj.todoRequirements;
  }

  static createState(dataObj) {
    const newUIState = new overviewState(dataObj);
    return newUIState;
  }

  applyOverview(content) {
    let array = todoController.getTodosBySpecifications(this.todoRequirements);
    this.fillOverview(array);
  }

  enableDisableButtons(availableButtons, unavailableButtons) {
    renderLogic.enableDomElements(availableButtons);
    renderLogic.disableDomElements(unavailableButtons);
  }

  applyStateUI() {
    frontendController.applyStateUI(this.name);
  }
}

export { overviewState };
