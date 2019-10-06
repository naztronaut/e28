let rca; // random correct answer init - picks index
// Answers stored in global variables so they are not released in vue console
let correctAnswer;
let wrong1;
let wrong2;
let wrong3;
let equationType = ['+', '-', '*', '/'];
let app = new Vue({
    el: '#app',
    data: {
        name: null,
        bet: null,
        betResult: null,
        score: 0,
        timer: 30,
        activeGame: false,
        gameStartedOnce: false,
        title: 'Math Game',
        subtitle: 'How many can you get correct in 30 seconds?',
        isAdmin: true,
        interval: null,
        startGameText: 'Start Game',
        questionText: 'Press Start Game to get started',
        eqType: null,
        answers: ['A', 'B', 'C'],
        historicalAnswers: []
    },
    methods: {
        resetGame: function() {
            if(this.activeGame == false) {
                this.startGame();
                this.startGameText = "Stop Game";
                this.activeGame = true;
            } else {
                window.clearInterval(this.interval);
                this.activeGame = false;
                this.startGameText = "Start Game";
            }
        },
        question: function() {
            // randomly pick equation type
            this.eqType = equationType[Math.floor(Math.random() * 4)];
            rca = Math.floor(Math.random() * 3);
            let a = this.randomNumber();
            let b = this.randomNumber();
            let equation = this.results(this.eqType, a, b);
            wrong1 = this.results(this.eqType, this.randomNumber(), this.randomNumber());
            wrong2 = this.results(this.eqType, this.randomNumber(), this.randomNumber());
            wrong3 = this.results(this.eqType, this.randomNumber(), this.randomNumber());
            (!Number.isInteger(equation)) ? equation = equation.toFixed(2) : '';
            (!Number.isInteger(wrong1)) ? wrong1 = wrong1.toFixed(2) : '';
            (!Number.isInteger(wrong2)) ? wrong2 = wrong2.toFixed(2) : '';
            (!Number.isInteger(wrong3)) ? wrong3 = wrong3.toFixed(2) : '';
            correctAnswer = equation;
            this.questionText = "What is " + a + this.eqType + b + "?";
        },
        randomNumber: function(){
            return Math.floor(Math.random() * (100) + 1);
        },
        results: function(eq, a, b){
                switch(eq) {
                    case '+': return a + b;
                    case '-': return a - b;
                    case '*': return a * b;
                    case '/': return a / b;
                }
        },
        randomCorrectAnswer: function(i) {
            // TODO: Is this really the best way to do this??
            if(i == rca) {
                return correctAnswer;
            } else if(i == 0) {
                return wrong1;
            } else if(i == 1){
                return wrong2;
            } else if(i == 2){
                return wrong3;
            }
        },
        selectAnswer: function (e) {
            if(e.target.textContent == correctAnswer) {
                console.log('Correct');
                this.score++;
                this.historicalAnswers.push({
                    'question': this.questionText,
                    'yourAnswer': e.target.textContent,
                    'result': 'Correct!'
                });
            } else {
                console.log('WRONG');
                this.historicalAnswers.push({
                    'question': this.questionText,
                    'yourAnswer': e.target.textContent,
                    'result': 'Wrong! The correct answer is ' + correctAnswer
                });
            }
            this.question();
        },
        startGame: function() {
            this.score = 0;
            this.timer = 30;
            // so that the game doesn't disappear even if name and bet are invalidated later if game has started once
            this.gameStartedOnce = true;
            this.question();
            this.runTimer();
            this.betResult = null;
        },
        runTimer: function(){
            let self = this;
            self.interval = window.setInterval(function() {
                self.timer--;
                if(self.timer == 0) {
                    window.clearInterval(self.interval);
                    self.startGameText = "Start Game";
                    self.timer = "Time's Up!";
                    self.activeGame = false;
                    if(self.score > self.bet) {
                        self.betResult = 'You win the bet! You scored higher than you thought you would!';
                    } else if(self.score == self.bet) {
                        self.betResult = 'You made the perfect bet!';
                    } else {
                        self.betResult = 'Oops, you had too much confidence in yourself :(';
                    }
                }
            }, 1000);
        },
        clearResults: function() {
            this.historicalAnswers = [];
        }
    }
});
