import { todoUtil } from './todoUtils.js';

/**
 * @param {string} title - The user's name (required).
 * @param {number} importance - The user's age (must be positive).
 * @param {string} category - Optional flag for admin rights.
 * @param {number} urgency - value can be 1, 2 or 3. dataObj needs either an urgency value OR a lastDayOfDeadline value
 * @param {lastDayOfDeadline}
 *
 *
 */
class TodoItem {
  #id;
  #index;
  #title;
  #importance;
  #category;
  #lastDayOfDeadline;
  #dateSpecifiedByUser;
  #finished;

  constructor(dataObj) {
    this.#id = TodoItem.id++;
    this.#index = null;
    this.#title = dataObj.title;
    this.#importance = dataObj.importance;
    this.#category = dataObj.category;

    this.#dateSpecifiedByUser = dataObj.lastDayOfDeadline ? true : false;
    this.#lastDayOfDeadline = todoUtil.getTodoDate(dataObj);

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

  get category() {
    return this.#category;
  }

  get lastDayOfDeadline() {
    return this.#lastDayOfDeadline;
  }

  set lastDayOfDeadline(value) {
    this.#lastDayOfDeadline = value;
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
