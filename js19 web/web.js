
(()=>{
    const nav = document.querySelector('.nav');
 function run() {
        window.addEventListener('scroll', (()=>{
            window.scrollY > nav.offsetHeight ? nav.classList.add('active') : nav.classList.remove('active');
        })); 
    }
    run();
})();