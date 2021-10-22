// starting code funny!!!
let dragElem; //declare global

function onDragPass() {
  dragElem = this; // set Element ที่จะว่างโดยเรียกใข้ผ่าน This
}

function onDrop() {
  this.append(dragElem);
  dragElem = null; //เมื่อมีการดึง ค่าใน drop zone ให้ ส่วนที่ดึงออกมีค่าว่าง
}

function onEnterPass(e) {
  e.preventDefault(); // protect to page refresh
}

function onOver(e) {
  e.preventDefault(); // protect to page refresh
}
function runTodo() {
  const askElems = Array.from(document.querySelectorAll(".ask")); //แปลงจาก node list เป็น array

  const dropElems = Array.from(document.querySelectorAll(".drop-zone")); //แปลงจาก node list เป็น array

  askElems.forEach((askElem) => {
    askElem.addEventListener("dragstart", onDragPass); //set default to this object on page 
  });

  //  นำเเต่ละ Element ที่จะว่างใส่ไปในเเต่ละ Zone 
  dropElems.forEach((dropZoneElem) => {
    dropZoneElem.addEventListener("drop", onDrop);
    dropZoneElem.addEventListener("dragover", onOver);
    dropZoneElem.addEventListener("dragenter", onEnterPass);
  });
}

runTodo();
