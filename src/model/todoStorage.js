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
    this.#todoArray.sort((firstElement, secondElement) => {
      return firstElement.deadline - secondElement.deadline;
    });

    for (let i = this.#todoArray.length; i > 0; i--) {
      let j = i - 1;
      this.#todoArray[j].index = j;
    }

    return this.#todoArray;
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
    this.#todoArray.push(newTodo);
  }

  switchTodosInArray(todo, otherTodo, array) {
    console.log(array);
    const temp = array[todo.index];
    array[todo.index] = array[otherTodo.index];
    array[otherTodo.index] = temp;
    console.log(array);
  }
}

const todoStorage = TodoStorage.getSingleton();

export { todoStorage };
