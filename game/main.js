/* 
 * Author: Nazmus Nasir
 * Name: Game of Math
 * Description: Get as many correct in 30 seconds as possible
 * Github: https://github.com/naztronaut
 */

let equationType = ['+', '-', '*', '/'];
let correctAnswer;
let points = 0;
let timer = 30;
let interval;

function results(eq, a, b) {
    switch(eq) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
}

// Math done with numbers between 1 and 100 only
function randomNumber() {
    return Math.floor(Math.random() * (100) + 1);
}

//Main question method which gathers a random equation type and random numbers for those equations
function question() {
    // randomly pick equation type
    let eqType = equationType[Math.floor(Math.random() * 4)]; 
    let a = randomNumber();
    let b = randomNumber();
    let equation = results(eqType, a, b);
    (!Number.isInteger(equation)) ? equation = equation.toFixed(2) : '';
    correctAnswer = equation;
    document.querySelector("#question").innerHTML =  "What is " + a + eqType + b + "?";
    // randomly pick which option gets the correct answer
    let randomCorrectAnswer = Math.floor(Math.random() * 3); 
    for(let i = 0; i < document.getElementsByClassName('answer').length; i++){
        let c = randomNumber();
        let d = randomNumber();
        let randomAnswer = results(eqType, c, d);
        (!Number.isInteger(randomAnswer)) ? randomAnswer = randomAnswer.toFixed(2) : '' ;
        (i == randomCorrectAnswer) ? 
            document.getElementsByClassName('answer')[i].innerText = equation : 
            document.getElementsByClassName('answer')[i].innerText = randomAnswer; // send same equation type but different numbers
    }
}

for(let i = 0; i < 3; i++) {
    document.getElementsByClassName('answer')[i].addEventListener("click", function(e) {
        if(e.target.textContent == correctAnswer) {
            console.log('CORRECT'); 
            points++;
            document.querySelector("#score").innerText = points;
        } else {
            console.log('WRONG'); // TODO: Should this display something in the UI? Initial thought is no
        }
        question();
    });
}

//Initializes game and resets timer to 30 seconds. Timer turns red when 5 secons remaining.
function startGame(){    
    points = 0;
    timer = 30;
    document.querySelector('#timer').innerText = timer + " seconds";
    question();
    interval = window.setInterval(function() {
            timer--;
            document.querySelector('#timer').innerText = timer + " seconds";
            if(timer == 0) {
                window.clearInterval(interval);
                document.querySelector('#resetGame').innerText = "Start Game";
                for(let i = 0; i < 3; i++) {
                    document.getElementsByClassName('answer')[i].disabled = true;
                    document.querySelector('#timer').innerText = "Time's Up!";
                }
            } else if(timer > 0 && timer < 6) {
                document.querySelector('#timer').style.color = 'red';
            }
        }, 1000);
}

document.querySelector('#resetGame').addEventListener("click", function(e){
    if(document.querySelector('#resetGame').innerText == "Start Game") {
        startGame();
        document.querySelector('#resetGame').innerText = "Stop Game";
    } else {
        window.clearInterval(interval);
        document.querySelector('#resetGame').innerText = "Start Game";
    }
    e.preventDefault();
});
