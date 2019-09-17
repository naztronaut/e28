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

function results(eq, a, b) {
    switch(eq) {
        case '+': return a + b;
            break;
        case '-': return a - b;
            break;
        case '*': return a * b;
            break;
        case '/': return a / b;
            break;
    }
}

// Math done with numbers between 1 and 100 only
function randomNumber() {
    return Math.floor(Math.random() * (100) + 1);
}

/* 
* Main question method which gathers a random equation type and random numbers for those equations
*/
function question() {
    let eqType = equationType[Math.floor(Math.random() * 4)]; // randomly pick equation type
    let a = randomNumber();
    let b = randomNumber();
    let equation = results(eqType, a, b);
    correctAnswer = equation;
    document.querySelector("#question").innerHTML =  "What is " + a + eqType + b + "?";
    let randomCorrectAnswer = Math.floor(Math.random() * 3);
    for(let i = 0; i < document.getElementsByClassName('answer').length; i++){
        let c = randomNumber();
        let d = randomNumber();
        (i == randomCorrectAnswer) ? 
            document.getElementsByClassName('answer')[i].innerText = equation : 
            document.getElementsByClassName('answer')[i].innerText = results(eqType, c, d); // send same equation type but different numbers
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

document.querySelector('#resetGame').addEventListener("click", function(e){
    document.querySelector('#resetGame').innerText = "Reset Game";
    startGame();
    e.preventDefault();
});

function startGame(){
    let interval;
    window.clearInterval(interval);
    interval = undefined;
    points = 0;
    timer = 30;
    document.querySelector('#timer').innerText = timer;
    question();
    interval = window.setInterval(function() {
            timer--;
            document.querySelector('#timer').innerText = timer;
            if(timer == 0) {
                window.clearInterval(interval);
                for(let i = 0; i < 3; i++) {
                    document.getElementsByClassName('answer')[i].disabled = true;
                    document.querySelector('#timer').innerText = "Time's Up!";
                }
            } else if(timer > 0 && timer < 6) {
                document.querySelector('#timer').style.color = 'red';
            }
        }, 1000);
}
