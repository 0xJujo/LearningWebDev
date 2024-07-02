var buttonColours= ["red", "blue", "green","yellow"];
var gamePattern=[];
var randomNumber,randomChosenColour,level=0;
var gamePattern=[];
var userChosenPattern=[];
var started;

$("body").keydown(function(){
    if (started===false){
        nextSequence();
    }
    started=false;
});

function nextSequence(){
    level++;
    randomNumber= Math.floor(Math.random()*4);
    randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    randomChosenColour="#"+randomChosenColour;
    $(randomChosenColour).fadeOut(50).fadeIn(50);
    $(".btn").click(function(){
        var userChosenColour=this.id;
        userChosenPattern.push(userChosenColour);
        animatePress(userChosenColour);
        playSound(userChosenColour);
    });
}

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