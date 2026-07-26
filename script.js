// ===============================
// Close Letter
// ===============================

function closeLetter() {
    document.getElementById("letter").style.display = "none";

    const song = document.getElementById("birthdaySong");
    song.pause();
    song.currentTime = 0;
}

// ===============================
// Password Check
// ===============================

function checkPassword() {

    let password = prompt("❤️ Enter Password ❤️");

    if (password === null) return;

    if (password.trim().toLowerCase() === "kuchu puchu") {

        openSurprise();

    } else {

        alert("❌ Wrong Password!");

    }

}

// ===============================
// Open Surprise
// ===============================

function openSurprise() {

    document.getElementById("letter").style.display = "flex";

    const song = document.getElementById("birthdaySong");

    song.volume = 0.8;

    song.loop = true;   // Song loop mein chalegi

    song.play().catch(function(error){
        console.log(error);
    });

    confetti();

}
// ===============================
// Floating Hearts
// ===============================

for(let i=0;i<40;i++){

    let heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.animationDuration=(5+Math.random()*6)+"s";

    document.body.appendChild(heart);

}

// ===============================
// Confetti
// ===============================

function confetti(){

    for(let i=0;i<180;i++){

        let c=document.createElement("div");

        c.innerHTML="🎉";

        c.style.position="fixed";

        c.style.left=Math.random()*100+"vw";

        c.style.top="-20px";

        c.style.fontSize=(15+Math.random()*20)+"px";

        c.style.transition="4s linear";

        document.body.appendChild(c);

        setTimeout(function(){

            c.style.top="110vh";

        },50);

        setTimeout(function(){

            c.remove();

        },4000);

    }

}

// ===============================
// Birthday Countdown
// ===============================

// CHANGE THIS DATE

const birthday = new Date("August 18, 2026 00:00:00").getTime();

const timer = setInterval(function(){

    const now = new Date().getTime();

    const diff = birthday - now;

    if(diff > 0){

        let days = Math.floor(diff/(1000*60*60*24));

        let hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));

        let minutes = Math.floor((diff%(1000*60*60))/(1000*60));

        let seconds = Math.floor((diff%(1000*60))/1000);

        document.getElementById("countdown").innerHTML =
        "⏳ " +
        days + " Days " +
        hours + " Hours " +
        minutes + " Minutes " +
        seconds + " Seconds";

    }else{

        clearInterval(timer);

        document.getElementById("countdown").innerHTML =
        "🎉 HAPPY BIRTHDAY IMAN ❤️";

        document.getElementById("surpriseBtn").style.display="inline-block";

    }

},1000);