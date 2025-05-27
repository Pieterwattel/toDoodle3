class UIState {
  constructor(dataObj) {
    this.name = dataObj.name;
    this.todoDisplayContent = dataObj.todoDisplayContent;
    this.availableButtons = dataObj.availableButtons;
  }

  static stateStorage = [];

  static create(dataObj) {
    const newUIState = new UIState(dataObj);
    return newUIState;
  }

  store() {
    this.stateStorage.push(todo);
  }
}

export { UIState };
