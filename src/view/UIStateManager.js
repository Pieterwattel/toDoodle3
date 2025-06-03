import { UIState } from './UIStates';
import { domElements } from './domElements';

const UIStateManager = {
  initializeStates: function () {
    const createTodoStateData = {
      name: 'createTodo',
      todoDisplayContent: domElements.todoForm,
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
      todoDisplayContent: '',
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
      todoDisplayContent: '',
      availableButtons: [
        domElements.finishTodoBtn,
        domElements.editTodoBtn,
        domElements.removeTodoBtn,
      ],
      unavailableButtons: [domElements.createNewTodoBtn],
    };
    let todoSelectedState = UIState.createState(todoSelectedStateData);
    UIStateManager.stateStorage.todoSelectedState = todoSelectedState;
  },

  stateStorage: {},
};

export { UIStateManager };
