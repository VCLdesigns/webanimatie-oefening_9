var infobalk = document.querySelector("#info");
var deur = document.querySelector("#deur");
var sleutel = document.querySelector("#sleutel");
var reset = document.querySelector("#reset");
var help = document.querySelector("#help");
var krijs = new Audio("audio/krijs.mp3");
var Gevonden = false;

help.addEventListener("click", toonHint);
function toonHint(evt) {
    if (Gevonden == false) {
        infobalk.innerHTML = "Hopelijk hebben ze een sleutel klaargelegd."
    } else {
        infobalk.innerHTML = "Ik heb de sleutel gevonden, tijd om ze te verrassen."
    }
}
sleutel.addEventListener("click", sleutelGevonden);
function sleutelGevonden(evt) {
    infobalk.innerHTML = "één sleutel... check!";
    Gevonden = true;
    sleutel.classList.add("sleutel_gevonden");
}
deur.addEventListener("click", deurOpen);
function deurOpen(evt) {
    if (Gevonden == false) {
        infobalk.innerHTML = "Geen reactie op mijn geklop en de deur is op slot... ";
    } else {
        infobalk.innerHTML = "Damn. What the hell... Run away!";
        deur.style.transform = "rotateY(130deg)";
        krijs.play();
        help.classList.toggle("reset_en_help_weg");
        reset.classList.toggle("reset_en_help_weg");
    }
}
reset.addEventListener("click", resetAlles);
function resetAlles(evt) {
    Gevonden = false;
    infobalk.innerHTML = "wow... Déjà Vu?!";
    sleutel.classList.remove("sleutel_gevonden");
    var topLocatie = 10 + Math.random() * (600 - 10);
    sleutel.style.top = topLocatie + "px";
    deur.style.transform = "rotateY(0deg)";
    reset.classList.toggle("reset_en_help_weg");
    help.classList.toggle("reset_en_help_weg");
}