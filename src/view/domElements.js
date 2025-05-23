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

  block1: document.getElementById('importantUrgent'),
  block2: document.getElementById('notImportantUrgent'),
  block3: document.getElementById('importantNotUrgent'),
  block4: document.getElementById('notImportantNotUrgent'),
  //
};

export { domElements };
