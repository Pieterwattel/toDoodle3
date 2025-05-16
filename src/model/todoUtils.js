import { dates } from './dates';
import { todoStorage } from './todoStorage';

const todoUtil = {
  getTodoDate: function (dataObj) {
    let newDate = null;

    if (dataObj.lastDayOfDeadline) {
      newDate = dates.getDateFnsDate(dataObj.lastDayOfDeadline);
    } else {
      newDate = dates.getDeadlineDependingOnUrgency(dataObj.urgency);
    }
    return newDate;
  },

  getTodoFromId: function (idValue) {
    const array = todoStorage.todoArray;

    return array.find((element) => {
      return element.id == idValue;
    });
  },

  getTodoFromIndex: function (indexValue) {
    const array = todoStorage.todoArray;

    return array.find((element) => {
      return element.index == indexValue;
    });
  },
};

export { todoUtil };
