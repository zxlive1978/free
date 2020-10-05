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
			wells = {};
			var len = response.length;
            for(var i=0; i<len; i++){
                var p000 = response[i].p000;
				var skvjson = response[i].skvjson;
				skvjson = JSON.parse(skvjson);
				 wells[String(p000)] =  skvjson;
				
				}
			//  console.log(wellss);
			console.log(wells);
			
		
			
		}
	});

};