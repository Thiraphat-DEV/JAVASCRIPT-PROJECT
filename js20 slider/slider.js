window.onload = () => { // set window onload is apply function

  const sliderElem = document.querySelector(".slider-container");
  const slideRight = document.querySelector(".right-slide");
  const leftSlide = document.querySelector(".left-slide");
  const upBtn = document.querySelector(".up-btn");
  const downBtn = document.querySelector(".down-btn");
  const slides = slideRight.querySelectorAll("div").length;
  
  let activeSlide = 0;
  leftSlide.style.top = `-${(slides - 1) * 100}vh`;
  
  upBtn.onclick = () => {
    changeSlide("up");
  };
  downBtn.onclick = () => {
    changeSlide("down");
  };
  
  const changeSlide = (direction) => {
    const slideHeight = sliderElem.clientHeight;
    
    if (direction === "up") {
      activeSlide++;
      if (activeSlide > slides - 1) {
        activeSlide = 0;
      } else if (direction === "down") {
        activeSlide--;
        if (activeSlide < 0) {
          activeSlide = slideHeight - 1;
        }
      }
    }
    
    slideRight.style.transform = `translateY(${activeSlide * slideHeight}px)`;
    leftSlide.style.transform = `translateY(${activeSlide * slideHeight}px)`;
  };
}
