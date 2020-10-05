//Создать скважину
function writeskvs(whatdo, table, p000, skvsjson){
	refresh = false;
	online = false;
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

//Обновить скважину
function writeskvs(whatdo, table, p000, skvsjson){
	refresh = false;
	online = false;
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

//Чтение всех скважин
function readskvs(whatdo, table, p000, skvsjson){
	refresh = false;
	online = false;
	$.ajax({
		type: "POST",
		url: 'js/writeskvs.php',
		data: {whatdo:whatdo, table: table, p000: p000, skvsjson:skvsjson },
		cache: false,
		dataType: 'JSON',
		async: false,
		success: function(response){
			wells = {};
			var len = response.length;
            for(var i=0; i<len; i++){
                var p000 = response[i].p000;
				var skvjson = response[i].skvjson;
				skvjson = JSON.parse(skvjson);
				 wells[String(p000)] =  skvjson;
				}

		}
	});

};