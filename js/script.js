var matrixopen = true;
var i = 0;
var matrixStringOut = "";
var matrixString = [];
for (i=0; i < 17; i++){
	matrixString[i] = "";
}
var bitstring = "";
var eight = 0;
var bit;
var z = 0;
var i = 0;

window.onload = function(){
	genMatrix();
	makeMatrix();
	slideIn();	
	//rainMatrix();
}
window.onmouseout = function(){
	O('insideMain').style.display = "none";
	S("page").visibility = "hidden";
}

window.onmouseover = function(){
	var element = document.getElementById();
	alert(element);
	switch (element)
	{
		case 'menu1': O("page").data = 'docs/UnixAdministration.html';
								O('insideMain').style.display = "block";
								alert("case 1");
								break;
		case 'menu2': O("page").data = 'docs/WindowsAdministration.html';
								O('insideMain').style.display = "block";
								break;
		case 'menu3': O("page").data = 'docs/ConfigManagement.html';
								O('insideMain').style.display = "block";
								break;
		case 'menu4': O("page").data = 'docs/development.html';
								O('insideMain').style.display = "block";
								break;
		case 'menu5': O("page").data = 'docs/ExamplesLink.html';
								O('insideMain').style.display = "block";
								break;
		case 'menu6': O("page").data = 'docs/PasqualeArgenio.html';
								O('insideMain').style.display = "block";
								break;
	}
	S("page").visibility = "visible";
}

function genMatrix(){	
	i = 0;
	for (i = 0; i < 16; i++){
	matrixStringOut = "";	
		for (z = 0; z < 23; z++){	
		var eightString = "";
			for (eight = 0; eight < 8; eight++){
				bitstring = (Math.floor((Math.random() * 2)  - 0));			
				eightString = eightString + bitstring;			
			}
		matrixStringOut = matrixStringOut + eightString + " ";		
		}
	matrixString[i] = matrixStringOut;		
	}
}

function makeMatrix(){
	for (i =0; i<8; i++){	
		document.getElementById("timer"+(i+1)).innerHTML = matrixString[i];	
	}
}

function slideIn () {
	if(matrixopen) //  create a loop function
		setTimeout(function () {    //  call a 3s setTimeout when the loop is called
			S('timer1').right =  100 - i + "rem";  
			S('timer2').left = 100 - i + "rem";
			S('timer3').right =  100 - i + "rem"; 
			S('timer4').left = 100 - i + "rem";
			S('timer5').right =  100 - i + "rem";
			S('timer6').left = 100 - i + "rem";
			S('timer7').right =  100 - i + "rem";
			S('timer8').left = 100 - i + "rem";
			i++;                    
		  if (i < 101) {            //  if the counter < 101, call the loop function
			 slideIn();             //  ..  again which will trigger another 
		  }                        //  ..  setTimeout()
   }, 10)   
}