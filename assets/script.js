//start quiz screen

function startQuiz() {
    $("#start").hide();
    $("#info").hide();
    $("#question1").show();
}
//question 1 to question 2
function answerQuestion1() {
    alert($(this).attr("data-correct"))
    $("#question1").hide();
    $("#question2").show();
}
//question 2 to question 3
function answerQuestion2() {
    alert($(this).attr("data-correct"))
    $("#question2").hide();
    $("#question3").show();
}
//question 3 to question 4
function answerQuestion3() {
    alert($(this).attr("data-correct"))
    $("#question3").hide();
    $("#question4").show();
}
//question 4 to question 5
function answerQuestion4() {
    alert($(this).attr("data-correct"))
    $("#question4").hide();
    $("#question5").show();
}
//question 5 to info screen
function answerQuestion5() {
    alert($(this).attr("data-correct"))
    $("#question5").hide();
    $("#info").show();
}
//info screen
function infoDiv() {
    $("#info").hide();
    
}

$("#question1 .answer").click(answerQuestion1)
$("#question2 .answer").click(answerQuestion2)
$("#question3 .answer").click(answerQuestion3)
$("#question4 .answer").click(answerQuestion4)
$("#question5 .answer").click(answerQuestion5)
$("#start").click(startQuiz);
$("#timer").click(startTimer);


$("#question1 .wrongAnswer").click(answerQuestion1)
$("#question2 .wrongAnswer").click(answerQuestion2)
$("#question3 .wrongAnswer").click(answerQuestion3)
$("#question4 .wrongAnswer").click(answerQuestion4)
$("#question5 .wrongAnswer").click(answerQuestion5)
$("#start").click(startQuiz);
$("#timer").click(startTimer);

//timer countdown
var timer;
var timeLeft=100;
function startTimer() {
    timerLeft=100;
    if (timer) {
        timer.clearInterval()
    }
    timer=setInterval(function(){
    timeLeft--;
    if(timeLeft <= 0) {
        clearInterval(timer);
        finish();
    }
    
    
    document.getElementById("timer").innerText=timeLeft;
},1000)
}
//timer stops at 0
function finish() {
alert("Finished");
}
//take off time for wrong answer
function subtractTime() {
timeLeft-=15;
} startTimer();
document.getElementById("wrongAnswer").addEventListener("click",subtractTime);

document.getElementById("wrongAnswer0").addEventListener("click",subtractTime);
document.getElementById("wrongAnswer1").addEventListener("click",subtractTime);
document.getElementById("wrongAnswer2").addEventListener("click",subtractTime);
document.getElementById("wrongAnswer3").addEventListener("click",subtractTime);
document.getElementById("wrongAnswer4").addEventListener("click",subtractTime);
document.getElementById("wrongAnswer5").addEventListener("click",subtractTime);
document.getElementById("wrongAnswer6").addEventListener("click",subtractTime);
document.getElementById("wrongAnswer7").addEventListener("click",subtractTime);
document.getElementById("wrongAnswer8").addEventListener("click",subtractTime);
document.getElementById("wrongAnswer9").addEventListener("click",subtractTime);
document.getElementById("wrongAnswer10").addEventListener("click",subtractTime);
document.getElementById("wrongAnswer11").addEventListener("click",subtractTime);
document.getElementById("wrongAnswer12").addEventListener("click",subtractTime);
document.getElementById("wrongAnswer13").addEventListener("click",subtractTime);

//store info for high scores
var buttonEl = document.getElementById("button");
var nameInput = document.getElementById("name");
var scoreInput = document.getElementById("score");
var scores = [];

function saveScore() {

scores.push(JSON.parse(window.localStorage.getItem("highscores")));

var newScore = {
score: scoreInput.value,
name: nameInput.value
};

scores.push(newScore);

window.localStorage.setItem("highscores", JSON.stringify(scores));

scoreInput.value = "";
nameInput.value = "";

}

buttonEl.onclick = saveScore;
//score system
var score = 0; 
var total = 420; 
var point = 0; 
var highest = total * point;
