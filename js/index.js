/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var matrixopen = true;
var i = 0;
var matrixStringOut = "";
var matrixString = [];
for (i=0; i < 20; i++){
	matrixString[i] = "";
}
var bitstring = "";
var eight = 0;
var bit;
var z = 0;
var i = 0;
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

window.onmouseout = function(){
	O('insideMain').style.display = "none";
	S("page").visibility = "hidden";
}

window.onmouseover = function(element){
	var element = document.getElementById();
	//alert(element);
	switch (element)
	{
		case 'menu1': O("page").data = 'http://www.adavicity.com/UnixAdministration.htm';
								O('insideMain').style.display = "block";
								alert("case 1");
								break;
		case 'menu2': O("page").data = 'http://www.adavicity.com/WindowsAdministration.htm';
								O('insideMain').style.display = "block";
								break;
		case 'menu3': O("page").data = 'http://www.adavicity.com/RESUME%20CM%20Super.htm"';
								O('insideMain').style.display = "block";
								break;
		case 'menu4': O("page").data = 'http://www.adavicity.com/development.htm';
								O('insideMain').style.display = "block";
								break;
		case 'menu5': O("page").data = 'http://www.adavicity.com/ExamplesLink.html';
								O('insideMain').style.display = "block";
								break;
		case 'menu6': O("page").data = 'http://www.adavicity.com/Scripting%20RESUME.htm';
								O('insideMain').style.display = "block";
								break;
	}
	S("page").visibility = "visible";
}

function genMatrix(){	
	i = 0;
	for (i = 0; i < 20; i++){
	matrixStringOut = "";	
		for (z = 0; z < 24; z++){	
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
app.initialize();
window.onload = function(){
	genMatrix();
	makeMatrix();
	slideIn();	
	//rainMatrix();
}