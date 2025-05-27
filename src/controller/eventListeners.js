import { domElements } from '../view/domElements';
import { todoController } from './todoController';
import { display } from '../view/display';
import { frontendController } from '../view/frontendController';
import { renderLogic } from '../view/renderLogic';

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
    //make the todo button click
    domElements.todoCreationBtn.addEventListener('click', (e) => {
      const newTodoData = this.DomData.getNewTodoData();
      const todoDataForBackend =
        todoController.formatFrontendTodoForBackend(newTodoData);
      todoController.createTodo(todoDataForBackend);

      //useractions switch states buttons
      console.log(domElements.createNewTodoBtn);
      domElements.createNewTodoBtn.addEventListener('click', () => {
        frontendController.changeUIState('createTodo');
      });
    });
  }

  addTodoListListener(element, node) {
    node.setAttribute('title', 'click to edit, or for more info');

    node.addEventListener('click', () => {
      renderLogic.showTodoDetails(element);
    });
  }
}

const eventlisteners = EventListeners.getSingleton();

export { eventlisteners };
