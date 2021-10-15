
 const nav = document.querySelector('.nav');
 function checkScroll() {
        window.addEventListener('scroll', (()=>{
            window.scrollY > nav.offsetHeight ? nav.classList.add('active') : nav.classList.remove('active');
        })); 
    }
 checkScroll();
