	//----Generates the next date for a gamenights----\\
	
//constants
var TIME=["19", "00"];
var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//variables
var month = new Date().getUTCMonth();
var year = new Date().getUTCFullYear();
var date= (new Date().getUTCDate())+(6 - new Date().getUTCDay());

//handles if the gamenight is in the next month
if ((month===0 || month===2 || month===4 || month===6 || month===7 || month===9 || month===11) && date>31) {
	date -= 31;
	month ++;
} else if ((month===3 || month===5 || month===8 || month===12) && date>30) {
	date -= 30;
	month ++;
} else if (((year % 4) === 0) && date>29 && month===1) {
	date -= 29;
	month ++;
} else if (month===1 && date>28) {
	date -= 28;
	month ++;
};

//handles if the gamenight is in the next year
if (month>12) {
	year =+ 1
	month -= 12
};

var countdownDate = Date.UTC(year, month, date, TIME[0], TIME[1]);

var y = setInterval (function() {
	
	var now = new Date().getTime(Date.UTC());
	var timeLeft= countdownDate-now;
	
	var days= Math.floor(timeLeft / (1000*60*60*24));
	var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
	
	if (timeLeft <= 0) {
		document.getElementById("nextNight").innerHTML = "Gamenight is in progress, join the discord to join";
	} else if (timeLeft >= 1) {
		document.getElementById("nextNight").innerHTML = ("The next scheduled gamenight is on the Saturday, "+date+" "+MONTHS[month]+" "+year+" at "+TIME[0]+":"+TIME[1]+":00 UTC"+
		"<br/> Which is in "+plural(days, "Day")+", "+plural(hours, "Hour")+", "+plural(minutes, "Minute")+" and "+plural(seconds, "Second"));
	} else {
		document.getElementById("nextNight").innerHTML = "Countdown has failed, Please refresh if you continue to see this message please DM kruthers#7770 on discord.";
		console.log(timeLeft);
		return;
	}
	
	
}, 500);

function plural(number, text) {
	return (number == 1) ? number+" "+text : number+" "+text+"s";	
}
