const greetingDisplay = document.getElementById("greeting-display");

const fromName = document.getElementById("fromName");
const toName = document.getElementById("toName");
const message = document.getElementById("message");

const btn = document.getElementById("btn");
const hex = document.querySelector(".hex");

const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
]

const writeCard = () => {
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
 
    if(message.value) {
        greetingDisplay.textContent = `To: ${toName.value}
         ${message.value} From: ${fromName.value}`;
    } else {
        greetingDisplay.textContent = `To: ${toName.value}
         ${greeting} From: ${fromName.value}`;
    }
    
    if(message.value.length >= 40) {
        alert("Your message shall not exceed 40 characters");
        greetingDisplay.textContent = "";
    }
    
    if(toName.value === "" && fromName.value === "") {
        greetingDisplay.textContent = `${greeting}`;
    } 
    
    document.body.style.backgroundImage = "url('http://www.animationsoftware7.com/img/agifs/snow03.gif')";
        
    toName.value = "";
    fromName.value = "";
    message.value = "";
}

btn.addEventListener("click", writeCard);