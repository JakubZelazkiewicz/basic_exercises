	var sizeA = 0;
	var sizeB = 0;
	var sizeAB = 0;

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
	setInterval('turnOnTheLight()', 30);
	}

function turnOnTheLight(){
	 sizeA = document.getElementById('width').value;
	 sizeB = document.getElementById('height').value;
	 sizeAB = sizeA*sizeB;
	var randomSquare = Math.floor(Math.random()*sizeAB);
	var randomColor = "background-color: #"+(Math.random()*0xFFFFFF<<0).toString(16);
	document.getElementById(randomSquare).setAttribute('style',  randomColor);
	}
		