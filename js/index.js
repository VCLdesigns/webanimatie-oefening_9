var infobalk = document.querySelector("#info");
var deur = document.querySelector("#deur");
var sleutel = document.querySelector("#sleutel");
var reset = document.querySelector("#reset");
var help = document.querySelector("#help");
var Gevonden = false;
help.addEventListener("click", toonHint);
function toonHint(evt) {
    if (Gevonden == false) {
        infobalk.innerHTML = "Een sleutel zou nu wel handig zijn."
    } else {
        infobalk.innerHTML = "Waar zou ik die sleutel voor kunnen gebruiken?"
    }
}
sleutel.addEventListener("click", sleutelGevonden);
function sleutelGevonden(evt) {
    infobalk.innerHTML = "Kijk, een sleutel gevonden.";
    Gevonden = true;
    sleutel.classList.add("sleutel_gevonden");
}
deur.addEventListener("click", deurOpen);
function deurOpen(evt) {
    if (Gevonden == false) {
        infobalk.innerHTML = "De deur is op slot... ";
    } else {
        infobalk.innerHTML = "Zombies!";
        deur.style.transform = "rotateY(130deg)";
        help.classList.toggle("reset_en_help_weg");
        reset.classList.toggle("reset_en_help_weg");
    }
}
reset.addEventListener("click", resetAlles);
function resetAlles(evt) {
    Gevonden = false;
    infobalk.innerHTML = "Déjà Vu?!";
    sleutel.classList.remove("sleutel_gevonden");
    var topLocatie = 10 + Math.random() * (600 - 10);
    sleutel.style.top = topLocatie + "px";
    deur.style.transform = "rotateY(0deg)";
    reset.classList.toggle("reset_en_help_weg");
    help.classList.toggle("reset_en_help_weg");
}