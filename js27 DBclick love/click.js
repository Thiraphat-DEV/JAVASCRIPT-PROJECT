window.onload = () => {
  const loves = document.querySelector(".loves");
  const times = document.querySelector("#times");

  let clickTime = 0; //set begin time
  let timeClick = 0; //set begin time

  const createLove = (e) => {
    const love = document.createElement("i");
    love.classList.add("fas"); //add class from css
    love.classList.add("fa-heart"); //add class from css

    const x = e.clientX;
    const y = e.clientY;

    const tops = e.target.offsetTop;
    const lefts = e.target.OffsetLeft;

    const xInside = x - lefts;
    const yInside = y - tops;

    console.log(xInside, yInside); // check Inside

    love.style.top = `${yInside}px`; //set SizeY with page
    love.style.left = `${xInside}px`; //set SizeX with page

    loves.appendChild(love);

    times.innerHTML = ++timeClick;

    setTimeout(() => love.remove(), 4000);
  };
  loves.addEventListener("click", (e) => {
    if (clickTime === 0) {
      clickTime = new Date().getTime();
    } else {
      if (new Date().getTime() - clickTime < 800) {
        createLove(e);
        clickTime = 0;
      } else {
        clickTime = new Date().getTime();
      }
    }
  });
};
