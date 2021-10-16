window.onload = ()=> {

    //get id
        const container = document.getElementById("js-container");
        const progressHg = document.getElementById("hg-js");
        let conH;
    //windows scroll
        window.onscroll =  (()=>{
          conH = container.offsetHeight - window.innerHeight;//ความสูงของ container
             //getBoundingClientRect() จะเอาขนาดเเละตำเเหน่งของ containerมาเก็บไว้
          let conP = container.getBoundingClientRect(); 
       

          let dif = conH + conP.top;
          let progressPercent = dif / conH * 100;
          let width = Math.floor(100 - progressPercent);

          progressHg.style.width = `${width}%`;
        })
}
