import { dates } from './dates';
import { todoStorage } from './todoStorage';

const todoUtil = {
  getTodoDate: function (dataObj) {
    let newDate = null;

    if (dataObj.doneBefore) {
      newDate = dates.getDateFnsDate(dataObj.doneBefore);
      dataObj.dateSpecifiedByUser = true;
    } else {
      newDate = dates.getDeadlineDependingOnUrgency(dataObj.urgency);
      dataObj.dateSpecifiedByUser = false;
    }
    return newDate;
  },

  getTodoFromIndex: function (indexValue) {
    const array = todoStorage.todoArray;

    return array.find((element) => {
      return element.index == indexValue;
    });
  },

  removeDoublesFromArray: function (array) {
    // this puts every entry in an object, as a key.
    //this key can easily be checked with the hasOwnProperty method

    let newList = {};
    return array.filter((arrayValue) => {
      return newList.hasOwnProperty(arrayValue)
        ? false
        : (newList[arrayValue] = true);
    });
  },
};

export { todoUtil };
