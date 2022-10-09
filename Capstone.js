let attack = document.querySelector("#B2");

attack.addEventListener('click', recked);

function recked (evt) {
    alert("Ive been attacked");   

}

function changeStyle() {
    var element = document.getElementById("enmySquare");
    element.style.backgroundColor = "00ff00";
}


let Begin = document.querySelector("#startG");

Begin.addEventListener('click', Start);

function Start () {

}


let noob = document.querySelector("#bang");

noob.addEventListener('click', boom)

function boom () {
    
    alert("ow");
}


