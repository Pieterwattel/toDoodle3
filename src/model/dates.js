const dates = {
  currentDate: new Date(),

  parseHtmlDateToFnsFormat: function (htmlDate) {
    //dates need to be formatted from:
    //2020-01-05 to 2020, 1, 5

    let dashRegex = /( - )/g;
    let dateWithCommas = htmlDate.replace(dashRegex, ', ');

    let precedingZeroRegex = /(, 0)/g;
    let newDate = dateWithCommas.replace(precedingZeroRegex, ', ');

    return newDate;
  },
};

//how to format the dates:
/*
let daysBack = differenceInDays(earlierDate, currentDate);
let daysForward = differenceInDays(laterDate, currentDate);
*/

export { dates };