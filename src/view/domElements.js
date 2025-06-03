import { format } from 'date-fns';
import { eventlisteners } from '../controller/eventlisteners';

let domElements = {
  todoCreationInputs: {
    titleInput: document.getElementById('titleInput'),
    importanceSelector: document.getElementById('importanceSelector'),
    urgencySelector: document.getElementById('urgencySelector'),
    urgencyDateInput: document.getElementById('urgencyDateInput'),
    categorySelector: document.getElementById('categorySelector'),
    categoryInput: document.getElementById('categoryInput'),
    descriptionInput: document.getElementById('descriptionInput'),
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
    console.log(this.todoDisplay);
    this.todoDisplay.innerHTML = `<div> 
      <label for="title">- title</label>
      <input type="text" name="title" id="titleInput" value="hmmm">
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
      <input type="date" name="urgencyDate" id="urgencyDateInput" value="2005-05-22">
    </div>
    <div>
      <label for="category">- category</label>
      <select name="category" id="categorySelector">
        <option value="newCategory">&#8675;&#8675; new category &#8675;&#8675;</option>
      </select>
      <input type="text" id="categoryInput" value="newCategoryName">
    </div>
    <div>
      <label for="description">- description</label>
      <textarea name="description" id="descriptionInput"> test description</textarea>
    </div>
    <div id="bottomBtns">
      <button id="todoCreationBtn">create todo</button>
      <button id="closeBtn">close&uArr;</button>
    </div>
  `;
  },
};

export { domElements };
