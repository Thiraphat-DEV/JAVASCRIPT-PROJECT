

    const textElem = document.getElementById('text');
    const speedElem = document.getElementById('speed');

    const text = 'THIRAPHAT Code For Life';

    let idx =1 ;
    let speed = 300 /speedElem.value;

    wroteText();

    function wroteText() {
        textElem.innerText = text.slice(0, idx);

        idx++;

        if(idx > text.length) {
            idx = 1;
        }


        setTimeout(wroteText, speed);
    }

    speedElem.addEventListener('click', ((e)=>{
        speed = 300 /e.target.Value;
    }));
