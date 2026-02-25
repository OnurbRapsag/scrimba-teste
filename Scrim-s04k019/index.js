let homePoints = 0
let homePointsText = document.getElementById("score-number-home")
let guestPointsText = document.getElementById("score-number-guest")

function incrementHomeBy1(){
    homePoints += 1
    console.log(homePoints)
    homePointsText.textContent = homePoints
}

function incrementHomeBy2(){
    homePoints += 2
    homePointsText.textContent = homePoints
}

function incrementHomeBy3(){
    homePoints += 3
    homePointsText.textContent = homePoints
}

function incrementGuestBy1(){
    homePoints += 1
    console.log(homePoints)
    guestPointsText.textContent = homePoints
}

function incrementGuestBy2(){
    homePoints += 2
    guestPointsText.textContent = homePoints
}

function incrementGuestBy3(){
    homePoints += 3
    guestPointsText.textContent = homePoints
}

