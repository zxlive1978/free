"use strict";

/* (function () {
//твой код
})(); */

//console.log (users_rights, decodeURIComponent(escape(window.atob(users_rights[0]))));

var isMobile = false; //
// ТЕЛЕФОН ПЛАНШЕТ???
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

var width = window.innerWidth, height = window.innerHeight, widthbak = width, heightbak = height;

//<?php echo 'var timetime = '.json_encode($timeshift);?>;
var end;
//Обновление
var refresh = false;
//Онлайн
var online = true;
//Ширина участка данных
var disp_time;
var disp_time_back;
//Начало данных
var start_time;
//Конец данных
var end_time;
//Копия начала и конца
var back_start_time;
var back_end_time;
//Фейк массив для данных когда их нет
var beg_rec = new Array();
//create_fake_data();
// Рисовать графики или нет 
var drawGraf = true ;

let d110d =function (){
	let d110d ={};
}

let d110l =function (){
	let d110l ={};
}

//имя скважины;
var wellName ="";
var skv ="";
//коментарии
var namecmt = wellName + "kr";
//глубинка
var wellNamedepth ="" +"depth_all";
//литология шламограмма
var wellNamelith ="" +"lith_all";
//формы
var formdirdepth ="/depth/";
var formdirkarot ="/karot/";
var formname = "Под телефон";
var formnamedepth = "Под телефон";
var formnamekarot = "Под телефон";

if (!isMobile){
	formname="Под планшет(ПК) светлая";
	formnamedepth = "Под планшет(ПК) светлая";
	formnamekarot = "Под планшет(ПК) светлая";
}

//Сохранение и чтение настроей из локального хранилища
//IE Права icacls %userprofile%\Appdata\LocalLow /t /setintegritylevel (OI)(CI)L
function readsavestartstorage(){
if(!window.localStorage.getItem(_uz[0])) {
	//for(keey in wells){}
	localStorage.setItem(_uz[0],
	window.btoa(unescape(encodeURIComponent(wellName+','+skv+','+namecmt+','+formname + ',' + formnamedepth + ',' + formnamekarot))));
	/* console.log('нету'); */
	
} else {
	wellName="";
	skv="";
	namecmt = wellName + "kr";
	// console.log(localStorage.getItem('skv'));
	// console.log(wells);
	let _uloc = decodeURIComponent(escape(window.atob(localStorage.getItem(_uz[0]))));
	let arr = _uloc.split(',');
	let _nam = arr[1];
	//console.log(_nam, _uloc);
	for(var keey in wells){
		// console.log(wells[keey].txt);
		if 	(wells[keey].txt==_nam){
		wellName = arr[0];
		skv = arr[1];
		namecmt = arr[2];
		formname = arr[3];
		formnamedepth = arr[4];
		formnamekarot = arr[5];
		console.log(arr);
		}
	}
	/* console.log('есть'); */
}

}

//$("#wellNwork1").text(wells['par0'].type);
// $("#wellNwork1").text('fdfsfsf');
// $("#wellNwork2").text(wells['par0'].typeStn);
// $("#wellNwork3").text(wells['par0'].nach);
// $("#wellNwork4").text(wells['par0'].tel);
// $("#wellNwork5").text(wells['par0'].email);





//Эмулятор данных
function read_cycle (){
	/* d110d[0][0]=d110d[0][0]+1000;
	console.log(d110d[0]); */
	//d110d[idx]['Vrema'] =d110d[idx]['Vrema'] +10;
	
	//console.log()
	for (let idx in d110d){
		//console.log(d110d[idx]);
		d110d[idx]['Vrema'] =String(Number(d110d[idx]['Vrema']) +1000);
		for (let idy in d110d[idx]){
			//console.log(d110d[idx][idy]);
			if (idy!='Vrema'){
				d110d[idx][idy]=String(Math.random() * (Number(d110d[idx][idy]) - Math.random())+Math.random())
			}
		}
		/* console.log(d110d[idx]['Vrema']); */
	}
	start_time =Number(d110d[0]["Vrema"]);
	end_time = Number(d110d[d110d.length-1]["Vrema"]);
	repaint();
	setTimeout(read_cycle, 500);
}



// $.when(
//     $.ajax({/*settings*/}),
//     $.ajax({/*settings*/}),
//     $.ajax({/*settings*/}),
//     $.ajax({/*settings*/}),
// ).then(function() {
//     // when all AJAX requests are complete
// });
//Узнаем последнюю глубину
function read_depth_last(){
	$.ajax({
		type: "GET",
		url: 'js/read_next.php',
		data: {name: 'Wayne',well_Name: wellName, Kzoom: Sheet.Kzoom},
		cache: false,
		success: function(data) {
			// if (curtemp=='time'){
		
			d110d = null;
			d110d = JSON.parse(data);
			
			curtemp = 'depth';
			if (!!d110d){
			if (d110d.length>0){
			start_time=Number(d110d[d110d.length-1]['Zaboj']-Kzoomdepth*10);} 
			else {start_time=0;}}
			else {start_time=0;}

			refresh = false;
		online = false;
		
		end_time=start_time + Kzoomdepth*10+Kzoomdepth/10;

		wellNamedepth =wellName +"depth_all";
		wellNamelith =wellName +"lith_all";
		$.ajax({
			type: "POST",
			url: 'js/read_litholog.php',
			data: {whatdo:'read', table:wellNamelith ,start_time: start_time, end_time:end_time },
			cache: false,
			async: false,
			success: function(data){
				
				try {
					d110l = null;
					d110l = JSON.parse(data);
					// console.log(d110l);
					
					
				}
				catch (e) { }
				
				
			}
		});

		$.ajax({
			type: "POST",
			url: 'js/read_depth.php',
			data: {whatdo:'read', table:wellNamedepth ,start_time: start_time, end_time:end_time },
			cache: false,
			async: false,
			success: function(data){
				
				try {
					d110d = null;
					d110d = JSON.parse(data);
					/* d110d = eval(data); */
					data = null;
					//numbs110d = null;
					var numbs110d = null;
					numbs110d = d110d.length;
					var back_start_time = null;
					back_start_time = start_time;
					back_end_time = null;
					back_end_time = end_time;
					repaint();
					
					


					
				}
				catch (e) { }
				
				
			}
		});
			// read_now();
			// refresh=true;
			// timer=setTimeout(function(){read_next();}, 3000);
		// }
		},
		error: function(){
		refresh=true;
		curtemp = 'depth';
		start_time=0;
		// read_now();
		// timer=setTimeout(function(){read_next();}, 3000);
	}
	});

}

//Чтение каротажей
function read_karot_last(){ 


}


var timer;
//Чтение последних значений
function read_next(){


	if (curtemp=='karot'){
		refresh = false;
		online = false;
		clearTimeout(timer);
		refresh = false;
		online = false;
		
		end_time=start_time + Kzoomdepth*10+Kzoomdepth/10;

		wellNamedepth =wellName +"depth_all";
		
		$.ajax({
			type: "POST",
			url: 'js/read_karot.php',
			data: {whatdo:'read', table:wellNamedepth ,start_time: start_time, end_time:end_time },
			cache: false,
			async: false,
			success: function(data){
				
				try {
					d110d = null;
					d110d = JSON.parse(data);
					/* d110d = eval(data); */
					// data = null;
					//numbs110d = null;
					var numbs110d = null;
					numbs110d = d110d.length;
					var back_start_time = null;
					back_start_time = start_time;
					back_end_time = null;
					back_end_time = end_time;
					repaint();
					
					


					
				}
				catch (e) { }
				
				
			}
		});
		
	}

	if (curtemp=='depth'){
		refresh = false;
		online = false;
		clearTimeout(timer);
		refresh = false;
		online = false;
		
		end_time=start_time + Kzoomdepth*10+Kzoomdepth/10;

		wellNamedepth =wellName +"depth_all";
		wellNamelith =wellName +"lith_all";
		$.ajax({
			type: "POST",
			url: 'js/read_litholog.php',
			data: {whatdo:'read', table:wellNamelith ,start_time: start_time, end_time:end_time },
			cache: false,
			async: false,
			success: function(data){
				
				try {
					d110l = null;
					d110l = JSON.parse(data);
					// console.log(d110l)
					
					
				}
				catch (e) { }
				
				
			}
		});

		$.ajax({
			type: "POST",
			url: 'js/read_depth.php',
			data: {whatdo:'read', table:wellNamedepth ,start_time: start_time, end_time:end_time },
			cache: false,
			async: false,
			success: function(data){
				
				try {
					d110d = null;
					d110d = JSON.parse(data);
					/* d110d = eval(data); */
					// data = null;
					//numbs110d = null;
					var numbs110d = null;
					numbs110d = d110d.length;
					var back_start_time = null;
					back_start_time = start_time;
					back_end_time = null;
					back_end_time = end_time;
					repaint();
					
					


					
				}
				catch (e) { }
				
				
			}
		});
		
	}
	
	if (curtemp=='time'){
	if (refresh==true &&  wellName!='' ){
		online = true;
		refresh=false;
		let data = null;
		$.ajax({
			type: "GET",
			url: 'js/read_next.php',
			data: {name: 'Wayne',well_Name: wellName, Kzoom: Sheet.Kzoom},
			cache: false,
			success: function(data) {
				if (curtemp=='time'){
					try {
						d110d = null;
						d110d = JSON.parse(data);
						// data = null;
						var numbs110d = null;
						numbs110d = d110d.length;
						start_time = null;
						
						start_time = Number(d110d[0]["Vrema"]);
						end_time = null;
						end_time = Number(d110d[d110d.length-1]["Vrema"]);
						
						var back_start_time = null;
						back_start_time = start_time;
						back_end_time = null;
						back_end_time = end_time;}
					catch (e) { }
			}
				
				repaint();
				refresh=true;
				timer=setTimeout(function(){read_next();}, 3000);
			},
			error: function(){
			refresh=true;
			timer=setTimeout(function(){read_next();}, 3000);
		}
		});
	
	}}

};





function obnovit_stranicu() {
	if (refresh==true){
		read_next();
	
  //window.onload = window.location.reload("true");
		// $(read_next());
		
  }}
  


function pongpong() {
	/* var draw = SVG('pong').size(300, 300)
	var rect = draw.rect(100, 100).attr({ fill: '#f06' }) */
	/* setInterval("obnovit_stranicu()", 1*3000); */
	/* refresh==true;
	var GOO = new read_random(); */
	obnovit_stranicu();
	
	
}

/* (function doStuff() {
  // Do stuff
   setTimeout(doStuff, 1000);
}()); */

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
			d110d = null;
			d110d = mass.slice();
		
			repaint ();
			
		}
	});

};



//Запуск текущего состояния по времeни
function read_now(){
	
// console.log(curtemp);
	if (curtemp=='depth'){
		//refresh = true;
		read_next();}
	if (curtemp=='time'){
		refresh = true;
		read_next();}
}
//Чтение вверх
function read_up(){
	//если по времени
	if (curtemp=='time'){
	refresh = false;
	online = false;
	disp_time = Sheet.Kzoom*60*60;
	start_time = start_time - Math.floor(disp_time/4);
	end_time = end_time - Math.floor(disp_time/4);
	//alert (d110d[0]["Vrema"]);
	//alert (d110d[d110d.length-1]["Vrema"]);
	//read_comment();
	//create_fake_data();
	read_random();}
	//если глубинка
	if (curtemp=='depth'){
		refresh = false;
		online = false;
		
		start_time = Number(start_time/1)-Kzoomdepth*10/4;
		read_now();

	}
	
}
//Чтение вниз
function read_down(){
	//если по времени
	if (curtemp=='time'){
	refresh = false;
	online = false;
	disp_time = Sheet.Kzoom*60*60;
	//disp_time = d110d[d110d.length-1]["Vrema"] - d110d[0]["Vrema"];
	//++ Конкотенация, а не сложение!
	start_time = Number(start_time) + Math.floor(disp_time/4);
	end_time = Number(end_time) + Math.floor(disp_time/4);
	
	//alert (d110d[0]["Vrema"]);
	//alert (d110d[d110d.length-1]["Vrema"]);
	//read_comment();
	//create_fake_data();
	read_random();}
	//если глубинка
	if (curtemp=='depth'){
		refresh = false;
		online = false;
		
		start_time = Number(start_time/1)+Kzoomdepth*10/4;
		read_now();

	}
}