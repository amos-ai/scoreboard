//  grab the document from html
// create 3 funtions to increment based on the value.
// render the score to the scoreboard 
// create a function for a new-game to return zero 

let homeScore = document.getElementById("score-home-el")
let guestScore = document.getElementById("score-guest-el")
countOne = 0
countTwo = 0
function increment1() {
    countOne += 1
    homeScore.textContent = countOne
}

function increment2() {
    countOne += 2
    homeScore.textContent = countOne
}

function increment3() {
    countOne += 3 
    homeScore.textContent = countOne
}

function increment10() {
    countTwo += 1 
    guestScore.textContent = countTwo
}

function increment12() {
    countTwo += 2 
    guestScore.textContent = countTwo
}

function increment13() {
    countTwo += 3 
   guestScore.textContent = countTwo
}
/*
function newgame(){
    countOne -= countOne
    countTwo -= countTwo
    
    homeScore.textContent = 0
    guestScore.textContent = 0
}
*/