var character = document.getElementById("character");
var block = document.getElementById("block");
document.addEventListener("click",jump);
let score = document.querySelector("#score");
let totalScore = 0;
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
        totalScore++;
        score.innerHTML = totalScore;
    }
    setTimeout(function() {
        character.classList.remove("animate");
    },300); //300ms = length of animation
}
function removeJump(){
    character.classList.remove("animate");
}
function checkDead(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        alert("Game over! Score: "  + totalScore);
        totalScore = 0;
    }
}

setInterval(checkDead, 10);