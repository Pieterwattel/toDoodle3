import { eventlisteners } from '../controller/eventListeners';
import { domElements } from './domElements';
import { dates } from '../model/dates';
import { todoController } from '../controller/todoController';
import { format } from 'date-fns';

const display = {
  fillInBlock: function (block, array) {
    array.forEach((element) => {
      let div = document.createElement('div');
      div.textContent = element.title;
      eventlisteners.addTodoListListener(element, div);
      block.prepend(div);
    });
  },

  updateTodoOverview(array) {
    let block1 = domElements.block1;
    let block2 = domElements.block2;
    let block3 = domElements.block3;
    let block4 = domElements.block4;

    const today = dates.currentDate;

    const importantTodos = todoController.getTodosBySpecifications({
      importance: 'high',
    });

    const importantToday = todoController.getTodosBySpecifications({
      importance: 'high',
      doneBefore: today,
    });

    //if more than half of the todo's are for today, give those priority
    if (
      importantToday.length >=
      importantTodos.length - importantToday.length
    ) {
      this.fillInBlock(block1, importantToday);

      const importantOtherDays = [];
      todoController.getTodoArray().forEach((element) => {
        if (!dates.datesAreEqual(element.doneBefore, today))
          importantOtherDays.push(element);
      });

      this.fillInBlock(block3, importantOtherDays);
    } else {
      let block3Todos = [];
      let block3TodoAmount = Math.floor(importantTodos.length / 2);
      for (let i = block3TodoAmount - 1; i >= 0; i--) {
        block3Todos.unshift(importantTodos.pop());
      }
      let block1Todos = importantTodos;
      this.fillInBlock(block1, block1Todos);
      this.fillInBlock(block3, block3Todos);
    }

    const unimportantTodos = todoController.getTodosBySpecifications({
      importance: 'low',
    });

    const unimportantToday = todoController.getTodosBySpecifications({
      importance: 'low',
      doneBefore: today,
    });

    //if more than half of the todo's are for today, give those priority
    if (
      unimportantToday.length >=
      unimportantTodos.length - unimportantToday.length
    ) {
      this.fillInBlock(block2, unimportantToday);

      const importantOtherDays = [];
      todoController.getTodoArray().forEach((element) => {
        if (!dates.datesAreEqual(element.doneBefore, today))
          importantOtherDays.push(element);
      });

      this.fillInBlock(block4, importantOtherDays);
    } else {
      let block4Todos = [];
      let block4TodoAmount = Math.floor(unimportantTodos.length / 2);
      for (let i = block4TodoAmount - 1; i >= 0; i--) {
        block4Todos.unshift(unimportantTodos.pop());
      }
      let block2Todos = unimportantTodos;
      this.fillInBlock(block2, block2Todos);
      this.fillInBlock(block4, block4Todos);
    }
    //if not, just divide the todo's between the 2 boxes
  },

  disableActionBtnsExcept: function (...theArgs) {
    domElements.createNewTodoBtn.setAttribute('disabled', 'true');
    domElements.finishTodoBtn.setAttribute('disabled', 'true');
    domElements.editTodoBtn.setAttribute('disabled', 'true');
    domElements.removeTodoBtn.setAttribute('disabled', 'true');

    theArgs.forEach((btn) => {
      if (
        btn != 'createNewTodoBtn' &&
        btn != 'finishTodoBtn' &&
        btn != 'editTodoBtn' &&
        btn != 'removeTodoBtn'
      ) {
        console.log(`btn "${btn}" is invalid!`);
        return false;
      }

      let currentBtnArr = Object.entries(domElements).find(
        (item) => item[0] == btn,
      );
      let currentBtn = currentBtnArr[1];
      console.log(currentBtn);
      currentBtn.removeAttribute('disabled');
    });
  },

  showTodoDetails: function (todo) {
    domElements.todoDisplay.textContent = '';
    //title
    this.createInfoNode('title', todo.title);

    //description
    if (todo.description) {
      this.createInfoNode('description', todo.description);
    }

    //category
    if (todo.category) {
      this.createInfoNode('category', todo.category);
    }

    //deadline
    if (todo.dateSpecifiedByUser) {
      const date = format(todo.doneBefore, 'E d/M/yy');
      this.createInfoNode('done before', date);
    }
  },

  createInfoNode: function (label, content) {
    const infoNodeDiv = domElements.makeDiv();
    const labelDiv = domElements.makeDiv();
    labelDiv.setAttribute('class', 'label');
    const textDiv = domElements.makeDiv();
    textDiv.setAttribute('class', 'text');

    labelDiv.textContent = `- ` + label;
    textDiv.textContent = content;

    domElements.todoDisplay.appendChild(infoNodeDiv);

    infoNodeDiv.appendChild(labelDiv);
    infoNodeDiv.appendChild(textDiv);
  },
};

export { display };
