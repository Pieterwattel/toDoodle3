import { domElements } from './domElements';

const display = {
  fillInBlock: function (block, array) {
    for (let i = 8; i > 0; i--) {
      array.forEach((element) => {
        let div = document.createElement('div');
        div.textContent = element.title;
        div.addEventListener('mouseover', () => {
          domElements.showTodoDetails(element);
        });
        block.appendChild(div);
      });
    }
  },
};

export { display };
