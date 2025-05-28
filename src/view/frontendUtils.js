import { todoController } from '../controller/todoController';
import { dates } from '../model/dates';

const frontendUtils = {
  doTodoFormatting: function (dataObj) {
    const todoDataForBackend = {};
    for (const key in dataObj) {
      const value = dataObj[key];
      switch (key) {
        case 'titleInput':
          todoDataForBackend.title = value;
          break;
        case 'importanceSelector':
          todoDataForBackend.importance = value;
          break;
        case 'urgencySelector':
          if (value == 4) {
            console.log('yes');
            todoDataForBackend.doneBefore = dataObj.urgencyDateInput;
          } else {
            todoDataForBackend.urgency = Number(value);
          }
          break;
        case 'urgencyDateInput':
          break;
        case 'categorySelector':
          if (value == 'newCategory') {
            todoDataForBackend.category = dataObj.categoryInput;
          } else {
            todoDataForBackend.category = value;
          }
          break;
        case 'categoryInput':
          break;
        case 'descriptionInput':
          todoDataForBackend.description = value;
          break;
        default:
          console.log('other key: ' + key);
      }
    }
    return todoDataForBackend;
  },

  orderIntoEisenhowerMatrix(array) {
    let block1_IU = [];
    let block2_U = [];
    let block3_I = [];
    let block4_ = [];

    const today = dates.currentDate;

    const importantTodos = todoController.getTodosBySpecifications(
      {
        importance: 'high',
      },
      array,
    );
    const importantToday = todoController.getTodosBySpecifications(
      {
        importance: 'high',
        doneBefore: today,
      },
      array,
    );

    //if more than half of the todo's are for today, give those priority
    if (
      importantToday.length >=
      importantTodos.length - importantToday.length
    ) {
      console.log('if 1.1');
      block1_IU = importantToday;
      block3_I = todoController.getTodosWithoutSpecifications(
        { doneBefore: today },
        importantTodos,
      );
    } else {
      console.log('if 1.2');
      let block3TodoAmount = Math.floor(importantTodos.length / 2);
      for (let i = block3TodoAmount - 1; i >= 0; i--) {
        block3_I.unshift(importantTodos.pop());
      }
      block1_IU = importantTodos;
    }

    const unImportantTodos = todoController.getTodosBySpecifications(
      {
        importance: 'low',
      },
      array,
    );
    const unImportantToday = todoController.getTodosBySpecifications(
      {
        importance: 'low',
        doneBefore: today,
      },
      array,
    );

    //if more than half of the todo's are for today, give those priority
    if (
      unImportantToday.length >=
      unImportantTodos.length - unImportantToday.length
    ) {
      console.log('if 2.1');
      block2_U = unImportantToday;
      block4_ = todoController.getTodosWithoutSpecifications(
        { doneBefore: today },
        unImportantTodos,
      );
    } else {
      console.log('if 2.2');
      let block4TodoAmount = Math.floor(unImportantTodos.length / 2);
      for (let i = block4TodoAmount - 1; i >= 0; i--) {
        block4_.unshift(unImportantTodos.pop());
      }
      block2_U = unImportantTodos;
    }

    return { block1_IU, block2_U, block3_I, block4_ };
  },

  isHTMLElement(element) {
    return element instanceof Node;
  },
};

export { frontendUtils };
