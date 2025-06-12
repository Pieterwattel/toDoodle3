import { UIState } from './UIStates';
import { domElements } from './domElements';
import { frontendController } from './frontendController';
import { overviewState } from './overviewStates';

const UIStateManager = {
  initializeStates: function () {
    const createTodoStateData = {
      name: 'createTodo',
      todoFormContent: frontendController.makeTodoCreationDisplay,
      availableButtons: [],
      unavailableButtons: [
        domElements.createNewTodoBtn,
        domElements.finishTodoBtn,
        domElements.editTodoBtn,
        domElements.removeTodoBtn,
      ],
    };

    UIState.createState(createTodoStateData);

    const emptyStateData = {
      name: 'empty',
      todoFormContent: '',
      availableButtons: [domElements.createNewTodoBtn],
      unavailableButtons: [
        domElements.finishTodoBtn,
        domElements.editTodoBtn,
        domElements.removeTodoBtn,
      ],
    };
    UIState.createState(emptyStateData);

    const todoSelectedStateData = {
      name: 'todoSelected',
      todoFormContent: '',
      availableButtons: [
        domElements.createNewTodoBtn,
        domElements.finishTodoBtn,
        domElements.editTodoBtn,
        domElements.removeTodoBtn,
      ],
      unavailableButtons: [],
    };
    UIState.createState(todoSelectedStateData);

    const editTodoStateData = {
      name: 'editTodo',
      todoFormContent: '',
      availableButtons: [],
      unavailableButtons: [
        domElements.createNewTodoBtn,
        domElements.finishTodoBtn,
        domElements.editTodoBtn,
        domElements.removeTodoBtn,
      ],
    };
    UIState.createState(editTodoStateData);
  },

  currentUIState: '',
  UIStateStorage: {},
};

const overviewStateManager = {
  initializeStates: function () {
    const createTodoStateData = {
      name: 'eisenhowerMatrix',
      fillOverview: frontendController.applyEisenhowerMatrix,
      todoRequirements: { returnCompleteArray: true },
    };
    let eisenhowerMatrix = overviewState.createState(createTodoStateData);
    this.overviewStorage.eisenhowerMatrix = eisenhowerMatrix;
  },

  currentOverviewState: '',
  overviewStorage: {},
};

export { UIStateManager, overviewStateManager };
