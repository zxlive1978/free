
//Выполняется ли загрузка
var loaddata = false;

//Открыть закрыть админку
var onofadm= true;
var row_str = '<tr><td><select name="auser" id="auser"  size="5" style="height: auto; width: 300px;"></tr>';

//Список скважин
var wells = {	
	//par0 :  {wellN: 's401', txt: 'АГКМ-406', type: 'Ремонт', typeStn:'Разрез', nach:'Сидоров С.С.', tel:'242222', email:'sobaka14@sobaka.com'},
	//par1 :  {wellN: 's20', txt: 'АГКМ-73', type: 'Ремонт', typeStn:'Разрез', nach:'Иванов И.И.', tel:'222222', email:'sobaka12@sobaka.com'},
	// par0 :  {wellN: 's110', txt: 'АГКМ-99', type: 'Ремонт', typeStn:'Разрез', nach:'Арбузов П.П.', tel:'232222', email:'sobaka13@sobaka.com'},
	// par1 :  {wellN: 's908', txt: 'АГКМ-609', type: 'Ремонт', typeStn:'Разрез', nach:'Огурцов О.О.', tel:'252222', email:'sobaka15@sobaka.com'},
	// par2 :  {wellN: 's610', txt: 'АГКМ-260', type: 'Бурение', typeStn:'ИМС', nach:'Помидоров П.П.', tel:'262222', email:'sobaka16@sobaka.com'},
	// par3 :  {wellN: 's630', txt: 'АГКМ-9917', type: 'Бурение', typeStn:'ИМС', nach:'Баклажанов Б.Б.', tel:'272222', email:'sobaka17@sobaka.com'},
	// //par4 :  {wellN: 's629', txt: 'АГКМ-629', type: 'Бурение', typeStn:'ИМС', nach:'Редискин Р.Р.', tel:'282222', email:'sobaka18@sobaka.com'},
	// par4 :  {wellN: 's627', txt: 'АГКМ-627', type: 'Бурение', typeStn:'ИМС', nach:'Капустин К.К.', tel:'292222', email:'sobaka19@sobaka.com'},
	// par5 :  {wellN: 's915', txt: 'АГКМ-934', type: 'Бурение', typeStn:'ИМС', nach:'Кабачков К.К.', tel:'292222', email:'sobaka19@sobaka.com'},
	// par6 :  {wellN: 's224', txt: 'АГКМ-604', type: 'Бурение', typeStn:'ИМС', nach:'Репин К.К.', tel:'292222', email:'sobaka19@sobaka.com'},
	// par7 :  {wellN: 's20', txt: 'АГКМ-938', type: 'Ремонт', typeStn:'Разрез', nach:'Редискин С.С.', tel:'242222', email:'sobaka14@sobaka.com'},
	// par8 :  {wellN: 's4450', txt: 'АГКМ-71', type: 'Ремонт', typeStn:'ИМС', nach:'Морковкин С.С.', tel:'242222', email:'sobaka14@sobaka.com'},
	
};

//Пользователи УМ
var users_rights = {
	// par0 : {name:'Малина Я.Я', login:'malina', pass:'mon123', dolgnost:'Супевайзер Cупервайзеров',tel:'7172737', email:'odin@odin.org',forms:'/malina',time:'АГКМ-9917, АГКМ-632, АГКМ-627', video:{skv0:'АГКМ-9917',skv1:'АГКМ-632',skv2:'АГКМ-627'}, karotag:{skv0:'АГКМ-9917',skv1:'АГКМ-632',skv2:'АГКМ-627'},comments:{skv0:'АГКМ-9917',skv1:'АГКМ-632',skv2:'АГКМ-627'},geolog:{skv0:'АГКМ-9917',skv1:'АГКМ-632',skv2:'АГКМ-627'},depth:{skv0:'АГКМ-9917',skv1:'АГКМ-632',skv2:'АГКМ-627'},svodka:{skv0:'АГКМ-9917',skv1:'АГКМ-632',skv2:'АГКМ-627'}, chat:{skv0:'АГКМ-9917',skv1:'АГКМ-632',skv2:'АГКМ-627'}},
	// par1 : {name:'Слива О.О', login:'sliva', pass:'mon123',dolgnost:'Супевайзер скв АГКМ-632',tel:'7172737', email:'odin0001@odin.org',forms:'/sliva',time:{skv0:'АГКМ-627'}, video:{skv0:'АГКМ-627'}, karotag:{skv0:'АГКМ-627'},comments:{skv0:'АГКМ-627'},geolog:{skv0:'АГКМ-627'},depth:{skv0:'АГКМ-627'},svodka:{skv0:'АГКМ-627'},chat:{skv0:'АГКМ-627'}},
	// par2 : {name:'Груша Т.О', login:'grusha', pass:'mon123',dolgnost:'Мастер скв АГКМ-632',tel:'7172737', email:'odin002@odin.org',forms:'/grusha',time:{skv0:'АГКМ-627'}, video:{}, karotag:{},comments:{},geolog:{},depth:{},svodka:{},chat:{}},
	// par3 : {name:'Тамарилло А.О', login:'tommarillo', pass:'mon123',dolgnost:'Технолог скв АГКМ-632',tel:'7172727', email:'sobaka19@sobaka.com',forms:'/tommarillo',time:{skv0:'АГКМ-627'}, video:{}, karotag:{skv0:'АГКМ-627'},comments:{skv0:'АГКМ-627'},geolog:{skv0:'АГКМ-627'},depth:{skv0:'АГКМ-627'},svodka:{skv0:'АГКМ-627'},chat:{skv0:'АГКМ-627'}},
	//par4 : {name:'Хризофиллум Ф.Л', login:'hrizo', pass:'mon123',dolgnost:'Геолог скв АГКМ-632',tel:'7172727', email:'sobaka19@sobaka.com',forms:'/hrizo',time:{}, video:{}, karotag:{skv0:'АГКМ-627'},comments:{skv0:'АГКМ-627'},geolog:{skv0:'АГКМ-627'},depth:{skv0:'АГКМ-627'},svodka:{skv0:'АГКМ-627'},chat:{skv0:'АГКМ-627'}},
};

//Шаблон скважины
var Shablontxtwell = {
	par0 :  {wellN: 's110', txt: 'АГКМ-99', type: 'Ремонт', typeStn:'Разрез', nach:'Арбузов П.П.', tel:'232222', email:'sobaka13@sobaka.com'},
};

//Шаблон пользователя
var Shablontxtuserright = {
	par0 : {name:'Малина Я.Я', login:'malina', pass:'mon123', dolgnost:'Супевайзер Cупервайзеров',tel:'7172737', email:'odin@odin.org',forms:'/malinin',time:{skv0:'АГКМ-9917',skv1:'АГКМ-632',skv2:'АГКМ-627'}, video:{skv0:'АГКМ-9917',skv1:'АГКМ-632',skv2:'АГКМ-627'}, karotag:{skv0:'АГКМ-9917',skv1:'АГКМ-632',skv2:'АГКМ-627'},comments:{skv0:'АГКМ-9917',skv1:'АГКМ-632',skv2:'АГКМ-627'},geolog:{skv0:'АГКМ-9917',skv1:'АГКМ-632',skv2:'АГКМ-627'},depth:{skv0:'АГКМ-9917',skv1:'АГКМ-632',skv2:'АГКМ-627'},svodka:{skv0:'АГКМ-9917',skv1:'АГКМ-632',skv2:'АГКМ-627'}, chat:{skv0:'АГКМ-9917',skv1:'АГКМ-632',skv2:'АГКМ-627'}},
};


//Список камер
var cams = {
	//par0 :  {name: 'WP00001',  txt: 'АГКМ-99', rtsp:'rtsp://sngs:Son7Per7Ro9@37.29.8.121:554/Streaming/Channels/1702'},
};

// Шаблон камер
var Shabloncams = {
	par0 :  {name: 'WP00001',  txt: 'АГКМ-99', rtsp:'rtsp://sngs:Son7Per7Ro9@37.29.8.121:554/Streaming/Channels/1702'},
};

//Текущие параметры Справочник параметров графики обычные

var basePar = {

	};
	
//Справочник параметров графики обычные	
var bigPar = {
	par0 :  {par: 'Wkp', txt: 'Вес на крюке', min: 0, max: 270, color: '#ff0066', poz: {x:1,y:2}, unit: 'т', log: false},
	par1 : {par: 'Wdol', txt: 'Нагрузка на дол.', min: 0, max: 70, color: '#006eea', poz: {x:1,y:3}, unit: 'т', log: false},
	par2 : {par: 'Npot', txt: 'Обороты ротора', min: 0, max: 200, color: '#a92ab8', poz: {x:1,y:4}, unit: '1/мин', log: false},
	par3 : {par: 'Mpot', txt: 'Момент на роторе', min: 0, max: 5, color: '#006400', poz: {x:1,y:5}, unit: 'Н*м', log: false},
	par4 : {par: 'Pbx', txt: 'Давление на входе', min: 0, max: 300, color: '#f40503', poz: {x:2,y:2}, unit: 'атм', log: false},
	par5 : {par: 'Talblok', txt: 'Пол. тальблока', min: 0, max: 45, color: '#006eea', poz: {x:2,y:3}, unit: 'м', log: false},
	par6 : {par: 'Qbx', txt: 'Расход на входе', min: 0, max: 70, color: '#006400', poz: {x:2,y:4}, unit: 'л/сек', log: false},
	par7 : {par: 'C1', txt: 'С1', min: 0, max: 0.5, color: '#f21890', poz: {x:2,y:5}, unit: '%', log: false},
	par8 : {par: 'C1C5', txt: 'Сумма газов', min: 0, max: 5, color: '#855f30', poz: {x:2,y:6}, unit: '%', log: false},
	par9 : {par: 'Xn1', txt: 'Ходы 1 насоса', min: 0, max: 150, color: '#f40503', poz: {x:3,y:2}, unit: '1/мин', log: false},
	par10 : {par: 'Xn2', txt: 'Ходы 2 насоса', min: 0, max: 150, color: '#006eea', poz: {x:3,y:3}, unit: '1/мин', log: false},
	par11 : {par: 'Tbix', txt: 'Темп. на выходе', min: 0, max: 70, color: '#f21890', poz: {x:3,y:4}, unit: 'град', log: false},
	par12 : {par: 'Potok', txt: 'Поток на выходе', min: 0, max: 70, color: '#006400', poz: {x:3,y:5}, unit: 'у.е', log: false},
	par13 : {par: 'Vinstr', txt: 'Скор. тальблока', min: -5, max: 5, color: '#a92ab8', poz: {x:3,y:6}, unit: 'м/сек', log: false},
	par14 : {par: 'Vobj', txt: 'Cумм. объем емк.', min: 0, max: 370, color: '#000000', poz: {x:3,y:7}, unit: 'м3', log: false},
	par15 : {par: 'V1', txt: 'Объем 1 емкости', min: 0, max: 100, color: '#f40503', poz: {x:4,y:2}, unit: 'м3', log: false},
	par16 : {par: 'V2', txt: 'Объем 2 емкости', min: 0, max: 90, color: '#006eea', poz: {x:4,y:3}, unit: 'м3', log: false},
	par17 : {par: 'V3', txt: 'Объем 3 емкости', min: 0, max: 120, color: '#f21890', poz: {x:4,y:4}, unit: 'м3', log: false},
	par18 : {par: 'V4', txt: 'Объем 4 емкости', min: 0, max: 90, color: '#006400', poz: {x:4,y:5}, unit: 'м3', log: false},
	par19 : {par: 'Vdol', txt: 'Объем дол.емк.', min: 0, max: 30, color: '#a92ab8', poz: {x:4,y:6}, unit: 'м3', log: false},
	par20: {par: 'Zaboj', txt: 'Глубина Забоя', min: 0, max: 4000,color: '#ff0066', poz: {x:1,y:6}, show: true, step: 0.75, unit: 'м', log: false},
	par21: {par: 'Instr', txt: 'Пол.долота',min: 0, max: 100, color: '#ff0066', poz: {x:2,y:7}, show: true, step: 0.75, unit: 'м', log: false},
	};
	
//Справочник параметры графики цифровой параметры
var txtPar = {
	par0: {par: 'Zaboj', txt: 'Глубина Забоя', color: '#ff0066', poz: {x:1,y:6}, show: true, step: 0.75, unit: 'м', log: false},
	par1: {par: 'Instr', txt: 'Пол.долота', color: '#ff0066', poz: {x:2,y:7}, show: true, step: 0.75, unit: 'м', log: false},
	par2: {par: 'Vobj', txt: 'Cумм. объем емк.', color: '#ff0066', poz: {x:4,y:8}, show: true, step: 0.5, unit: 'м3', log: false},
};

//Шаблон Справочник параметры графики цифровой параметры
var ShablontxtPar = {
	par0: {par: 'Zaboj', txt: 'Глубина Забоя', color: '#ff0066', poz: {x:1,y:6}, show: true, step: 0.75, unit: 'м', log: false}
};


//Интервал параметр всего окна 
var txtOknOPar = {
	par0:{par: 'Vrema', txt: 'Время', color: '#000000', poz: {x:1,y:7}, unit: 'ч'},
};

//Шаблон Интервал параметр всего окна 
var ShablontxtOknOPar = {
	par0:{par: 'Vrema', txt: 'Время', color: '#000000', poz: {x:1,y:7}, unit: 'ч'},
};

//Список шрифтов
var fonts = {
0:{name:"Arial"},
1:{name:"Arial Black"},
2:{name:"Comic Sans MS"},
3:{name:"Courier New"},
4:{name:"Georgia"},
5:{name:"Impact"},
6:{name:"Times New Roman"},
7:{name:"Trebuchet MS"},
};

var Sheet = {
	//Вертикально/горизонтально
	vertical: true,
	//Ширина шапки времени в %
	time_w: 7,
	//Высота шапки по высоте в %
	disp_up: 20,
	//Количество столбцов
	numbs_colmns: 4,
	//ttt: w1
	//Толщина линий рамки шкалы(всего)
	width_line_p: 1,//
	//Число параметров в столбце
	numbs_colmn1: 6,
	//Число насечек
	numbs_risk: 5,//
	//Высота риски
	height_risk: 0.4,
	//Шрифт
	fnt: "Arial",
	//Коэфф системный размера шрифта PC
	K_size_txt: 92,//
	//Коэфф шрифта Mobile
	K_size_txt_mobile: 50, //
	//Цвет системный линии столбцов шрифт шкалы 
	syscolor: '#000000',//
	//Толщина линий графики
	width_gxf_line: 1.3, //
	//Цвет текста комментариев
	cmtcolor: '#006400', //
	//Размер комментариев
	cmtsize: 16, //
	
	//Цвет маркера перемещения колонки
	markcol: '#fecffe', //
	//Ширина маркера
	markwidth: 1,
	//Высота маркера
	markheight: 3, //
	
	
	//Цвет маркера перемещения по времени и глубине
	marktime: '#b3ffb3', //
	//Ширина маркера
	markwidthtime: 2,
	//Высота маркера
	markheighttime: 10,
	//Всего параметров
	allpar: 0,
	
	//Высота, ширина иконки панели инструмента
	icosize: 1.4, //1.4
	icosizem: 3, //мобильный
	//Число засечек по гор (не работает)
	 numbr_teeth_сolmn1: 10,
	 //Полоса меню с градиентом
	grcol1: '#FFFFFF', //
	grcol2: '#82CAFA', //
	
	//Пунктирная решетка
	dashcol1: '#bababa', //
	dasharray : '2,1', //
	//Число засечек по верт 
	numbr_teeth_сolmn4: 10,
	//Если не телефон не компьютер
	//var K_mobule_not_mobile =0.96;
	//var K_A4 =0.96;
	K_mobule_not_mobile: 1,
	K_A4 :1,

	//Маcштаб (час)
	Kzoom :3,
	
	// Прозрачность окна мгновенных значений
	faderr: 0.6, //
	 //Непонятно
	 //Высота области шапки
	height_value: 8,
	//Ширина области
	width_value: 14, //
	// Цвет окна прозрачных значений
	curcolorval: '#ffd080', //
	//Цвет пропуска значений
	holcol : '#ff0066', //
	//Прозрачность пропуска значений
	holhide: 0.2, //
	////Размер мгновенных значений
	///curvalsize: 12
	//кнопка добавить столбец
	pluscol :  '#347C17',
	//кнопка настройки
	toolcol : '#2B65EC',
	//кнопка удалить столбец
	delcol :  '#FF7F50',
	
	//кнопка редактирование формы
	rawsvg0:'#ff0000',
	//редактирование формы
	editscrn: false,
	//кнопка скважина
	rawsvg1:'#006400',
	//кнопка календарь
	rawsvg2:'#006eea',
	//кнопка лупа
	rawsvg3:'#a92ab8',
	//кнопка open
	rawsvg4:'#f21890',
	//кнопка спутник прием
	rawsvg5:'#006eea',
	
	//фон кнопок светлее/ темнее
	fonbut: true,

	
	
};
//Столбцы
var Columns = {
	//Цвет шрифта и насечек //Заливка колонки
	col0 : {size:{h:20,w:7}, poz:{x:0, y:0}, numbs_par: 1, color: '#000000', fill: '#b3ffb3', grid: {num:10, type:'linear'}},
	col1 : {size:{h:20,w:23.25},  poz:{x:7, y:0}, numbs_par: 4, colorhead:'#ffe6ff', colorbody:'#ffddcc', grid: {num:10, type:'linear'}},
	col2 : {size:{h:20,w:23.25},  poz:{x:30.25, y:0}, numbs_par: 5, colorhead:'#e6e6ff', colorbody:'#f9ecec', grid: {num:20, type:'linear'}},
	col3 : {size:{h:20,w:23.25},  poz:{x:53.5, y:0}, numbs_par: 6, colorhead:'#e6e6ff', colorbody:'#ffeee6', grid: {num:10, type:'linear'}},
	col4 : {size:{h:20,w:23.25},  poz:{x:76.75, y:0}, numbs_par: 5, colorhead:'#e6ff99', colorbody:'#ffe6b3', grid: {num:10, type:'linear'}}		
};


//Маcштаб (час)
var Kzoom = Sheet.Kzoom;

//Плюс
var rawsvg3 = '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 280 280" style="enable-background:new 0 0 280 280;" xml:space="preserve"><path d="M138.3-54.8l-193,190.1c-1.8,1.8-1.8,4.6,0,6.4l190.1,193c1.8,1.8,4.6,1.8,6.4,0l193-190.1c1.8-1.8,1.8-4.6,0-6.4	l-190.1-193C142.9-56.5,140.1-56.6,138.3-54.8z M227.7,125.7l-0.2,30l-72.6-0.6l-0.6,72.6l-30-0.2l0.6-72.6l-72.6-0.6l0.2-30 l72.6,0.6l0.6-72.6l30,0.2l-0.6,72.6L227.7,125.7z"/> </svg>';
//Настройки
var rawsvg2 = '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><path d="M911.4,600.7h-51.9c-8.4,30.5-20.6,59.5-36,86.3l48,48c30.7,30.7,30.7,80.5,0,111.1l-27.8,27.8c-30.7,30.7-80.5,30.7-111.2,0l-48.3-48.3c-26.8,15.2-55.6,27.1-86,35.4v50.3c0,43.4-35.2,78.6-78.6,78.6h-39.3c-43.4,0-78.6-35.2-78.6-78.6V861c-30.4-8.3-59.2-20.2-86-35.4l-48.3,48.3c-30.7,30.7-80.5,30.7-111.2,0l-27.8-27.8c-30.7-30.7-30.7-80.5,0-111.1l48-48c-15.5-26.9-27.6-55.8-36-86.3H88.6c-43.4,0-78.6-35.2-78.6-78.6v-39.3c0-43.4,35.2-78.6,78.6-78.6h51.3c8.1-30.2,19.8-59,34.8-85.7l-46.1-46.1c-30.7-30.7-30.7-80.5,0-111.2l27.8-27.8c30.7-30.7,80.5-30.7,111.2,0l45.2,45.2c27.7-16.1,57.5-28.7,89.1-37.3V88.6c0-43.4,35.2-78.6,78.6-78.6h39.3c43.4,0,78.6,35.2,78.6,78.6v52.8c31.6,8.6,61.4,21.2,89.1,37.3l45.2-45.2c30.7-30.7,80.5-30.7,111.2,0l27.8,27.8c30.7,30.7,30.7,80.5,0,111.2l-46.1,46.1c15,26.7,26.7,55.5,34.8,85.7h51.3c43.4,0,78.6,35.2,78.6,78.6v39.3C990,565.5,954.8,600.7,911.4,600.7L911.4,600.7z M500,287.6c-119.4,0-216.1,96.8-216.1,216.1c0,119.4,96.8,216.1,216.1,216.1c119.4,0,216.1-96.8,216.1-216.1C716.1,384.3,619.4,287.6,500,287.6L500,287.6z M500,599.5c-54.3,0-98.3-44-98.3-98.2c0-54.2,44-98.2,98.3-98.2c54.3,0,98.2,44,98.2,98.2C598.2,555.5,554.3,599.5,500,599.5L500,599.5z"/></g></svg>';
//Крестик
var rawsvg1 = '<?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 280 280" style="enable-background:new 0 0 280 280;" xml:space="preserve"> <path d="M275.456,0H4.544C2.034,0,0,2.035,0,4.544v270.911C0,277.965,2.034,280,4.544,280h270.911c2.509,0,4.544-2.035,4.544-4.544 V4.544C280,2.035,277.965,0,275.456,0z M212.529,191.316l-21.213,21.213L140,161.213l-51.316,51.316l-21.213-21.213L118.787,140 L67.471,88.684l21.213-21.213L140,118.787l51.316-51.316l21.213,21.213L161.213,140L212.529,191.316z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';

var butts ={
	rawsvg0:{img:'<?xml version="1.0" encoding="iso-8859-1"?> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> 	<g> 		<path d="M406,242H106c-24.814,0-45,20.186-45,45v180c0,24.814,20.186,45,45,45h300c24.814,0,45-20.186,45-45V287 			C451,262.186,430.814,242,406,242z M271,389.246V437c0,8.291-6.709,15-15,15c-8.291,0-15-6.709-15-15v-47.754 			c-17.424-6.211-30-22.705-30-42.246c0-24.814,20.186-45,45-45c24.814,0,45,20.186,45,45C301,366.541,288.424,383.035,271,389.246z 			"/> 	</g> </g> <g> 	<g> 		<path d="M256,0C165.033,0,91,74.033,91,165v47h90v-47c0-41.367,33.633-75,75-75s75,33.633,75,75v47h90v-47 			C421,74.033,346.967,0,256,0z"/> 	</g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> ',
	color:'#ff0066'},
	rawsvg1:{img:'<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><path d="M770.2,926.5"/><path d="M782.6,783.7v-57.4h-79.5L636.8,136h14.8V89.3H344.8V136H365l-66.3,590.3h-74.1v57.4h-41.3V990h633.4V783.7H782.6z M646.7,678L531.3,554.6l90.6-97L646.7,678z M609.5,346l-82.7-88.5l65-69.5L609.5,346z M513.7,136h72.1l0.3,3.1l-72.5,77.5L513.7,136L513.7,136z M513.7,298.6l96.8,103.6l-96.8,103.6V298.6z M513.7,603.4l114.8,122.9H513.7V603.4z M415.9,136h70.7v78.7l-71-76L415.9,136z M410.1,187.7l65.3,69.9l-83.1,88.9L410.1,187.7z M486.6,300.5v206.2l-96.4-103.1L486.6,300.5z M379.6,459.9l88.5,94.7L355.4,675.1L379.6,459.9z M486.6,602.4v123.9H370.8L486.6,602.4z M521.8,926.5c-19.4,0-35.3-15.9-35.3-35.3V772l26.4,0.1c0,0,0,80.5,0,107.7c0,16.5,20.8,17.4,20.8,17.4c19.7,2.6,147.6,0.9,147.6,0.9l0.6,28.4H521.8z"/><path d="M401.7,10h182.8v63.3H401.7V10z"/></g></svg>',
	color:Sheet.rawsvg0},
	rawsvg2:{img:'<?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 485.213 485.212" style="enable-background:new 0 0 485.213 485.212;" xml:space="preserve"> <g> <path d="M60.652,75.816V15.163C60.652,6.781,67.433,0,75.817,0c8.38,0,15.161,6.781,15.161,15.163v60.653 c0,8.38-6.781,15.161-15.161,15.161C67.433,90.978,60.652,84.196,60.652,75.816z M318.424,90.978 c8.378,0,15.163-6.781,15.163-15.161V15.163C333.587,6.781,326.802,0,318.424,0c-8.382,0-15.168,6.781-15.168,15.163v60.653 C303.256,84.196,310.042,90.978,318.424,90.978z M485.212,363.906c0,66.996-54.312,121.307-121.303,121.307 c-66.986,0-121.302-54.311-121.302-121.307c0-66.986,54.315-121.3,121.302-121.3C430.9,242.606,485.212,296.919,485.212,363.906z M454.89,363.906c0-50.161-40.81-90.976-90.98-90.976c-50.166,0-90.976,40.814-90.976,90.976c0,50.171,40.81,90.98,90.976,90.98 C414.08,454.886,454.89,414.077,454.89,363.906z M121.305,181.955H60.652v60.651h60.653V181.955z M60.652,333.584h60.653V272.93 H60.652V333.584z M151.629,242.606h60.654v-60.651h-60.654V242.606z M151.629,333.584h60.654V272.93h-60.654V333.584z M30.328,360.891V151.628h333.582v60.653h30.327V94c0-18.421-14.692-33.349-32.843-33.349h-12.647v15.166 c0,16.701-13.596,30.325-30.322,30.325c-16.731,0-30.326-13.624-30.326-30.325V60.651H106.14v15.166 c0,16.701-13.593,30.325-30.322,30.325c-16.733,0-30.327-13.624-30.327-30.325V60.651H32.859C14.707,60.651,0.001,75.579,0.001,94 v266.892c0,18.36,14.706,33.346,32.858,33.346h179.424v-30.331H32.859C31.485,363.906,30.328,362.487,30.328,360.891z M303.256,242.606v-60.651h-60.648v60.651H303.256z M409.399,363.906h-45.49v-45.49c0-8.377-6.781-15.158-15.163-15.158 s-15.159,6.781-15.159,15.158v60.658c0,8.378,6.777,15.163,15.159,15.163h60.653c8.382,0,15.163-6.785,15.163-15.163 C424.562,370.692,417.781,363.906,409.399,363.906z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
	//rawsvg1:{img:'<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><g><path d="M458.666,42.67h-53.33V32c0-17.645-14.356-32-32.002-32c-17.644,0-31.999,14.355-31.999,32v10.67H170.664V32 c0-17.645-14.354-32-31.999-32s-32,14.355-32,32v10.67H53.334c-5.892,0-10.667,4.776-10.667,10.667v447.995 c0,5.89,4.776,10.667,10.667,10.667h405.332c5.891,0,10.667-4.778,10.667-10.667V53.337 C469.333,47.446,464.557,42.67,458.666,42.67z M362.67,53.337V32c0-5.882,4.784-10.665,10.666-10.665 c5.881,0,10.665,4.783,10.665,10.665v21.337V74.67c0,0.735-0.075,1.452-0.218,2.146c-0.996,4.855-5.303,8.517-10.45,8.517 c-5.881,0-10.664-4.783-10.664-10.663V53.337z M128,53.337V32c0-5.882,4.783-10.665,10.667-10.665 c5.88,0,10.662,4.783,10.662,10.665v21.337V74.67c0,1.469-0.299,2.871-0.838,4.146c-1.621,3.825-5.415,6.517-9.826,6.517 C132.783,85.333,128,80.55,128,74.67V53.337z M64.001,64.005h42.663V74.67c0,2.756,0.35,5.434,1.009,7.988 c3.557,13.791,16.103,24.01,30.991,24.01h0.002c17.643,0,31.997-14.355,31.997-31.998V64.005h170.67V74.67 c0,17.643,14.355,31.998,32.001,31.998c17.645,0,32-14.355,32-31.998V64.005h42.662v63.994H64.001V64.005z M447.999,490.665 H64.001v0v-21.328h68.657c5.891,0,10.667-4.778,10.667-10.667c0-5.892-4.777-10.667-10.667-10.667H64.001V149.334h383.997 V490.665z"/><path d="M141.432,249.712c1.736,0,4.342-0.868,6.37-2.896l10.134-12.742v160.764c0,6.661,7.528,10.134,15.347,10.134 c7.531,0,15.349-3.473,15.349-10.134v-191.41c-0.001-6.371-7.24-10.134-13.612-10.134c-3.474,0-5.792,1.159-7.818,3.185 l-30.115,28.907c-3.765,2.608-6.08,7.53-6.08,11.874C131.007,243.34,135.349,249.712,141.432,249.712z"/><path d="M316.134,406.711c36.486,0,64.866-16.506,64.866-59.652v-3.475c-0.001-29.827-13.321-46.913-33.303-54.154 c16.216-6.082,27.221-20.556,27.221-45.174c0-37.065-24.904-50.962-58.784-50.962c-33.881,0-58.784,13.896-58.784,50.962 c0,24.618,11.005,39.092,26.931,45.174c-19.98,7.24-33.301,24.327-33.301,54.154v3.475 C250.98,390.206,279.647,406.711,316.134,406.711z M316.134,218.774c18.245,0,28.959,8.398,28.959,28.958 c0,20.85-10.714,29.248-28.959,29.248c-18.242,0-28.958-8.398-28.958-29.248C287.175,227.173,297.892,218.774,316.134,218.774z M281.674,338.66c0-24.904,13.032-36.197,34.46-36.197c21.428,0,34.17,11.293,34.17,36.197v5.213 c0,25.191-12.451,37.353-34.17,37.353c-21.139,0-34.46-11.58-34.46-37.353V338.66z"/><path d="M163.556,448.006h-0.254c-5.892,0-10.667,4.776-10.667,10.667c0,5.889,4.776,10.667,10.667,10.667h0.254 c5.892,0,10.667-4.778,10.667-10.667C174.224,452.781,169.448,448.006,163.556,448.006z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
	color:Sheet.rawsvg1},
	rawsvg3:{img:'<?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 485.213 485.213" style="enable-background:new 0 0 485.213 485.213;" xml:space="preserve"><g><g><path d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324 c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z"/> <path d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951 C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46 c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465 C318.424,257.208,257.206,318.416,181.956,318.416z"/> <path d="M75.817,181.955h30.322c0-41.803,34.014-75.814,75.816-75.814V75.816C123.438,75.816,75.817,123.437,75.817,181.955z"/> </g> </g> <g> </g> <g> </g> <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
	color:Sheet.rawsvg2},
	//rawsvg3:{img:'<?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 286.9 286.9" style="enable-background:new 0 0 286.9 286.9;" xml:space="preserve" > <g> <polygon points="248.65,76.5 181.65,76.5 210.35,0 95.65,0 38.25,153 86.05,153 38.25,286.9 	"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>' ,
	rawsvg4:{img:'<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"><g><rect x="22" y="38" width="28" height="4"/><rect x="22" y="10" width="17" height="4"/><path d="M45.8,0H18c-2.2,0-4,1.8-4,4v2h-4c-2.2,0-4,1.8-4,4v50c0,2.2,1.8,4,4,4h38c2.2,0,4-1.8,4-4v-4h2c2.2,0,4-1.8,4-4V11.1L45.8,0z M47,6.5l3.8,3.5H47V6.5z M48,60H10V10h4v42c0,2.2,1.8,4,4,4h30V60z M18,52V4h25v10h11l0,38H18z"/><rect x="22" y="22" width="28" height="4"/><rect x="22" y="30" width="28" height="4"/></g></svg>' ,
	color:Sheet.rawsvg3},
	//rawsvg4:{img:'<svg viewBox="-41 0 511 512" xmlns="http://www.w3.org/2000/svg"><path d="m73.460938 185.210938v72.316406c0 40.027344-14.441407 78.570312-39.789063 108.691406h363.113281c-25.347656-30.121094-39.789062-68.664062-39.789062-108.691406v-72.316406c0-78.171876-63.597656-141.769532-141.765625-141.769532-78.171875 0-141.769531 63.597656-141.769531 141.769532zm0 0"/><path d="m10.886719 445.113281h408.6875v-48.878906h-408.6875zm0 0"/><path d="m215.230469 512c20.476562 0 37.175781-16.476562 37.539062-36.867188h-75.078125c.359375 20.390626 17.0625 36.867188 37.539063 36.867188zm0 0"/><path d="m140.390625 27.4375-12.175781-27.4375c-77.582032 34.429688-127.714844 111.5-127.714844 196.351562h30.015625c0-72.992187 43.128906-139.296874 109.875-168.914062zm0 0"/><path d="m399.941406 196.351562h30.015625c0-84.851562-50.128906-161.921874-127.714843-196.351562l-12.175782 27.4375c66.746094 29.617188 109.875 95.921875 109.875 168.914062zm0 0"/></svg>',
	rawsvg5:{img:'<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" viewBox="0 0 236.63 299.95" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-317.72 -178.01)"><g transform="matrix(2.8428 1.4908 -1.4908 2.8428 85.009 -2057.1)"><g transform="matrix(.83109 -.84336 .84336 .83109 -425.72 478.53)" stroke-width="0"><path d="m443.65 563.57c-1.0519-0.0129-2.107 0.0598-3.1274 0.18048l0.06 2.7509c0.99036-0.12733 2.0099-0.19417 3.0337-0.18162 12.831 0.15709 23.11 11.577 22.939 25.533-2e-3 0.17643-1e-3 0.35569-7e-3 0.53121l2.5006-0.0319c4e-3 -0.15699 4e-3 -0.31113 6e-3 -0.46872 0.18944-15.473-11.18-28.139-25.405-28.313z"/><path d="m442.9 570.53c-0.79783-0.01-1.598 0.0454-2.372 0.13688l0.0455 2.5283c0.75111-0.0966 1.5244-0.14725 2.3008-0.13774 9.7311 0.11913 16.959 8.3382 16.83 18.923-2e-3 0.1338-1e-3 0.26976-5e-3 0.40289l2.4647-0.0242c3e-3 -0.11907 3e-3 -0.23598 4e-3 -0.35547 0.14368-11.735-8.4793-21.341-19.268-21.474z"/><path d="m442.21 576.89c-0.56577-7e-3 -1.1332 0.0322-1.6821 0.0971l0.0323 2.4266c0.53265-0.0685 1.081-0.10442 1.6316-0.0977 6.9008 0.46331 10.914 5.09 11.138 12.786-1e-3 0.0949-7.7e-4 0.19129-3e-3 0.28572l2.5445-0.0171c2e-3 -0.0845 2e-3 -0.16735 3e-3 -0.25208 0.10189-8.322-6.0131-15.134-13.664-15.228z"/></g><g transform="translate(4.3273)"><path d="m428.83 632.5c1.5174 8.3951 3.1884 16.704 3.2504 25.864 13.434-7.0701 16.246-8.6004 29.68-15.671-4.844-3.3768-9.5917-7.3935-13.563-11.229-6.1412 1.9817-12.377 2.6317-19.367 1.0358zm3.0356 3.5588 2.9005 0.34654c1.6573 7.6899 1.2443 15.12-0.19508 18.637-0.5999-6.1199-0.9108-10.445-2.7055-18.984z"/><path d="m398.12 602.82c5.464 15.304 20.054 26.266 37.241 26.321 17.188 0.0547 31.819-10.803 37.38-26.073l-74.621-0.24766zm6.1134 4.377 6.5596 0.18844c4.5202 8.2308 9.0556 11.778 15.41 16.825-9.1354-2.7564-16.947-7.8077-21.97-17.013z"/><g transform="translate(2.1997 2)" stroke-width="0"><rect x="431.59" y="594.76" width="3.283" height="8.0812"/><path d="m436.64 594.01c0 2.0921-1.5264 3.7881-3.4093 3.7881-1.8829 0-3.4093-1.696-3.4093-3.7881 0-2.0921 1.5264-3.7881 3.4093-3.7881 1.8829 0 3.4093 1.696 3.4093 3.7881z"/></g></g></g></g></svg>',
	color:'#ff0066'},
	
	
}
//Календарь
//var rawsvg4 = '<?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 485.213 485.212" style="enable-background:new 0 0 485.213 485.212;" xml:space="preserve"> <g> <path d="M60.652,75.816V15.163C60.652,6.781,67.433,0,75.817,0c8.38,0,15.161,6.781,15.161,15.163v60.653 c0,8.38-6.781,15.161-15.161,15.161C67.433,90.978,60.652,84.196,60.652,75.816z M318.424,90.978 c8.378,0,15.163-6.781,15.163-15.161V15.163C333.587,6.781,326.802,0,318.424,0c-8.382,0-15.168,6.781-15.168,15.163v60.653 C303.256,84.196,310.042,90.978,318.424,90.978z M485.212,363.906c0,66.996-54.312,121.307-121.303,121.307 c-66.986,0-121.302-54.311-121.302-121.307c0-66.986,54.315-121.3,121.302-121.3C430.9,242.606,485.212,296.919,485.212,363.906z M454.89,363.906c0-50.161-40.81-90.976-90.98-90.976c-50.166,0-90.976,40.814-90.976,90.976c0,50.171,40.81,90.98,90.976,90.98 C414.08,454.886,454.89,414.077,454.89,363.906z M121.305,181.955H60.652v60.651h60.653V181.955z M60.652,333.584h60.653V272.93 H60.652V333.584z M151.629,242.606h60.654v-60.651h-60.654V242.606z M151.629,333.584h60.654V272.93h-60.654V333.584z M30.328,360.891V151.628h333.582v60.653h30.327V94c0-18.421-14.692-33.349-32.843-33.349h-12.647v15.166 c0,16.701-13.596,30.325-30.322,30.325c-16.731,0-30.326-13.624-30.326-30.325V60.651H106.14v15.166 c0,16.701-13.593,30.325-30.322,30.325c-16.733,0-30.327-13.624-30.327-30.325V60.651H32.859C14.707,60.651,0.001,75.579,0.001,94 v266.892c0,18.36,14.706,33.346,32.858,33.346h179.424v-30.331H32.859C31.485,363.906,30.328,362.487,30.328,360.891z M303.256,242.606v-60.651h-60.648v60.651H303.256z M409.399,363.906h-45.49v-45.49c0-8.377-6.781-15.158-15.163-15.158 s-15.159,6.781-15.159,15.158v60.658c0,8.378,6.777,15.163,15.159,15.163h60.653c8.382,0,15.163-6.785,15.163-15.163 C424.562,370.692,417.781,363.906,409.399,363.906z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
//Лупа
//var rawsvg5 = '<?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 485.213 485.213" style="enable-background:new 0 0 485.213 485.213;" xml:space="preserve"><g><g><path d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324 c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z"/> <path d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951 C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46 c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465 C318.424,257.208,257.206,318.416,181.956,318.416z"/> <path d="M75.817,181.955h30.322c0-41.803,34.014-75.814,75.816-75.814V75.816C123.438,75.816,75.817,123.437,75.817,181.955z"/> </g> </g> <g> </g> <g> </g> <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
//Молния
//var rawsvg6 = '<?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 286.9 286.9" style="enable-background:new 0 0 286.9 286.9;" xml:space="preserve" > <g> <polygon points="248.65,76.5 181.65,76.5 210.35,0 95.65,0 38.25,153 86.05,153 38.25,286.9 	"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
//Скважина
//var rawsvg7 ='<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><path d="M770.2,926.5"/><path d="M782.6,783.7v-57.4h-79.5L636.8,136h14.8V89.3H344.8V136H365l-66.3,590.3h-74.1v57.4h-41.3V990h633.4V783.7H782.6z M646.7,678L531.3,554.6l90.6-97L646.7,678z M609.5,346l-82.7-88.5l65-69.5L609.5,346z M513.7,136h72.1l0.3,3.1l-72.5,77.5L513.7,136L513.7,136z M513.7,298.6l96.8,103.6l-96.8,103.6V298.6z M513.7,603.4l114.8,122.9H513.7V603.4z M415.9,136h70.7v78.7l-71-76L415.9,136z M410.1,187.7l65.3,69.9l-83.1,88.9L410.1,187.7z M486.6,300.5v206.2l-96.4-103.1L486.6,300.5z M379.6,459.9l88.5,94.7L355.4,675.1L379.6,459.9z M486.6,602.4v123.9H370.8L486.6,602.4z M521.8,926.5c-19.4,0-35.3-15.9-35.3-35.3V772l26.4,0.1c0,0,0,80.5,0,107.7c0,16.5,20.8,17.4,20.8,17.4c19.7,2.6,147.6,0.9,147.6,0.9l0.6,28.4H521.8z"/><path d="M401.7,10h182.8v63.3H401.7V10z"/></g></svg>';
//Видосик
/* var custom2 = function(){
	uglipop({class:'put2',source:'html',content:'<h1>This is some Raw Content</h1>This is some Random Raw Content with minimum style'});}
 */
/* var kalendar = function(){
	uglipop({class:'my-styling-class',source:'html',content:"<br>Выбор даты(не более 10 дней от текущей)<br><br><table align='center'><div><tr><td><input type='date' id='localdate1' name='date1'  maxlength='20' ></td></tr></tr></div></table><br><br>  <button onclick='colOK3()'>   OK   </button> <br>"});}


var lupa = function(){
	uglipop({class:'my-styling-class',source:'html',content:"<br>Ширина интервала<br><br> <select id='zooom1' name='zooom1' value='3' ><option value='3'>3 часа</option><option value='1'>1 час</option><option value='8'>8 часов</option><option value='24'>1 день</option></select><br><br>  <button onclick='colOK4()'>   OK   </button> <br>"});}

var options = function(){
	uglipop({class:'my-styling-class',source:'html',content:"<br>Ширина интервала<br><br>  <table><div><tr><tr><td><label for='hcolcolor'>Толщина линий:</label></td><td><input type='text' id='width_line_p' name='width_line_p' value='0'/></tr><tr><td><label for='hcolcolor'>Цвет линий:</label></td><td><input type='color' id='syscolor' name='syscolor' value='#e66465'/></tr><tr><tr><td><label for='hcolcolor'>Коэфф. размера шрифта:</label></td><td><input type='text' id='K_size_txt' name='K_size_txt' value='0'/></tr><tr><td><label for='hcolcolor'>Коэфф. размера шрифта(моб):</label></td><td><input type='text' id='K_size_txt_mobile' name='K_size_txt_mobile' value='0'/></tr><tr><td><label for='hcolcolor'>Толщина линий графиков:</label></td><td><input type='text' id='width_gxf_line' name='width_gxf_line' value='0'/></tr><tr><td><label for='hcolcolor'>Радиус круга полож. столбца:</label></td><td><input type='text' id='markheight' name='markheight' value='0'/></tr><tr><td><label for='hcolcolor'>Цвет круга полож. столбца:</label></td><td><input type='color' id='markcol' name='markcol' value='#e66465'/></tr><tr><td><label for='hcolcolor'>Цвет ключевого столбца:</label></td><td><input type='color' id='marktime' name='marktime' value='#e66465'/></tr><tr><td><label for='hcolcolor'>Размер шрифта комментариев:</label></td><td><input type='text' id='cmtsize' name='cmtsize' value='0'/></tr><tr><td><label for='hcolcolor'>Цвет комментариев:</label></td><td><input type='color' id='cmtcolor' name='cmtcolor' value='#e66465'/></tr><tr><td><label for='hcolcolor'>Высота панели инструментов:</label></td><td><input type='text' id='icosize' name='icosize' value='0'/></tr><tr><td><label for='hcolcolor'>Высота панели инструментов(моб):</label></td><td><input type='text' id='icosizem' name='icosizem' value='0'/></tr><tr><td><label for='hcolcolor'>Цвет 1 панели инструментов:</label></td><td><input type='color' id='grcol1' name='grcol1' value='#e66465'/></tr><tr><td><label for='hcolcolor'>Цвет 2 панели инструментов:</label></td><td><input type='color' id='grcol2' name='grcol2' value='#e66465'/></tr><tr><td><label for='hcolcolor'>Пунктирная линия:</label></td><td><input type='text' id='dasharray' name='dasharray' value='0'/></tr><tr><td><label for='hcolcolor'>Цвет пунктирной линии:</label></td><td><input type='color' id='dashcol1' name='dashcol1' value='#e66465'/></tr><tr><td><label for='hcolcolor'>Цвет области пропуска значений:</label></td><td><input type='color' id='holcol' name='holcol' value='#e66465'/></tr><tr><td><label for='hcolcolor'>Прозрачность обл. пропуска значений:</label></td><td><input type='text' id='holhide' name='holhide' value='0'/></tr><tr><td><label for='hcolcolor'>Ширина области текущ. значений:</label></td><td><input type='text' id='width_value' name='width_value' value='0'/></tr><tr><td><label for='hcolcolor'>Цвет области текущ. значений:</label></td><td><input type='color' id='curcolorval' name='curcolorval' value='#e66465'/></tr><tr><td><label for='hcolcolor'>Прозрачность области текущ. значений:</label></td><td><input type='text' id='faderr' name='faderr' value='0'/></tr><tr><td><label for='hcolcolor'>Кнопка 'Удалить':</label></td><td><input type='color' id='delcol' name='delcol' value='#e66465'/></tr><tr><td><label for='hcolcolor'>Кнопка 'Настройки':</label></td><td><input type='color' id='toolcol' name='toolcol' value='#e66465'/></tr><tr><td><label for='hcolcolor'>Кнопка 'Добавить':</label></td><td><input type='color' id='pluscol' name='pluscol' value='#e66465'/></tr><tr><td><label for='hcolcolor'>Кнопка 'Календарь':</label></td><td><input type='color' id='rawsvg0' name='rawsvg0' value='#e66465'/></tr><tr><td><label for='hcolcolor'>Кнопка 'Лупа':</label></td><td><input type='color' id='rawsvg1' name='rawsvg1' value='#e66465'/></tr><tr><td><label for='hcolcolor'>Кнопка 'Молния':</label></td><td><input type='color' id='rawsvg2' name='rawsvg2' value='#e66465'/></tr></tr></div></table><br><br>  <button onclick='colOK5()'>   OK   </button> <br>"});}
 */







//Выбранный параметр 
var ParSelect="";
//Окно параметра. Панель выбора границ параметров и тд...
function parPan (name_select) {
	//var param_click = SVG.get(name_select);
	//console.log(basePar[String(name_select)].txt);
	//basePar[String(name_select)].max=120;
	
	
	//Изменение значений атрубиутов окна Чтение
	//console.log($("#PArmyDialog").attr("title"));
	//$("#namePar").attr("text", basePar[String(name_select)].txt);
	/* dojo.query("label[for=namePar]")[0].innerHTML = basePar[String(name_select)].txt; */
	/* console.log(basePar[String(name_select)].txt,basePar[String(name_select)].min,basePar[String(name_select)].max); */
	$("#namePar").text(basePar[String(name_select)].txt);
	$("#begedge").val(basePar[String(name_select)].min);
	$("#endedge").val(basePar[String(name_select)].max);
	$("#parcolor").val(basePar[String(name_select)].color);
	$("#parlog").prop('checked', basePar[String(name_select)].log);
	$("#nameUnit").val(basePar[String(name_select)].unit);
	//console.log(basePar[String(name_select)].unit);
	//$('.pardel').removeAttr("checked", false);
	$("#pardel").prop("checked", false);
	ParSelect=name_select;
	if (refresh){refresh = false; online = true;}
	/* $("#nastrgraf").css('background-color', Sheet.curcolorval);
	$('#nastrgraf').iziModal('open'); */
	$("#myModal7").modal();
	
	}
//Кнопка OK для окна параметра
function parOK() {
	/* PArmyDialog.hide(); */
	/* console.log(basePar);
	console.log(" gggiugFFFF"); */
	//Изменение значений атрубиутов окна Запись
	basePar[String(ParSelect)].min=Number($("#begedge").val());
	basePar[String(ParSelect)].max=Number($("#endedge").val());	
	basePar[String(ParSelect)].color=String($("#parcolor").val());
	basePar[String(ParSelect)].log=$("#parlog").is(':checked');
	basePar[String(ParSelect)].unit=String($("#nameUnit").val());
	//Проверить "Удалить параметр"
	if ($("#pardel").prop("checked")){
		//Текущая позиция
		var curcol = basePar[String(ParSelect)].poz.x;
		var curnumb = basePar[String(ParSelect)].poz.y;
		//парметры
		for (key in basePar){
			
			if (basePar[key].poz.x == curcol && basePar[key].poz.y > curnumb)
			{basePar[key].poz.y-=1;}
		}
		
		for (key in txtPar){
			
			if (txtPar[key].poz.x == curcol && txtPar[key].poz.y > curnumb)
			{txtPar[key].poz.y-=1;}
		}
		
		for (key in txtOknOPar){
			
			if (txtOknOPar[key].poz.x == curcol && txtOknOPar[key].poz.y > curnumb)
			{txtOknOPar[key].poz.y-=1;}
		}
		
		//Удалить параметр
		delete(basePar[String(ParSelect)]);
	}
	//Переименование ключей параметров
	/* var indx = 0;
	var nameidx = 'par'
	var fullnameidx = String(nameidx+indx);
	for (key in basePar){
		
		var curPar ={};
		
		curPar = JSON.stringify(Object.assign({}, basePar[key]));
		curPar = JSON.parse(curPar);
		basePar[String(fullnameidx)]=curPar;
		delete curPar;
		indx += 1;
		fullnameidx = String(nameidx+indx);
	}
	console.log(basePar); */
	/* $('#nastrgraf').iziModal('close'); */
	repaint();
	
}






//Настройки колонки
//Выбранный параметр
var selpar = "";
function colPan (name_select) {
	
	/*
	if ('WebkitAppearance' in document.documentElement.style && navigator.userAgent.indexOf('Chrome') === -1) {     
	$("html").addClass("browser-android");}
	
	var nua = navigator.userAgent;
	var is_android = ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1) && !(nua.indexOf('Chrome') > -1));
		if(is_android) {
        $('select.form-control').removeClass('form-control').css('width', '100%');}
	*/
	//Изменение значений атрубиутов окна Чтение
	
	//dojo.query("label[for=namePar]")[0].innerHTML = basePar[String(name_select)].txt;
	/*
	$("#begedge").attr("value", basePar[String(name_select)].min);
	$("#endedge").attr("value", basePar[String(name_select)].max);
	$("#parcolor").attr("value", basePar[String(name_select)].color);
	*/
	//$("#pardel1").prop("checked", false);
	//console.log(Columns[name_select].color);
	
	/* var optionData ={1: "QOS", 2: "ATM", 3: "Software", 4: "Other", 5: "IPv6", 6: "Management", 7: "LAN", 8: "LAN", 9: "QOS", 10: "LAN", 11: "WAN", 12: "Security", 13: "Security", 14: "LAN"};
	for(var i in optionData){
         var c = dojo.doc.createElement('option');
         c.innerHTML = optionData[i];
         c.value = optionData[i];
         console.log(optionData[i]);
         ss1.addOption(c);
     } */
	
	//Установка атрибутов цвет
	$("#colcolor1").val(Columns[name_select].colorhead);
	$("#colcolor2").val(Columns[name_select].colorbody);
	$("#gridnum").val(Columns[name_select].grid.num);
	//Очистка списка
	$('#colitems').empty();
	$('#segedge').empty();
	//Число параметров
	var numbcol = 0;
	for (var keey in basePar) {
		if (basePar[keey].poz.x == Number(name_select.toString().substr(3))){
			$('#colitems').append($('<option>',
			{
				value:  basePar[keey].par,
				text : basePar[keey].txt
				}));
				numbcol +=1;
				}
	}
	$('#segedge').attr('min',0);
	//$('#segedge').attr('max', numbcol);
	$('#segedge').attr('value', -1);
	$('#colitems').on('change', function() {
		//console.log($("#colitems").prop('selectedIndex'));
		//console.log($("#colitems").prop('selectedName'));
		selpar = $("#colitems").prop('value');
		//console.log(selpar);
		var cur=0;
		for (var keey in basePar) {
			
		if (basePar[keey].poz.x == Number(name_select.toString().substr(3)) && cur == Number($("#colitems").prop('selectedIndex'))){
			document.getElementById("segedge").value = basePar[keey].poz.y;
			}
			cur +=1;
		}
	});
	
	ParSelect=name_select;
	
	/* $("#nastrstolb").css('background-color', Sheet.curcolorval);
	$('#nastrstolb').iziModal('open'); */
	 
	 //bootstrap modal
	$("#myModal6").modal();
	
	}
	
	

//Кнопка OK для окна параметра
function colOK() {
	/* PArmyDialog1.hide(); */
	//Цвет областей
	Columns[String(ParSelect)].colorhead=String($("#colcolor1").val());
	Columns[String(ParSelect)].colorbody=String($("#colcolor2").val());
	//Шаг сетки
	Columns[String(ParSelect)].grid.num=Number($("#gridnum").val());
	/* if (($("#colitems").prop('selectedIndex'))!=-1){
		
		for (var keey in basePar) {
		if (basePar[keey].poz.x == Number(ParSelect.toString().substr(3))&& basePar[keey].par == selpar){
			basePar[keey].poz.y= Number(document.getElementById("segedge").value);
			
			}
		}
		
		
		
	} */

	//Изменение значений атрубиутов окна Запись
	/*
	basePar[String(ParSelect)].min=Number($("#begedge").attr("value"));
	basePar[String(ParSelect)].max=Number($("#endedge").attr("value"));	
	basePar[String(ParSelect)].color=String($("#parcolor").attr("value"));
	*/
	
	//Очистка документа
	repaint();
	/* $('#nastrstolb').iziModal('close'); */
	
}



//Кнопка Добавить график
function colPan1 (name_select) {
	ParSelect=name_select;
	var numbcol = 0;
	//Очистка списка
	$('#colitems2').empty();
	$('#colitems7').empty();
	$('#colitems7').append($('<option>',{value:  basePar, text : 'Графический параметр'}));
	$('#colitems7').append($('<option>',{value:  txtPar, text : 'Цифровой  параметр'}));
	$('#colitems7').append($('<option>',{value:  txtOknOPar, text : 'Название скважины'}));
	$("#colitems2").show();
	$("#colitems22").show();
	
	$( "#colitems7" ).change(function () {
	 if ($("#colitems7")[0].selectedIndex == 2){
		$("#colitems2").hide();
		$("#colitems22").hide();
	 } else { 
		$("#colitems2").show();
		$("#colitems22").show();
	 }
  });
	
	

	//добавление в список
	for (var keey in bigPar) {
		$('#colitems2').append($('<option>',
			{
				value:  keey,
				text : bigPar[keey].txt
				}));
		/* if (basePar[keey].poz.x == Number(name_select.toString().substr(3))){
			$('#colitems1').append($('<option>',
			{
				value:  basePar[keey].par,
				text : basePar[keey].txt
				}));
				numbcol +=1;
				console.log(basePar[keey].txt);
				} */
	}
	
	
	/* PArmyDialog2.show(); */
	/* $("#addgraf").css('background-color', Sheet.curcolorval);
	 $('#addgraf').iziModal('open'); */
	 
	 //bootstrap modal
	$("#myModal5").modal();
	
}

function colOK2 () {
	//console.log($("#colitems2").val(), ParSelect,);
	//создание объекта
	
	var curPar ={};
	var curXpoz = 1;
	//Поиск последнего параметра в столбце для добавление в конец
	for (var keey in basePar) {
		//console.log(basePar[keey].poz.y,Number(ParSelect.substr(3)));
		if (basePar[keey].poz.x== Number(ParSelect.substr(3))){
			//console.log(basePar[keey]);
			if (basePar[keey].poz.y>curXpoz){
			curXpoz = basePar[keey].poz.y;}
		}
	}
	for (var keey in txtPar) {
		//console.log(basePar[keey].poz.y,Number(ParSelect.substr(3)));
		if (txtPar[keey].poz.x== Number(ParSelect.substr(3))){
			//console.log(txtPar[keey]);
			if (txtPar[keey].poz.y>curXpoz){
			curXpoz = txtPar[keey].poz.y;}
		}
	}
	for (var keey in txtOknOPar) {
		//console.log(basePar[keey].poz.y,Number(ParSelect.substr(3)));
		if (txtOknOPar[keey].poz.x== Number(ParSelect.substr(3))){
			//console.log(txtOknOPar[keey]);
			if (txtOknOPar[keey].poz.y>curXpoz){
			curXpoz = txtOknOPar[keey].poz.y;}
		}
	}
	
	
	//Выбран графический параметр
	if ($("#colitems7")[0].selectedIndex == 0){
	//Копирование в объект
	curPar = JSON.stringify(Object.assign({}, bigPar[String($("#colitems2").val())]));
	curPar = JSON.parse(curPar);
	curPar.poz.y =  curXpoz + 1;
	curPar.poz.x = Number(ParSelect.substr(3));
	//console.log(curPar);
	var idr = makeid();
	//Создание новой записи параметра!!!
	//basePar[String('par'+(Object.keys(basePar).length+1))]=curPar;
	basePar[String('par'+idr)]=curPar;
	}
	
	
	//Выбран цифровой параметр
	if ($("#colitems7")[0].selectedIndex == 1){
	//Копирование в объект
	curPar = JSON.stringify(Object.assign({}, ShablontxtPar['par0']));
	curPar = JSON.parse(curPar);
	
	curPar.par = bigPar[String($("#colitems2").val())].par;
	curPar.txt = bigPar[String($("#colitems2").val())].txt;
	curPar.poz.y =  curXpoz + 1;
	curPar.poz.x = Number(ParSelect.substr(3));
	//console.log(curPar);
	var idr = makeid();
	//var idr = bigPar[String($("#colitems2").val())].par;
	//Создание новой записи параметра!!!
	//basePar[String('par'+(Object.keys(basePar).length+1))]=curPar;
	txtPar[String('par'+idr)]=curPar;
	/* console.log (txtPar); */
	}
	
	//Выбрана текстовая метка
	if ($("#colitems7")[0].selectedIndex == 2){
	//Копирование в объект
	curPar = JSON.stringify(Object.assign({}, ShablontxtOknOPar['par0']));
	curPar = JSON.parse(curPar);
	
	curPar.par = ShablontxtOknOPar['par0'].par;
	curPar.txt =ShablontxtOknOPar['par0'].txt;
	curPar.poz.y =  curXpoz + 1;
	curPar.poz.x = Number(ParSelect.substr(3));
	//console.log(curPar);
	var idr = makeid();
	//var idr = bigPar[String($("#colitems2").val())].par;
	//Создание новой записи параметра!!!
	//basePar[String('par'+(Object.keys(basePar).length+1))]=curPar;
	txtOknOPar[String('par'+idr)]=curPar;
	/* console.log (txtPar); */
	}
	
	
	//Object.keys(myObject).length;
	//basePar.par6666 = curPar ;
	//basePar.par6666 =basePar['suck'];
	//delete basePar['suck'];
	
	/* for (var keey in basePar) {
		//console.log(basePar[keey].poz.y,Number(ParSelect.substr(3)));
		if (basePar[keey].poz.x== Number(ParSelect.substr(3))){
			console.log(basePar[keey]);
		}
	} */
	//var obj = JSON.parse(JSON.stringify(basePar));
	//obj.push ({'suck'});
	
	
	//console.log(basePar.length);length
	//basePar['par666'].push(curPar);
	//basePar = JSON.stringify(obj);
	//basePar['suck']=curPar;
	//basePar.append(curPar); 
	//basePar=$.extend('par111',curPar);
	//console.log(basePar);
	/* PArmyDialog2.hide(); */
	/* $('#addgraf').iziModal('close'); */
	repaint();
}




//Кнопка календарь
function colPan3 () {
	refresh = false;
	
	/* $("#kalendar").css('background-color', Sheet.curcolorval);
    $('#kalendar').iziModal('open'); */
    
	//bootstrap modal
	$("#myModal2").modal();
	
}

function colOK3 () {
	/* PArmyDialog3.hide(); */
	//rem();
	
	refresh = false; //navigation.js
	var dataEnd = $('input[name="date1"]').val();
	start_time = Math.round(Number((new Date(dataEnd)).getTime())/1000)-14400;
	end_time = start_time + disp_time;
	//alert(start_time);
	//alert(end_time);
	//var disp_time = d110d[d110d.length-1]["Vrema"] - d110d[0]["Vrema"];
	
	read_random();
	/* $('#kalendar').iziModal('close'); */
		
}


//Кнопка лупа	
function colPan4 () {
	refresh = false;
	/* PArmyDialog4.show(); */
	/* $("#lupa").css('background-color', Sheet.curcolorval);
	$('#lupa').iziModal('open'); */
	//bootstrap modal
	$("#myModal3").modal();
	
}

function colOK4 () {
/* 	PArmyDialog4.hide(); */
	
	refresh = false; //navigation.js
	Sheet.Kzoom = Number($("#zooom1").val()) ;
	read_random();
	//$('#lupa').iziModal('close');
}


//Добавление столбца
function addcoll(){
	
	
	 for (key in Columns){	
	}
	var curCol ={};
	//Копирование в объект
	//curCol = JSON.stringify(Object.assign({}, Columns[String('col'+(Object.keys(Columns).length-1))]));
	curCol = JSON.stringify(Object.assign({}, Columns[key]));
	curCol = JSON.parse(curCol);
	/* console.log(Columns[String('col'+(Number(key.substr(3))))].size.w); */
	//Половиним преидущий столбец
	Columns[String('col'+(Number(key.substr(3))))].size.w = Number(Columns[String('col'+(Number(key.substr(3))))].size.w)/2;
	curCol.poz.x = Columns[String('col'+(Number(key.substr(3))))].poz.x + Columns[String('col'+(Number(key.substr(3))))].size.w;
	Columns[String('col'+(Number(key.substr(3))+1))] =curCol; 
	Columns[String('col'+(Number(key.substr(3))+1))].size.w = Columns[String('col'+(Number(key.substr(3))))].size.w;
	/* console.log(Columns); */
	repaint ();
}




//Кнопка настройки формы
function colPan5 () {
	refresh = false;
	
	
	/* PArmyDialog5.show(); */
	
	$("#width_line_p").val(Sheet.width_line_p);
	$("#width_gxf_line").val(Sheet.width_gxf_line);
	$("#syscolor").val(Sheet.syscolor);

	$('#font').empty();
	//добавление в список шрифтов
	for (var keey in fonts) {
		$('#font').append($('<option>',
			{
				value:  keey,
				text : fonts[keey].name
				}));
	}
	//console.log(Sheet.fnt);
	// ff ='#font option:contains("'+Sheet.fonst.toString()+'")';
	// console.log(ff);
	//#select option:contains("виноград")
	//Sheet.fnt= 2;
	//$('#font option[value={$Sheet.fnt}]').prop('selected', true);
	//$('#font option:contains("{$Sheet.fnt}")').prop('selected', true);
	//console.log($('#font option:selected').text());
	// $('#select option:contains("виноград")').prop('selected', true);
	//var option_val = $("#my_val").val(); //store the dynamic value of select option
	// $( "#font" ).find( 'option[value="' + Sheet.fnt + '"]' ).prop( "selected", true );
    $( '#font option:contains("' + Sheet.fnt + '")' ).prop( "selected", true );
	//$("#font > select > option[value=" + Sheet.fnt + "]").prop("selected",true);
	//console.log($('#font option:selected').text());

	$("#K_size_txt").val(Sheet.K_size_txt);
	$("#K_size_txt_mobile").val(Sheet.K_size_txt_mobile);
	$("#width_gxf_line").val(Sheet.width_gxf_line);
	$("#markheight").val(Sheet.markheight);
	$("#markcol").val(Sheet.markcol);
	$("#marktime").val(Columns['col0'].fill);
	$("#cmtsize").val(Sheet.cmtsize);
	$("#cmtcolor").val(Sheet.cmtcolor);
	$("#icosize").val(Sheet.icosize);
	$("#icosizem").val(Sheet.icosizem);
	$("#grcol1").val(Sheet.grcol1);
	$("#grcol2").val(Sheet.grcol2);
	$("#dasharray").val(Sheet.dasharray);
	$("#dashcol1").val(Sheet.dashcol1);
	$("#holcol").val(Sheet.holcol);
	$("#holhide").val(Sheet.holhide);
	$("#height_value").val(Sheet.height_value);
	$("#width_value").val(Sheet.width_value);
	$("#curcolorval").val(Sheet.curcolorval);
	$("#faderr").val(Sheet.faderr);
	$("#delcol").val(Sheet.delcol);
	$("#toolcol").val(Sheet.toolcol);
	$("#pluscol").val(Sheet.pluscol);
	$("#rawsvg0").val(Sheet.rawsvg0);
	$("#rawsvg1").val(Sheet.rawsvg1);
	$("#rawsvg2").val(Sheet.rawsvg2);
	$("#rawsvg3").val(Sheet.rawsvg3);
	$("#rawsvg4").val(Sheet.rawsvg4);
	$("#fonbut").prop('checked', Sheet.fonbut);
	$("#editscrn").prop('checked', Sheet.editscrn);
	//iziModal
	
	
	
	//$("#fonbut").prop('checked', Sheet.fonbut);
	
	
	//$("#modal").css('background-color', Sheet.curcolorval);
	//$('#modal').iziModal('open');
	
	//bootstrap modal
	$("#myModal1").modal();
	
	//$("#width_line_p").attr("value", 500);
}
//ок старый модал
function colOK5 () {
	/* PArmyDialog5.hide(); */
	
	
	
	
	Sheet.width_line_p=Number($("#width_line_p").val());
	Sheet.width_gxf_line=Number($("#width_gxf_line").val());
	Sheet.syscolor=String($("#syscolor").val());
	Sheet.fnt=String($('#font option:selected').text());
	Sheet.K_size_txt=Number($("#K_size_txt").val());
	Sheet.K_size_txt_mobile=Number($("#K_size_txt_mobile").val());
	Sheet.width_gxf_line=Number($("#width_gxf_line").val());
	Sheet.markheight=Number($("#markheight").val());
	Sheet.markcol=String($("#markcol").val());
	Columns['col0'].fill=String($("#marktime").val());
	Sheet.marktime=String($("#marktime").val());
	Sheet.cmtsize=Number($("#cmtsize").val());
	Sheet.cmtcolor=String($("#cmtcolor").val());
	Sheet.icosize=Number($("#icosize").val());
	Sheet.icosizem=Number($("#icosizem").val());
	Sheet.grcol1=String($("#grcol1").val());
	Sheet.grcol2=String($("#grcol2").val());
	Sheet.dasharray=String($("#dasharray").val());
	Sheet.dashcol1=String($("#dashcol1").val());
	Sheet.holcol=String($("#holcol").val());
	Sheet.holhide=Number($("#holhide").val());
	Sheet.height_value =Number($("#height_value").val());
	Sheet.width_value=Number($("#width_value").val());
	Sheet.curcolorval=String($("#curcolorval").val());
	Sheet.faderr=Number($("#faderr").val());
	Sheet.delcol=String($("#delcol").val());
	Sheet.toolcol=String($("#toolcol").val());
	Sheet.pluscol=String($("#pluscol").val());
	Sheet.rawsvg0=String($("#rawsvg0").val());
	Sheet.rawsvg1=String($("#rawsvg1").val());
	Sheet.rawsvg2=String($("#rawsvg2").val());
	Sheet.rawsvg3=String($("#rawsvg3").val());
	Sheet.rawsvg4=String($("#rawsvg4").val());
	//console.log($("#fonbut").is(':checked'));
	//editbut
	Sheet.editscrn=$("#editscrn").is(':checked');
	Sheet.fonbut=$("#fonbut").is(':checked');
	//console.log(Sheet.editscrn);
	//alert(editscrn);
	//$('#modal').iziModal('close');

	repaint();
	

}


//Выбранный параметр Текстовая метка
function colPan6 (name_select) {
	refresh = false;
	$("#pardel6").prop("checked", false);
	//Установка атрибутов цвет
	$("#parcolor6").val(txtOknOPar[name_select].color);
	ParSelect=name_select;
	/* PArmyDialog6.show(); */
	/* $("#nastrtxtlabel").css('background-color', Sheet.curcolorval);
	$('#nastrtxtlabel').iziModal('open'); */
	$("#myModal9").modal();
	
}

function colOK6 () {
	/* PArmyDialog6.hide(); */
	
	refresh = false; //navigation.js
	txtOknOPar[ParSelect].color=String($("#parcolor6").val());
	
	//Проверить "Удалить параметр"
	if ($("#pardel6").prop("checked")){
		//Текущая позиция
		var curcol = txtOknOPar[String(ParSelect)].poz.x;
		var curnumb = txtOknOPar[String(ParSelect)].poz.y;
		//парметры
		for (key in basePar){
			
			if (basePar[key].poz.x == curcol && basePar[key].poz.y > curnumb)
			{basePar[key].poz.y-=1;}
		}
		
		for (key in txtPar){
			
			if (txtPar[key].poz.x == curcol && txtPar[key].poz.y > curnumb)
			{txtPar[key].poz.y-=1;}
		}
		
		for (key in txtOknOPar){
			
			if (txtOknOPar[key].poz.x == curcol && txtOknOPar[key].poz.y > curnumb)
			{txtOknOPar[key].poz.y-=1;}
		}
		
		//Удалить параметр
		delete(txtOknOPar[String(ParSelect)]);
	}
	/* $('#nastrtxtlabel').iziModal('close'); */
	
	repaint();
}


//Выбранный параметр Текстовый параметр
function colPan7 (name_select) {
	refresh = false;
	$("#pardel7").prop("checked", false);
	//Установка атрибута название
	$("#namePar1").text(txtPar[name_select].txt);
	//Установка атрибутов цвет
	$("#parcolor7").val(txtPar[name_select].color);
	//Положение параметра
	$("#txt7").val(txtPar[name_select].step);
	ParSelect=name_select;
	/* PArmyDialog7.show(); */
	/* $("#nastrtxtpar").css('background-color', Sheet.curcolorval);
	$('#nastrtxtpar').iziModal('open'); */
	$("#myModal8").modal();
	
}

function colOK7 () {
	/* PArmyDialog7.hide(); */
	
	refresh = false; //navigation.js
	//Цвет
	txtPar[ParSelect].color=String($("#parcolor7").val());
	//Положение
	txtPar[ParSelect].step = String($("#txt7").val());
	//Проверить "Удалить параметр"
	if ($("#pardel7").prop("checked")){
		//Текущая позиция
		var curcol = txtPar[String(ParSelect)].poz.x;
		var curnumb = txtPar[String(ParSelect)].poz.y;
		//парметры
		for (key in basePar){
			
			if (basePar[key].poz.x == curcol && basePar[key].poz.y > curnumb)
			{basePar[key].poz.y-=1;}
		}
		
		for (key in txtPar){
			
			if (txtPar[key].poz.x == curcol && txtPar[key].poz.y > curnumb)
			{txtPar[key].poz.y-=1;}
		}
		
		for (key in txtOknOPar){
			
			if (txtOknOPar[key].poz.x == curcol && txtOknOPar[key].poz.y > curnumb)
			{txtOknOPar[key].poz.y-=1;}
		}
		
		//Удалить параметр
		delete(txtPar[String(ParSelect)]);
	}
	/* $('#nastrtxtpar').iziModal('close'); */
	/*console.log("тут");
	 $("#myModal8").modal(); */
	repaint();
}


//Список файлов
var filesss;
//Открыть файл
function colPan8 (name_select) {
	refresh = false;
	filesss = {};
	$('#colitems8').empty();
	
	readddir();
	//из json объекта в массив
	/* var arr = Object.values(filesss); */
	for (keey in filesss){
		$('#colitems8').append($('<option>',
				{
					value:  filesss[keey],
					text : filesss[keey]
					}));
	}
	//Длина объекта
	/* alert(filesss.length); */
	/* PArmyDialog8.show(); */
	/* $("#openfile").css('background-color', Sheet.curcolorval);
	$('#openfile').iziModal('open'); */
	$("#myModal8").modal();
	
}
//Загрузить форму файл при старте
function colOK8start(name_start){
	// console.log(Sheet.editscrn);
	var name = name_start;
	loadddata(name);
	onoffpan();
		
}

//Загрузить файл
function colOK8 () {
	/* PArmyDialog8.hide(); */
	refresh = false; //navigation.js
	if (($("#colitems9")[0].selectedIndex) > -1){
		loadddata(filesss[$("#colitems9")[0].selectedIndex]);
		
		//Сохранить в локальное хранилище
		colPan9save(wellName,skv,namecmt,filesss[$("#colitems9")[0].selectedIndex]);
		formname =filesss[$("#colitems9")[0].selectedIndex];
		repaint();
	} else {
		
	}
	onoffpan();
	/* $('#savefile').iziModal('close'); */

	
}

//Сохранить в локальное хранилище текущие настройки
function colPan9save(wellName,skv,namecmt,formname)
{
	localStorage.setItem('wellName', wellName);
	localStorage.setItem('skv', skv);
	localStorage.setItem('namecmt', namecmt);
	localStorage.setItem('formname', formname);
	
	
	
}


//Сохранить файл
function colPan9 (name_select) {
	refresh = false;
	filesss = {};
	$('#colitems9').empty();
	$("#colitems99").val(formname);
	//Чтение списка  файлов
	readddir();
	//из json объекта в массив
	/* var arr = Object.values(filesss); */
	for (keey in filesss){
		$('#colitems9').append($('<option>',
				{
					value:  filesss[keey],
					text : filesss[keey]
					}));
					
	}
	//`Выбор файла для перезаписи
	$( "#colitems9" ).change(function () {
	  $("#colitems99").val(filesss[$("#colitems9")[0].selectedIndex]);
	  });
	//Длина объекта
	/* alert(filesss.length); */
	/* PArmyDialog9.show(); */
	
	/* $("#savefile").css('background-color', Sheet.curcolorval);
	$('#savefile').iziModal('open'); */
	$("#myModal10").modal();
	
}

function colOK9 () {
	/* PArmyDialog9.hide(); */
	refresh = false; //navigation.js
	if (($("#colitems99").val()) != ""){
		savedata($("#colitems99").val());
		//Сохранить в локальное хранилище
		colPan9save(wellName,skv,namecmt,$("#colitems99").val());
		fileName=String($("#colitems99").val());

		repaint();
		/* loadddata(filesss[$("#colitems8")[0].selectedIndex]); */
	} else {
		
	}
	/* $('#savefile').iziModal('close'); */
	
}


//Выбор скважины
var wellSelectBase ='';
var wellSelectName = '';
function colPan10 (name_select) {
	refresh = false;
	
	$('#wellN').empty();
	//добавление в список
	for (var keey in wells) {
		$('#wellN').append($('<option>',
			{
				value: wells[keey].wellN,
				text : wells[keey].txt
				}));
	}
	//Восстановление выбора
	$('#wellN').val(wellName);
	
	// /* var selIdx=$("#wellN").prop('selectedIndex');
	// wellidx = selIdx; */
	// if (Object.keys(wells).length-1<wellidx){
	// 	wellidx=0;
	// }

	if ((Object.keys(wells).length>0)){
		for (var keey in wells) {
			// console.log(keey);
			// console.log(wells[keey].txt);
			// console.log(skv);
			// console.log(name_select);
			if(wells[keey].txt==skv){
				$("#wellNwork1").text(wells[keey].type);
				$("#wellNwork2").text(wells[keey].typeStn);
				$("#wellNwork3").text(wells[keey].nach);
				$("#wellNwork4").text(wells[keey].tel);
				$("#wellNwork5").text(wells[keey].email);}
	}}

	
	

	//Выбранная скважина
	$('#wellN').on('change', function() {
		wellSelectBase = $("#wellN").prop('value');
		wellSelectName = $("#wellN option:selected").text();
		
		/* wellidx = selIdx; */
		for (var keey in wells) {
		if (wells[keey].txt==wellSelectName){
			$("#wellNwork1").text(wells[keey].type);
			$("#wellNwork2").text(wells[keey].typeStn);
			$("#wellNwork3").text(wells[keey].nach);
			$("#wellNwork4").text(wells[keey].tel);
			$("#wellNwork5").text(wells[keey].email);
		}}
		/*  $('[name=wellN] option').filter(function() { 
        return ($(this).text() == 'Blue');}).prop('selected', true); */
		//bootstrap modal
	
		
	});
	
	/* $("#wells").css('background-color', Sheet.curcolorval);
	$("#wells").css('font-size', 40);
	$('#wells').iziModal('open'); */
	$("#myModal4").modal();
}

function colOK10 () {
	refresh = false; //pong.js
	//$('#wells').iziModal('close');
	skv =wellSelectName;
	wellName =wellSelectBase;
	namecmt = wellName + "kr";
	//Сохранить в локальное хранилище
	colPan9save(wellName,skv,namecmt,formname);
	refresh = true;
	read_next();
	/* repaint(); */
	/* namecmt=wellSelectBase + "kr"; */
	
}


//включение и отключение верхней панели и панели настроек
function onoffpan(){
	// console.log(Sheet.editscrn);
	if (Sheet.editscrn){
		$("#bigpan").attr("style", "display:yes");
		// Sheet.icosize=String($("#icosize").val());
		// Sheet.icosizem=String($("#icosizem").val());
		$('#drawing').height($(window).height()-$('#bigpan').height())
	}else {
		$("#bigpan").attr("style", "display:none");
		// Sheet.icosize=0;
		// Sheet.icosizem=0;
		$('#drawing').height($(window).height());
		}
	
		
}

//редактирование экрана вкл выкл
function colOK11 () {
	//refresh = false;
	if (Sheet.editscrn){
		Sheet.editscrn= false;}
	else{Sheet.editscrn=true;}
	onoffpan();
	
	// console.log(Sheet.editscrn,Sheet.icosize);
	
	//refresh = true;
	repaint();
	
}

//рандомное имя
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


//Вертикальное расположение формы
function vertical() {
	//Очистка документа
	try {
		$("#drawing").find("*").not("rect, g").remove();

			}
	catch(e){ }
	if (Sheet.vertical){
		Sheet.vertical = false;
		K_size_txt=95;}
	else{Sheet.vertical = true;
		K_size_txt=73;}
	init();

}



//Выбор скважины Bootstrap navi
$(document).ready(function () {
	//Чтение всех пользователей
	readusers('read','users_rights', '','');
	//Чтение всех камер
	readcams('read','cams', '','');
	//Чтение списка скважин
	readskvstart('read','skvs', '','');
	
	//открыть панель
	adm();
			
		
			
			
			
			
			//ВИДЕО
			//autoPlayYouTubeModal();
 });



 //Стоп видео поток
 function stopCam (event) {
	
	//event.preventDefault(); // To prevent following the link (optional)
	$.ajax({
		type: 'POST',
		url: 'https://hydrofalll.ddns.net:5443/LiveApp/rest/broadcasts/stop',
		crossDomain: true,
		data: '{"streamId":"211275258683608619992096"}',
		dataType: 'jsonp',
		success: function(responseData, textStatus, jqXHR) {
			var value = responseData.someKey;
		},
		error: function (responseData, textStatus, errorThrown) {
			alert('POST failed.');
		}
	});
	// $.post('https://hydrofalll.ddns.net:5443/v2/broadcasts/983687349095562644239572/stop', {text: 'Текст'}, function(data){
	// alert(data);});
};

//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
//  function autoPlayYouTubeModal() {
//       var trigger = $("body").find('[data-toggle="modal"]');
//       trigger.click(function () {
//           var theModal = $(this).data("target"),
//               videoSRC = $(this).attr("data-theVideo"),
//               videoSRCauto = videoSRC + "?autoplay=1";
// 		  $(theModal + ' iframe').attr('src', videoSRCauto);
// 		  $('#modal').modal('handleUpdate')
//           $(theModal + ' button.close').click(function () {
// 			  $(theModal + ' iframe').attr('src', videoSRC);
			 
			  
//           });
//       });
//   }


//<iframe width="560" height="315" src="//hydrofalll.ddns.net:5080/WebRTCApp/play.html?name=983687349095562644239572" frameborder="0" allowfullscreen></iframe>
//
var selectkeey='';
//Изменить/ удалить  диалог по скважине
function colPan13 () {
	$("#myModal13").modal();
	for (var keey in wells) {
		if (wells[keey].wellN == String($("#colitems132").val())) {
			selectkeey=keey;
		}}
	
	//console.log('fdsf');
}
//Изменить запись
function colOK13 () {
//Изменить выбранную из скважин
for (var keey in wells) {
	if ( keey== selectkeey) {
		wells[keey].wellN =  String($("#colitems132").val());
		wells[keey].txt = String($("#colitems131").val());
		wells[keey].type = String($("#colitems133").val());
		wells[keey].typeStn = String($("#colitems134").val());
		wells[keey].nach = String($("#colitems135").val());
		wells[keey].tel = String($("#colitems136").val());
		wells[keey].email = String($("#colitems137").val());
		//Обновить скважину в mysql в таблицу skvs
		update('update','skvs',  keey.slice(3 , ),JSON.stringify(Object.assign({}, wells[keey])));
	}
}

// console.log(wells);
$('#skvs tbody').empty();
for (var keey in wells) {
	$('#skvs tbody').append('<tr><td>'+wells[keey].txt+'</td><td>'+wells[keey].wellN+'</td><td>'+wells[keey].type+'</td><td>'+wells[keey].typeStn+'</td><td>'+wells[keey].nach+'</td><td>'+wells[keey].tel+'</td><td>'+wells[keey].email+ '</td></tr>');
}
	
}

//Удалить запись
function colOK131 () {
	
	//Удалить выбранную из скважин
	for (var keey in wells) {
		//console.log( keey);
		if (wells[keey].wellN == String($("#colitems132").val())) {
			deleteskvs('delete','skvs', keey.slice(3 , ));
			//console.log( keey, keey.slice(3 , ));
			delete (wells[keey]);
		}
	}
	tmpwells={};
	//Чтение всех скважин
	readskvs('read','skvs', '','');

	///////////
	// //Пересчитать индексы
	//  var indx = 0;
	// var nameidx = 'par'
	// var fullnameidx = String(nameidx+indx);
	// for (key in wells){
		
	// 	var curPar ={};
		
	// 	curPar = JSON.stringify(Object.assign({}, wells[key]));
	// 	curPar = JSON.parse(curPar);
	// 	tmpwells[String(fullnameidx)]=curPar;
	// 	delete curPar;
	// 	indx += 1;
	// 	fullnameidx = String(nameidx+indx);
	// }
	// //{}освобождение
	// wells = null;
	// wells= tmpwells;


	//console.log(wells);
	//Очистка и добавка
	$('#skvs tbody').empty();
	for (var keey in wells) {
		$('#skvs tbody').append('<tr><td>'+wells[keey].txt+'</td><td>'+wells[keey].wellN+'</td><td>'+wells[keey].type+'</td><td>'+wells[keey].typeStn+'</td><td>'+wells[keey].nach+'</td><td>'+wells[keey].tel+'</td><td>'+wells[keey].email+ '</td></tr>');
	}
	//Клик скважины
	// $("#skvs tbody").on("click", "tr", function(event){
	// 	var tableData = $(this).children("td").map(function() {
	// 		return $(this).text();
	// 	}).get();
	// 	$("#colitems131").val($.trim(tableData[0]));
	// 	$("#colitems132").val($.trim(tableData[1]));
	// 	$("#colitems133").val($.trim(tableData[2]));
	// 	$("#colitems134").val($.trim(tableData[3]));
	// 	$("#colitems135").val($.trim(tableData[4]));
	// 	$("#colitems136").val($.trim(tableData[5]));
	// 	$("#colitems137").val($.trim(tableData[6]));
	// 	colPan13();
		
	// });
	
	//Добавить скважину
	// $('#addskv').click(function() {
	// 	colPan12 ();
	// });
	
}

//Добавление  диалог записи по скважине
function colPan12 () {
	$("#myModal12").modal();
	
	//console.log('fdsf');
}

//Добавление  записи по скважине
function colOK12 () {
var curPar ={};
curPar = JSON.stringify(Object.assign({}, Shablontxtwell['par0']));
curPar = JSON.parse(curPar);
	
curPar.wellN = String($("#colitems122").val());
curPar.txt = String($("#colitems121").val());
curPar.type = String($("#colitems123").val());
curPar.typeStn = String($("#colitems124").val());
curPar.nach = String($("#colitems125").val());
curPar.tel = String($("#colitems126").val());
curPar.email = String($("#colitems127").val());





//Добавление в таблицу отображения
$('#skvs tr:last').after('<tr><td>'+String($("#colitems121").val())+'</td>'+
'<td>'+String($("#colitems122").val())+'</td>'+
'<td>'+String($("#colitems123").val())+'</td>'+
'<td>'+String($("#colitems124").val())+'</td>'+
'<td>'+String($("#colitems125").val())+'</td>'+
'<td>'+String($("#colitems126").val())+'</td>'+
'<td>'+String($("#colitems127").val())+'</td>'+
'</tr>'
);
// //Запись всех текущих скважин
// for (var keey in wells) {
// 	writeskvs('create','skvs', String(keey), JSON.stringify(wells[keey]));
// 	// console.log(keey);
// 	// console.log(wells[keey]);
// }

//Создание новой записи параметра!!!
wells[String('par'+String((Object.keys(wells).length)))]=curPar;

//Добавление скважины в mysql в таблицу skvs
writeskvs('create','skvs', String('par'+String((Object.keys(wells).length-1))),JSON.stringify(Object.assign({}, curPar)));

//Чтение всех скважин
readskvs('read','skvs', '','');
}

//список архивов для записи интервалов
var files_dirka;
//Админка
function adm (){
	if (onofadm){
	
	online = false;
	refresh = false;
	$('#drawing').empty();
	$('#drawing').hide();
	
	
	
	$('#tabs').show();
	onofadm = false;
	$('#tabs-1').empty();
	//e.preventDefault();
	// $('#tabs-1').html(' <p>'+row_str+'</p>');
	// $('#tabs-1').append(' <p>'+row_str+'</p>');
	
	//Скважины
	$('#tabs-2').empty();
	$('#tabs-2').append('<button type="button" name="addskv" id="addskv" class="btn btn-success mb-1" data-dismiss="modal" >+</button>');
	$('#tabs-2').append('<div class="table-responsive table-hover" style="cursor:pointer;"><table id="skvs" class="table table-bordered table-striped "><thead><tr><th>Скважина</th><th>База</th><th>Тип работ</th><th>Тип станции</th><th>Начальник станции</th><th>Телефон</th><th>Эл.почта</th></tr></thead><tbody></tbody></table></div>');
	//Пользователи table-sm
	$('#tabs-1').empty();
	$('#tabs-1').append('<button type="button" name="adduserright" id="adduserright" class="btn btn-success mb-1" data-dismiss="modal" >+</button>');
	$('#tabs-1').append('<div class="table-responsive table-hover" style="cursor:pointer;"><table id="userright" class="table table-bordered table-striped "><thead><tr><th>Фамилия Имя Отчество</th>'

	+'<th>Логин</th>'
	+'<th>Пароль</th>'
	+'<th>Должность</th>'
	+'<th>Телефон</th>'
	+'<th>Эл.почта</th>'
	+'<th>Путь к формам</th>'
	+'<th>Временные</th>'
	+'<th>Видео</th>'
	+'<th>Каротажи</th>'
	+'<th>Комментарии</th>'
	+'<th>Геология</th>'
	+'<th>Глубинные</th>'
	+'<th>Сводка</th>'
	+'<th>Чат</th>'
	+'</tr></thead><tbody></tbody></table></div>');
	//скважины
	for (var keey in wells) {
		$('#skvs tbody').append('<tr><td>'+wells[keey].txt+'</td><td>'+wells[keey].wellN+'</td><td>'+wells[keey].type+'</td><td>'+wells[keey].typeStn+'</td><td>'+wells[keey].nach+'</td><td>'+wells[keey].tel+'</td><td>'+wells[keey].email+ '</td></tr>');
		//$('#tabs-2').append('</div>');	
	}

	//Камеры
	$('#tabs-3').empty();
	$('#tabs-3').append('<button type="button" name="addcam" id="addcam" class="btn btn-success mb-1" data-dismiss="modal">+</button>');
	$('#tabs-3').append('<div class="table-responsive table-hover" style="cursor:pointer;"><table id="cams" class="table table-bordered table-striped "><thead><tr>'
	+'<th>Название</th>'
	+'<th>Скважина</th>'
	+'<th>Строка подключения</th>'
	+'</tr></thead><tbody></tbody></table></div>');
	
	//камеры
	for (var keey in cams) {
		$('#cams tbody').append('<tr><td>'
		+cams[keey].name+'</td><td>'
		+cams[keey].txt+'</td><td>'
		+cams[keey].rtsp+'</td>'
		+'</tr>');	
	}
	
	//пользватели
	for (var keey in users_rights) {
		$('#userright tbody').append('<tr>'
		+'<td>'+users_rights[keey].name +'</td>'
		+'<td>'+users_rights[keey].login +'</td>'
		+'<td>'+users_rights[keey].pass +'</td>'
		+'<td>'+users_rights[keey].dolgnost +'</td>'
		+'<td>'+users_rights[keey].tel +'</td>'
		+'<td>'+users_rights[keey].email +'</td>'
		+'<td>'+users_rights[keey].forms +'</td>'

		+'<td>'+users_rights[keey].time +'</td>'
		+'<td>'+users_rights[keey].video +'</td>'
		+'<td>'+users_rights[keey].karotag +'</td>'
		+'<td>'+users_rights[keey].comments +'</td>'
		+'<td>'+users_rights[keey].geolog +'</td>'
		+'<td>'+users_rights[keey].depth +'</td>'
		+'<td>'+users_rights[keey].svodka +'</td>'
		+'<td>'+users_rights[keey].chat +'</td>'
	
		+'</tr>');
	}

	//Добавить скважину
	$('#addskv').click(function() {
		colPan12 ();		
	});

	//Клик скважины
	$("#skvs tbody").on("click", "tr", function(event){
		var tableData = $(this).children("td").map(function() {
			return $(this).text();
		}).get();
		$("#colitems131").val($.trim(tableData[0]));
		$("#colitems132").val($.trim(tableData[1]));
		$("#colitems133").val($.trim(tableData[2]));
		$("#colitems134").val($.trim(tableData[3]));
		$("#colitems135").val($.trim(tableData[4]));
		$("#colitems136").val($.trim(tableData[5]));
		$("#colitems137").val($.trim(tableData[6]));
		colPan13();
		
		//alert("Выбрана" + $.trim(tableData[0]) + " , " + $.trim(tableData[1]) + " , " + $.trim(tableData[2]));
	});

	//Добавить камеру
	$('#addcam').click(function() {
		colPan16 ();
	});

	//Клик по камере
	$("#cams tbody").on("click", "tr", function(event){
		var tableData = $(this).children("td").map(function() {
			return $(this).text();
		}).get();
		$("#colitems191").val($.trim(tableData[0]));
		$("#colitems192").val($.trim(tableData[1]));
		$("#colitems193").val($.trim(tableData[2]));
		// alert("Выбрана" + $.trim(tableData[0]) + " , " + $.trim(tableData[1]) + " , " + $.trim(tableData[2]), $(this).closest("tr").index());

		var colIndex = $(this).parent().children().index($(this));
		var rowIndex = $(this).parent().parent().children().index($(this).parent());
		// alert('Row: ' + rowIndex + ', Column: ' + colIndex);


		colPan17();
		
		
	});

	

	//Добавить пользователя
	$('#adduserright').click(function() {
		colPan14 ();		
	});
	
	//Клик пользователя
	$("#userright tbody").on("click", "tr", function(event){
		var tableData = $(this).children("td").map(function() {
			return $(this).text();
		}).get();
		$("#colitems161").val($.trim(tableData[0]));
		$("#colitems162").val($.trim(tableData[1]));
		$("#colitems163").val($.trim(tableData[2]));
		$("#colitems164").val($.trim(tableData[3]));
		$("#colitems165").val($.trim(tableData[4]));
		$("#colitems166").val($.trim(tableData[5]));
		$("#colitems167").val($.trim(tableData[6]));
		$("#colitems168").val($.trim(tableData[7]));
		$("#colitems169").val($.trim(tableData[8]));
		$("#colitems170").val($.trim(tableData[9]));
		$("#colitems171").val($.trim(tableData[10]));
		$("#colitems172").val($.trim(tableData[11]));
		$("#colitems173").val($.trim(tableData[12]));
		$("#colitems174").val($.trim(tableData[13]));
		$("#colitems175").val($.trim(tableData[14]));
		colPan15();
		
		//alert("Выбрана" + $.trim(tableData[0]) + " , " + $.trim(tableData[1]) + " , " + $.trim(tableData[2]));
	});


	//Загрузка интервалов
	// ==========================
	if (good_connect==false){
		connect_websocket('pfagg.ru','3333','/ws');
		sleep(2000);

	}

	var now = new Date();

	var day = ("0" + now.getDate()).slice(-2);
	var month = ("0" + (now.getMonth() + 1)).slice(-2);

	var today = now.getFullYear()+"-"+(month)+"-"+(day) ;

	

	$('#tabs-4').empty();
	$('#tabs-4').append('<form action="./" method="post" id="uploadform" onsubmit="return false;" style="display:block;">'
	+'<div class="form-row ">'
    +'<div class="col-md-3 mb-3 p-3 border ">'
	+'<label for="files_dirka">Список архивов на сервере:</label>'
	+'<select class="form-control" id="files_dirka" size="5"></select><br></select>' 
	+'<div class="col text-center">'
	+'<input type="file" class="custom-file-input p-4" id="files"  lang="ru"></input>'
	+'<label class="custom-file-label" for="customFileLang">Архив *.zip( *.dep + *.lst)</label>'
	+'<div class="progress">'
	+'<div id="uploadprogress" class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style="width:0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>'
	+'<br></div>'
	+'<input class="btn btn-success" type="submit" value="Загрузить">'
	+'<button type="button"  name="deletedirka"  id="deletedirka"class="btn btn-danger">Удалить</button>'
	+'</div></form>'
	+'</div></div></div>'
	+'<div class="form-row ">'
    +'<div class="col-md-3 mb-3 p-3 border ">'
	+'<div class="form-group ">'
	+'<label for="hcolcolor" class="control-label">Текущий архив:</label>'
	+'<input type="text" class="form-control input-lg" id="curdirka_files"  value="" readonly/><br>'
	+'<label for="hcolcolor" class="control-label">Скважина:</label>'
	+'<select class="form-control" id="cur_well_dirka" ></select><br>' 
	+'<label for="hcolcolor" class="control-label">Начало:</label>'
    +'<input type="date" class="form-control  " id="startdirka" name="startdirka" ><input type="time"  class="form-control" id="startdirka2" name="startdirka2" class="form-control  " value="01:00:00" step="1" min="00:00" max="24:00" required >'
    +'<label for="hcolcolor"class="control-label">Конец:</label>'
    +'<input type="date" class="form-control  " id="stopddirka" name="stopddirka" ><input type="time" class="form-control " id="stopddirka2" name="stopddirka2" class="form-control  " value="01:00:01"  step="1" min="00:00" max="24:00" required >'
	// +'<br><div class="form-check">'
    // +'<input type="checkbox" class="form-check-input" id="rewritedirka">'
    // +'<label class="form-check-label" for="exampleCheck1">Переписать интервал</label>'
  	// +'</div>'
	+'<br><div class="col text-center">'
	// +'<input class="btn btn-success" type="submit" value="Добавить"><span>'
	+'<button type="button"  name="addinterval"  id="addinterval" class="btn btn-success">Добавить интервал</button>'
	+'<button type="button"  name="deleteinterval"  id="deleteinterval" class="btn btn-danger">Удалить интервал</button><br>'
	+'<button type="button" class="btn btn-info" value="Input Button">  <a href="../../../mon/poz/readrandom/gsdtcis.7z" name="convDown" id="convDown" style="color:inherit" download> Скачать конвертер станции "Разрез" </a> </button>'
	+'</div></div>'
	+'</div></div>'
	
	);

	$('#startdirka').val(today);
	$('#stopddirka').val(today);
	$('#files').on('change', function(event) {
		//get the file name
	document.querySelector('convDown').addEventListener("click", function(event){
		console.log('dsdsd');
		event.preventDefault();
		return false;
	}, false);	
		// cur_file_dirka2= $(this).val();
		// console.log(cur_file_dirka2);
		//replace the "Choose a file" label
		fileName = $(this).val().replace('C:\\fakepath\\', " ");
		// console.log(fileName);
		// cur_file_dirka2=fileName;
		$(this).next('.custom-file-label').html(fileName);
	});

	$('#files_dirka').on('change', function(event) {
		 var optionSelected = $("option:selected", this);
		 var valueSelected = this.text;
		 cur_file_dirka2=optionSelected.text();
		 $('#curdirka_files').val(cur_file_dirka2);
	});


	$('#deletedirka').on('click', function(event) {
		event.preventDefault();
		if(cur_file_dirka2!='' || typeof cur_file_dirka2!='undefined' ){
			// console.log(cur_file_dirka2);
			deletearch('1',cur_file_dirka2,'3','4');
			read_dirka_spisok();
			$('#curdirka_files').val('');
			cur_file_dirka2='';
		}
	  });

	//Закачка файлов объект
	ShowForm();
	//Чтение списка архивов
	read_dirka_spisok();
	
	$("#cur_well_dirka").empty();
	//Список скважин
	for (var keey in wells) {
		$("#cur_well_dirka").append('<option value="'+wells[keey].wellN+'">'+wells[keey].txt+'</option>');
		// $('#skvs tbody').append('<tr><td>'+wells[keey].txt+'</td><td>'+wells[keey].wellN+'</td><td>'+wells[keey].type+'</td><td>'+wells[keey].typeStn+'</td><td>'+wells[keey].nach+'</td><td>'+wells[keey].tel+'</td><td>'+wells[keey].email+ '</td></tr>');
		//$('#tabs-2').append('</div>');	
	}
	//выбор скважины
	$('#cur_well_dirka').on('change', function(event) {
		var optionSelected = $("option:selected", this);
		var valueSelected = this.text;
		// cur_well_dirka=optionSelected.text();
		cur_well_dirka=optionSelected.val();
		// console.log(optionSelected.val());
		// $('#curdirka_files').text(cur_file_dirka2);
   });


   //Добавление данных в бд
   $('#addinterval').on('click', function(event) {
	event.preventDefault();

	if(cur_file_dirka2!=''){
		//
		

		if (good_connect){

			let start_int=$('#startdirka2').val()+'-'+$('#startdirka').val();
			let stop_int=$('#stopddirka2').val()+'-'+$('#stopddirka').val();
			messa='add'+' '+cur_file_dirka2+' '+cur_well_dirka+' '+start_int+' '+stop_int
			log("Sending Message: "+messa);
			ws.send(messa);
		}

	}
});

//Удаление данных в бд
$('#deleteinterval').on('click', function(event) {
	event.preventDefault();

	if(cur_file_dirka2==''){
		cur_file_dirka2='agr';
	
	}
		

	if (good_connect){

		let start_int=$('#startdirka2').val()+'-'+$('#startdirka').val();
		let stop_int=$('#stopddirka2').val()+'-'+$('#stopddirka').val();
		messa='del'+' '+cur_file_dirka2+' '+cur_well_dirka+' '+start_int+' '+stop_int
		log("Sending Message: "+messa);
		ws.send(messa);
	}
});

		// console.log(cur_well_dirka);

		//php ogon!!!:(
		// add_interval_to_db('add', cur_file_dirka2, cur_well_dirka, start_int, stop_int);

		
	
		// Send websocket message function
		// $("#send").click(function(evt) {
			
		// });
	 

		//PHPHPHPHPHPH
		// console.log($('#startdirka').val());
		// console.log($('#startdirka2').val());
		// console.log($('#stopddirka').val());
		// console.log($('#stopddirka2').val());
		// let start_int=$('#startdirka2').val()+'-'+$('#startdirka').val();
		// let stop_int=$('#stopddirka2').val()+'-'+$('#stopddirka').val();
		// console.log(cur_well_dirka);

		//php ogon!!!:(
		// add_interval_to_db('add', cur_file_dirka2, cur_well_dirka, start_int, stop_int);

	// } else {
	// 	alert('Выберите архив!')
	// }
  



	
	} else {
		
		
		
		$('#tabs').hide();
		
		
		online = true;
		refresh = true;
		onofadm = true;
		//init();

	}

}


function sleep(ms) {
	ms += new Date().getTime();
	while (new Date() < ms){}
	} 

var good_connect =false;
var ws;
function connect_websocket(host,port,uri) {

		 // log function
		 log = function(data){
			// $("div#terminal").prepend("</br>" +data);
			// console.log(data);
		  };

			// $("div#message_details").hide()
	 
		
	
		// $("#open").click(function(evt) {
		// evt.preventDefault();
	
		var host = host;
		var port = port;
		var uri = uri;

		// create websocket instance
		ws = new WebSocket("wss://" + host + ":" + port + uri);
		
		// Handle incoming websocket message callback
		ws.onmessage = function(evt) {
		// log("" + evt.data)
		alert("" + evt.data);
		};

		// Close Websocket callback
		ws.onclose = function(evt) {
		// log("***Connection Closed***");
		alert("Потеря соедиения!");
		// $("#host").css("background", "#ff0000"); 
		// $("#port").css("background", "#ff0000"); 
		// $("#uri").css("background",  "#ff0000");
		// $("div#message_details").empty();	
			};

		// Open Websocket callback
		ws.onopen = function(evt) { 
		// $("#host").css("background", "#00ff00"); 
		// $("#port").css("background", "#00ff00"); 
		// $("#uri").css("background", "#00ff00");
		// $("div#message_details").show();
		good_connect=true;
		// log("***Connection Opened***");
		};
}




var cur_file_dirka='';
var cur_file_dirka2='';
var cur_well_dirka='';
//Чтение списка архивов
function read_dirka_spisok() {
	read_dirka();
	$("#files_dirka").empty();
	var curdirdirka='../../../mon/poz/readrandom/';
	for (var keey in files_dirka) {
		let curitem=files_dirka[keey].replace(curdirdirka,'');
		if (curitem.toString().indexOf('.zip')!=-1){
		$("#files_dirka").append('<option value="'+keey+'">'+curitem+'</option>');
		}
	} 
	
}	




//Загрузка файла частями
function ShowForm() {

    // Создаем объект - FileUploader. Задаем опции.
    var uploader=new FileUploader( {

        // Сообщение об ошибке
        message_error: 'Ошибка при загрузке файла',

        // ID элемента формы
        form: 'uploadform',

        // ID элемента <input type=file
        formfiles: 'files',

        // Идентификатор загрузки. В нашему случе хэш.
        uploadid: '<?php print $hash;?>',

        // URL скрипта загрузки (описан выше).
        uploadscript: 'js/upload.php',

        // URL, куда перенаправить пользователя при успешной загрузке
        // redirect_success: '../',

        // URL, куда отправить пользователя при ошибке загрузки
        redirect_abort: './abort.php?hash=<?php print $hash;?>',

        // Размер порции. 2 Мб
        portion: 1024*1024*2
        });

    // Если не удалось создать объект, то перенаправим пользователя на простую форму загруки.
    if (!uploader) document.location='/upload/simple.php?hash=<?php print $hash;?>';
    else {
        // Если браузер не поддерживается, то перенаправим пользователя на простую форму загруки.
        if (!uploader.CheckBrowser()) document.location='/upload/simple.php?hash=<?php print $hash;?>';
        else {
            // Если все нормально, то отобразим форму (по умолчанию она скрыта)
            var e=document.getElementById('uploadform');
            if (e) e.style.display='block';

            }
        }
    }












var selectuser='';
//Изменить/ удалить  диалог по пользователю
function colPan15 () {
	$("#myModal15").modal();
	for (var keey in users_rights) {
		if (users_rights[keey].login == String($("#colitems162").val())) {
			selectuser=keey;
			
		}}
}

//Изменить запись
function colOK15 () {
	//Изменить выбранного пользователя
	for (var keey in users_rights) {
		
		if ( keey== selectuser) {
			users_rights[keey].name = String($("#colitems161").val());
			users_rights[keey].login = String($("#colitems162").val());
			users_rights[keey].pass = String($("#colitems163").val());
			users_rights[keey].dolgnost = String($("#colitems164").val());
			users_rights[keey].tel = String($("#colitems165").val());
			users_rights[keey].email = String($("#colitems166").val());
			users_rights[keey].forms = String($("#colitems167").val());
			users_rights[keey].time = String($("#colitems168").val());
			users_rights[keey].video = String($("#colitems169").val());
			users_rights[keey].karotag = String($("#colitems170").val());
			users_rights[keey].comments = String($("#colitems171").val());
			users_rights[keey].geolog = String($("#colitems172").val());
			users_rights[keey].depth = String($("#colitems173").val());
			users_rights[keey].svodka = String($("#colitems174").val());
			users_rights[keey].chat = String($("#colitems175").val());
			//Обновить пользователя в mysql в таблицу users_rights
			updateuser('update','users_rights',  String(users_rights[keey].login),  String(users_rights[keey].pass), keey.slice(3 , ),JSON.stringify(Object.assign({}, users_rights[keey])));
		}
	}

	$('#userright tbody').empty();
	for (var keey in users_rights) {
		$('#userright tbody').append('<tr><td>'+
		users_rights[keey].name+'</td><td>'+
		users_rights[keey].login+'</td><td>'+
		users_rights[keey].pass+'</td><td>'+
		users_rights[keey].dolgnost+'</td><td>'+
		users_rights[keey].tel+'</td><td>'+
		users_rights[keey].email+'</td><td>'+
		users_rights[keey].forms+'</td><td>'+
		users_rights[keey].time+'</td><td>'+
		users_rights[keey].video+'</td><td>'+
		users_rights[keey].karotag+'</td><td>'+
		users_rights[keey].comments+'</td><td>'+
		users_rights[keey].geolog+'</td><td>'+
		users_rights[keey].depth+'</td><td>'+
		users_rights[keey].svodka+'</td><td>'+
		users_rights[keey].chat+'</td><td>'+
		'</td></tr>');
	}
		
	}
	
	//Удалить запись
	function colOK151 () {
		
		//Удалить выбранную из скважин
		for (var keey in users_rights) {
			// console.log( keey);
			// console.log( String($("#colitems162").val()));
			if (users_rights[keey].login == String($("#colitems162").val())) {
				deleteuser('delete','users_rights', keey.slice(3 , ));
				//console.log( keey, keey.slice(3 , ));
				delete (users_rights[keey]);
			}
		}
		tmpuser={};
		//Чтение всех пользователей
		readusers('read','users_rights', '','');
	

		//Очистка и добавка
		$('#userright tbody').empty();
		for (var keey in users_rights) {
			$('#userright tbody').append('<tr><td>'+
			users_rights[keey].name+'</td><td>'+
			users_rights[keey].login+'</td><td>'+
			users_rights[keey].pass+'</td><td>'+
			users_rights[keey].dolgnost+'</td><td>'+
			users_rights[keey].tel+'</td><td>'+
			users_rights[keey].email+'</td><td>'+
			users_rights[keey].forms+'</td><td>'+
			users_rights[keey].time+'</td><td>'+
			users_rights[keey].video+'</td><td>'+
			users_rights[keey].karotag+'</td><td>'+
			users_rights[keey].comments+'</td><td>'+
			users_rights[keey].geolog+'</td><td>'+
			users_rights[keey].depth+'</td><td>'+
			users_rights[keey].svodka+'</td><td>'+
			users_rights[keey].chat+'</td><td>'+
			'</td></tr>');
		}
		
	}
	
//Добавление  диалог пользователя
function colPan14 () {
	$("#myModal14").modal();
}


//Добавление  записи по пользователям
function colOK14 () {
	var curPar ={};
	curPar = JSON.stringify(Object.assign({}, Shablontxtuserright['par0']));
	curPar = JSON.parse(curPar);
		
	curPar.name = String($("#colitems141").val());
	curPar.login = String($("#colitems142").val());
	curPar.pass = String($("#colitems143").val());
	curPar.dolgnost = String($("#colitems144").val());
	curPar.tel = String($("#colitems145").val());
	curPar.email = String($("#colitems146").val());
	curPar.forms = String($("#colitems147").val());
	curPar.time = String($("#colitems148").val());
	curPar.video = String($("#colitems149").val());
	curPar.karotag = String($("#colitems150").val());
	curPar.comments = String($("#colitems151").val());
	curPar.geolog = String($("#colitems152").val());
	curPar.depth = String($("#colitems153").val());
	curPar.svodka = String($("#colitems154").val());
	curPar.chat = String($("#colitems155").val());

	//Добавление в таблицу отображения
	$('#userright tr:last').after('<tr><td>'+String($("#colitems141").val())+'</td>'+
	'<td>'+String($("#colitems142").val())+'</td>'+
	'<td>'+String($("#colitems143").val())+'</td>'+
	'<td>'+String($("#colitems144").val())+'</td>'+
	'<td>'+String($("#colitems145").val())+'</td>'+
	'<td>'+String($("#colitems146").val())+'</td>'+
	'<td>'+String($("#colitems147").val())+'</td>'+
	'<td>'+String($("#colitems148").val())+'</td>'+
	'<td>'+String($("#colitems149").val())+'</td>'+
	'<td>'+String($("#colitems150").val())+'</td>'+
	'<td>'+String($("#colitems151").val())+'</td>'+
	'<td>'+String($("#colitems152").val())+'</td>'+
	'<td>'+String($("#colitems153").val())+'</td>'+
	'<td>'+String($("#colitems154").val())+'</td>'+
	'<td>'+String($("#colitems155").val())+'</td>'+
	'</tr>'
	);
	// //Запись всех текущих пользователей
	// for (var keey in users_rights) {
	// 	insertuser('create','users_rights',String(users_rights[keey].login), String(users_rights[keey].pass), String(keey), JSON.stringify(users_rights[keey]));
	// 	// console.log(keey);
	// 	// console.log(wells[keey]);
	// }
	
	//Создание новой записи параметра!!!
	users_rights[String('par'+String((Object.keys(users_rights).length)))]=curPar;
	
	//Добавление пользователей в mysql в таблицу skvs
	insertuser('create','users_rights',String(curPar.login), String(curPar.pass), String('par'+String((Object.keys(users_rights).length))), JSON.stringify(curPar));
	
	//Чтение всех пользователей
	readusers('read','users_rights', '','');
	//console.log(users_rights);
	//updateuser('create','users_rights',String(curPar.login), String(curPar.pass), String('par'+String((Object.keys(users_rights).length-1))), JSON.stringify(curPar));
	}


//Добавление  диалог камеры
function colPan16 () {
	
	// var o=document.getElementById('oTable');
    // var count=0;
    // for (i=0; i < o.rows.length; i++) {
    //     for (j=0; j < o.rows[i].cells.length; j++) {
    //         o.rows[i].cells[j].innerHTML = count;
    //         $('#myselect').append('<option value="'+newitemnum+'">'+newitemdesc+'</option>');
    //     }
    // }
	$("#myModal16").modal();
}


//Добавление  записи по камерам
function colOK16 () {
	var curPar ={};
	curPar = JSON.stringify(Object.assign({}, Shabloncams['par0']));
	curPar = JSON.parse(curPar);
		
	curPar.name = String($("#colitems181").val());
	curPar.txt = String($("#colitems182").val());
	curPar.rtsp = String($("#colitems183").val());
	

	//Добавление в таблицу отображения
	$('#cams tr:last').after('<tr><td>'+String($("#colitems181").val())+'</td>'+
	'<td>'+String($("#colitems182").val())+'</td>'+
	'<td>'+String($("#colitems183").val())+'</td>'+
	'</tr>'
	);

	
	// //Запись всех текущих пользователей
	// for (var keey in users_rights) {
	// 	insertuser('create','users_rights',String(users_rights[keey].login), String(users_rights[keey].pass), String(keey), JSON.stringify(users_rights[keey]));
	// 	// console.log(keey);
	// 	// console.log(wells[keey]);
	// }
	
	//Создание новой записи параметра!!!
	cams[String('par'+String((Object.keys(cams).length)))]=curPar;

	//Добавление скважины в mysql в таблицу skvs
	insertcams('create','cams', String('par'+String((Object.keys(cams).length-1))),JSON.stringify(Object.assign({}, curPar)));

	//Чтение всех 
	readcams('read','cams', '','');
	//console.log(users_rights);
	//updateuser('create','users_rights',String(curPar.login), String(curPar.pass), String('par'+String((Object.keys(users_rights).length-1))), JSON.stringify(curPar));
	}



var selectcam='';
//Изменить/ удалить  диалог камеру
function colPan17 () {

	
	$("#myModal17").modal();
	for (var keey in cams) {
		if ((cams[keey].name == String($("#colitems191").val())) && (cams[keey].txt == String($("#colitems192").val())) ) {
			selectcam=keey;
			
		}}
}

//Изменить запись
function colOK17 () {
	//Изменить выбранного камеру
	for (var keey in cams) {
		
		if ( keey== selectcam) {
			// console.log(keey);
			cams[keey].name = String($("#colitems191").val());
			cams[keey].txt = String($("#colitems192").val());
			cams[keey].rtsp = String($("#colitems193").val());
			
			//Обновить камеру в mysql в таблицу cams
			updatecams('update','cams', keey.slice(3 , ),JSON.stringify(Object.assign({}, cams[keey])));
		}
	}


	//Очистка и добавка
	$("#cams  tbody").empty();
	for (var keey in cams) {
		$("#cams tbody").append('<tr><td>'+
		cams[keey].name+'</td><td>'+
		cams[keey].txt+'</td><td>'+
		cams[keey].rtsp+'</td>'+
		'</tr>');
	}
	
		
	}
	
	//Удалить запись
	function colOK171 () {
		
		//Удалить выбранную из камеру
		for (var keey in cams) {
			// console.log( keey);
			// console.log( String($("#colitems162").val()));
			if ((cams[keey].name == String($("#colitems191").val())) && (cams[keey].txt == String($("#colitems192").val())) && (cams[keey].rtsp == String($("#colitems193").val()))) {
				deletecams('delete','cams', keey.slice(3 , ));
				//console.log( keey, keey.slice(3 , ));
				delete (cams[keey]);
			}
		}
		tmpuser={};
		//Чтение всех камеру
		readcams('read','cams', '','');
		
		
		//Очистка и добавка
		$("#cams tbody").empty();
		//$("#cams").dataTable.fnDeleteRow(0);


		// var oTable = $('#example').dataTable(
		// 	{
		// 		"bSort" : false
		// 	});
			
		// 	$('#delete').click(function(e){
		// 			var row = oTable.find('tr').eq(3);
		// 		oTable.fnDeleteRow( row[0] );
		// 	})

		for (var keey in cams) {
			$("#cams tbody").append('<tr><td>'+
			cams[keey].name+'</td><td>'+
			cams[keey].txt+'</td><td>'+
			cams[keey].rtsp+'</td>'+
			'</tr>');
		}

		

	
		
	}



//Очистка и рендеринг
function repaint() {
	//Очистка документа
	try {
		$("#drawing").find("*").not("rect, g").remove();
		$('#drawing').empty();
			}
	catch(e){ }
	
	init();

}
