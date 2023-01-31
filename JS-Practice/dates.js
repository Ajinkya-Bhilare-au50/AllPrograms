//Install visual studio intellicode
//install moment.js
//npm install moment --save
const moment = require("moment");
const d = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(d);
const t = moment().format("dddd");
console.log(t);
const m = moment().format("MMM Do YY");
console.log(m);
const p = moment().format();
console.log(p);

/* 
moment().format('MMMM Do YYYY, h:mm:ss a'); // October 12th 2022, 1:33:16 am
moment().format('dddd');                    // Wednesday
moment().format("MMM Do YY");               // Oct 12th 22
moment().format('YYYY [escaped] YYYY');     // 2022 escaped 2022
moment().format();                         
----------------------------------------------------------------
moment("20111031", "YYYYMMDD").fromNow(); // 11 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 10 years ago
moment().startOf('day').fromNow();        // 2 hours ago
moment().endOf('day').fromNow();          // in a day
moment().startOf('hour').fromNow();      //33 minutes ago
----------------------------------------------------------------------
calendar Time
moment().subtract(10, 'days').calendar(); // 10/02/2022
moment().subtract(6, 'days').calendar();  // Last Thursday at 1:32 AM
moment().subtract(3, 'days').calendar();  // Last Sunday at 1:32 AM
moment().subtract(1, 'days').calendar();  // Yesterday at 1:32 AM
moment().calendar();                      // Today at 1:32 AM
moment().add(1, 'days').calendar();       // Tomorrow at 1:32 AM
moment().add(3, 'days').calendar();       // Saturday at 1:32 AM
moment().add(10, 'days').calendar();     
--------------------------------------------------------------------------
moment.locale();         // en
moment().format('LT');   // 1:31 AM
moment().format('LTS');  // 1:31:27 AM
moment().format('L');    // 10/12/2022
moment().format('l');    // 10/12/2022
moment().format('LL');   // October 12, 2022
moment().format('ll');   // Oct 12, 2022
moment().format('LLL');  // October 12, 2022 1:31 AM
moment().format('lll');  // Oct 12, 2022 1:31 AM
moment().format('LLLL'); // Wednesday, October 12, 2022 1:31 AM
moment().format('llll'); // Wed, Oct 12, 2022 1:31 AM
*/
