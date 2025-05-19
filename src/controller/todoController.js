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
    this.createTodo();
  }

  /**
   * parameter is 1 object literal, with the following properties:
   * @param {string} title
   * @param {string} importance - can be high or low
   * @param {string} category - Optional flag for admin rights.
   * @param {number} urgency - value can be 1, 2 or 3. dataObj needs either an urgency value OR a lastDayOfDeadline value
   * @param {date} lastDayOfDeadline - can also be an urgency value
   */
  createTodo(dataObj) {
    let newTodo = TodoItem.create(dataObj);
    todoStorage.addNewTodo(newTodo);
  }

  moveTodoInUrgency(todo, direction) {
    movement.moveTodoInUrgency(todo, direction, todoStorage.todoArray);
  }

  getTodosByCategory(categoryName) {
    return todoStorage.getTodosByCategory(categoryName, todoStorage.todoArray);
  }
}

const todoController = TodoController.getSingleton();

export { todoController };
