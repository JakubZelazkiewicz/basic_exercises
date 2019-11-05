var setTime = 0;
var flag = true;
var value = 0;
var no1 = 0;
var interval;

function setSpeed() {
    interval = setInterval('timer();', 10);
}

function timer() {
    document.getElementById("select").setAttribute("value", "STOP");
    document.getElementById("select").setAttribute("onclick", "timerBreak()");
    setTime = setTime + 1;
    document.getElementById("timeCounter").innerHTML = setTime;
    if (setTime >= 1400) {
        alert("You missed the game");
        timerBreak();
    }
}

function findNumber() {
    document.getElementById("select").setAttribute("value", "START");
    document.getElementById("select").setAttribute("onclick", "setSpeed()");

    var value = Math.floor(Math.random() * 1000);
    document.getElementById("target").innerHTML = value;
}

function timerBreak() {
    clearInterval(interval);

    var no1 = document.getElementById("target").textContent;
    var no2 = document.getElementById("timeCounter").textContent;
    var different = Math.abs(no1 - no2);
    if (different <= 20) {
        alert("You are amazing!");
    } else {
        alert("You missed by :" + different);
    }
}

function reloadPage() {
    location.reload();
}
