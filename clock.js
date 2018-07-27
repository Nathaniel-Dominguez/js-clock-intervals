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
}, 1000);

setInterval(function(){
	min.style.transform = "rotate(" + minDeg + "deg)";
	minDeg += .1
}, 1000);

setInterval(function(){
	hr.style.transform = "rotate(" + hrDeg + "deg)";
	hrDeg += 0.0083333333
}, 1000); 

// var sec

// function minSecRotation(minSec) {
	// return (minute/60)*360;
// }

// function hourRotation(minute) {
	// return (minute/12)*360;
// }

// function setPosition(elem, degRotation) {
	// elem.style.transform = "rotate("+degRotation+"deg)";
// }

// function update(now){
	// var curSec = now.getSeconds();
	// var curMin
	// var curHr
	// setPosition(secondhand, minSecRotation(curSec));
	// setPosition(minutehand, minSecRotation(curMin));
	// setPosition(hourhand, hourRotation(curHour));
// }

// function tick() {
	// var date = new Date();
	// update(date);
	// setTimeout(tick, 1000)
// }

// tick();