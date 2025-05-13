import { dates } from './dates.js';

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

    this.#lastDayOfDeadline = dataObj.lastDayOfDeadline;
    this.#dateSpecifiedByUser = dataObj.dateSpecifiedByUser;

    this.#finished = dataObj.finished ? foo : (dataObj.finished = false);

    TodoItem.id++;
  }

  static id = 0;

  static create(dataObj) {
    const newDataObj = this.getAdditionalCreationData(dataObj);
    const newTodo = new TodoItem(newDataObj);
    return newTodo;
  }

  store(todo) {
    storage.array.push(todo);
  }

  static getAdditionalCreationData(dataObj) {
    if (dataObj.lastDayOfDeadline) {
      dataObj.lastDayOfDeadline = dates.getDateObject(
        dataObj.lastDayOfDeadline,
      );
      dataObj.dateSpecifiedByUser = true;
    } else {
      console.log(dates.getDeadlineDependingOnUrgency(dataObj.urgency));
      dataObj.lastDayOfDeadline = dates.getDeadlineDependingOnUrgency(
        dataObj.urgency,
      );
      dataObj.dateSpecifiedByUser = false;
    }

    return dataObj;
  }
}

export { TodoItem };
