let guestScore=0;
let homeScore=0;
let homeScoreEl= document.getElementById("home-score");
let guestScoreEl=document.getElementById("guest-score");

function addOneHome(){
    homeScore+=1;
    homeScoreEl.textContent=homeScore;
}
function addTwoHome(){
    homeScore+=2;
    homeScoreEl.textContent=homeScore;
}
function addThreeHome(){
    homeScore+=3;
    homeScoreEl.textContent=homeScore;
}

function addOneGuest(){
    guestScore+=1;
    guestScoreEl.textContent=guestScore;
}
function addTwoGuest(){
    guestScore+=2;
    guestScoreEl.textContent=guestScore;
}
function addThreeGuest(){
    guestScore+=3;
    guestScoreEl.textContent=guestScore;
}

function displayResult(){
    if(guestScore>homeScore){
        document.getElementById("winning-team").textContent="Guest Wins!"
    }
    else if(guestScore<homeScore){
        document.getElementById("winning-team").textContent="Home Wins!"
    }
    else{
        document.getElementById("winning-team").textContent="Draw!"
    }
}

function restartGame(){
    guestScore=0;
    homeScore=0;
    guestScoreEl.textContent=0;
    homeScoreEl.textContent=0;
     document.getElementById("winning-team").textContent=""
}