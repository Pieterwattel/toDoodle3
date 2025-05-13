import { todoUtil } from './todoUtils.js';

class TodoItem {
  #id;
  #title;
  #importance;
  #deadline;
  #dateSpecifiedByUser;
  #finished;

  constructor(dataObj) {
    this.#id = TodoItem.id++;
    this.#title = dataObj.title;
    this.#importance = dataObj.importance;

    this.#dateSpecifiedByUser = dataObj.lastDayOfDeadline ? true : false;
    this.#deadline = todoUtil.getTodoDate(dataObj);

    this.#finished = dataObj.finished ? foo : (dataObj.finished = false);
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get importance() {
    return this.#importance;
  }

  get deadline() {
    return this.#deadline;
  }

  get dateSpecifiedByUser() {
    return this.#dateSpecifiedByUser;
  }

  get finished() {
    return this.#finished;
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
