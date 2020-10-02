//Запись скважины
function writeskvs(table ,p000,skvsjson){
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
		data: {table:table, p000: p000, skvsjson:skvsjson },
		cache: false,
		async: false,
		success: function(data){
			
			var mass = eval(data);
			//var mass = data;
			alert(mass);
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