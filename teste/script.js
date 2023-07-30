const carouselContainer = document.getElementById('carousel-container');
const images = document.querySelectorAll('.imagem');

let idx = 0;

function highlightImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.classList.add('highlight');
        } else {
            image.classList.remove('highlight');
        }
    });
}

function carousel() {
    idx++;
    if (idx > images.length - 1) {
        idx = 0;
    }
    highlightImage(idx);
    //carouselContainer.style.transform = `translateX(${-idx * 10}vw)`;
}

setInterval(carousel, 1800);


