const moment = require('moment');

// Current date and time
let today = moment();
var thisDay = new Date("december 4");
var standardizedDate = moment(thisDay);

// Using a format
let formatDay = moment("13/05/2017 4:50PM", "DD/MM/YYYY h:mmA")

console.log(formatDay.toString());
console.log(formatDay.toISOString());

// if there are words taht arent months, days, numbers, or time, then DIE
// if there are words that say am or pm, take the number in front of the am/pm and convert it to an acceptable format for us to parse w 


// if there are multiple dates in one line, split them up
    // set oldest date to start time
    // set newest date to end time

// if (d.getFullYear()!== year){
//     // set the year for date to be year
//     d.setFullYear(year);
//     console.log(d.getFullYear());
// }
// console.log(d);