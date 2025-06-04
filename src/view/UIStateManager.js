import { UIState } from './UIStates';
import { domElements } from './domElements';
import { frontendController } from './frontendController';

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
    let createTodoState = UIState.createState(createTodoStateData);
    UIStateManager.stateStorage.createTodoState = createTodoState;

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
    let emptyState = UIState.createState(emptyStateData);
    UIStateManager.stateStorage.emptyState = emptyState;

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
    let todoSelectedState = UIState.createState(todoSelectedStateData);
    UIStateManager.stateStorage.todoSelectedState = todoSelectedState;

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
    let editTodoState = UIState.createState(editTodoStateData);
    UIStateManager.stateStorage.editTodoState = editTodoState;
  },

  stateStorage: {},
};

export { UIStateManager };
