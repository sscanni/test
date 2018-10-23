	// File: calendar.js
	// Description: Simple Calendar created with HTML, CSS, JS, and JQuery
	// Author: Steven Scanniello

	// todayMonth
	// todayDay
	// todayYear

	// curMonth
	// curYear
	{
		var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var d = new Date();
		var todayMonth = d.getMonth();
		var todayDay = d.getDate();
		var todayYear = d.getFullYear();
		var curMonth = todayMonth;
		var curYear = todayYear;
	}
	function displayMonth() {
		$('#selMonth').val(curMonth+1);	
		$('#calhead').text(month[curMonth] + " " + curYear);	 
		$('#selYear').empty();
		for (let i = curYear-10; i < curYear + 11; i++) {
			$('#selYear').append("<option value=" + "'" + i + "'" + ">" + i + "</option>");
		}
		$('#selYear').val(curYear);	
		displayDays();
	}
	function goMonthYear() {
		console.log($('#selMonth').val());
		curMonth = $('#selMonth').val();
		curMonth = parseInt(curMonth) - 1;
		curYear = $('#selYear').val();
		curYear = parseInt(curYear);
		displayMonth();
	}
	function displayToday() {
		curMonth = todayMonth;
		curYear = todayYear;
		displayMonth();
	}
	function displayDays() {

		let wkday = new Date(curMonth+1 + "/01/" + curYear);
		let sday = wkday.getDay();

		let nextMonth = curMonth;
		let nextYear = curYear;
		nextMonth++;
		if (nextMonth == 12) {
			nextMonth = 0;
			nextYear++;
		}
		let nday = new Date(nextMonth+1 + "/01/" + nextYear);

    	nday.setDate(nday.getDate() - 1);
		let eday = nday.getDate();

		let day = 1;
		for (let x=0; x < 42; x++) {
			let monCell = $("#" + x);
			if (x < sday || day > eday) {
				monCell.text(" ");		
			} else {
				monCell.text(day);		
				if (todayMonth == curMonth && todayDay == day && todayYear == curYear) {
					monCell.css( "color", "#ff0000");
				} else {
					monCell.css( "color", "black");
				}
				day++	
			}
		}
	}
	function PreviousMonth() {
		curMonth--;
		if (curMonth < 0) {
			curMonth = 11;
			curYear--;
		}
		displayMonth()
	}
	function NextMonth() {
		curMonth++;
		if (curMonth > 11) {
			curMonth = 0;
			curYear++;
		}
		displayMonth()
	}