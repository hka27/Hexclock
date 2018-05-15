var clock = document.getElementById('clock');
var hexcolor = document.getElementById('hexcolor');



function hexclock(){
	var time = new Date();
	var hours = (time.getHours() % 12).toString();
	var minutes = time.getMinutes().toString();
	var seconds = time.getSeconds().toString();

	console.log(time);
	if(hours.length <2){
		hours = '0' + hours;
	}

	if(minutes.length <2){
		minutes = '0' + minutes;
	}

	if(seconds.length <2){
		seconds = '0' + seconds;
	}

	var clockStr = hours + ':' + minutes + ':' + seconds;
	var hexColorStr = '#' + hours + minutes + seconds;

	clock.textContent = clockStr;
	hexcolor.textContent = hexColorStr;

document.body.style.backgroundColor = hexColorStr;
}
hexclock();
setInterval(hexclock  , 1000);

