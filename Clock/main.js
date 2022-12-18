const allHandles = document.getElementsByClassName('handle');
const hourHandle = allHandles[0];
const minuteHandle = allHandles[1];
const secondHandle = allHandles[2];

const theDate = new Date();
const hour = theDate.getHours();
const minute = theDate.getMinutes();
const seconds = theDate.getSeconds();

// const hour = 12;
// const minute = 59;
// const seconds = 55;

let degreeForSecs = seconds * 6;
let degreeForMin = minute * 6;
let degreeForHour = (hour > 12)? (hour - 12) * 30: hour * 30;

console.log(degreeForHour);

function ticTac(sec, min, hour) {
    secondHandle.style.transform = `translate(-50%) rotate(${sec}deg)`;
    minuteHandle.style.transform = `translate(-50%) rotate(${min}deg)`;
    hourHandle.style.transform = `translate(-50%) rotate(${hour}deg)`;
}

ticTac(degreeForSecs,degreeForMin, degreeForHour);
setInterval(() => {
    // console.log(`${degreeForHour} ${degreeForMin} ${degreeForSecs}`);

    (degreeForSecs >= 360)? (degreeForSecs = 0, degreeForMin += 6, degreeForHour += 0.5) : degreeForSecs += 6;

    (degreeForMin >= 360)? (degreeForMin = 0) : degreeForMin;

    (degreeForHour >= 360)? (degreeForHour = 0) : degreeForHour;

    ticTac(degreeForSecs, degreeForMin, degreeForHour);

}, 1000);
