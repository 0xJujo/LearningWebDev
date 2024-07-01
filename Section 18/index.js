var lend=document.querySelectorAll("button").length;
for(var i=0; i<lend; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){    
        var inp= this.innerHTML;
        playSound(inp);
    });

    document.addEventListener("keydown", function(e){ 
        var inp=e.key;
        playSound(inp);
    });
}

function playSound(inp){
    switch(inp){
    case "w":
        var audio= new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    case "a":
        var audio= new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
    case "s":
        var audio= new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    case "d":
        var audio= new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    case "j":
        var audio= new Audio("sounds/snare.mp3");
        audio.play();
        break;
    case "k":
        var audio= new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    case "l":
        var audio= new Audio("sounds/crash.mp3");
        audio.play();
        break;
    default: 
        console.log("Invalid input");
    }
    var className= "."+inp;
    document.querySelector(className).classList.add("pressed");
    setTimeout(() => {
        document.querySelector(className).classList.remove("pressed");
    }, 150);
}