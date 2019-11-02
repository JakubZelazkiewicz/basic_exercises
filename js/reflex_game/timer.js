var setTime = 0;
var flag =true;
var value = 0;
var no1=0;

function timer(){
	document.getElementById("select").setAttribute("value", "STOP");
	document.getElementById("select").setAttribute("onclick", "timerBreak()");
	
	if(flag == true && setTime<1000){
		setTime = setTime+1;
    	document.getElementById("timeCounter").innerHTML = setTime;
		setTimeout("timer()", 1); 
		}
		else if ( setTime>=1400) {
			alert("You missed the game");
			timerBreak();				
		}
		else{
		    var no1 = document.getElementById("target").textContent;
			var no2 = document.getElementById("timeCounter").textContent;
			alert(no1-no2);
			}
}
	
	  
function findNumber(){
	document.getElementById("select").setAttribute("value", "START");
	document.getElementById("select").setAttribute("onclick", "timer()");
	var value = Math.floor(Math.random()*1000);
	document.getElementById("target").innerHTML = value;
}

 function timerBreak(){
flag = false;
}

function reloadPage(){
	location.reload();
}

      
   