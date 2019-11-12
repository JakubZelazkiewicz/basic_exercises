function createMosaic(){	
	var sizeA = document.getElementById('width').value;
	var sizeB = document.getElementById('height').value;
	var sizeAB = sizeA*sizeB;
	alert(sizeAB);
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

function start(){setInterval('turnOnTheLight()', 15)}

function turnOnTheLight(){
	var sizeA = document.getElementById('width').value;
	var sizeB = document.getElementById('height').value;
	var sizeAB = sizeA*sizeB;
	var randomSquare = Math.floor(Math.random()*sizeAB);
	var colorR = Math.floor(Math.random()*255);
	var colorG = Math.floor(Math.random()*255);
	var colorB = Math.floor(Math.random()*255);
	var colorRGB ='rgb(' + colorR +','+ colorG +','+colorB+')';
	document.getElementById(randomSquare).innerHTML = '<div class="square" id=randomSquare  style="background-color:' + colorRGB + '">'
}
		