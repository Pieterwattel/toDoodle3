import { format } from 'date-fns';
import { eventlisteners } from '../controller/eventlisteners';
import { todoController } from '../controller/todoController';

let domElements = {
  todoCreationInputs: {},

  todoCreationInputIds: {
    titleInput: 'titleInput',
    importanceSelector: 'importanceSelector',
    urgencySelector: 'urgencySelector',
    urgencyDateInput: 'urgencyDateInput',
    categorySelector: 'categorySelector',
    categoryInput: 'categoryInput',
    descriptionInput: 'descriptionInput',
  },

  //
  todoCreationBtn: document.getElementById('todoCreationBtn'),
  todoDisplay: document.getElementById('todoDisplay'),

  //action buttons
  createNewTodoBtn: document.getElementById('createNewTodo'),
  finishTodoBtn: document.getElementById('finishTodo'),
  editTodoBtn: document.getElementById('editTodo'),
  removeTodoBtn: document.getElementById('removeTodo'),

  block1: document.getElementById('importantUrgent'),
  block2: document.getElementById('notImportantUrgent'),
  block3: document.getElementById('importantNotUrgent'),
  block4: document.getElementById('notImportantNotUrgent'),
  //

  todoDataPopup: document.createElement('div'),

  makeDiv: function () {
    return document.createElement('div');
  },

  applyTodoForm: function () {
    this.todoDisplay.innerHTML = `<div> 
      <label for="title">- title</label>
      <input type="text" name="title" id="titleInput" >
    </div>
    <div style="flex-direction: row; justify-content: space-between;">
      <label for="importance">- importance</label>
      <select name="importance" id="importanceSelector">
        <option value="high">high</option>
        <option value="low">low</option>
      </select>
    </div>
    <div>
      <label for="urgency">- urgency</label>
      <select name="urgency" id="urgencySelector">
        <option value="1">urgent</option>
        <option value="2">soon</option>
        <option value="3">casual</option>
        <option value="4">&#8675;&#8675; give date &#8675;&#8675;</option>
      </select>
      <input type="date" name="urgencyDate" id="urgencyDateInput" >
    </div>
    <div>
      <label for="category">- category</label>
      <select name="category" id="categorySelector">
        <option value="newCategory">&#8675;&#8675; new category &#8675;&#8675;</option>
      </select>
      <input type="text" id="categoryInput">
    </div>
    <div>
      <label for="description">- description</label>
      <textarea name="description" id="descriptionInput"></textarea>
    </div>
    <div id="bottomBtns">
      <button id="todoCreationBtn">create todo</button>
      <button id="closeBtn">close&uArr;</button>
    </div>
  `;
    for (let key in this.todoCreationInputIds) {
      let value = this.todoCreationInputIds[key];
      let domElement = document.getElementById(value);
      this.todoCreationInputs[key] = domElement;
    }

    console.log(this.todoCreationInputs);

    let todoCreationBtn = document.getElementById('todoCreationBtn');
    todoCreationBtn.addEventListener('click', () => {
      const newTodoData = eventlisteners.DomData.getNewTodoData();
      const todoDataForBackend =
        todoController.formatFrontendTodoForBackend(newTodoData);
      console.log(todoDataForBackend);
      todoController.createTodo(todoDataForBackend);
    });
  },
};

export { domElements };
