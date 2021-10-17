window.onload = () => {

  //get Element
  const boxsElem = document.getElementById("box");
  const colors = [
    "#00F72F",
    "#06F7FF",
    "#e55",
    "#FA0AB9",
    "#F45D25",
    "#206CF9",
    "#40ad",
    "#e5e",
    "#ee5",
    "#4f2533",
    "#095e58",
  ];
  
  const SQUARE = 200;
  
  for (let i = 0; i < SQUARE; i++) {
    const squares = document.createElement("div");
    squares.classList.add("square");
    
    squares.addEventListener("mouseover", () => getColor(squares));
    squares.addEventListener("mouseout", () => removeColor(squares));
    
    boxsElem.appendChild(squares);
  }
  
  function getColor(elem) {
    const color = randomColors();
    elem.style.background = color;
    elem.style.boxShadow = ` 0 0 2px ${color}, 0 0 10px ${color}`;
  }
  
  function removeColor(elem) {
    elem.style.background = '#1d1d1d';
    elem.style.boxShadow = '0 5px 5px #000';
    
  }
  function randomColors() {
    return colors[Math.floor(Math.random() * colors.length)];
    
  }
  
  
}