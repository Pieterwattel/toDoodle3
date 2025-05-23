import { TodoItem } from '../model/todoItem';
import { todoStorage } from '../model/todoStorage';
import { movement } from '../model/todoMovement';
import { frontendUtils } from '../view/frontendUtils';
import { domElements } from '../view/domElements';
import { dates } from '../model/dates.js';
import { endOfDay } from 'date-fns';

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

  updateTodoOverview(array) {
    let block1 = domElements.block1;
    let block2 = domElements.block2;
    let block3 = domElements.block3;
    let block4 = domElements.block4;

    const leftColumnArray = todoStorage.getImportanceTodos('low');
    const rightColumnArray = todoStorage.getImportanceTodos('high');

    //get all todo's that need to be done within a day:
    const today = endOfDay(new Date());

    console.log(today);

    let todayArray = todoStorage.getTodosBySpecifications({
      lastDayOfDeadline: today,
      leftColumnArray,
    });
    console.log(todayArray);
  }
}

const todoController = TodoController.getSingleton();

export { todoController };
