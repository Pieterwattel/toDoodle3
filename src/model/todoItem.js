import { todoUtil } from './todoUtils.js';

class TodoItem {
  #id;
  #index;
  #title;
  #importance;
  #deadline;
  #dateSpecifiedByUser;
  #finished;

  constructor(dataObj) {
    this.#id = TodoItem.id++;
    this.#index = null;
    this.#title = dataObj.title;
    this.#importance = dataObj.importance;

    this.#dateSpecifiedByUser = dataObj.lastDayOfDeadline ? true : false;
    this.#deadline = todoUtil.getTodoDate(dataObj);

    this.#finished = dataObj.finished ? foo : (dataObj.finished = false);
  }

  get id() {
    return this.#id;
  }

  get index() {
    return this.#index;
  }

  set index(value) {
    if (typeof value === 'number') {
      this.#index = value;
    } else {
      console.log(
        `${value} is a ${typeof value}, therefore not a valid index for todo ${this.#title}`,
      );
    }
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

  set deadline(value) {
    this.#deadline = value;
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
