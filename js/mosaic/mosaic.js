	var sizeA = 0;
	var sizeB = 0;
	var sizeAB = 0;
	let binArrayColor=[];

function createMosaic(){
	 sizeA = document.getElementById('width').value;
	 sizeB = document.getElementById('height').value;
	 sizeAB = sizeA*sizeB;
	var mosaicElement = '';

	for (i=0; i<sizeAB; i++){
	mosaicElement = mosaicElement +'<div class=' + "square " + 'id='+i+'></div>';
	if ((i+1)%sizeA == 0){
	mosaicElement = mosaicElement + '<div style="clear:both;"></div>'
	}
	}
	document.getElementById('mosaic').innerHTML = mosaicElement;
	start();
}

function start(){
	changeSpeed = setInterval('turnOnTheLight()', 30);
	}

function timerBreak() {
    clearInterval(changeSpeed);
}

function turnOnTheLight(){
	 sizeA = document.getElementById('width').value;
	 sizeB = document.getElementById('height').value;
	 sizeAB = sizeA*sizeB;
	var randomSquare = Math.floor(Math.random()*sizeAB);
	var randomColor = "background-color: #"+(Math.random()*0xFFFFFF<<0).toString(16);

	document.getElementById(randomSquare).setAttribute('style',  randomColor);
	}

function orderByColor(){
		var colorArr = [];

		for(i=0; i<sizeAB; i++){
			colorArr.push(document.getElementById(i).style.backgroundColor);
					}

		for(j=0; j<sizeAB; j++){
		document.getElementById(j).setAttribute('style', 'background-color:' +colorArr[sizeAB-j-1]);
		};
}
