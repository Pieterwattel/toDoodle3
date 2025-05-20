import { domElements } from '../view/domElements';

class EventListeners {
  constructor() {
    this.createEventListeners();
  }

  static instance;

  static getSingleton() {
    if (this.instance) return this.instance;
    this.instance = new EventListeners();
    return this.instance;
  }

  DomData = class {
    constructor() {}

    static getNewTodoData() {
      const todoInputObj = {};
      const inputElements = domElements.todoCreationInputs;
      for (const element in inputElements) {
        const domNode = inputElements[element];
        const key = domNode.id;

        const value = domNode.value;
        todoInputObj[key] = value;
      }
      return todoInputObj;
    }
  };

  createEventListeners() {
    domElements.todoCreationBtn.addEventListener('click', (e) => {
      console.log(this.DomData.getNewTodoData());
      console.log(newTodoData);
    });
  }
}

const eventlisteners = EventListeners.getSingleton();

export { eventlisteners };
