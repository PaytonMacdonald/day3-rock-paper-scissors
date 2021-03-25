//play rock paper scissors
//player chooses rock paper or scissors by clicking one of the three button
//the computer chooses one of the three options randomly
//the results are displayed in the ARENA

//if you chose rock
//computer paper = lose
//computer scissors = win
//computer rock = draw




function play(pChoice) {
    let choice = ['rock', 'paper', 'scissors']
    let cChoice = choice[Math.floor(Math.random() * 3)]





    //ROCK CHOICE
    if (pChoice == 'rock' && cChoice == 'rock') {
        document.getElementById('arena').innerHTML =
            `<span class="appear1">YOU </span><span class="appear2">TIED!</span>`
    }
    if (pChoice == 'rock' && cChoice == 'paper') {
        document.getElementById('arena').innerHTML =
            `<span class="appear1">YOU </span><span class="appear2">LOST!</span>`
    }
    if (pChoice == 'rock' && cChoice == 'scissors') {
        document.getElementById('arena').innerHTML =
            `<span class="appear1">YOU </span><span class="appear2">WON!</span>`
    }



    //PAPER CHOICE
    if (pChoice == 'paper' && cChoice == 'paper') {
        document.getElementById('arena').innerHTML =
            `<span class="appear1">YOU </span><span class="appear2">TIED!</span>`
    }
    if (pChoice == 'paper' && cChoice == 'scissors') {
        document.getElementById('arena').innerHTML =
            `<span class="appear1">YOU </span><span class="appear2">LOST!</span>`
    }
    if (pChoice == 'paper' && cChoice == 'rock') {
        document.getElementById('arena').innerHTML =
            `<span class="appear1">YOU </span><span class="appear2">WON!</span>`
    }



    //SCISSORS CHOICE
    if (pChoice == 'scissors' && cChoice == 'scissors') {
        document.getElementById('arena').innerHTML =
            `<span class="appear1">YOU </span><span class="appear2">TIED!</span>`
    }
    if (pChoice == 'scissors' && cChoice == 'rock') {
        document.getElementById('arena').innerHTML =
            `<span class="appear1">YOU </span><span class="appear2">LOST!</span>`
    }
    if (pChoice == 'scissors' && cChoice == 'paper') {
        document.getElementById('arena').innerHTML =
            `<span class="appear1">YOU </span><span class="appear2">WON!</span>`
    }





}