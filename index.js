
//-_-_-_-_-_-_-_-_-_-_-_-_-_ Compteur -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

const text = document.querySelector('.decompte')

function getChrono () {
    const now = new Date().getTime();
    const countDownDate = new Date('January 30, 2023').getTime();

    console.log(text);

const distanceBase = countDownDate - now;

const days = Math.floor(distanceBase / (1000*60*60*24));
const hours = Math.floor((distanceBase % (1000*60*60*24) / (1000*60*60)));
const minutes = Math.floor((distanceBase % (1000*60*60) / (1000*60)));
const seconds = Math.floor((distanceBase % (1000*60) / 1000));
// console.log(days , hours, minutes, seconds);

text.innerText = `${days}j ${hours}h ${minutes}m ${seconds}s`;
};

const countDownInterval = setInterval(() => {

    getChrono()

}, 1000);

// GSAP
gsap.to(".groot", {x: 200});