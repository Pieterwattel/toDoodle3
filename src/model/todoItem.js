class TodoItem {
    #id
    #title
    #importance
    #lastDayOfDeadline
    #dateSpecifiedByUser
    #finished

    constructor(dataObj) {
        this.#id = dataObj.id;
        this.#title = dataObj.title;
        this.#importance = dataObj.importance;

        this.#lastDayOfDeadline = dataObj.lastDayOfDeadline;
        this.#dateSpecifiedByUser = dataObj.dateSpecifiedByUser;

        this.#finished = dataObj.finished;
    }

  static id = 0;

  static create(dataObj) {
    const newDataObj = this.getAdditionalCreationData(dataObj)
    const newTodo = new TodoItem(newDataObj);
    return newTodo;
  }

  store(todo) {
    storage.array.push(todo);
  } 

  static getAdditionalCreationData(todoDataObj) {
    todoDataObj.id = this.id++;
    todoDataObj.finished ? foo : todoDataObj.finished = false
    return todoDataObj
  }
}

export {TodoItem}
