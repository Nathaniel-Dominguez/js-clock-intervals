var secDeg = 6;
var minDeg = .1;
var hrDeg = 0.0083333333;

var sec = document.getElementById("second");
var min = document.getElementById("minute");
var hr = document.getElementById("hour");
//el.style.transform = "rotate(" + secDeg + "deg)";

setInterval(function(){
	sec.style.transform = "rotate(" + secDeg + "deg)";
	secDeg += 6
}, 1);

setInterval(function(){
	min.style.transform = "rotate(" + minDeg + "deg)";
	minDeg += .1
}, 1);

setInterval(function(){
	hr.style.transform = "rotate(" + hrDeg + "deg)";
	hrDeg += 0.0083333333
}, 1); 
