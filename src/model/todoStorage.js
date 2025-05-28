import { isValid } from 'date-fns';
import { dates } from './dates';
import { faIR } from 'date-fns/locale';
import { todoUtil } from './todoUtils';

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
    return [...array];
  }

  orderArrayByDate(array) {
    array.sort((firstElement, secondElement) => {
      return firstElement.doneBefore - secondElement.doneBefore;
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
      case isValid(!newTodo.doneBefore):
        console.log(`newTodo "${newTodo.title}" doneBefore is invalid`);
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
   * parameter1 is 1 object literal, with any the following keys, followed with the correct data type value
   * @param {object literal}:
   *    @param {number} id optional
   *    @param {number} index optional
   *    @param {string} title optional
   *    @param {string} importance optional
   *    @param {string} category optional
   *    @param {boolean} dateSpecifiedByUser optional
   *    @param {date} doneBefore optional
   *    @param {boolean} finished optional
   *
   *
   * parameter 2 is the array, if no parameter 2 is given, it will check the complete todo array
   *@param {array} array optional
   */
  getTodosBySpecifications(obj, array) {
    if (!array) {
      array = [...this.todoArray];
    }

    let filteredArray = array.filter((item) => {
      return Object.entries(obj).every(([key, value]) => {
        const itemValue = item[key];

        if (value instanceof Date && itemValue instanceof Date) {
          return itemValue.valueOf() === value.valueOf();
        }
        return itemValue === value;
      });
    });

    // If you want to return a single object if exactly one match is found:

    filteredArray = this.orderArrayByDate(filteredArray);
    return filteredArray;
  }

  getTodosWithoutSpecifications(obj, array) {
    if (!array) {
      array = [...this.todoArray];
    }

    let filteredArray = array.filter((item) => {
      return Object.entries(obj).every(([key, value]) => {
        const itemValue = item[key];

        if (value instanceof Date && itemValue instanceof Date) {
          return itemValue.valueOf() != value.valueOf();
        }
        return itemValue != value;
      });
    });

    // If you want to return a single object if exactly one match is found:

    filteredArray = this.orderArrayByDate(filteredArray);
    return filteredArray;
  }
}

const todoStorage = TodoStorage.getSingleton();

export { todoStorage };
