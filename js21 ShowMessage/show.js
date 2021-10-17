window.onload = () => {

    const btn = document.querySelector('.btn');
    const toasts = document.getElementById('toast');
    
    
    const message = [
        'ก็บอกเเล้วไงว่าเขาไม่รัก',
        'ก็บอกเเล้วไงว่าเขาไม่สนเธอ',
        'รอไปเหอะคนดีทั้งที่เธอไม่มีหวัง',
        'รอไปเหอะคนดีทั้งที่เธอไม่มีหวัง',
        'คอยซับน้ำตาดูเเลให้หายดี',
        'ฉันคนนี้ถ้าเธอมีเขาฉันก็รักเธออยู่',
        'ตอนนี้ควรทำยังไง',
    ];
    
    
    const types = ['danger', 'warning', 'change']
    
    
    
    function creatMessage(message = null, type = null) {
        const task = document.createElement('div');
        task.classList.add('toast');
        task.classList.add(type ? type : getRandomType())
        task.innerText = message? message: getRandom();
        
        
        toasts.appendChild(task);
        
        setTimeout(() => task.remove, 1000);
    }
    
    function getRandom() {
        return message[Math.floor( Math.random() * message.length)];
    }
    function getRandomType() {
        return types[Math.floor( Math.random() * message.length)];
    }
    
    btn.addEventListener('click', creatMessage);
}