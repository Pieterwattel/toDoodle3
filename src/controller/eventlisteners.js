import { domElements } from '../view/domElements';
import { todoController } from './todoController';
import { frontendController } from '../view/frontendController';
import { renderLogic } from '../view/renderLogic';
import { UIStateManager } from '../view/UIStateManager';
import { frontendUtils } from '../view/frontendUtils';

class EventListeners {
  constructor() {}

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

  initializeEventListeners() {
    //useractions switch states buttons
    domElements.createNewTodoBtn.addEventListener('click', () => {
      UIStateManager.stateStorage.createTodoState.applyState();
    });
  }

  updateEventlisteners() {
    //make the todo button click
    if (document.getElementById('todoCreationBtn')) {
      domElements.todoCreationBtn = document.getElementById('todoCreationBtn');
      domElements.todoCreationBtn.addEventListener('click', (e) => {
        const newTodoData = this.DomData.getNewTodoData();
        const todoDataForBackend =
          todoController.formatFrontendTodoForBackend(newTodoData);
        todoController.createTodo(todoDataForBackend);
      });
    }

    if (document.getElementById('todoSaveEditBtn')) {
      domElements.todoSaveEditBtn = document.getElementById('todoSaveEditBtn');
      domElements.todoSaveEditBtn.addEventListener('click', (e) => {
        const newTodoData = this.DomData.getNewTodoData();
        const todoDataForBackend =
          todoController.formatFrontendTodoForBackend(newTodoData);
        todoController.createTodo(todoDataForBackend);
      });
    }

    if (domElements.closeBtn) {
      domElements.closeBtn.addEventListener('click', (e) => {
        alert('yes');
        UIStateManager.stateStorage.emptyState.applyState();
      });
    }
  }

  addTodoListListener(element, node) {
    node.setAttribute('title', 'click to edit, or for more info');

    node.addEventListener('click', () => {
      UIStateManager.stateStorage.todoSelectedState.applyState();
      renderLogic.showTodoDetails(element);
      frontendUtils.todoBeingEdited = element;
      console.log(frontendUtils.todoBeingEdited);
    });
  }

  applyTodoFormListeners() {
    domElements.todoCreationInputs.urgencySelector.addEventListener(
      'change',
      (e) => {
        if (e.target.value == 4) {
          domElements.todoCreationInputs.urgencyDateInput.removeAttribute(
            'disabled',
          );
        } else {
          domElements.todoCreationInputs.urgencyDateInput.setAttribute(
            'disabled',
            true,
          );
        }
      },
    );

    if (
      domElements.todoCreationInputs.categorySelector.value == 'newCategory'
    ) {
      domElements.todoCreationInputs.categoryInput.removeAttribute('disabled');
    }

    domElements.todoCreationInputs.categorySelector.addEventListener(
      'change',
      (e) => {
        if (e.target.value == 'newCategory') {
          domElements.todoCreationInputs.categoryInput.removeAttribute(
            'disabled',
          );
        } else {
          domElements.todoCreationInputs.categoryInput.setAttribute(
            'disabled',
            true,
          );
        }
      },
    );

    domElements.todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newTodoData = eventlisteners.DomData.getNewTodoData();
      const todoDataForBackend =
        todoController.formatFrontendTodoForBackend(newTodoData);
      console.log(todoDataForBackend);
      todoController.createTodo(todoDataForBackend);
    });
  }
}

const eventlisteners = EventListeners.getSingleton();

export { eventlisteners };
