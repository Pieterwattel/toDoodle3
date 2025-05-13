import { dates } from './dates';

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
};

export { todoUtil };
