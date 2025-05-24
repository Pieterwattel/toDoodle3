import { domElements } from './domElements';
import { todoController } from '../controller/todoController';
import { endOfDay, isEqual } from 'date-fns';

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
            todoDataForBackend.lastDayOfDeadline = dataObj.urgencyDateInput;
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

  majorityOfTodosIsToday: function () {},
};

export { frontendUtils };
