document.querySelectorAll(".drum").forEach(btn=> btn.addEventListener("click", function(){
    let audio;
 const buttonInner = this.innerHTML
    switch (buttonInner){
        case "w":
        audio = new Audio("./sounds/crash.mp3");
        audio.play();
        break;
        case "a":
         audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        break;
        case "s":
        audio = new Audio("./sounds/snare.mp3");
        audio.play();
        break;
        case "d":
        audio = new Audio("./sounds/tom-1.mp3");
        
        audio.play(); 
        break; 
        case "j":
        audio = new Audio("./sounds/tom-2.mp3");
        audio.play();  
        break;
        case "k":
        audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
        break;
        case "l":
        audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
        break;
        default:
        console.log("invalid option");
 }
}))

// let audio = new Audio("./sounds/tom-1.mp3");
// audio.play();