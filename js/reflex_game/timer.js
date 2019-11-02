var setTime = 0;
var flag =true;
var value = 0;

function timer(){
	if(flag == true && setTime<1000)
		setTime = setTime+1;
    
		document.getElementById("timeCounter").innerHTML = setTime;
		
		setTimeout("timer()", 10); 
      }
	  
 function timerBreak(){
flag = false;
}

function findNumber(){
	var value = Math.floor(Math.random()*1000);
	document.getElementById("target").innerHTML = value
}
      
   