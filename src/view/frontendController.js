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
}

const frontendController = FrontendController.getSingleton();

export { frontendController };
