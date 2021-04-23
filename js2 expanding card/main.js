//running to code
(()=>{
    const panels = document.querySelectorAll('.panel');

    // const declar = Array.from(panels);
    // console.log(declar);
    panels.forEach((panel) =>{
        // console.log(panels)
        panel.addEventListener('click', ()=>{
            removeClass();
            panel.classList.add('active');
        });
    });

    function removeClass() {
        panels.forEach((panel)=>{
            panel.classList.remove('active');
        });
    }

})();