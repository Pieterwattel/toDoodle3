import { addDays, endOfDay } from 'date-fns';

class Dates {
  constructor() {
    this.currentDate = endOfDay(new Date());
  }

  static getSingleton() {
    if (this.instance) return this.instance;
    this.instance = new Dates();
    return this.instance;
  }

  parseHtmlDateToFnsFormat(htmlDate) {
    //dates need to be formatted from:
    //2020-01-05 to 2020, 1, 5

    let dashRegex = /(-)/g;
    let dateWithCommas = htmlDate.replace(dashRegex, ', ');

    let precedingZeroRegex = /(, 0)/g;
    let newDate = dateWithCommas.replace(precedingZeroRegex, ', ');

    return newDate;
  }

  getDateFnsDate(date) {
    date = this.parseHtmlDateToFnsFormat(date);

    return endOfDay(new Date(date));
  }

  getDeadlineDependingOnUrgency(urgency) {
    switch (urgency) {
      case 1:
        return addDays(new Date(), 3);
        break;
      case 2:
        return addDays(new Date(), 10);
        break;
      case 3:
        return addDays(new Date(), 20);
        break;
    }
  }

  datesAreEqual(date1, date2) {
    return date1.valueOf() == date2.valueOf();
  }
}

const dates = Dates.getSingleton();

//how to format the dates:
/*
let daysBack = differenceInDays(earlierDate, currentDate);
let daysForward = differenceInDays(laterDate, currentDate);
*/

export { dates };
