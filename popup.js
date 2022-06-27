switch (new Date().getDay()) {
    case 1:
        var daydata = belltimes.Monday;
        weekend = 0;
        break;

    case 2:
        var daydata = belltimes.Tuesday;
        weekend = 0;
        break;

    case 3:
        var daydata = belltimes.Wednesday;
        weekend = 0;
        break;

    case 4:
        var daydata = belltimes.Thursday;
        weekend = 0;
        break;

    case 5:
        var daydata = belltimes.Friday;
        weekend = 0;
        break;

    default:
        var daydata = belltimes.Monday;
        weekend = 1;
}

function showTime() {
    var date = new Date();
    var seconds = ((date.getHours() * 3600) + (date.getMinutes() * 60)) + date.getSeconds();
    var minutes = ((date.getHours() * 60) + date.getMinutes());
    var nextminute = (Math.min(...daydata.times.filter((value) => { return value > minutes })));
    var nextsecond = (nextminute * 60);

    var minutesleft = ((minutes - nextminute) * -1) - 1;
    var secondsleft = (((seconds - nextsecond) * -1) - (minutesleft * 60)) - 1;

    if (minutesleft < 0) {
        minutesleft = 0;
    }
    if (secondsleft < 0) {
        secondsleft = 0;
    }

    if (secondsleft.toString().length == 1) {
        var timeleft = minutesleft + ":0" + secondsleft;
    }
    else {
        var timeleft = minutesleft + ":" + secondsleft;
    }

    if (minutesleft >= 60 && weekend == 0) {
        var timeleft = "Not school yet!";
    }
    else if (weekend == 1) {
        var timeleft = "Weekend!";
    }

    var timeDisplay = $("#timeleft");
    timeDisplay.text(timeleft);

    if (minutesleft < 60 && weekend == 0) {
        var periodDisplay = $("#period")
        periodDisplay.text(daydata.period[daydata.times.indexOf(nextminute)]);
    }

    // if (minutesleft == 30) {
    //     chrome.notifications.create({
    //         type: 'basic',
    //         iconUrl: 'path',
    //         title: 'Baulko Clock Says',
    //         message: 'Two minutes until ' + daydata.period[daydata.times.indexOf(nextminute)],
    //         priority: 2
    //     })
    // }

    setTimeout(showTime, 1);
}

showTime();