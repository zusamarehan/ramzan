$(document).ready(function(){

	var days = 0;
	var hours = 0;
	var minutes = 0;
	var seconds = 0;

	$('#days').roundSlider({
		startAngle : 90,
		readOnly: true,
		'min': 0,
		'max': 365,
		sliderType: "min-range",
    	handleShape: "round",
    	  tooltipFormat: function (e) {
  			return e.value+ ' Days';
		}
	});
	$('#hours').roundSlider({
		startAngle : 90,
		readOnly : true,
		'min': 0,
		'max': 24,
		sliderType: "min-range",
    	handleShape: "round",
    	  tooltipFormat: function (e) {
  			return e.value+ ' Hours';
		}
	});
	$('#minutes').roundSlider({
		startAngle : 90,
		readOnly : true,
		'min': 0,
		'max': 60,
		sliderType: "min-range",
    	handleShape: "round",
    	  tooltipFormat: function (e) {
  			return e.value+ ' Minutes';
		}
	});
	$('#seconds').roundSlider({
		startAngle : 90,
		readOnly : true,
		'min': 0,
		'max': 60,
		sliderType: "min-range",
    	handleShape: "round",
    	handleShape: "round",
    	  tooltipFormat: function (e) {
  			return e.value+ ' Seconds';
		}
	});


	var daysObj =  $("#days").data("roundSlider");
	var hoursIbj =  $("#hours").data("roundSlider");
	var minutesObj =  $("#minutes").data("roundSlider");
	var secondsObj =  $("#seconds").data("roundSlider");
	// alert(moment().seconds())
	setInterval( function() {
		
		//days calculator		
		var now = moment(moment()); //todays date
		var end = moment("2019-05-05"); // another date
		var duration = moment.duration(end.diff(now));
		days = Math.round(duration.asDays());

		var a = moment(moment().year(moment().year()).month(moment().month()).date(moment().date()));
		var b = moment(moment().year(moment().year()).month(moment().month()).date(moment().date())+' '+'18:30:00', 'dd-mm-yyyy h:m:s');

		hours = (b.hours() - a.hours()) < 0 ? ((((b.hours() - a.hours())*-1) - 24)*-1) : (b.hours() - a.hours());
		minutes = (b.minutes() - a.minutes()) < 0 ? ((((b.minutes() - a.minutes())*-1) - 60)*-1) : (b.minutes() - a.minutes());
		seconds = (a.seconds() - b.seconds() - 60) * -1;
		// $('#ramzan-day-remaining').text(days);	
		// $('#ramzan-time-remaining').text(hours +' : '+ minutes+' : '+ (seconds - 60)*-1);	
		


		daysObj.option("value", days);
		hoursIbj.option("value", hours);
		minutesObj.option("value", minutes);
		secondsObj.option("value", seconds);
		


	}, 1000);

});