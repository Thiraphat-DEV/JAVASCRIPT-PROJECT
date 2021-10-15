// apply to loadweb
window.onload = (()=>{
  
    //get class and id
    let sec = 00;
    let mi = 00;
    const appendMi = document.getElementById('term');
    const appendsec = document.getElementById('second');
    const btnRun = document.querySelector('.btn-run');
    const btnEnd = document.querySelector('.btn-end');
    const btnSet = document.querySelector('.btn-set');
    let Interval;

        //funciton 
    function RunTimes() {
        mi++;
        //minute
        if (mi < 9)  {
            appendMi.innerHTML = `0:${mi}`;
        }
        if (mi > 9) {
            appendMi.innerHTML = mi;
        }
        if (mi > 100) {
            sec++;
            appendsec.innerHTML = `0:${sec}`;
            mi = 0;
            appendMi.innerHTML = `0:${mi}`;
        }
        //second
        if(sec > 9) {
            appendsec.innerHTML = sec;
        }

    }


        //add event click
    btnRun.onclick = (()=>{
        clearInterval(Interval);
        Interval = setInterval(RunTimes, 10);
    })

    btnEnd.onclick = (()=>{
      clearInterval(Interval);  
    })

    btnSet.onclick = (()=>{
      clearInterval(Interval);
      mi = '00';
      sec = '00';
      appendMi.innerHTML = mi;
      appendsec.innerHTML = sec;
    })

})
