
(()=>{
    // get id && class from html
    const open = document.getElementById('open');
    const close = document.getElementById('close'); 
    const container = document.querySelector('.container');

    function OpenBtn() {
        container.classList.add("show-nav");
        
    }

    function CloseBtn() {
        container.classList.remove("show-nav");
    }
    
    open.addEventListener('click', OpenBtn);
 
    close.addEventListener('click', CloseBtn);
    
    
})();