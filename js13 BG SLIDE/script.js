

    //get Element class  and id button
    const body  = document.body;
    const slides = document.querySelectorAll('.slide');
    const leftBtn = document.getElementById('left');
    const rightBtn = document.getElementById('right');

    let activeSlider = 0;
    function onLeft () {
        activeSlider--;

        if (activeSlider < 0) {
            activeSlider = slides.length -1 ;
        }
        setActive();
        setBg();
    }
    //function button click
    function onRight() {
        activeSlider++;

        //check to slides
        if (activeSlider > slides.length - 1) {
            activeSlider = 0;
        }


        setBg();
        setActive();
    }
    //setActive();
    function setActive() {
        slides.forEach((slide)=>{ //loop foreach
            slide.classList.remove('active');//remove class
        });
        
        slides[activeSlider].classList.add('active');//add class
    }
    //funtion setBg
    setBg();
    function setBg() {
        body.style.backgroundImage = slides[activeSlider].style.backgroundImage;
    }
    //add Event click
    rightBtn.addEventListener('click', onRight);
    leftBtn.addEventListener('click', onLeft);
