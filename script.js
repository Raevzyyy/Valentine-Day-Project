function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');
    document.body.appendChild(heart);
    
    const size = Math.random() * 20 + 10 + 'px';
    heart.style.fontSize = size;
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';

    setTimeout(() => { heart.remove(); }, 5000);
}

function createRose() {
    const rose = document.createElement('img');
    rose.src = 'https://www.freeiconspng.com/uploads/red-rose-png-5.png'; // Gambar mawar
    rose.classList.add('rose');
    rose.style.width = '50px';
    rose.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(rose);

    setTimeout(() => { rose.remove(); }, 8000);
}

setInterval(createHeart, 300);
setInterval(createRose, 2000);
