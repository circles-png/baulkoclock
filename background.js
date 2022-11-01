// var belltimes = {
//     Monday: {
//         period: [
//             "Period 1 in:",
//             "Period 2 in:",
//             "Assembly in:",
//             "Recess in:",
//             "Period 3 in:",
//             "Period 4 in:",
//             "Break in:",
//             "Period 5 in:",
//             "Period 6 in:",
//             "Lunch 1 in:",
//             "Lunch 2 in:",
//             "Period 7 in:",
//             "Period 8 in:",
//             "End in:"
//         ],
//         times: [
//             518,
//             557,
//             594,
//             619,
//             639,
//             676,
//             713,
//             718,
//             755,
//             792,
//             812,
//             832,
//             869,
//             906
//         ]
//     },
//     Tuesday: {
//         period: [
//             "Period 1 in:",
//             "Period 2 in:",
//             "Recess in:",
//             "Period 3 in:",
//             "Period 4 in:",
//             "Break in:",
//             "Period 5 in:",
//             "Period 6 in:",
//             "Lunch 1 in:",
//             "Lunch 2 in:",
//             "Period 7 in:",
//             "Period 8 in:",
//             "End in:"
//         ],
//         times: [
//             518,
//             561,
//             601,
//             621,
//             661,
//             701,
//             706,
//             746,
//             786,
//             806,
//             826,
//             866,
//             906
//         ]
//     },
//     Wednesday: {
//         period: [
//             "Period 1 in:",
//             "Period 2 in:",
//             "Recess in:",
//             "Period 3 in:",
//             "Period 4 in:",
//             "Period 5 in:",
//             "Lunch 1 in:",
//             "Lunch 2 in:",
//             "Period 6 in:",
//             "Period 7 in:",
//             "Period 8 in:",
//             "End in:"
//         ],
//         times: [
//             518,
//             558,
//             596,
//             611,
//             649,
//             687,
//             725,
//             738,
//             751,
//             791,
//             830,
//             870
//         ]
//     },
//     Thursday: {
//         period: [
//             "Period 1 in:",
//             "Period 2 in:",
//             "Recess in:",
//             "Period 3 in:",
//             "Period 4 in:",
//             "Break in:",
//             "Period 5 in:",
//             "Period 6 in:",
//             "Lunch 1 in:",
//             "Lunch 2 in:",
//             "Period 7 in:",
//             "Period 8 in:",
//             "End in:"
//         ],
//         times: [
//             518,
//             561,
//             601,
//             621,
//             661,
//             701,
//             706,
//             746,
//             786,
//             806,
//             826,
//             866,
//             906
//         ]
//     },
//     Friday: {
//         period: [
//             "Period 1 in:",
//             "Period 2 in:",
//             "Recess in:",
//             "Period 3 in:",
//             "Period 4 in:",
//             "Break in:",
//             "Period 5 in:",
//             "Period 6 in:",
//             "Lunch 1 in:",
//             "Lunch 2 in:",
//             "Period 7 in:",
//             "Period 8 in:",
//             "End in:",
//         ],
//         times: [
//             518,
//             561,
//             601,
//             626,
//             666,
//             706,
//             711,
//             751,
//             791,
//             809,
//             826,
//             866,
//             906
//         ]
//     }
// };


// switch (new Date().getDay()) {
//     case 1:
//         var daydata = belltimes.Monday;
//         weekend = 0;
//         break;

//     case 2:
//         var daydata = belltimes.Tuesday;
//         weekend = 0;
//         break;

//     case 3:
//         var daydata = belltimes.Wednesday;
//         weekend = 0;
//         break;

//     case 4:
//         var daydata = belltimes.Thursday;
//         weekend = 0;
//         break;

//     case 5:
//         var daydata = belltimes.Friday;
//         weekend = 0;
//         break;

//     default:
//         var daydata = belltimes.Monday;
//         weekend = 1;
// }

// function background() {
//     var date = new Date();
//     var seconds = ((date.getHours() * 3600) + (date.getMinutes() * 60)) + date.getSeconds();
//     var minutes = ((date.getHours() * 60) + date.getMinutes());
//     var nextminute = (Math.min(...daydata.times.filter((value) => { return value > minutes })));
//     var nextsecond = (nextminute * 60);

//     var minutesleft = ((minutes - nextminute) * -1) - 1;
//     var secondsleft = (((seconds - nextsecond) * -1) - (minutesleft * 60)) - 1;


//     if (secondsleft == 120) {
//         notification();
//     }

//     setTimeout(background, 1);
// }

// function notification() {
//     chrome.storage.sync.get("baulkoNotification", (value) => {
//         if (value.baulkoNotification == true) {
//             chrome.notifications.create(
//                 {
//                     title: "Baulko Clock",
//                     message: "Two minutes left! Get ready to pack up!",
//                     iconUrl: "Images/Orange.png",
//                     type: "basic"
//                 }
//             )
//         }
//     }
//     )
// }

// background();