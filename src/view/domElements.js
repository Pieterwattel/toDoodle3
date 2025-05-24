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

  makeDiv: function () {
    return document.createElement('div');
  },

  showTodoDetails: function (todo) {
    this.todoDisplay.textContent = '';
    //title
    this.createInfoNode('title', todo.title);

    //description
    if (todo.description) {
      this.createInfoNode('description', todo.description);
    }

    //category
    this.createInfoNode('category', todo.category);

    //deadline
    if (todo.dateSpecifiedByUser) {
      const date = format(todo.doneBefore, 'E d/M/yy');
      this.createInfoNode('done before', date);
    }
  },

  createInfoNode: function (label, content) {
    const infoNodeDiv = this.makeDiv();
    const labelDiv = this.makeDiv();
    labelDiv.setAttribute('class', 'label');
    const textDiv = this.makeDiv();
    textDiv.setAttribute('class', 'text');

    labelDiv.textContent = `- ` + label;
    textDiv.textContent = content;

    this.todoDisplay.appendChild(infoNodeDiv);

    infoNodeDiv.appendChild(labelDiv);
    infoNodeDiv.appendChild(textDiv);
  },
};

export { domElements };
