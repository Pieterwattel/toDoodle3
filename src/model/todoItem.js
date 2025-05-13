import { todoUtil } from './todoUtils.js';

class TodoItem {
  #id;
  #title;
  #importance;
  #lastDayOfDeadline;
  #dateSpecifiedByUser;
  #finished;

  constructor(dataObj) {
    this.#id = TodoItem.id;
    this.#title = dataObj.title;
    this.#importance = dataObj.importance;

    this.#dateSpecifiedByUser = dataObj.lastDayOfDeadline ? true : false;
    this.#lastDayOfDeadline = todoUtil.getTodoDate(dataObj);

    this.#finished = dataObj.finished ? foo : (dataObj.finished = false);

    TodoItem.id++;
  }

  static id = 0;

  static create(dataObj) {
    const newTodo = new TodoItem(dataObj);
    return newTodo;
  }

  store(todo) {
    storage.array.push(todo);
  }
}

export { TodoItem };
