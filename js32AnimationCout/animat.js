const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector("#replay");

runAnimation();//apply animation

function resetDOM() {//reset number of zero 
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");

  nums.forEach((num) => {
    num.classList.value = "";
  });

  nums[0].classList.add("in");//set default zero apply style "in"
}

function runAnimation() {
  nums.forEach((num, idx) => {//apply foreach and parameter number, index of num
    const nextToLast = nums.length - 1;

    num.addEventListener("animationend", (e) => {// require event animation  now is correct target name of animation number
      if (e.animationName === "goIn" && idx !== nextToLast) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide"); // counter is zero and hide animation
        finalMessage.classList.add("show"); //apply style show in style.css and apply message from html
      }
    });
  });
}

function run() {
  replay.addEventListener("click", () => {//apply animation again with click replay word
    resetDOM();
    runAnimation();
  });
}

run()
