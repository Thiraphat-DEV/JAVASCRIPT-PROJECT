
(()=>{
    window.addEventListener('keydown', ((e)=>{
        const music = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        // console.log(e.keyCode);
        if(!music){
            return;
        }
        music.currentTime = 0;
        music.play();
        key.classList.add('play');
        
    }));

    function clearTransition(e) {
        if(e.propertyName !== 'transform'){
            return;
        }
        this.classList.remove('play');
    }

    const keys = document.querySelectorAll('.key');
    //nodelist
    keys.forEach((key) => {
        key.addEventListener('transitionend', clearTransition);
    })

})();