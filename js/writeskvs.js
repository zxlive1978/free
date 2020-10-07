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
			//alert(data);
			
		}
	});

};

//Удалить скважину
function deleteskvs(whatdo, table, p000, skvsjson){
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
			//alert(data);
			
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

//Чтение всех скважинпри старте
function readskvstart(whatdo, table, p000, skvsjson){
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
					//Список скважин
					$('[id^="par"]').click(function (){
						/* console.log(this.id); */
						skv =wells[this.id].txt;
						wellName =wells[this.id].wellN;
						namecmt = wellName + "kr";
						//Сохранить в локальное хранилище
						colPan9save(wellName,skv,namecmt,formname);
						refresh = true;
						read_next();
					});
					
					$('#shab').click(function (){
						/* console.log(this.id); */
						$('#shab1').modal('show');
					});
		
		}
	});

};