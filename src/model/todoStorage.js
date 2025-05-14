import { isValid } from 'date-fns';

class TodoStorage {
  static instance;

  static getSingleton() {
    if (this.instance) return this.instance;
    this.instance = new TodoStorage();
    return this.instance;
  }

  #array = [];

  constructor() {}

  get array() {
    let sortedArray = [...this.#array].sort((firstElement, secondElement) => {
      return firstElement.deadline - secondElement.deadline;
    });
    return sortedArray;
  }

  addNewTodo(newTodo) {
    switch (false) {
      case typeof newTodo.title === 'string':
        console.log(`newTodo "${newTodo.title}" title is invalid`);
        return;
      case typeof newTodo.id === 'number':
        console.log(`newTodo "${newTodo.title}" id is invalid`);
        return;
      case typeof newTodo.importance === 'number':
        console.log(`newTodo "${newTodo.title}" importance is invalid`);
        return;
      case typeof newTodo.dateSpecifiedByUser === 'boolean':
        console.log(
          `newTodo "${newTodo.title}" dateSpecifiedByUser is invalid`,
        );
        return;
      case isValid(newTodo.deadline):
        console.log(
          `newTodo "${newTodo.title}" dateSpecifiedByUser is invalid`,
        );
        return;
      case typeof newTodo.finished === 'boolean':
        console.log(
          `newTodo "${newTodo.title}" dateSpecifiedByUser is invalid`,
        );
        return;
    }
    this.#array.push(newTodo);
  }
}

const todoStorage = TodoStorage.getSingleton();

export { todoStorage };
