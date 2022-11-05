type DayData = {
    period: string[]
    times: number[]
}


let weekend: boolean = false
let daydata: DayData
const date = new Date();

switch (date.getDay()) {
    case 1:
        daydata = belltimes.Monday
        break

    case 2:
        daydata = belltimes.Tuesday
        break

    case 3:
        daydata = belltimes.Wednesday
        break

    case 4:
        daydata = belltimes.Thursday
        break

    case 5:
        daydata = belltimes.Friday
        break

    default:
        daydata = belltimes.Monday
        weekend = true
}

const showTime = () => {
    const seconds =
        date.getHours() * 3600
        + date.getMinutes() * 60
        + date.getSeconds()
    const minutes =
        date.getHours() * 60
        + date.getMinutes()
    const nextMinute = Math.min(...daydata.times.filter((value) => { return value > minutes }))
    const nextSecond = nextMinute * 60

    let minutesLeft = -(minutes - nextMinute) - 1
    let secondsLeft = -(seconds - nextSecond) - (minutesLeft * 60) - 1
    let timeLeft: string;

    if (minutesLeft < 0) minutesLeft = 0
    if (secondsLeft < 0) secondsLeft = 0

    timeLeft = `${minutesLeft}:${secondsLeft.toString().length == 1 ? "0" : ""}${secondsLeft}`

    if (weekend) {
        if (date.getDay() == 6)
            timeLeft = "Saturday!"
        else if (date.getDay() == 0)
            timeLeft = "Sunday!"
    }
    else {
        if (minutesLeft >= 60) {
            if (date.getHours() >= 12)
                timeLeft = "Ahh... afternoons."
            else
                timeLeft = "Good morning!"
        }
        else {
            const periodDisplay = document.getElementById("period") as HTMLSpanElement
            periodDisplay.textContent = `${daydata.period[daydata.times.indexOf(nextMinute)]} in`
        }
    }

    const timeDisplay = document.getElementById("timeDisplay") as HTMLSpanElement
    timeDisplay.textContent = timeLeft
}

setInterval(showTime, 200)
