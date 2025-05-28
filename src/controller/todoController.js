import { TodoItem } from '../model/todoItem';
import { todoStorage } from '../model/todoStorage';
import { movement } from '../model/todoMovement';
import { frontendUtils } from '../view/frontendUtils';

class TodoController {
  constructor() {}

  static instance;

  static getSingleton() {
    if (this.instance) return this.instance;
    this.instance = new TodoController();
    return this.instance;
  }

  formatFrontendTodoForBackend(dataObj) {
    let todoDataForBackend = frontendUtils.doTodoFormatting(dataObj);

    return todoDataForBackend;
  }

  /**
   * parameter is 1 object literal, with the following properties:
   * @param {string} title
   * @param {string} importance - can be high or low
   * @param {string} category - can be new or existing category
   *
   *
   * !!dataObj needs either an urgency value OR a doneBefore value
   * @param {number} urgency - value can be 1, 2 or 3.
   * @param {date} doneBefore - date
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
   * @param {date} doneBefore
   * @param {boolean} finished
   */
  getTodosBySpecifications(dataObj, array) {
    return todoStorage.getTodosBySpecifications(dataObj, array);
  }

  getTodosWithoutSpecifications(dataObj, array) {
    return todoStorage.getTodosWithoutSpecifications(dataObj, array);
  }

  getTodoArray() {
    return todoStorage.todoArray;
  }
}

const todoController = TodoController.getSingleton();

export { todoController };
