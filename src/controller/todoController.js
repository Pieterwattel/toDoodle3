import { TodoItem } from '../model/todoItem';
import { todoStorage } from '../model/todoStorage';
import { movement } from '../model/todoMovement';

class TodoController {
  constructor() {}

  static instance;

  static getSingleton() {
    if (this.instance) return this.instance;
    this.instance = new TodoController();
    return this.instance;
  }

  formatFrontendTodoForBackend(dataObj) {
    let todoDataForBackend = {};

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
  }

  /**
   * parameter is 1 object literal, with the following properties:
   * @param {string} title
   * @param {string} importance - can be high or low
   * @param {string} category - can be new or existing category
   *
   *
   * !!dataObj needs either an urgency value OR a lastDayOfDeadline value
   * @param {number} urgency - value can be 1, 2 or 3.
   * @param {date} lastDayOfDeadline - date
   */
  createTodo(dataObj) {
    let newTodo = TodoItem.create(dataObj);
    todoStorage.addNewTodo(newTodo);
  }

  moveTodoInUrgency(todo, direction) {
    movement.moveTodoInUrgency(todo, direction, todoStorage.todoArray);
  }

  /**
   * parameter is 1 object literal, with any the following keys, followed with the correct data type value
   * @param {number} id
   * @param {number} index
   * @param {string} title
   * @param {string} importance
   * @param {string} category
   * @param {boolean} dateSpecifiedByUser
   * @param {date} lastDayOfDeadline
   * @param {boolean} finished
   */
  getTodosBySpecifications(dataObj) {
    return todoStorage.getTodosBySpecifications(dataObj);
  }
}

const todoController = TodoController.getSingleton();

export { todoController };
