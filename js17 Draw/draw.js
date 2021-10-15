//draw coding pad
  //get id
  const canvas = document.getElementById("canvas");
  const increaseBtn = document.getElementById("increase");
  const decreaseBtn = document.getElementById("decrease");
  const sizeElem = document.getElementById("size");
  const colorsElem = document.getElementById("color");
  const clearELem = document.getElementById("clear");

  //set draw 2d
  const ctx = canvas.getContext("2d");
  let color = 'black';//set begin color
  let size = 10;//set begin textvalue on html
  let x;
  let y;
  let Pressed = false;//เมื่อกดหรือลาก ให้ค่าเริ่มต้นเป็น false

  //mouse Up
  function mouseUp() {
    Pressed = false;
    x = undefined;
    y = undefined;

  }

  //mouse Move
  function mouseMove(e) {
    if (Pressed) {//ถ้ามีการกดหรือลาก ให้ทำโค้ดด้านล่าง
      const x2 = e.offsetX;//ให้มีค่าเท่ากับ เเนวเเกน x ของหน้าจอ
      const y2 = e.offsetY;//ให้มีค่าเท่ากับ เเนวเเกน y ของหน้าจอ
      drawRound(x2, y2);
      x = x2;
      y = y2;
      drawLine(x, y, x2, y2);
     
    }
  }

  //mouse Down
  function mouseDown(e) {
    Pressed = true;
    x = e.offsetX;
    y = e.offsetY;
  }

  // draw Round
  function drawRound(x, y) {
    ctx.beginPath();//กำหนด path
    ctx.arc(x, y, size, 0, Math.PI * 2);//(เเกน x, เเกน Y,  รัศมี, จุดเริ่ม, จุดจบ )
    
    ctx.fillStyle = color; //out Round
    ctx.fill();
  }

  //draw Line
  function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();//กำหนด path
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeColor = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
  }

  
  //change Colors custom
  function changeColor(e) {
     color =  e.target.value;
  }

  //plus btn ++ size
  function plusBtn() {
      size+=5;
      if(size > 60) {
          size = 60;
      }

      updateSize();//show size on page
  }

  //minusBtn -- size
  function minusBtn() {
      size-=5;
      if(size < 8 ) {
          size = 8;
      }

      updateSize();//show size on page
  }
  

  //updateSize Color
  function updateSize() {
      sizeElem.innerText = size;//set text on html
  }
  
  //clearScreen
  function clearScreen() {
      // เมื่อกดเเล้วหน้าจอจะเป็นค่าเริ่มต้น
        ctx.clearRect(0, 0, canvas.width, canvas.height);//(เเกน x, เเกน y, กว้าง, ยาว )
  }


 function runEvent() {
            //addEvent Mouse
  canvas.addEventListener("mouseup", mouseUp);
  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mousedown", mouseDown);

          //addEvent Change Colors
  colorsElem.addEventListener('change', changeColor);
          //add plusbutton
  increaseBtn.addEventListener('click', plusBtn);
          // add minus button
  decreaseBtn.addEventListener('click', minusBtn);
          //add clear screen empty
  clearELem.addEventListener('click', clearScreen);
 }
 runEvent();


