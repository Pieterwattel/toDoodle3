import { eventlisteners } from '../controller/eventlisteners';
import { domElements } from './domElements';
import { renderLogic } from './renderLogic';

class UIState {
  constructor(dataObj) {
    this.name = dataObj.name;
    this.todoDisplayContent = dataObj.todoDisplayContent;
    this.availableButtons = dataObj.availableButtons;
    this.unavailableButtons = dataObj.unavailableButtons;
  }

  static stateStorage = {
    createTodoState: new UIState({
      name: 'createTodo',
      todoDisplayContent: domElements.todoForm,
      availableButtons: [],
      unavailableButtons: [
        domElements.createNewTodoBtn,
        domElements.finishTodoBtn,
        domElements.editTodoBtn,
        domElements.removeTodoBtn,
      ],
    }),
  };

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

  updateTodoDisplayContent(content) {
    domElements.todoDisplay.innerHTML = content;
    eventlisteners.createEventlisteners();
  }
}

export { UIState };
