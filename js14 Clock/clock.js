(() => {
  //get Element
  const hourELem = document.querySelector(".hour");
  const miELem = document.querySelector(".minute");
  const secELem = document.querySelector(".sec");
  const timeELem = document.querySelector(".time");
  const dateELem = document.querySelector(".date");
  const toggleELem = document.querySelector(".toggle");

  function onToggle(e) {
    const html = document.querySelector("html");

    if (html.classList.contains("mode")) {
      html.classList.remove("mode");
      e.target.innerHTML = "PINK MODE";
    } else {
      html.classList.add("mode");
      e.target.innerHTML = "CYAN MODE";
    }
  }
  //ADD EVENT MODECOLOR
  toggleELem.addEventListener("click", onToggle);

  //function settime
  function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const dates = time.getDate();
    const year = time.getFullYear() + 543;
    const second = time.getSeconds();
    const hours = time.getHours();
    const minute = time.getMinutes();
    const hourClock = hours % 12;
    const DL = hours >= 12 ? "PM" : "AM";

    //find zodiac
    let zodiac = year % 12;
    switch (zodiac) {
      case 1:
        zodiac = "หนู";
        break;
      case 2:
        zodiac = "ฉลู";
        break;
      case 3:
        zodiac = "ขาล";
        break;
      case 4:
        zodiac = "เถาะ";
        break;
      case 5:
        zodiac = "มะโรง";
        break;
      case 6:
        zodiac = "มะเส็ง";
        break;
      case 7:
        zodiac = "มะเมีย";
        break;
      case 8:
        zodiac = "มะเเม";
        break;
      case 9:
        zodiac = "วอก";
        break;
      case 10:
        zodiac = "ระกา";
        break;
      case 11:
        zodiac = "จอ";
        break;
      case 12:
        zodiac = "กุน";
        break;

      default:
        zodiac = "My Name is BOATY";
        break;
    }

    //get hour
    hourELem.style.transform = `translate(-50%, -100%) rotate(${numberRange(
      hourClock,
      0,
      11,
      0,
      360
    )}deg)`;
    //get minute  design
    miELem.style.transform = `translate(-50%, -100%) rotate(${numberRange(
      minute,
      0,
      59,
      0,
      360
    )}deg) `;
    //get second design
    secELem.style.transform = `translate(-50%, -100%) rotate(${numberRange(
      second,
      0,
      59,
      0,
      360
    )}deg)`;
    // output time  design
    timeELem.innerHTML = `${hourClock}:${minute < 10 ? `0${minute}` : minute}:${
      second < 10 ? `0${second}` : second
    } ${DL}`;

    //get date and month
    dateELem.innerHTML = `วันที่ <span class="circle">${dates}</span> เดือน${
      month < 10 ? `0${month}` : month
    } พ.ศ.${year} ปี${zodiac}`;
  }
  //stack overflow jquery map number range
  const numberRange = (num, in_min, in_max, out_min, out_max) =>
    ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;


    function runTime() {
        setTime();
    }

    runTime();
  
})();
