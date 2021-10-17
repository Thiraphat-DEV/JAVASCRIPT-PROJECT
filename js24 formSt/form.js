window.onload =() => {

    //get Element
    const password = document.getElementById("password");
    const background = document.getElementById("background");
    
    //addEvent
    password.addEventListener("input", (e) => {
        const input = e.target.value;
        const length = input.length;
        
        const blurVal = 20 - length * 2;
        background.style.filter = `blur(${blurVal}px)`;
    });
}