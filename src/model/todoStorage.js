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
    //I know now (thanks to chatGPT) that this function can be WAY smaller.
    //however, I choose to keep this monolith a as testament to a grueling coding session.

    /*
    if (!array) {
      array = [...this.todoArray];
    }
    let removalIndexes = [];

    //this is a loop that runs one by one through the specificatied properties
    for (let propertySpec in obj) {
      const valueSpec = obj[propertySpec];

      //collect all indexes of elements that need to be removed
      array.forEach((element, index, array) => {
        const elementValue = element[propertySpec];
        if (
          elementValue === undefined ||
          elementValue.valueOf() != valueSpec.valueOf()
        ) {
          removalIndexes.push(index);
        }
      });
    }

    //get an ordered list of unique indexes for removal
    const uniqueIndexes = todoUtil.removeDoublesFromArray(removalIndexes);
    const orderedRemovalIndexes = uniqueIndexes.sort().reverse();

    //remove indexes from array
    let filteredArray = [...array];

    console.log(orderedRemovalIndexes);
    orderedRemovalIndexes.forEach((removalIndex) => {
      filteredArray.splice(removalIndex, 1);
    });

    return filteredArray;
    */

    if (!array) {
      array = [...this.todoArray];
    }

    const filteredArray = array.filter((item) => {
      return Object.entries(obj).every(([key, value]) => {
        const itemValue = item[key];

        if (value instanceof Date && itemValue instanceof Date) {
          return itemValue.valueOf() === value.valueOf();
        }
        return itemValue === value;
      });
    });

    // If you want to return a single object if exactly one match is found:

    return filteredArray;
  }
}

const todoStorage = TodoStorage.getSingleton();

export { todoStorage };
