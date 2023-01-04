// alert ('Bien le bonjour ! pas facile de trouver un vielle amie partie depuis presque 2ans déjà ! Je vous et fait un petit jeux de piste pour me retrouver !!! Aller bonne chance')
// prompt('Si vous voulez aller plus loin il va falloire trouver ma date de naissance')

const text = document.querySelector('.decompte')


//-_-_-_-_-_-_-_-_-_-_-_-_-_  loadeur -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-


window.addEventListener("load", () => {
    const loader = document.getElementById("chargement");
    const mainContent = document.getElementById("main-content");
    setTimeout(() => {

        loader.style.display = "none"
        mainContent.style.visibility = "visible"

    },1000);



})


//-_-_-_-_-_-_-_-_-_-_-_-_-_  Bg brique -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
const banner = document.getElementsByClassName("banner")[0];
const blocks = document.getElementsByClassName("blocks");

console.log(banner, blocks);

for(let i = 1; i < 400; i++){
    banner.innerHTML += "<div class='blocks'></div>"
    blocks[i].style.aniamtionDelay = `${i * 0.05}s`;
}


//-_-_-_-_-_-_-_-_-_-_-_-_-_ Compteur -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_


function getChrono () {
    const now = new Date().getTime();
    const countDownDate = new Date('January 30, 2023').getTime();

    // console.log(text);

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


//-_-_-_-_-_-_-_-_-_-_-_-_-_ Bar de progression-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_


// GSAP
gsap.to(".groot", {x: 200});