var buttonColours= ["red", "blue", "green","yellow"];
var gamePattern=[];
var randomNumber,randomChosenColour,level=0;
var gamePattern=[];
var userChosenPattern=[];
var started=false;

$(document).keydown(function(){
    if (!started){
        $(".level-title").text("Level "+level);
        nextSequence();
        started=true;
    }
});

function nextSequence(){
    userChosenPattern=[];
    level++;
    $(".level-title").text("Level "+level);
    randomNumber= Math.floor(Math.random()*4);
    randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    randomChosenColour="#"+randomChosenColour;
    $(randomChosenColour).fadeOut(50).fadeIn(50);
   
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userChosenPattern[currentLevel]){
        if(userChosenPattern.length===gamePattern.length){
            setTimeout(function () => {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
        $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

$(".btn").click(function(){
    var userChosenColour=this.id;
    userChosenPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userChosenPattern.length-1);
});

function playSound(name){
    var soundLocation="sounds/"+name+".mp3";
    var audio= new Audio(soundLocation);
    audio.play();
}

function animatePress(name){
    $("#"+name).addClass("pressed");
    setTimeout(() => {
        $("#"+name).removeClass("pressed");
    }, 150);
}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}