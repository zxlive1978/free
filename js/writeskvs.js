//Запись скважины
function writeskvs(whatdo, table, p000, skvsjson){
	refresh = false;
	online = false;
    /*$.ajax({
	      method: "POST", // метод HTTP, используемый для запроса
	      url: "about.php", // строка, содержащая URL адрес, на который отправляется запрос
	      data: { // данные, которые будут отправлены на сервер
	        name: "Denis",
	        city: "Erebor"
	      },
	      success: [function ( msg ) { // функции обратного вызова, которые вызываются если AJAX запрос выполнится успешно (если несколько функций, то необходимо помещать их в массив)
	        $( "p" ).text( "User saved: " + msg ); // добавляем текстовую информацию и данные возвращенные с сервера
	      },
	      function () { // вызов второй функции из массива
	        console.log( "next function" );
	      }],
	      statusCode: {
	        200: function () { // выполнить функцию если код ответа HTTP 200
	          console.log( "Ok" );
	        }
	      }
	    });
    */
	var data = null;
	$.ajax({
		type: "POST",
		url: 'js/writeskvs.php',
		data: {whatdo:whatdo, table: table, p000: p000, skvsjson:skvsjson },
		cache: false,
		async: false,
		success: function(data){
			if (Number(data)!=1) {alert('нет связи')};
			//console.log(data);
			//var mass = eval(data);
			//var mass = data;
			
			//alert(mass);
			//d110d = null;
			//d110d = mass.slice();
			
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
			
			
		}
	});

};

//Запись скважины
function readskvs(whatdo, table, p000, skvsjson){
	refresh = false;
	online = false;
 
	var data = null;
	$.ajax({
		type: "POST",
		url: 'js/writeskvs.php',
		data: {whatdo:whatdo, table: table, p000: p000, skvsjson:skvsjson },
		cache: false,
		dataType: 'JSON',
		async: false,
		success: function(response){
			//if (Number(data)!=1) {alert('нет связи')};
			//console.log(data);
			//var mass = eval(data);
			//var mass = data;
			var wellss = {};
			var len = response.length;
            for(var i=0; i<len; i++){
                var p000 = response[i].p000;
				var skvjson = response[i].skvjson;
				skvjson = JSON.parse(skvjson);
				// console.log(p000);
				// console.log(skvjson);
				// p000 = JSON.parse('{' +String(p000)+':'+skvjson+'},');
				 wellss[String(p000)] =  skvjson;
				
				}
			 console.log(wellss);
			 console.log(wells);
			
		
			
		}
	});

};