
(()=>{

    //get ID
    const boxesContainer = document.getElementById('boxes');
    const btn = document.getElementById('btn')

    //add Event Clickbutton
    //เมื่อคลิกเเล้วมีการเรียกใช้ class ทันที เเละไปดึง class in css
    btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));//
    
    //สร้างกล่อง
    function creatFullBox() {
        //loop is a matrix ให้มีขนาด 4 เเถว 4 คอลัม
        for (let i = 0; i < 4; i++) {
           for (let j = 0; j < 4; j++) {
               const box = document.createElement('div')
               box.classList.add('box')//add class from css
               box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`//ให้ตำเเหน่งของ -box  * 125px
               boxesContainer.appendChild(box);//ให้ boxContainer ไปอยู่หน้า box
               
           }
            
        }
    }
    //Run to Page
    function run() {
         creatFullBox();
    }
   run();
})();
