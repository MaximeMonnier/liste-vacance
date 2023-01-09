// ----------------------Var compteur ---------------------------------//
const text = document.querySelector('.decompte')
const phrase = document.querySelector(".phrase")
// ----------------------Fin Var compteur ---------------------------------//
// ----------------------Var text typing ---------------------------------//
const target = document.getElementById("target");
let array = ['Comment trouver Maxime','How to find max','Cómo encontrar a Maxime','So finden Sie Maxime','كيف تجد مكسيم','如何找到馬克西姆' ];
let wordIndex = 0; 
let letterIndex = 0; 
// ----------------------Fin Var text typing ---------------------------------//
// ----------------------Var changement de page ---------------------------------//
const dateBirth = document.getElementById("date")
const subBirth = document.getElementById("sub")
const maxBirth = "06/09/1995";
const vide = "";
// ---------------------- Fin Var changement de page ---------------------------------//


//-_-_-_-_-_-_-_-_-_-_-_-_-_  loadeur -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
//-_-_-_-_-_-_-_-_-_-_-_-_-_  Bg brique -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-


window.addEventListener("load", () => {
    const loader = document.getElementById("chargement");
    const mainContent = document.getElementById("main-content");
    const banner = document.getElementsByClassName("banner")[0];
    const blocks = document.getElementsByClassName("blocks");
    
    setTimeout(() => {
        // alert("06/09/1995")
        loader.style.display = "none"
        mainContent.style.visibility = "visible"

        for(let i = 1; i < 400; i++){
            banner.innerHTML += "<div class='blocks'></div>"
            blocks[i].style.animationDelay = `${i * 0.01}s`;
        }

    },5000);



})

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

// text.innerText = `${days}j ${hours}h ${minutes}m ${seconds}s`;
phrase.innerHTML = `<span style="--i:0;" data-text="Happy">${days}j</span>
<span style="--i:1;" data-text="New">${hours}h</span>
<span style="--i:2;" data-text="Year">${minutes}m</span>
<span style="--i:3;" data-text="2023">${seconds}s</span>`
};

const countDownInterval = setInterval(() => {

    getChrono()

}, 1000);


//-_-_-_-_-_-_-_-_-_-_-_-_-_ text typing-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

const creatLetter = () => {
    const letter = document.createElement("span")
    target.appendChild(letter);

    letter.textContent = array[wordIndex][letterIndex]

    setTimeout (() => {
        letter.remove();
    }, 2800)
};

const loop = () => {
    setTimeout (() => {
        if (wordIndex >= array.length) {
            wordIndex = 0;
            letterIndex = 0;
            loop()
        } else if (letterIndex < array[wordIndex].length){
            creatLetter()
            letterIndex++
            loop();
        } else {
            wordIndex++;
            letterIndex = 0;
            setTimeout (() => {
                loop()
            }, 2800)
        }
    }, 50)
};

//-_-_-_-_-_-_-_-_-_-_-_-_-_ Changement de page-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

const changepage = () => {

    subBirth.addEventListener("click" , () => {
        if(dateBirth.value == maxBirth) {
            alert("Bravo Je suis fière")
            setTimeout (() => {
                // mainContent.style.display = "none"
                // loader.style.display = ""
                document.location.href = "./m3.html"
            }, 1)
        }else if(dateBirth.value == vide) {
            alert("Le champs est vide entrer une date")
        }else if (dateBirth.value != maxBirth) {
            alert("Tu me fait de la peine !")
        }
    })    
}

changepage ();

//-_-_-_-_-_-_-_-_-_-_-_-_-_ Changement de page -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_



loop();

// GSAP
gsap.to(".groot", {x: 200});