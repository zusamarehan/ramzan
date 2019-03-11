$(document).ready(function(){

	// alert(moment().seconds())
	setInterval( function() {
		
		//days calculator		
		var now = moment(moment()); //todays date
		var end = moment("2019-05-05"); // another date
		var duration = moment.duration(end.diff(now));
		var days = Math.round(duration.asDays());

		var a = moment(moment().year(moment().year()).month(moment().month()).date(moment().date()));
		var b = moment(moment().year(moment().year()).month(moment().month()).date(moment().date())+' '+'18:30:00', 'dd-mm-yyyy h:m:s');

		var hours = b.hours() - a.hours();
		var minutes = b.minutes() - a.minutes();
		var seconds = a.seconds() - b.seconds();
		$('#ramzan-day-remaining').text(days);	
		$('#ramzan-time-remaining').text(hours +' : '+ minutes+' : '+ (seconds - 60)*-1);	

	}, 1000);


	

});