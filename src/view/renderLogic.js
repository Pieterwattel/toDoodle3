import { eventlisteners } from '../controller/eventListeners';
import { domElements } from './domElements';
import { format } from 'date-fns';

const renderLogic = {
  fillInBlock: function (block, array) {
    array.forEach((element) => {
      let div = document.createElement('div');
      div.textContent = element.title;
      eventlisteners.addTodoListListener(element, div);
      block.prepend(div);
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

export { renderLogic };
