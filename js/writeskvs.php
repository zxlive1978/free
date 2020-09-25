//Чтение произвольного куска
function read_random(){
	refresh = false;
	online = false;
	/* if (refresh==true){ */
	end_time = start_time/1 + Sheet.Kzoom*60*60;
	var data = null;
	$.ajax({
		type: "GET",
		url: 'js/read_random.php',
		data: {name: 'Wayne',well_Name: wellName, start_time: start_time, end_time: end_time},
		cache: false,
		success: function(data){
			
			var mass = eval(data);
			//var mass = data;
			//console.log(mass);
			//alert(mass);
			d110d = null;
			d110d = mass.slice();
			
			//numbs110d = null;
			
			
			//А ЭТО АХУЕННО ИНТЕРЕСНО!
			//Если нет данных
			/* if (d110d.length == 0){
				drawGraf =false ;
				d110d = beg_rec.slice();
				d110d[0]["Vrema"] = start_time;
				d110d[d110d.length-1]["Vrema"] = end_time;
				//console.log (beg_rec);
				//console.log (d110d);
				} else {drawGraf = true ;} */
			//ГО
			repaint ();
			
		}
	});
/* 	}
	setTimeout(read_random, 3000); */
	//} else {
	//start_time = back_start_time;
	//end_time = back_end_time;
	//}
};