const hourhand = document.querySelector('.hour-dot');
const mihand = document.querySelector('.minute-dot');
const sechand = document.querySelector('.sec-dot');

//get new date

function setDate() {
    let now = new Date();//set local date world
    //sethour
    let hour = now.getHours();
    let hourCalc = Math.round((hour / 12) * 360) + 90;
    //set minute
    let minute = now.getMinutes();
    let minuteCalc = Math.round((minute / 60) * 360) + 90;
    //set seconds
    let sec = now.getSeconds();
    let secCalc = Math.round((sec / 60) * 360) + 90;

    //set value in class
    hourhand.style.transform = `rotate(${hourCalc}deg)`;
    mihand.style.transform = `rotate(${minuteCalc}deg)`;
    sechand.style.transform = `rotate(${secCalc}deg)`;

    // console.log(hour + ':' + minute + ':' + sec);
}

   setInterval(setDate, 1000);
