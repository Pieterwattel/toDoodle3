import { format } from 'date-fns';

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

  block1: document.getElementById('importantUrgent'),
  block2: document.getElementById('notImportantUrgent'),
  block3: document.getElementById('importantNotUrgent'),
  block4: document.getElementById('notImportantNotUrgent'),
  //

  todoDataPopup: document.createElement('div'),

  getDiv: function () {
    return document.createElement('div');
  },

  showTodoDetails: function (todo) {
    this.todoDisplay.textContent = '';
    //title

    const titleDiv = this.getDiv();
    titleDiv.textContent = `
    - title\n
    ${todo.title}`;
    this.todoDisplay.appendChild(titleDiv);

    //description
    const descriptionDiv = this.getDiv();
    descriptionDiv.textContent = `
    - description:\n
    ${todo.description}`;
    this.todoDisplay.appendChild(descriptionDiv);

    //category
    const categoryDiv = this.getDiv();
    categoryDiv.textContent = `
    - category:\n
    ${todo.category}`;
    this.todoDisplay.appendChild(categoryDiv);

    //deadline
    if (todo.dateSpecifiedByUser) {
      const doneBeforeDiv = this.getDiv();
      const date = format(todo.doneBefore, 'E d/M/yy');
      doneBeforeDiv.textContent = `
    - last day before deadline:\n
    ${date}`;
      this.todoDisplay.appendChild(doneBeforeDiv);
    }
  },
};

export { domElements };
