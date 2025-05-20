import { isValid } from 'date-fns';

class TodoStorage {
  static instance;

  static getSingleton() {
    if (this.instance) return this.instance;
    this.instance = new TodoStorage();
    return this.instance;
  }

  #todoArray = [];

  constructor() {}

  get todoArray() {
    const array = this.orderArrayByDate(this.#todoArray);
    return array;
  }

  orderArrayByDate(array) {
    array.sort((firstElement, secondElement) => {
      return firstElement.deadline - secondElement.deadline;
    });

    for (let i = array.length; i > 0; i--) {
      let j = i - 1;
      array[j].index = j;
    }

    return array;
  }

  addNewTodo(newTodo) {
    switch (true) {
      case typeof newTodo.title != 'string':
        console.log(`newTodo "${newTodo.title}" title is invalid`);
        return;
      case typeof newTodo.id != 'number':
        console.log(`newTodo "${newTodo.title}" id is invalid`);
        return;
      case typeof newTodo.importance != 'string':
        console.log(`newTodo "${newTodo.title}" importance is invalid`);
        return;
      case typeof newTodo.dateSpecifiedByUser != 'boolean':
        console.log(
          `newTodo "${newTodo.title}" dateSpecifiedByUser is invalid`,
        );
        return;
      case isValid(!newTodo.lastDayOfDeadline):
        console.log(`newTodo "${newTodo.title}" lastDayOfDeadline is invalid`);
        return;
      case typeof newTodo.finished != 'boolean':
        console.log(
          `newTodo "${newTodo.title}" newTodo.finished property is invalid`,
        );
        return;
    }
    this.#todoArray.push(newTodo);
  }

  switchTodosInArray(todo, otherTodo, array) {
    const temp = array[todo.index];
    array[todo.index] = array[otherTodo.index];
    array[otherTodo.index] = temp;
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
  getTodosBySpecifications(obj) {
    let collectionArray = this.todoArray;

    //this is a loop that runs one by one through the specifications
    for (const keySpec in obj) {
      const valueSpec = obj[keySpec];
      //this loop runs through the array,
      //and removes every elements that does not fit the requirements
      collectionArray.forEach((element) => {
        if (element[keySpec] != valueSpec) {
          //remove element
        }
      });
    }
    return collectionArray;
  }
}

const todoStorage = TodoStorage.getSingleton();

export { todoStorage };
