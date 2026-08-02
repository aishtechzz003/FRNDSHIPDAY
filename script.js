// =============================
// FRIENDSHIP DAY LANDING PAGE
// =============================

const loader = document.getElementById("loader");
const progress = document.querySelector(".progress");
const percentage = document.getElementById("percentage");
const loadingText = document.getElementById("loadingText");

const flash = document.getElementById("flash");

const main = document.getElementById("mainContent");

const words = document.querySelectorAll(".word");

const quote = document.querySelector(".quote");

const daysCounter = document.getElementById("daysCounter");



// ======================================
// FRIENDSHIP START DATE
// CHANGE THIS
// ======================================

const startDate = new Date("2022-10-20");



// ======================================
// TOTAL DAYS
// ======================================

const today = new Date();

const totalDays = Math.floor(
    (today - startDate) / (1000 * 60 * 60 * 24)
);




// ======================================
// LOADER
// ======================================

let value = 0;

const loadingMessages = [

"Initializing Friendship Archive...",

"Searching Memories...",

"Found 1842 Memories ❤️",

"Opening Album..."

];

let msgIndex = 0;

loadingText.innerHTML = loadingMessages[0];

const loaderInterval = setInterval(() => {

value++;

progress.style.width = value + "%";

percentage.innerHTML = value + "%";



if(value==25){

loadingText.innerHTML=loadingMessages[1];

}

if(value==60){

loadingText.innerHTML=loadingMessages[2];

}

if(value==90){

loadingText.innerHTML=loadingMessages[3];

}



if(value>=100){

clearInterval(loaderInterval);

showWebsite();

}



},35);




// ======================================
// SHOW WEBSITE
// ======================================

function showWebsite(){

flash.style.opacity=1;

setTimeout(()=>{

flash.style.opacity=0;

loader.style.display="none";

main.style.display="block";

animateHero();

animateDays();

generateParticles();

},250);

}




// ======================================
// HERO ANIMATION
// ======================================

function animateHero(){

words.forEach((word,index)=>{

setTimeout(()=>{

word.style.transition=".8s";

word.style.opacity=1;

word.style.transform="translateY(0)";

},index*600);

});



setTimeout(()=>{

quote.style.transition="1s";

quote.style.opacity=1;

},2200);

}



// ======================================
// DAYS COUNTER
// ======================================

function animateDays(){

let count=0;

const interval=setInterval(()=>{

count++;

daysCounter.innerHTML=count;

if(count>=totalDays){

clearInterval(interval);

}

},5);

}



// ======================================
// FLOATING PARTICLES
// ======================================

function generateParticles(){

const bg=document.querySelector(".background");

for(let i=0;i<40;i++){

const dot=document.createElement("span");

dot.style.left=Math.random()*100+"%";

dot.style.animationDelay=Math.random()*15+"s";

dot.style.animationDuration=(10+Math.random()*20)+"s";

bg.appendChild(dot);

}

}

const polaroids = document.querySelectorAll(".polaroid");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:0.2});

polaroids.forEach(card=>{

    observer.observe(card);

});

let selectedFriend = "";

const friends = {

    mahesh: {
        password: "COMMITMENT",
        page: "indu.html"
    },

    sravani: {
        password: "HELPING NATURE",
        page: "sow.html"
    },

    rakesh: {
        password: "SITUATION HANDLING",
        page: "puj.html"
    },

    friend4: {
        password: "SOFT HEART",
        page: "mahi.html"
    },

    friend5: {
        password: "LOYALTY",
        page: "pram.html"
    },

    friend6: {
        password: "MATURITY AND DEDICATION",
        page: "appi.html"
    },

    friend7: {
        password: "PATIENCE AND SELF LOVE",
        page: "gre.html"
    }

};



function openPassword(friend){

    selectedFriend = friend;

    document.getElementById("passwordModal").style.display="flex";

    document.getElementById("passwordInput").value="";

    document.getElementById("error").innerHTML="";
}

function closePassword(){

    document.getElementById("passwordModal").style.display="none";

    document.getElementById("passwordInput").value="";

    document.getElementById("error").innerHTML="";
}

function checkPassword(){

    const input=document.getElementById("passwordInput").value;

    if(input===friends[selectedFriend].password){

        window.location.href=friends[selectedFriend].page;

    }

    else{

        document.getElementById("error").innerHTML="❌ Wrong Password";

    }

}

// ESC closes popup
document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        closePassword();

    }

});

// Click outside closes popup
window.addEventListener("click",function(e){

    const modal=document.getElementById("passwordModal");

    if(e.target===modal){

        closePassword();

    }

});
