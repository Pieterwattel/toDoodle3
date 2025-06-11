import { eventlisteners } from '../controller/eventlisteners';
import { domElements } from './domElements';
import { format } from 'date-fns';
import { frontendUtils } from './frontendUtils';

const renderLogic = {
  fillInBlock: function (block, array) {
    block.innerHTML = '';
    array.forEach((element) => {
      const itemDiv = document.createElement('div');
      const changeOrderDiv = document.createElement('div');
      const titleDiv = document.createElement('div');
      const dateDiv = document.createElement('div');

      itemDiv.setAttribute('class', 'matrixItem');

      changeOrderDiv.textContent = 'ʌ/v';
      titleDiv.textContent = element.title;
      dateDiv.textContent = element.dateSpecifiedByUser
        ? frontendUtils.getDateForUser(element)
        : '';

      eventlisteners.addTodoListListener(element, itemDiv);
      block.appendChild(itemDiv);
      itemDiv.appendChild(changeOrderDiv);

      itemDiv.appendChild(titleDiv);
      itemDiv.appendChild(dateDiv);
    });
  },

  showTodoDetails: function (todo) {
    domElements.todoForm.textContent = '';
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

    domElements.todoForm.appendChild(infoNodeDiv);

    infoNodeDiv.appendChild(labelDiv);
    infoNodeDiv.appendChild(textDiv);
  },

  renderEisenhowerMatrix: function (obj) {
    let block1 = domElements.block1;
    let block2 = domElements.block2;
    let block3 = domElements.block3;
    let block4 = domElements.block4;

    this.fillInBlock(block1, obj.block1_IU);
    this.fillInBlock(block2, obj.block2_U);
    this.fillInBlock(block3, obj.block3_I);
    this.fillInBlock(block4, obj.block4_);
  },

  disableDomElements: function (array) {
    if (Array.isArray(array) == false) {
      console.log(
        `ERROR, parameter should be an array! parameter is an ${typeof array}`,
      );
      return;
    }

    //disable the enableArray nodes
    if (array != []) {
      array.forEach((node) => {
        if (frontendUtils.isHTMLElement(node)) {
          node.setAttribute('disabled', 'true');
        } else {
          console.log('ERROR, ' + node + ' is not an html element');
        }
      });
    }
  },

  enableDomElements: function (array) {
    if (Array.isArray(array) == false) {
      console.log(
        `ERROR, parameter should be an array! parameter is an ${typeof array}`,
      );
      return;
    }

    //enable the enableArray nodes
    if (array != []) {
      array.forEach((node) => {
        if (frontendUtils.isHTMLElement(node)) {
          node.removeAttribute('disabled');
        } else {
          console.log('ERROR, ' + node + ' is not an html element');
        }
      });
    }
  },

  placeEmptyTodoForm: function () {
    domElements.todoForm.innerHTML = domElements.todoCreationForm;
  },
};

export { renderLogic };
