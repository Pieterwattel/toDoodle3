import { domElements } from '../view/domElements';
import { todoController } from './todoController';
import { frontendController } from '../view/frontendController';
import { renderLogic } from '../view/renderLogic';
import { overviewStateManager, UIStateManager } from '../view/UIStateManager';
import { frontendUtils } from '../view/frontendUtils';
import { overviewState } from '../view/overviewStates';

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
      const inputElements = domElements.todoFormElements;
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

  applyTodoCreationFormListeners() {
    domElements.todoFormElements.urgencySelector.addEventListener(
      'change',
      (e) => {
        if (e.target.value == 4) {
          domElements.todoFormElements.urgencyDateInput.removeAttribute(
            'disabled',
          );
        } else {
          domElements.todoFormElements.urgencyDateInput.setAttribute(
            'disabled',
            true,
          );
        }
      },
    );

    if (domElements.todoFormElements.categorySelector.value == 'newCategory') {
      domElements.todoFormElements.categoryInput.removeAttribute('disabled');
    }

    domElements.todoFormElements.categorySelector.addEventListener(
      'change',
      (e) => {
        if (e.target.value == 'newCategory') {
          domElements.todoFormElements.categoryInput.removeAttribute(
            'disabled',
          );
        } else {
          domElements.todoFormElements.categoryInput.setAttribute(
            'disabled',
            true,
          );
        }
      },
    );

    console.log(domElements.todoForm.dataset);
    domElements.todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newTodoData = eventlisteners.DomData.getNewTodoData();
      const todoDataForBackend =
        todoController.formatFrontendTodoForBackend(newTodoData);
      todoController.createTodo(todoDataForBackend);
      renderLogic.placeEmptyTodoForm();
      UIStateManager.stateStorage.createTodoState.applyState();

      const currentOverview = overviewState.currentOverviewState;
      overviewStateManager.overviewStorage[currentOverview].applyOverview();
    });

    domElements.closeBtn.addEventListener('click', (e) => {
      UIStateManager.stateStorage.emptyState.applyState();
    });
  }
}

const eventlisteners = EventListeners.getSingleton();

export { eventlisteners };
