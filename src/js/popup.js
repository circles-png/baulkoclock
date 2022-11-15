"use strict";
let weekend = false;
let daydata;
let date = new Date();
const timeDisplay = document.getElementById("timeDisplay");
switch (date.getDay()) {
    case 1:
        daydata = belltimes.Monday;
        break;
    case 2:
        daydata = belltimes.Tuesday;
        break;
    case 3:
        daydata = belltimes.Wednesday;
        break;
    case 4:
        daydata = belltimes.Thursday;
        break;
    case 5:
        daydata = belltimes.Friday;
        break;
    default:
        daydata = belltimes.Monday;
        weekend = true;
}
const showTime = () => {
    date = new Date();
    const seconds = date.getHours() * 3600
        + date.getMinutes() * 60
        + date.getSeconds();
    const minutes = date.getHours() * 60
        + date.getMinutes();
    const nextMinute = Math.min(...daydata.times.filter((value) => { return value > minutes; }));
    const nextSecond = nextMinute * 60;
    let minutesLeft = -(minutes - nextMinute) - 1;
    let secondsLeft = -(seconds - nextSecond) - (minutesLeft * 60) - 1;
    let timeLeft;
    if (minutesLeft < 0)
        minutesLeft = 0;
    if (secondsLeft < 0)
        secondsLeft = 0;
    timeLeft = `${minutesLeft}:${secondsLeft.toString().length == 1 ? "0" : ""}${secondsLeft}`;
    if (weekend) {
        if (date.getDay() == 6)
            timeLeft = "Saturday!";
        else if (date.getDay() == 0)
            timeLeft = "Sunday!";
    }
    else {
        if (minutesLeft >= 60) {
            if (date.getHours() >= 12)
                timeLeft = "Ahh... afternoons.";
            else
                timeLeft = "Good morning!";
        }
        else {
            const periodDisplay = document.getElementById("period");
            periodDisplay.textContent = `${daydata.period[daydata.times.indexOf(nextMinute)]} in`;
        }
    }
    timeDisplay.textContent = timeLeft;
    if (Array.from(timeLeft).some(char => char.toLowerCase() !== char.toUpperCase())) {
        timeDisplay.classList.add("text-3xl");
        timeDisplay.classList.remove("text-4xl");
    }
    else {
        timeDisplay.classList.add("text-4xl");
        timeDisplay.classList.remove("text-3xl");
    }
};
setInterval(showTime, 200);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9wb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0EsSUFBSSxPQUFPLEdBQVksS0FBSyxDQUFBO0FBQzVCLElBQUksT0FBZ0IsQ0FBQTtBQUNwQixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ3RCLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFvQixDQUFBO0FBRTdFLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFO0lBQ25CLEtBQUssQ0FBQztRQUNGLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFBO1FBQzFCLE1BQUs7SUFFVCxLQUFLLENBQUM7UUFDRixPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQTtRQUMzQixNQUFLO0lBRVQsS0FBSyxDQUFDO1FBQ0YsT0FBTyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUE7UUFDN0IsTUFBSztJQUVULEtBQUssQ0FBQztRQUNGLE9BQU8sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFBO1FBQzVCLE1BQUs7SUFFVCxLQUFLLENBQUM7UUFDRixPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQTtRQUMxQixNQUFLO0lBRVQ7UUFDSSxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQTtRQUMxQixPQUFPLEdBQUcsSUFBSSxDQUFBO0NBQ3JCO0FBRUQsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO0lBQ2xCLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ2xCLE1BQU0sT0FBTyxHQUNULElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJO1VBQ3BCLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO1VBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUN2QixNQUFNLE9BQU8sR0FDVCxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtV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