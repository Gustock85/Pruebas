
//Funciones de Carrusel 1

const delay1 = 2500
const delay2 = 2800
const delay3 = 3100

const slides = document.querySelector('.slides');
console.log('slides', slides);


const slidesCount = slides.childElementCount

console.log('slidesCount', slidesCount);

const maxLeft = (slidesCount - 1) * 100 * -1

let current = 0;

function changeSlide(next = true) {
    if (next) {
        current += current > maxLeft ? -100 : current * -1;
    } else {
        current = current < 0 ? current + 100 : maxLeft;
    }

    slides.style.left = current + '%';
}

let autoChange = setInterval (changeSlide, delay1)

function restart() {
    clearInterval(autoChange);
    autoChange = setInterval(changeSlide, delay1)
}


//Funciones de Carrusel 2


const slides2 = document.querySelector('.slides2');
console.log('slides2', slides2);


const slidesCount2 = slides2.childElementCount

console.log('slidesCount2', slidesCount2);

const maxLeft2 = (slidesCount2 - 1) * 100 * -1

let current2 = 0;

function changeSlide2(next = true) {
    if (next) {
        current2 += current2 > maxLeft2 ? -100 : current2 * -1;
    } else {
        current2 = current2 < 0 ? current2 + 100 : maxLeft2;
    }

    slides2.style.left = current2 + '%';
}

let autoChange2 = setInterval (changeSlide2, delay2)

function restart() {
    clearInterval(autoChange2);
    autoChange2 = setInterval(changeSlide2, delay2)
}


//Funciones de Carrusel 3


const slides3 = document.querySelector('.slides3');
console.log('slides3', slides3);


const slidesCount3 = slides3.childElementCount

console.log('slidesCount3', slidesCount3);

const maxLeft3 = (slidesCount3 - 1) * 100 * -1

let current3 = 0;

function changeSlide3(next = true) {
    if (next) {
        current3 += current3 > maxLeft3 ? -100 : current3 * -1;
    } else {
        current3 = current3 < 0 ? current3 + 100 : maxLeft3;
    }

    slides3.style.left = current3 + '%';
}

let autoChange3 = setInterval (changeSlide3, delay3)

function restart() {
    clearInterval(autoChange3);
    autoChange3 = setInterval(changeSlide3, delay3)
}

// controls

document.querySelector(".next-slide").addEventListener("click", function () {
    changeSlide();
    restart();
})
document.querySelector(".prev-slide").addEventListener("click", function () {
    changeSlide(false);
    restart();
})
