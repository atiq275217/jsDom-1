// innerHTML
// ===JavaScript HTML DOM Elements==
// =======Finding HTML Element by Id====
var e_id = document.getElementById('elementsby_Id');
document.getElementById('elementsby_Id_1').innerHTML =
"The text from the intro paragraph is "+e_id.innerHTML;

// Finding HTML Elements by Tag Name
var tag_Name = document.getElementsByTagName('p');
document.getElementById('elementsby_Tag_1').innerHTML =
'The text in first paragraph (index 0) is: ' + tag_Name[3].innerHTML;

//Or
var tag_Name_2 = document.getElementById("main");
var taG_naMe = tag_Name_2.getElementsByTagName('p');
document.getElementById('elementsby_Tag_2').innerHTML =
'The first paragraph (index 0) inside "main" is: '+taG_naMe[0].innerHTML;

//==Finding HTML Elements by Class Name
var x = document.getElementsByClassName("class_name");
document.getElementById("elementsby_className").innerHTML=
'The first paragraph (index 0) with class="class_name": '+x[0].innerHTML;

//Finding HTML Elements by CSS Selectors
   // ===querySelectorAll==
var x = document.querySelectorAll("p.query_selectorall");
document.getElementById('elementsby_query_selector').innerHTML=
'The first paragraph (index 0) with class="intro": '+x[0].innerHTML;

// ==Finding HTML Elements by HTML Object Collections
  // ==document.forms==
 function form_sumbit(){
 	var x = document.forms["frm1"];
 	var text = "";
 	var i;
 	for (i = 0; i < x.length; i++){
 		text += x.elements[i].value + "<br>";
 	}
 	document.getElementById('object_collections').innerHTML = text;
 }

 //Changing HTML Content
 document.getElementById('change_html').innerHTML = "Hello Bangladesh";

//Changing the Value of an Attribute
function img_change(){
	document.getElementById('changed_voFattriBute').src = "/Atiq/JSW3/jsdom/img/bangladesh2.jpg";
}

//Changing HTML Style
function shanged_css(){
	document.getElementById('changed_style').style.color = "blue";
	document.getElementById('changed_style').style.fontSize = "30px";
}

//JavaScript HTML DOM Animation
function dAniMte(){
	var elem = document.getElementById('dom_animate');
	var pos = 0;
	var id = setInterval(frame,5);
	function frame(){
		if (pos == 350){
			clearInterval(id);
		}else{
			pos++;
			elem.style.top = pos + "px";
			elem.style.left = pos +"px";
		}
	}
}
//JavaScript HTML DOM Events
function changeText(id){
	id.innerHTML = "<span class='domeveNtjsClass'>Atiqur Rahman</span>";
}

//HTML Event Attributes
function displayDate(){
	document.getElementById("dsply_date").innerHTML = Date();
}

//Assign Events Using the HTML DOM
document.getElementById('dsdById').onclick = dsplyDt;
function dsplyDt(){
	document.getElementById('dsply_date_2').innerHTML = Date();
}

// ==The onchange Event

function change_To_upperCase(){
	var x = document.getElementById('fname');
	x.value = x.value.toUpperCase();
}

//The onmouseover and onmouseout Events

function mOver(obj){
	obj.innerHTML = "Thank You"
}
function mOut(obj){
	obj.innerHTML = "Mouse Over Me"
}

// ===The onmousedown, onmouseup and onclick Events

function mDown(obj){
	obj.style.backgroundColor = "#1ec5e5";
	obj.innerHTML = "Release Me";
}
function mUp(obj){
	obj.style.backgroundColor = "yellow";
	obj.innerHTML = "Thank You";
}
function oClk(obj){
	obj.style.backgroundColor = "blue";
	obj.innerHTML = "Good Bye";
}

// ===JavaScript HTML DOM Elements (Nodes)=====
// Removing Existing HTML Elements

function remoVe_doc(){
 // document.getElementById('reMov_1').remove();
 // Or
 var elmnt = document.getElementById('reMov_1');
 elmnt.remove();
	
}

// =======DOM Collections======
function dom_Collections(){
	var amarCollecTion = document.getElementsByTagName('p');
	var i;
	for (i = 0; i < amarCollecTion.length; i++ ){
		amarCollecTion[i].style.color="red";
	}
}

//JS Browser Bom=============================
//Js Location
function js_location(){
	window.location.assign("https://kureghore.blogspot.com/")
}

// Js History=================
//Back
function Goback(){
	window.history.back()
}



//forward
function Goforward(){
	window.history.forward()
}

//JavaScript Popup Boxes==
//Alert Box
function alert_box(){
	alert("I am an alert Box!");
}

//Confirm Box===
function confirm_Box(){
	var txt;
	if (confirm ("Press a button!")){
		txt = "You pressed OK!";
	}else{
		txt = "You pressed Cancel!";
	}
	document.getElementById('conBox').innerHTML= txt;
}

//==Prompt Box===
function prompt_box(){
	var box;
	var per = prompt("Please enter your name:", "Atiqur Rahman");
	if (per == null || per == ""){
		box = "User cancelled the prompt.";
	}else{
		box = "Hello "+ per + " ! How are you today?";
	}
	document.getElementById('promBox').innerHTML = box;
}

//==JavaScript Timing Events==

function timeOut_eveNt(){
	alert("Hello");
}

//How to Stop the Execution?==
function time_Stop() {
	alert("Hellow Bangladesh");
}
//The setInterval() Method====
var x = setInterval(inTerval_clock, 1000);
function inTerval_clock(){
	var d = new Date();
	document.getElementById('stinerVar_clock').innerHTML = d.toLocaleString();
}

//How to Stop the Execution?=======
var clock_stOp = setInterval(timeStopKorbo, 1000);
function timeStopKorbo(){
	var t = new Date();
	document.getElementById('stop_clock').innerHTML = t.toLocaleString();
}


/*============
JS VS jQuery
============*/
// JavaScript / jQuery DOM Selectors
// Finding HTML Elements by Id
$(document).ready(function(){
	var elmentByid = $("#ebid1");
	$("#ebid").text("The text from the ebid1 paragraph is : " + elmentByid[0].innerHTML);
});
	
//Finding HTML Elements by Tag Name

$(document).ready(function(){
	var elmentBytagn = $("p");
	$("#ebtn").text("The text in the first paragraph is: " + 
		elmentBytagn[0].innerHTML);
});


// Finding HTML Elements by Class Name
$(document).ready(function(){
	var elementBycn = $(".ebcn1");
	$("#ebcn").text("The first paragraph with class = 'ebcn1' is : "+
		elementBycn[0].innerHTML);
});


//Finding HTML Elements by CSS Selectors
$(document).ready(function(){
	var elementBycssS = $("p.ebcss1");
	$("#ebcss").text("The first paragraph with class='ebcss1' is:" +
		elementBycssS[0].innerHTML);
});

// ============jQuery HTML=========

//Set Text Content
$(document).ready(function(){
	var sTctext = $("#stc1");
	sTctext.text("Hello Bangladesh");
});

//==Get Text Content
$(document).ready(function(){
	var elementGtc = $("#gtc2");
	var myGtc =  elementGtc.text();
	$("#gtc4").text(myGtc);
});

//Set HTML Content
$(document).ready(function(){
	var shtcElements = $("#shtc2");
	shtcElements.html("<p style=color:red;>Our Village</p>")
});

//Get HTML Content==
$(document).ready(function(){
	var ourContent =$("#ghtc2").html();
	$("#ghtc1").html(ourContent);
});

// =======JavaScript / jQuery CSS Styles=====

//Hiding HTML Elements==
$(document).ready(function(){
	var htelement = $("#hte2");
	htelement.hide();
});

//Showing HTML Elements==
$(document).ready(function(){
	var showtElement = $("#showt1");
	showtElement.show();
});

//==Styling HTML Elements==
$(document).ready(function(){
	var cssElement = $("#changeCss");
	cssElement.css("font-size","35px");
});

//===JavaScript / jQuery HTML DOM==
//Removing Elements
$(document).ready(function(){
	$("#remove_htmlemnt2").remove();
});

//Get Parent Element
$(document).ready(function(){
	var ourParent = $("#parent_htmlE2").parent();
	$("#parent_htmlE4").text(ourParent.prop("nodeName"));
});










//=============clock_local=============
var cloCk = setInterval(myClock, 1000);
function myClock(){
	var x = new Date();
	document.getElementById('clock_local').innerHTML= x.toLocaleString();
}

