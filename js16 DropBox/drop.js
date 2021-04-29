(()=>{
    //get ELement
    const boxs = document.querySelectorAll('.box');
    const boxeds = document.querySelector('.boxed');


    //add Event drop && drag
    boxeds.addEventListener('dragstart', dragBegin);        
    boxeds.addEventListener('dragend', dragEnd);        
    //use loop in boxs
   for(const box of boxs) {
        box.addEventListener('dragover',dragOver);
        box.addEventListener('dragenter',dragPaste);
        box.addEventListener('dragleave',dragOut);
        box.addEventListener('drop',dragDrop);
   }

   //function DragDrop and use this keyword
    function dragBegin() {
        this.className += ' edgh';
        setTimeout( ()=> this.className = 'invisible', 0 )
    }
    function dragEnd() {
        this.className = boxeds;
    }
    //add e properties preventdefault
    function dragOver(e) {
        e.preventDefault();
    }
    function dragPaste(e) {
        e.preventDefault();
        this.className+=' hovered';

    }
    function dragOut() {
        this.className = ' box';
    }
    function dragDrop() {
        this.className+= ' box';
        this.appendChild(boxeds);
    }

})();