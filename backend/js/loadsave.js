function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'my_data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
 
function loadsettings() {
 loadJSON(function(response) {
  // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
 });
}

function savedata111() {
	var curscr ={};
	//Копирование в объект
	//curCol = JSON.stringify(Object.assign({}, Columns[String('col'+(Object.keys(Columns).length-1))]));
	curscr = JSON.stringify(Object.assign({}, basePar));
	/*var curscr =  Your data in JSON format - see below */
	/* $.post("svg/scr11.scr", curscr, function(returnedData) {
		// This callback is executed if the post was successful     
	})
	console.log(curscr); */
	
	
}

//function download(content, fileName, contentType) {
//Сохранение в файл на компе!
function savedatafile() {
	var curscr ={};
	curscr = JSON.stringify(Object.assign({}, basePar));
	content = curscr;
	fileName = 'scr1.scr';
	contentType = 'text/plain';
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
//download(jsonData, 'json.txt', 'text/plain');
//Сохранение на сервер файла  и в хранилище
function savedata(name){
	localStorage.setItem('wellName', wellName );
	localStorage.setItem('skv', skv);
	localStorage.setItem('namecmt', namecmt);
	localStorage.setItem('formname', formname);
	var curscr =[];
	/* curscr =JSON.parse(curscr); */
	curscr.push(Sheet);
	curscr.push(Columns);
	curscr.push(basePar);
	curscr.push(txtPar);
	curscr.push(txtOknOPar);
	/* console.log(curscr); */
	curscr = JSON.stringify(Object.assign({}, curscr));
	/* console.log(curscr); */
	fileName = name;
	
	$.ajax({
			type: "POST",
			url: 'js/savetoserver.php',
			data: {name: 'Wayne',well_Name: wellName, fileData: curscr, fileName: fileName},
			success: function(data){
			
				alert(data);
				
				//Перерисовка
				/* try {
				$("#drawing").find("*").not("rect, g").remove();
				}
				catch(e){ }
				init(); */
				
			}
		});		
}

//Загрузка файла с сервера
function loadddata(name) {
	fileName = name;
	$.ajax({
			type: "GET",
			url: 'js/loadfromserver.php',
			data: {name: 'Wayne',well_Name: wellName, fileName: fileName},
			success: function(data){
				//Обновление
				var refresh = false;
				//Онлайн
				var online = false;
				var plan = {};
				//Чтение формы
				plan = JSON.parse(data, plan);
				Sheet = plan[0];
				Columns = plan[1];
				basePar = plan[2];
				txtPar = plan[3];
				txtOknOPar = plan[4];
				//Перерисовка
				try {
				$("#drawing").find("*").not("rect, g").remove();
				}
				catch(e){ }
				onoffpan();
				init();
				
				
			}
		});
}

//Чтение списка файлов
function readddir() {
	/* filesss= {}; */
	//fileName = '../scr/scr11.scr';
	$.ajax({
			type: "POST",
			url: 'js/readddir.php',
			async:false,
			data: {name: 'Wayne',well_Name: wellName, fileName: fileName},
			success: function(data){
				//Обновление
				var refresh = false;
				//Онлайн
				var online = false;
				
				var plan = {};
				/* console.log(data); */
				//Чтение формы
				filesss = JSON.parse(data, filesss);
				//alert(filesss);
				/* data = [];
				return plan; */
				/* Sheet = plan[0];
				Columns = plan[1];
				basePar = plan[2];
				txtPar = plan[3];
				txtOknOPar = plan[4]; */
				
				//Перерисовка
				/* try {
				$("#drawing").find("*").not("rect, g").remove();
				}
				catch(e){ }
				init(); */
				
			}
		});
		//Возращаем список файлов
		//alert(filesss);
}


//Удаление файла архива
function deletearch() {
	/* filesss= {}; */
	//fileName = '../scr/scr11.scr';
	$.ajax({
			type: "POST",
			url: 'js/deletearch.php',
			async:false,
			data: {name: 'Wayne',well_Name: wellName, fileName: fileName},
			success: function(data){
				//Обновление
				var refresh = false;
				//Онлайн
				var online = false;
				
				var plan = {};
				/* console.log(data); */
				//Чтение формы
				filesss = JSON.parse(data, filesss);
				//alert(filesss);
				/* data = [];
				return plan; */
				/* Sheet = plan[0];
				Columns = plan[1];
				basePar = plan[2];
				txtPar = plan[3];
				txtOknOPar = plan[4]; */
				
				//Перерисовка
				/* try {
				$("#drawing").find("*").not("rect, g").remove();
				}
				catch(e){ }
				init(); */
				
			}
		});
		//Возращаем список файлов
		//alert(filesss);
}

/* function loaddata() {
	$.getJSON("/some/url", function(data) { 
		// Now use this data to update your view models, 
		// and Knockout will update your UI automatically 
	}) 
	
}*/
