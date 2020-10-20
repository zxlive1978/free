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
function update(whatdo, table, p000, skvsjson){
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
				for (var j=0; j<_uz.length; j++){
					let _uzdec =decodeURIComponent(escape(window.atob(_uz[5])))
					console.log(_uzdec);
				 	wells[String(p000)] =  skvjson;
				}

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
				let _uzdec =decodeURIComponent(escape(window.atob(_uz[5])));
				let result = _uzdec.split(",");
				for (var j=0; j<result.length; j++){
					if (($.trim(result[j]))=='ALL'){
					wells[String(p000)] =  skvjson;
					break;}
					if (($.trim(result[j]))==skvjson.txt){
						wells[String(p000)] =  skvjson;}
					
				}
			}
					//Имя
					$("#ava").text(decodeURIComponent(escape(window.atob(_uz[0]))));
					//Сохранение и чтение настроей из локального хранилища
					readsavestartstorage();
					//Загрузка формы при старте
					colOK8start(formname);
					//Старт!!!
					read_now();
					//read_next();
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