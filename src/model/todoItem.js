import { todoUtil } from './todoUtils.js';

class TodoItem {
  #id;
  #index;
  #title;
  #importance;
  #category;
  #doneBefore;
  #dateSpecifiedByUser;
  #description;
  #finished;

  constructor(dataObj) {
    this.#id = TodoItem.id++;
    this.#index = null;
    this.#title = dataObj.title;
    this.#importance = dataObj.importance;
    this.#category = dataObj.category;

    this.#dateSpecifiedByUser = dataObj.doneBefore ? true : false;
    this.#doneBefore = todoUtil.getTodoDate(dataObj);
    this.#description = dataObj.description;

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

  get doneBefore() {
    return this.#doneBefore;
  }

  set doneBefore(value) {
    this.#doneBefore = value;
  }

  get dateSpecifiedByUser() {
    return this.#dateSpecifiedByUser;
  }

  get description() {
    return this.#description;
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
