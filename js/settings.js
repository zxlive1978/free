
//Выполняется ли загрузка
var loaddata = false;

//Текущий режим "По времени"
var curtemp = 'time';
//
var curcams = 'Камера ?'

//свернуть открыть шапку
var toponof = true;
var backcolh= 0;
var backsheetdisp=0;

//Режим просмотра видео Реалтайм или Архив
var real='on';
var backfuture='';


//Открыть закрыть админку
var onofadm = true;
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

//Шаблон скважины
var Shablontxtwell = {
	par0: { wellN: 's110', txt: 'АГКМ-99', type: 'Ремонт', typeStn: 'Разрез', nach: 'Арбузов П.П.', tel: '232222', email: 'sobaka13@sobaka.com' },
};


//Список камер
var livestatcams = {};
var cams = {};
var camswell = [];
var workstream = {};

//Текущие параметры Справочник параметров графики обычные

var basePar = {

};

//Справочник параметров графики обычные	
var bigPar = {
	par0: { par: 'Wkp', txt: 'Вес на крюке', min: 0, max: 270, color: '#ff0066', poz: { x: 1, y: 2 }, unit: 'т', log: false },
	par1: { par: 'Wdol', txt: 'Нагрузка на дол.', min: 0, max: 70, color: '#006eea', poz: { x: 1, y: 3 }, unit: 'т', log: false },
	par2: { par: 'Npot', txt: 'Обороты ротора', min: 0, max: 200, color: '#a92ab8', poz: { x: 1, y: 4 }, unit: '1/мин', log: false },
	par3: { par: 'Mpot', txt: 'Момент на роторе', min: 0, max: 5, color: '#006400', poz: { x: 1, y: 5 }, unit: 'Н*м', log: false },
	par4: { par: 'Pbx', txt: 'Давление на входе', min: 0, max: 300, color: '#f40503', poz: { x: 2, y: 2 }, unit: 'атм', log: false },
	par5: { par: 'Talblok', txt: 'Пол. тальблока', min: 0, max: 45, color: '#006eea', poz: { x: 2, y: 3 }, unit: 'м', log: false },
	par6: { par: 'Qbx', txt: 'Расход на входе', min: 0, max: 70, color: '#006400', poz: { x: 2, y: 4 }, unit: 'л/сек', log: false },
	par7: { par: 'C1', txt: 'С1', min: 0, max: 0.5, color: '#f21890', poz: { x: 2, y: 5 }, unit: '%', log: false },
	par8: { par: 'C2', txt: 'С2', min: 0, max: 0.5, color: '#ff0066', poz: { x: 2, y: 5 }, unit: '%', log: false },
	par9: { par: 'C3', txt: 'С3', min: 0, max: 0.5, color: '#a92ab8', poz: { x: 2, y: 5 }, unit: '%', log: false },
	par10: { par: 'C4', txt: 'С4', min: 0, max: 0.5, color: '#006eea', poz: { x: 2, y: 5 }, unit: '%', log: false },
	par11: { par: 'C5', txt: 'С5', min: 0, max: 0.5, color: '#006400', poz: { x: 2, y: 5 }, unit: '%', log: false },
	par12: { par: 'C1C5', txt: 'Сумма газов', min: 0, max: 5, color: '#855f30', poz: { x: 2, y: 6 }, unit: '%', log: false },
	par13: { par: 'Xn1', txt: 'Ходы 1 насоса', min: 0, max: 150, color: '#f40503', poz: { x: 3, y: 2 }, unit: '1/мин', log: false },
	par14: { par: 'Xn2', txt: 'Ходы 2 насоса', min: 0, max: 150, color: '#006eea', poz: { x: 3, y: 3 }, unit: '1/мин', log: false },
	par15: { par: 'Xn3', txt: 'Ходы 3 насоса', min: 0, max: 150, color: '#006400', poz: { x: 3, y: 3 }, unit: '1/мин', log: false },
	par16: { par: 'Tbix', txt: 'Темп. на выходе', min: 0, max: 70, color: '#f21890', poz: { x: 3, y: 4 }, unit: 'град', log: false },
	par17: { par: 'Potok', txt: 'Поток на выходе', min: 0, max: 70, color: '#006400', poz: { x: 3, y: 5 }, unit: 'у.е', log: false },
	par18: { par: 'Vinstr', txt: 'Скор. тальблока', min: -5, max: 5, color: '#a92ab8', poz: { x: 3, y: 6 }, unit: 'м/сек', log: false },
	par19: { par: 'Vobj', txt: 'Cумм. объем емк.', min: 0, max: 370, color: '#000000', poz: { x: 3, y: 7 }, unit: 'м3', log: false },
	par20: { par: 'V1', txt: 'Объем 1 емкости', min: 0, max: 100, color: '#f40503', poz: { x: 4, y: 2 }, unit: 'м3', log: false },
	par21: { par: 'V2', txt: 'Объем 2 емкости', min: 0, max: 90, color: '#ff0066', poz: { x: 4, y: 3 }, unit: 'м3', log: false },
	par22: { par: 'V3', txt: 'Объем 3 емкости', min: 0, max: 120, color: '#f21890', poz: { x: 4, y: 4 }, unit: 'м3', log: false },
	par23: { par: 'V4', txt: 'Объем 4 емкости', min: 0, max: 90, color: '#006400', poz: { x: 4, y: 5 }, unit: 'м3', log: false },
	par24: { par: 'V5', txt: 'Объем 5 емкости', min: 0, max: 90, color: '#855f30', poz: { x: 4, y: 4 }, unit: 'м3', log: false },
	par25: { par: 'V6', txt: 'Объем 6 емкости', min: 0, max: 90, color: '#006eea', poz: { x: 4, y: 5 }, unit: 'м3', log: false },
	par26: { par: 'Vdol', txt: 'Объем дол.емк.', min: 0, max: 30, color: '#a92ab8', poz: { x: 4, y: 6 }, unit: 'м3', log: false },
	par27: { par: 'Zaboj', txt: 'Глубина Забоя', min: 0, max: 4000, color: '#ff0066', poz: { x: 1, y: 6 }, show: true, step: 0.75, unit: 'м', log: false },
	par28: { par: 'Instr', txt: 'Пол.долота', min: 0, max: 100, color: '#a92ab8', poz: { x: 2, y: 7 }, show: true, step: 0.75, unit: 'м', log: false },
	par29: { par: 'Dmk', txt: 'ДМК', min: 0, max: 100, color: '#ff0066', poz: { x: 2, y: 7 }, show: true, step: 0.75, unit: 'мин/м', log: false },
	par30: { par: 'Vbur', txt: 'Скорость бурения', min: 0, max: 100, color: '#a92ab8', poz: { x: 2, y: 7 }, show: true, step: 0.75, unit: 'м/час', log: false },
	par31: { par: 'C1sh', txt: 'С1 по шламу', min: 0, max: 0.5, color: '#ff0066', poz: { x: 2, y: 7 }, show: true, step: 0.75, unit: '%', log: false },
	par32: { par: 'C2sh', txt: 'С2 по шламу', min: 0, max: 0.5, color: '#a92ab8', poz: { x: 2, y: 7 }, show: true, step: 0.75, unit: '%', log: false },
	par33: { par: 'C3sh', txt: 'С3 по шламу', min: 0, max: 0.5, color: '#006eea', poz: { x: 2, y: 7 }, show: true, step: 0.75, unit: '%', log: false },
	par34: { par: 'C4sh', txt: 'С4 по шламу', min: 0, max: 0.5, color: '#855f30', poz: { x: 2, y: 7 }, show: true, step: 0.75, unit: '%', log: false },
	par35: { par: 'C5sh', txt: 'С5 по шламу', min: 0, max: 0.5, color: '#f21890', poz: { x: 2, y: 7 }, show: true, step: 0.75, unit: '%', log: false },
	par36: { par: 'C1C5sh', txt: 'Сумма шламу С1...С5', min: 0, max: 5, color: '#000000', poz: { x: 2, y: 7 }, show: true, step: 0.75, unit: '%', log: false },
	par37: { par: 'Minbx', txt: 'Минерализация на вх', min: 0, max: 100, color: '#855f30', poz: { x: 2, y: 7 }, show: true, step: 0.75, unit: 'мг/дм3', log: false },
	par38: { par: 'Minbix', txt: 'Минерализация на вых', min: 0, max: 100, color: '#f21890', poz: { x: 2, y: 7 }, show: true, step: 0.75, unit: 'мг/дм3', log: false },
	par39: { par: 'Kalcid', txt: 'Кальцид', min: 0, max: 100, color: '#006eea', poz: { x: 2, y: 7 }, show: true, step: 0.75, unit: '%', log: false },
	par40: { par: 'Dolomit', txt: 'Доломит', min: 100, max: 0, color: '#f40503', poz: { x: 2, y: 7 }, show: true, step: 0.75, unit: '%', log: false },
	
	
};



//Справочник параметры графики цифровой параметры
var txtPar = {
	par0: { par: 'Zaboj', txt: 'Глубина Забоя', color: '#ff0066', poz: { x: 1, y: 6 }, show: true, step: 0.75, unit: 'м', log: false },
	par1: { par: 'Instr', txt: 'Пол.долота', color: '#ff0066', poz: { x: 2, y: 7 }, show: true, step: 0.75, unit: 'м', log: false },
	par2: { par: 'Vobj', txt: 'Cумм. объем емк.', color: '#ff0066', poz: { x: 4, y: 8 }, show: true, step: 0.5, unit: 'м3', log: false },
};

//Шаблон Справочник параметры графики цифровой параметры
var ShablontxtPar = {
	par0: { par: 'Zaboj', txt: 'Глубина Забоя', color: '#ff0066', poz: { x: 1, y: 6 }, show: true, step: 0.75, unit: 'м', log: false }
};


//Интервал параметр всего окна 
var txtOknOPar = {
	par0: { par: 'Vrema', txt: 'Время', color: '#000000', poz: { x: 1, y: 7 }, unit: 'ч' },
};

//Шаблон Интервал параметр всего окна 
var ShablontxtOknOPar = {
	par0: { par: 'Vrema', txt: 'Время', color: '#000000', poz: { x: 1, y: 7 }, unit: 'ч' },
};

//Геология
var geoOknOPar = {
};

//Шаблон Геология
var ShablongeoOknOPar = {
	par0: { par: 'Litol', txt: 'Литология', color: '#000000', poz: { x: 3, y: 3 }, unit: '' },
	par1: { par: 'Shlam', txt: 'Шламограмма', color: '#000000', poz: { x: 2, y: 3 }, unit: '' },
};

//Список шрифтов
var fonts = {
	0: { name: "Arial Black" },
	1: { name: "Verdana" },
	2: { name: "Comic Sans MS" },
	3: { name: "Courier New" },
	4: { name: "Georgia" },
	5: { name: "Impact" },
	6: { name: "Times New Roman" },
	7: { name: "Trebuchet MS" },
	7: { name: "Helvetica" },
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
	dasharray: '2,1', //
	//Число засечек по верт 
	numbr_teeth_сolmn4: 10,
	//Если не телефон не компьютер
	//var K_mobule_not_mobile =0.96;
	//var K_A4 =0.96;
	K_mobule_not_mobile: 1,
	K_A4: 1,

	//Маcштаб (час) время
	Kzoom: 3,
	Kzoomdepth: 10,

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
	holcol: '#ff0066', //
	//Прозрачность пропуска значений
	holhide: 0.2, //
	////Размер мгновенных значений
	///curvalsize: 12
	//кнопка добавить столбец
	pluscol: '#347C17',
	//кнопка настройки
	toolcol: '#2B65EC',
	//кнопка удалить столбец
	delcol: '#FF7F50',

	//кнопка редактирование формы
	rawsvg0: '#ff0000',
	//редактирование формы
	editscrn: false,
	//кнопка скважина
	rawsvg1: '#006400',
	//кнопка календарь
	rawsvg2: '#006eea',
	//кнопка лупа
	rawsvg3: '#a92ab8',
	//кнопка open
	rawsvg4: '#f21890',
	//кнопка спутник прием
	rawsvg5: '#006eea',

	//фон кнопок светлее/ темнее
	fonbut: true,



};
//Столбцы
var Columns = {
	//Цвет шрифта и насечек //Заливка колонки
	col0: { size: { h: 20, w: 7 }, poz: { x: 0, y: 0 }, numbs_par: 1, color: '#000000', fill: '#b3ffb3', grid: { num: 10, type: 'linear' } },
	col1: { size: { h: 20, w: 23.25 }, poz: { x: 7, y: 0 }, numbs_par: 4, colorhead: '#ffe6ff', colorbody: '#ffddcc', grid: { num: 10, type: 'linear' } },
	col2: { size: { h: 20, w: 23.25 }, poz: { x: 30.25, y: 0 }, numbs_par: 5, colorhead: '#e6e6ff', colorbody: '#f9ecec', grid: { num: 20, type: 'linear' } },
	col3: { size: { h: 20, w: 23.25 }, poz: { x: 53.5, y: 0 }, numbs_par: 6, colorhead: '#e6e6ff', colorbody: '#ffeee6', grid: { num: 10, type: 'linear' } },
	col4: { size: { h: 20, w: 23.25 }, poz: { x: 76.75, y: 0 }, numbs_par: 5, colorhead: '#e6ff99', colorbody: '#ffe6b3', grid: { num: 10, type: 'linear' } }
};


//Маcштаб (час)
var Kzoom = Sheet.Kzoom;
//Маcштаб (м)
var Kzoomdepth = Sheet.Kzoomdepth;

//Плюс
var rawsvg3 = '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 280 280" style="enable-background:new 0 0 280 280;" xml:space="preserve"><path d="M138.3-54.8l-193,190.1c-1.8,1.8-1.8,4.6,0,6.4l190.1,193c1.8,1.8,4.6,1.8,6.4,0l193-190.1c1.8-1.8,1.8-4.6,0-6.4	l-190.1-193C142.9-56.5,140.1-56.6,138.3-54.8z M227.7,125.7l-0.2,30l-72.6-0.6l-0.6,72.6l-30-0.2l0.6-72.6l-72.6-0.6l0.2-30 l72.6,0.6l0.6-72.6l30,0.2l-0.6,72.6L227.7,125.7z"/> </svg>';
//Настройки
var rawsvg2 = '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><path d="M911.4,600.7h-51.9c-8.4,30.5-20.6,59.5-36,86.3l48,48c30.7,30.7,30.7,80.5,0,111.1l-27.8,27.8c-30.7,30.7-80.5,30.7-111.2,0l-48.3-48.3c-26.8,15.2-55.6,27.1-86,35.4v50.3c0,43.4-35.2,78.6-78.6,78.6h-39.3c-43.4,0-78.6-35.2-78.6-78.6V861c-30.4-8.3-59.2-20.2-86-35.4l-48.3,48.3c-30.7,30.7-80.5,30.7-111.2,0l-27.8-27.8c-30.7-30.7-30.7-80.5,0-111.1l48-48c-15.5-26.9-27.6-55.8-36-86.3H88.6c-43.4,0-78.6-35.2-78.6-78.6v-39.3c0-43.4,35.2-78.6,78.6-78.6h51.3c8.1-30.2,19.8-59,34.8-85.7l-46.1-46.1c-30.7-30.7-30.7-80.5,0-111.2l27.8-27.8c30.7-30.7,80.5-30.7,111.2,0l45.2,45.2c27.7-16.1,57.5-28.7,89.1-37.3V88.6c0-43.4,35.2-78.6,78.6-78.6h39.3c43.4,0,78.6,35.2,78.6,78.6v52.8c31.6,8.6,61.4,21.2,89.1,37.3l45.2-45.2c30.7-30.7,80.5-30.7,111.2,0l27.8,27.8c30.7,30.7,30.7,80.5,0,111.2l-46.1,46.1c15,26.7,26.7,55.5,34.8,85.7h51.3c43.4,0,78.6,35.2,78.6,78.6v39.3C990,565.5,954.8,600.7,911.4,600.7L911.4,600.7z M500,287.6c-119.4,0-216.1,96.8-216.1,216.1c0,119.4,96.8,216.1,216.1,216.1c119.4,0,216.1-96.8,216.1-216.1C716.1,384.3,619.4,287.6,500,287.6L500,287.6z M500,599.5c-54.3,0-98.3-44-98.3-98.2c0-54.2,44-98.2,98.3-98.2c54.3,0,98.2,44,98.2,98.2C598.2,555.5,554.3,599.5,500,599.5L500,599.5z"/></g></svg>';
//Крестик
var rawsvg1 = '<?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 280 280" style="enable-background:new 0 0 280 280;" xml:space="preserve"> <path d="M275.456,0H4.544C2.034,0,0,2.035,0,4.544v270.911C0,277.965,2.034,280,4.544,280h270.911c2.509,0,4.544-2.035,4.544-4.544 V4.544C280,2.035,277.965,0,275.456,0z M212.529,191.316l-21.213,21.213L140,161.213l-51.316,51.316l-21.213-21.213L118.787,140 L67.471,88.684l21.213-21.213L140,118.787l51.316-51.316l21.213,21.213L161.213,140L212.529,191.316z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';

//Первая порода
var ref_rocks = {
	rock166:{
		 img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQAAAAA3iMLMAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAd2KE6QAAAAJcEhZ cwAADsQAAA7EAZUrDhsAAAAHdElNRQflBQIQOSNYcTjSAAAAKUlEQVQI1xWIsQkAAAyDPL2P5oIe kDFtQEQEiMgSM67b+o3CBj9TfysHRlEZ3+9R3JoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDUt MDJUMTY6NTc6MzYrMDM6MDDzFb5MAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA1LTAyVDE2OjU3 OjM1KzAzOjAws6AcbQAAAABJRU5ErkJggg==" /> </svg> ',
		 txt:'Песчаник глин'
	},
	rock167:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEUisUz///8T2P3BAAAA AWJLR0QB/wIt3gAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhECJPtlKH4AAAAaSURB VAjXY2A/wPD/PxT9sAchOPeDPIINQwCAExwtnLixKgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0w NS0wMlQxNzowMjozNiswMzowMLn9AM8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDUtMDJUMTc6 MDI6MzYrMDM6MDDIoLhzAAAAAElFTkSuQmCC" /> </svg> ',
		txt:'Глина с ОРД'
   	},   
   	rock169:{
	img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEX//////wD+/v4/kYjv AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAAs SURBVAjXY2AEAgYwEBUQFWAQBEIGUUZRqJgAEEBYCHVAZaIMYIVAZaJo6gBDgAG5hgePBQAAACV0 RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNS0wMlQxNjo1NzozNiswMzowMPMVvkwAAAAldEVYdGRhdGU6 bW9kaWZ5ADIwMjEtMDUtMDJUMTY6NTc6MzUrMDM6MDCzoBxtAAAAAElFTkSuQmCC" /> </svg> ',
	txt:'Песок с грав.'
	},
	rock170:{
	img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEX//////wD+/v4/kYjv AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAAW SURBVAjXY2AAAQEgADMYGIGAgQIxACzYARE7SnvBAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA1 LTAyVDE2OjU3OjM2KzAzOjAw8xW+TAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNS0wMlQxNjo1 NzozNSswMzowMLOgHG0AAAAASUVORK5CYII=" /> </svg> ',
	txt:'Песок'
	},
	rock171:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQAAAAA3iMLMAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAd2KE6QAAAAJcEhZ cwAADsQAAA7EAZUrDhsAAAAHdElNRQflBQIQOSNYcTjSAAAAJklEQVQI1zWIMQ0AAAyD8G+pQiZj ElifEQ4CQGRk33ZPMTi4bzsHRXAZ1f42zOIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDUtMDJU MTY6NTc6MzYrMDM6MDDzFb5MAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA1LTAyVDE2OjU3OjM1 KzAzOjAws6AcbQAAAABJRU5ErkJggg==" /> </svg> ',
		txt:'Песчаник'
	},
	rock172:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEX/////AAD+/v719U9j AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAAb SURBVAjXYxBgEGRgwE+EAgEDgwsDCwECpA4AofYFiB8Q78gAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjEtMDUtMDJUMTY6NTc6MzYrMDM6MDDzFb5MAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA1LTAy VDE2OjU3OjM1KzAzOjAws6AcbQAAAABJRU5ErkJggg==" /> </svg> ',
		txt:'Доломит извест.'
	},
	rock175:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEX/////8gDN0GSsAAAA AWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAxEQL6z/5kAAAAAaSURB VAjXY2BgYPj/nwEOjtQj2Mji9UcgNACu5waDGAVfHQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0w NS0wM1QxNzoxNjo0NyswMzowMHNC7EkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDUtMDNUMTc6 MTY6NDcrMDM6MDACH1T1AAAAAElFTkSuQmCC" /> </svg> ',
		txt:'Алевролит'
	},
	rock176:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEX///+5ele/kkPKAAAA AWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAxEgNY7bKckAAAAaSURB VAjXY2BgYPj/nwEOjtQj2Mji9UcgNACu5waDGAVfHQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0w NS0wM1QxNzozMjo1MyswMzowMBog0X8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDUtMDNUMTc6 MzI6NTMrMDM6MDBrfWnDAAAAAElFTkSuQmCC" /> </svg> ',
		txt:'Алевролит бит.'
	},
	rock177:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEX///8A/wD+/v7bVSMj AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAAW SURBVAjXY2ANDWVAB6EMrBiCRKoDAII8Ar3o7UxPAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA1 LTAyVDE2OjU3OjM2KzAzOjAw8xW+TAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNS0wMlQxNjo1 NzozNSswMzowMLOgHG0AAAAASUVORK5CYII=" /> </svg> ',
		txt:'Глина'
	},
	rock178:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUA/wD////+/v467chl AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAAS SURBVAjXY2AAgVAgQCIoEAMAVhYP8d3WAzsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDUtMDJU MTY6NTc6MzYrMDM6MDDzFb5MAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA1LTAyVDE2OjU3OjM1 KzAzOjAws6AcbQAAAABJRU5ErkJggg==" /> </svg> ',
		txt:'Аргиллит'
	},
	rock179:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEX/AAD////+/v5V6cLI AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAAS SURBVAjXY2AAgVAgQCIoEAMAVhYP8d3WAzsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDUtMDJU MTY6NTc6MzYrMDM6MDDzFb5MAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA1LTAyVDE2OjU3OjM1 KzAzOjAws6AcbQAAAABJRU5ErkJggg==" /> </svg> ',
		txt:'Аргиллит бит.'
	},
	rock180:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUA///////+/v6o24JV AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAAY SURBVAjXY2AAgcDQ0FACBBiEhgaG4icAsWISYdr4/TYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEt MDUtMDJUMTY6NTc6MzYrMDM6MDDzFb5MAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA1LTAyVDE2 OjU3OjM1KzAzOjAws6AcbQAAAABJRU5ErkJggg==" /> </svg> ',
		txt:'Известняк'
	},
	rock181:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUA///////+/v6o24JV AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAAj SURBVAjXY2AAgdDQwFAkgoE1MARDDAQCQ0NDkYkQBlY0MQCAvBEVFFtH2QAAACV0RVh0ZGF0ZTpj cmVhdGUAMjAyMS0wNS0wMlQxNjo1NzozNiswMzowMPMVvkwAAAAldEVYdGRhdGU6bW9kaWZ5ADIw MjEtMDUtMDJUMTY6NTc6MzUrMDM6MDCzoBxtAAAAAElFTkSuQmCC" /> </svg> ',
		txt:'Известн. глин.'
	},
	rock182:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEX/AAD////+/v5V6cLI AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAAY SURBVAjXY2AAgcDQ0FACBBiEhgaG4icAsWISYdr4/TYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEt MDUtMDJUMTY6NTc6MzYrMDM6MDDzFb5MAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA1LTAyVDE2 OjU3OjM1KzAzOjAws6AcbQAAAABJRU5ErkJggg==" /> </svg> ',
		txt:'Известняк бит.'
	},
	rock184:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEX///8AgP/+/v5+0lLM AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAAb SURBVAjXYxBgEGRgwE+EAgEDgwsDCwECpA4AofYFiB8Q78gAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjEtMDUtMDJUMTY6NTc6MzYrMDM6MDDzFb5MAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA1LTAy VDE2OjU3OjM1KzAzOjAws6AcbQAAAABJRU5ErkJggg==" /> </svg> ',
		txt:'Извест.доломит.'
	},
	rock185:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEX//////wD+/v4/kYjv AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAAW SURBVAjXY2AAAQEgADMYGIGAgQIxACzYARE7SnvBAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA1 LTAyVDE2OjU3OjM2KzAzOjAw8xW+TAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNS0wMlQxNjo1 NzozNSswMzowMLOgHG0AAAAASUVORK5CYII=" /> </svg> ',
		txt:'Песок,песчаник'
	},
	rock188:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUAgID////+/v7Hi6Gr AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAAw SURBVAjXY2AAgdBQ0VCG0JBQIBEIIlxBhCiQAAqFMgSCCKi6EKAEUA2QcA3Fpg0AjigRlcLXwRsA AAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDUtMDJUMTY6NTc6MzYrMDM6MDDzFb5MAAAAJXRFWHRk YXRlOm1vZGlmeQAyMDIxLTA1LTAyVDE2OjU3OjM1KzAzOjAws6AcbQAAAABJRU5ErkJggg==" /> </svg> ',
		txt:'Мергель'
	},
	rock190:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEX///8A///+/v4FUCXS AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAAW SURBVAjXY2AAAdYAIMHCgI+AAkIqASmKANtRYM0+AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA1 LTAyVDE2OjU3OjM2KzAzOjAw8xW+TAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNS0wMlQxNjo1 NzozNSswMzowMLOgHG0AAAAASUVORK5CYII=" /> </svg> ',
		txt:'Гипс'
	},
	rock191:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEX///8/SMz+/v6wBRPh AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAAo SURBVAjXY2AAAdYABgcGFgYwwRoCY0EIVABUyQgSBROiATAWI0wlAIKHApXUhvFfAAAAJXRFWHRk YXRlOmNyZWF0ZQAyMDIxLTA1LTAyVDE2OjU3OjM2KzAzOjAw8xW+TAAAACV0RVh0ZGF0ZTptb2Rp ZnkAMjAyMS0wNS0wMlQxNjo1NzozNSswMzowMLOgHG0AAAAASUVORK5CYII=" /> </svg> ',
		txt:'Соль загипсованная'
	},
	rock192:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ cwAADsQAAA7EAZUrDhsAAAAHdElNRQflBQIQOSNYcTjSAAAASklEQVQY022OQQ7AMAjD3Ip/E16e XdaVbfURrMjDvJkA1S+2Zflh8sWW3ZSDIUttJYDswjh2LOruWMg6d2zB1t+IvZgFWdGeCXABDfJP 11028tEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDUtMDJUMTY6NTc6MzYrMDM6MDDzFb5MAAAA JXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA1LTAyVDE2OjU3OjM1KzAzOjAws6AcbQAAAABJRU5ErkJg gg==" /> </svg> ',
		txt:'Ангидрит'
	},
	rock193:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEX///8A///+/v4FUCXS AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAAW SURBVAjXY2AAAUZUIjQEUwwKCKkEADOcAV+ajccjAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA1 LTAyVDE2OjU3OjM2KzAzOjAw8xW+TAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNS0wMlQxNjo1 NzozNSswMzowMLOgHG0AAAAASUVORK5CYII=" /> </svg> ',
		txt:'Соль'
	},
	rock194:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ cwAADsQAAA7EAZUrDhsAAAAHdElNRQflBQIQOSNYcTjSAAAAQ0lEQVQY042OywqAMBDEpuJ/m355 PNRHFVnMZWEmDNvMkyVJfwcpg8a425WoOPFjw8Lo5+gB8jWaSVAqAwFxvavx/Q45Nz9gePQVOAAA ACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNS0wMlQxNjo1NzozNiswMzowMPMVvkwAAAAldEVYdGRh dGU6bW9kaWZ5ADIwMjEtMDUtMDJUMTY6NTc6MzUrMDM6MDCzoBxtAAAAAElFTkSuQmCC" /> </svg> ',
		txt:'Соль-ангидрит'
	},
	rock197:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEX///8A///+/v4FUCXS AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAAn SURBVAjXY2BgYGRgYHAAYkYBGMHCAiMEA4GEAEgFMmAMYYBowyQAPU0BQTVOksoAAAAldEVYdGRh dGU6Y3JlYXRlADIwMjEtMDUtMDJUMTY6NTc6MzYrMDM6MDDzFb5MAAAAJXRFWHRkYXRlOm1vZGlm eQAyMDIxLTA1LTAyVDE2OjU3OjM1KzAzOjAws6AcbQAAAABJRU5ErkJggg==" /> </svg> ',
		txt:'Ангидрит-гипс'
	},
	rock198:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEX///8AAP/+/v7PNOJe AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAA4 SURBVAjXNYvBCQAwDAJPcICMlEdX6P6r1ATqQ0FPAEFbiRKmN9Px7UZkiQ6FwuAcKHuuwXcd7gGD hARxK6O9SwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNS0wMlQxNjo1NzozNiswMzowMPMVvkwA AAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDUtMDJUMTY6NTc6MzUrMDM6MDCzoBxtAAAAAElFTkSu QmCC" /> </svg> ',
		txt:'Кремнистая пор.'
	},
	rock199:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="14px" viewBox="0 0 16 14" enable-background="new 0 0 16 14" xml:space="preserve"> <image id="image0" width="16" height="14" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOAgMAAABbQXQZAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUA/wAAAAD///+llsk0 AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAAX SURBVAjXY2BgZAACXEQoEOCTBxIgJQA3IgK1zFhrxQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0w NS0wMlQxNjo1NzozNiswMzowMPMVvkwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDUtMDJUMTY6 NTc6MzUrMDM6MDCzoBxtAAAAAElFTkSuQmCC" /> </svg> ',
		txt:'Кальцит'
	},
	rock200:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUAAP/////+/v6OkISz AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAAY SURBVAjXY2AAgUDR0FACBBiEhgaK4icAL+IO4RP/ltEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEt MDUtMDJUMTY6NTc6MzYrMDM6MDDzFb5MAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA1LTAyVDE2 OjU3OjM1KzAzOjAws6AcbQAAAABJRU5ErkJggg==" /> </svg> ',
		txt:'Доломит'
	},
	rock201:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 10 10" enable-background="new 0 0 10 10" xml:space="preserve"> <image id="image0" width="10" height="10" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAgMAAADwXCcuAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEX///+AQAD+/v5Xcqg+ AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAAf SURBVAjXY2AIYGBgDWVgEA11AOPQ0AAwhvFBckA1AHZQBfF4MppWAAAAJXRFWHRkYXRlOmNyZWF0 ZQAyMDIxLTA1LTAyVDE2OjU3OjM2KzAzOjAw8xW+TAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0w NS0wMlQxNjo1NzozNSswMzowMLOgHG0AAAAASUVORK5CYII=" /> </svg> ',
		txt:'Нефть'
	},
	rock206:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 10 10" enable-background="new 0 0 10 10" xml:space="preserve"> <image id="image0" width="10" height="10" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAgMAAADwXCcuAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEX///8AgP/+/v5+0lLM AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAAf SURBVAjXY2AIYGBgDWVgEA11AOPQ0AAwhvFBckA1AHZQBfF4MppWAAAAJXRFWHRkYXRlOmNyZWF0 ZQAyMDIxLTA1LTAyVDE2OjU3OjM2KzAzOjAw8xW+TAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0w NS0wMlQxNjo1NzozNSswMzowMLOgHG0AAAAASUVORK5CYII=" /> </svg> ',
		txt:'Вода'
	},
	rock207:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 10 10" enable-background="new 0 0 10 10" xml:space="preserve"> <image id="image0" width="10" height="10" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAgMAAADwXCcuAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAADFBMVEWAgIAAAAD//4D///8H jZiBAAAAAWJLR0QDEQxM8gAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIA AAAoSURBVAjXY2DMWsDAtiqAQWolA0PWKgcgnsCwatUCMAaxpYBibCsZAPylDQbINeY/AAAAJXRF WHRkYXRlOmNyZWF0ZQAyMDIxLTA1LTAyVDE2OjU3OjM2KzAzOjAw8xW+TAAAACV0RVh0ZGF0ZTpt b2RpZnkAMjAyMS0wNS0wMlQxNjo1NzozNSswMzowMLOgHG0AAAAASUVORK5CYII=" /> </svg> ',
		txt:'Газ'
	},
	rock208:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAADFBMVEX///8A/wD//wD////w 2U75AAAAAWJLR0QDEQxM8gAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIA AAAbSURBVAjXY2ANDWWAAq0GKBGq1RoK5cIBkeoAVXMIDbBly0MAAAAldEVYdGRhdGU6Y3JlYXRl ADIwMjEtMDUtMDJUMTY6NTc6MzYrMDM6MDDzFb5MAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA1 LTAyVDE2OjU3OjM1KzAzOjAws6AcbQAAAABJRU5ErkJggg==" /> </svg> ',
		txt:'Глина с пиритом'
	},
	rock209:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUAgAD////+/v5PnUtZ AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5I1hxONIAAAAf SURBVAjXY2AAgVAggBCMAoKMSFw0WQcXFgfcsiC9ADYUDlde8ddLAAAAJXRFWHRkYXRlOmNyZWF0 ZQAyMDIxLTA1LTAyVDE2OjU3OjM2KzAzOjAw8xW+TAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0w NS0wMlQxNjo1NzozNSswMzowMLOgHG0AAAAASUVORK5CYII=" /> </svg> ',
		txt:'Агриллит с пиритом'
	},
	rock210:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEX/AAD////+/v5V6cLI AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5JMYVrXEAAAA1 SURBVAjXLclBDQAwDAJATNRPPxVAMvxbGWXjcSEAbCTSnDEqNEza3/wmpIQzRhUar2Xb9wJU3A/h MZhThAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNS0wMlQxNjo1NzozNiswMzowMPMVvkwAAAAl dEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDUtMDJUMTY6NTc6MzYrMDM6MDCCSAbwAAAAAElFTkSuQmCC" /> </svg> ',
		txt:'Песчаник битум'
	},
	rock211:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEX//////wD+/v4/kYjv AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5JMYVrXEAAAAa SURBVAjXY2AAAdHQAAEGNBAgIBqKLkZYHQCGdAMpBKKpmAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAy MS0wNS0wMlQxNjo1NzozNiswMzowMPMVvkwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDUtMDJU MTY6NTc6MzYrMDM6MDCCSAbwAAAAAElFTkSuQmCC" /> </svg> ',
		txt:'Алеврит'
	},
	rock212:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEX//////wD+/v4/kYjv AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5JMYVrXEAAAAd SURBVAjXY2AAgVAgYEADAQKiGGLY1ImGBgggeAC/DgQ9mf/66AAAACV0RVh0ZGF0ZTpjcmVhdGUA MjAyMS0wNS0wMlQxNjo1NzozNiswMzowMPMVvkwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDUt MDJUMTY6NTc6MzYrMDM6MDCCSAbwAAAAAElFTkSuQmCC" /> </svg> ',
		txt:'Алевропесчаник'
	},
	rock213:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUAAP/////+/v6OkISz AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5JMYVrXEAAAAi SURBVAjXY2AAgdDQQFEkgoEVhQsRA4FA0dBQFIKBFU0MAP93DZdesCs0AAAAJXRFWHRkYXRlOmNy ZWF0ZQAyMDIxLTA1LTAyVDE2OjU3OjM2KzAzOjAw8xW+TAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAy MS0wNS0wMlQxNjo1NzozNiswMzowMIJIBvAAAAAASUVORK5CYII=" /> </svg> ',
		txt:'Доломит глин'
	},
	rock214:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUAAP/////+/v6OkISz AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5JMYVrXEAAAA4 SURBVAjXY2AAgVAggBAhoaGiDIECIq4MgaIhrgyuroGBEAlkdaJAIsQ1lMFBxJWRITQwMBRhAABZ nxAu9r49fwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNS0wMlQxNjo1NzozNiswMzowMPMVvkwA AAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDUtMDJUMTY6NTc6MzYrMDM6MDCCSAbwAAAAAElFTkSu QmCC" /> </svg> ',
		txt:'Сульфатно-терригенная'
	},
	rock215:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQAAAAA3iMLMAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAd2KE6QAAAAJcEhZ cwAADsQAAA7EAZUrDhsAAAAHdElNRQflBQIQOSTGFa1xAAAADklEQVQI12P4/5+BFAQA/U4f4XOL pqwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDUtMDJUMTY6NTc6MzYrMDM6MDDzFb5MAAAAJXRF WHRkYXRlOm1vZGlmeQAyMDIxLTA1LTAyVDE2OjU3OjM2KzAzOjAwgkgG8AAAAABJRU5ErkJggg==" /> </svg> ',
		txt:'ПУСТАЯ'
	},
	rock217:{
		img:'<?xml version="1.0" encoding="UTF-8" standalone="no"?> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <image id="image0" width="16" height="16" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEX///8AAP/+/v7PNOJe AAAAAWJLR0QCZgt8ZAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+UFAhA5JMYVrXEAAAAy SURBVAjXY2BAAAEBBgZRFscQBgYWByCXESYeCgQwFSwsQElGAQYWx0ABkAoHJP0gdQCeygUgkn51 nAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNS0wMlQxNjo1NzozNiswMzowMPMVvkwAAAAldEVY dGRhdGU6bW9kaWZ5ADIwMjEtMDUtMDJUMTY6NTc6MzYrMDM6MDCCSAbwAAAAAElFTkSuQmCC" /> </svg> ',
		txt:'Терригенно-сульфатно-галогенная'
	},
	

	
}
// '<?xml version="1.0" standalone="yes"?><svg width="16" height="16"><path style="fill:#000000; stroke:none;" d="M0 0L0 1C12.1315 1.00937 12.1315 7.99063 0 8L0 9C2.65206 11.3739 2.95134 12.5666 2 16L4 14L5 14L7 16C5.17842 9.31889 10.6517 9.01889 16 9L16 0L0 0z"/><path style="fill:#ffffff; stroke:none;" d="M0 1L0 8C12.975 7.99857 12.975 1.00143 0 1M11 1L12 3L13 3L14 1L11 1M15 1C13.4904 4.22448 13.4793 5.44711 16 8L15 1z"/><path style="fill:#000000; stroke:none;" d="M1 4L1 5L8 5L1 4z"/><path style="fill:#ffffff; stroke:none;" d="M11 8L14 8L13 6L11 8M0 9L0 16C3.86823 13.8403 3.86823 11.1597 0 9M3 9L4 11L5 11L6 9L3 9M16 16L16 13L9 13L9 12L16 12L16 9C4.11755 9.00918 4.11754 15.9908 16 16z"/><path style="fill:#000000; stroke:none;" d="M9 12L9 13L16 13L9 12z"/><path style="fill:#ffffff; stroke:none;" d="M3 16L6 16L5 14L3 16z"/>';
// '<?xml version="1.0" standalone="no"?><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16.000000pt" height="16.000000pt" viewBox="0 0 16.000000 16.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"fill="#000000" stroke="none"><path d="M49 151 c97 -11 96 -71 -1 -71 l-50 0 23 -19 c22 -18 23 -22 10 -43-10 -17 -10 -20 0 -11 10 10 16 10 27 0 13 -10 14 -9 2 10 -21 33 1 53 58 5343 0 44 1 29 18 -10 10 -17 22 -17 27 0 5 7 17 17 27 15 17 13 18 -68 16 -76-1 -79 -2 -30 -7z m91 -5 c0 -11 -19 -15 -25 -6 -3 5 1 10 9 10 9 0 16 -2 16-4z m-5 -56 c3 -5 -1 -10 -10 -10 -9 0 -13 5 -10 10 3 6 8 10 10 10 2 0 7 -410 -10z m-75 -24 c0 -11 -19 -15 -25 -6 -3 5 1 10 9 10 9 0 16 -2 16 -4z"/><path d="M28 113 c12 -2 30 -2 40 0 9 3 -1 5 -23 4 -22 0 -30 -2 -17 -4z"/><path d="M108 33 c12 -2 30 -2 40 0 9 3 -1 5 -23 4 -22 0 -30 -2 -17 -4z"/></g>'

var butts = {
	rawsvg0: {
		img: '<?xml version="1.0" encoding="iso-8859-1"?> <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <g> <path d="M421,211v-46C421,74.019,346.981,0,256,0S91,74.019,91,165v46H61v301h390V211H421z M121,165c0-74.439,60.561-135,135-135 s135,60.561,135,135v46h-30v-46c0-57.897-47.103-105-105-105c-57.897,0-105,47.103-105,105v46h-30V165z M331,165v46H181v-46 c0-41.355,33.645-75,75-75C297.355,90,331,123.645,331,165z M421,482H91v-30h330V482z M421,422H91V241c9.676,0,302.027,0,330,0 V422z"/> </g> </g> <g> <g> <path d="M256,271c-24.813,0-45,20.187-45,45c0,19.555,12.541,36.228,30,42.42V392h30v-33.58c17.459-6.192,30-22.865,30-42.42 C301,291.187,280.813,271,256,271z M256,331c-8.271,0-15-6.729-15-15s6.729-15,15-15s15,6.729,15,15S264.271,331,256,331z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> ',
		color: '#ff0066'
	},
	// rawsvg1:{img:'<svg  viewBox="-37 1 511 511.99975"  xmlns="http://www.w3.org/2000/svg"><path d="m416.5 472h-20.546875l-44.535156-326h21.082031c11.046875 0 20-8.953125 20-20s-8.953125-20-20-20h-35.933594l-104.1875-100.402344c-7.746094-7.464844-20.011718-7.464844-27.757812 0l-104.1875 100.402344h-35.933594c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h21.082031l-44.535156 326h-20.546875c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h396c11.046875 0 20-8.953125 20-20s-8.953125-20-20-20zm-77.3125-120.011719-93.757812-103.988281 69.085937-76.621094zm-120.6875-304.214843 60.421875 58.226562h-120.84375zm65.039062 98.226562-65.039062 72.132812-65.039062-72.132812zm-161.054687 25.378906 69.085937 76.621094-93.757812 103.988281zm-41.066406 300.621094 12.121093-88.738281c.039063.042969.070313.089843.105469.132812l79.894531 88.605469zm54.011719-102 83.070312-92.132812 83.070312 92.132812-83.070312 92.132812zm128.03125 102 79.894531-88.605469c.035156-.042969.066406-.089843.105469-.132812l12.121093 88.738281zm0 0"/></svg> ',
	// color:Sheet.rawsvg0},
	//rawsvg3:{img:'<?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 485.213 485.212" style="enable-background:new 0 0 485.213 485.212;" xml:space="preserve"> <g> <path d="M60.652,75.816V15.163C60.652,6.781,67.433,0,75.817,0c8.38,0,15.161,6.781,15.161,15.163v60.653 c0,8.38-6.781,15.161-15.161,15.161C67.433,90.978,60.652,84.196,60.652,75.816z M318.424,90.978 c8.378,0,15.163-6.781,15.163-15.161V15.163C333.587,6.781,326.802,0,318.424,0c-8.382,0-15.168,6.781-15.168,15.163v60.653 C303.256,84.196,310.042,90.978,318.424,90.978z M485.212,363.906c0,66.996-54.312,121.307-121.303,121.307 c-66.986,0-121.302-54.311-121.302-121.307c0-66.986,54.315-121.3,121.302-121.3C430.9,242.606,485.212,296.919,485.212,363.906z M454.89,363.906c0-50.161-40.81-90.976-90.98-90.976c-50.166,0-90.976,40.814-90.976,90.976c0,50.171,40.81,90.98,90.976,90.98 C414.08,454.886,454.89,414.077,454.89,363.906z M121.305,181.955H60.652v60.651h60.653V181.955z M60.652,333.584h60.653V272.93 H60.652V333.584z M151.629,242.606h60.654v-60.651h-60.654V242.606z M151.629,333.584h60.654V272.93h-60.654V333.584z M30.328,360.891V151.628h333.582v60.653h30.327V94c0-18.421-14.692-33.349-32.843-33.349h-12.647v15.166 c0,16.701-13.596,30.325-30.322,30.325c-16.731,0-30.326-13.624-30.326-30.325V60.651H106.14v15.166 c0,16.701-13.593,30.325-30.322,30.325c-16.733,0-30.327-13.624-30.327-30.325V60.651H32.859C14.707,60.651,0.001,75.579,0.001,94 v266.892c0,18.36,14.706,33.346,32.858,33.346h179.424v-30.331H32.859C31.485,363.906,30.328,362.487,30.328,360.891z M303.256,242.606v-60.651h-60.648v60.651H303.256z M409.399,363.906h-45.49v-45.49c0-8.377-6.781-15.158-15.163-15.158 s-15.159,6.781-15.159,15.158v60.658c0,8.378,6.777,15.163,15.159,15.163h60.653c8.382,0,15.163-6.785,15.163-15.163 C424.562,370.692,417.781,363.906,409.399,363.906z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
	//rawsvg1:{img:'<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><g><path d="M458.666,42.67h-53.33V32c0-17.645-14.356-32-32.002-32c-17.644,0-31.999,14.355-31.999,32v10.67H170.664V32 c0-17.645-14.354-32-31.999-32s-32,14.355-32,32v10.67H53.334c-5.892,0-10.667,4.776-10.667,10.667v447.995 c0,5.89,4.776,10.667,10.667,10.667h405.332c5.891,0,10.667-4.778,10.667-10.667V53.337 C469.333,47.446,464.557,42.67,458.666,42.67z M362.67,53.337V32c0-5.882,4.784-10.665,10.666-10.665 c5.881,0,10.665,4.783,10.665,10.665v21.337V74.67c0,0.735-0.075,1.452-0.218,2.146c-0.996,4.855-5.303,8.517-10.45,8.517 c-5.881,0-10.664-4.783-10.664-10.663V53.337z M128,53.337V32c0-5.882,4.783-10.665,10.667-10.665 c5.88,0,10.662,4.783,10.662,10.665v21.337V74.67c0,1.469-0.299,2.871-0.838,4.146c-1.621,3.825-5.415,6.517-9.826,6.517 C132.783,85.333,128,80.55,128,74.67V53.337z M64.001,64.005h42.663V74.67c0,2.756,0.35,5.434,1.009,7.988 c3.557,13.791,16.103,24.01,30.991,24.01h0.002c17.643,0,31.997-14.355,31.997-31.998V64.005h170.67V74.67 c0,17.643,14.355,31.998,32.001,31.998c17.645,0,32-14.355,32-31.998V64.005h42.662v63.994H64.001V64.005z M447.999,490.665 H64.001v0v-21.328h68.657c5.891,0,10.667-4.778,10.667-10.667c0-5.892-4.777-10.667-10.667-10.667H64.001V149.334h383.997 V490.665z"/><path d="M141.432,249.712c1.736,0,4.342-0.868,6.37-2.896l10.134-12.742v160.764c0,6.661,7.528,10.134,15.347,10.134 c7.531,0,15.349-3.473,15.349-10.134v-191.41c-0.001-6.371-7.24-10.134-13.612-10.134c-3.474,0-5.792,1.159-7.818,3.185 l-30.115,28.907c-3.765,2.608-6.08,7.53-6.08,11.874C131.007,243.34,135.349,249.712,141.432,249.712z"/><path d="M316.134,406.711c36.486,0,64.866-16.506,64.866-59.652v-3.475c-0.001-29.827-13.321-46.913-33.303-54.154 c16.216-6.082,27.221-20.556,27.221-45.174c0-37.065-24.904-50.962-58.784-50.962c-33.881,0-58.784,13.896-58.784,50.962 c0,24.618,11.005,39.092,26.931,45.174c-19.98,7.24-33.301,24.327-33.301,54.154v3.475 C250.98,390.206,279.647,406.711,316.134,406.711z M316.134,218.774c18.245,0,28.959,8.398,28.959,28.958 c0,20.85-10.714,29.248-28.959,29.248c-18.242,0-28.958-8.398-28.958-29.248C287.175,227.173,297.892,218.774,316.134,218.774z M281.674,338.66c0-24.904,13.032-36.197,34.46-36.197c21.428,0,34.17,11.293,34.17,36.197v5.213 c0,25.191-12.451,37.353-34.17,37.353c-21.139,0-34.46-11.58-34.46-37.353V338.66z"/><path d="M163.556,448.006h-0.254c-5.892,0-10.667,4.776-10.667,10.667c0,5.889,4.776,10.667,10.667,10.667h0.254 c5.892,0,10.667-4.778,10.667-10.667C174.224,452.781,169.448,448.006,163.556,448.006z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
	// rawsvg2:{img:'<svg viewBox="0 -38 512.00025 512" xmlns="http://www.w3.org/2000/svg"><path d="m506.140625 314.15625c-7.808594-7.808594-20.472656-7.808594-28.28125 0l-25.457031-25.457031 28.285156-28.28125c7.804688-7.804688 7.808594-20.476563 0-28.285157l-226.277344-226.273437c-7.808594-7.8125-20.472656-7.8125-28.28125 0l-141.421875 141.421875c-7.804687 7.804688-7.808593 20.472656 0 28.28125l111.722657 111.726562-28.714844 28.710938h-51.714844v-60c0-11.046875-8.953125-20-20-20h-76c-11.046875 0-20 8.953125-20 20v160c0 11.046875 8.953125 20 20 20h76c11.046875 0 20-8.953125 20-20v-60h60c5.304688 0 10.390625-2.105469 14.140625-5.855469l34.574219-34.574219 86.265625 86.269532c7.808593 7.808594 20.472656 7.808594 28.285156 0l28.285156-28.285156 25.453125 25.453124c-7.808594 7.8125-7.808594 20.476563 0 28.285157 7.8125 7.808593 20.472656 7.8125 28.285156 0l84.851563-84.851563c7.8125-7.808594 7.8125-20.472656 0-28.285156zm-430.140625 81.84375h-36v-120h36zm249.121094-36.589844c-8.5625-8.5625-189.261719-189.265625-197.988282-197.988281l113.136719-113.136719 197.992188 197.988282zm98.996094-42.425781 25.457031 25.457031-28.285157 28.285156-25.453124-25.457031c6.628906-6.632812 21.640624-21.640625 28.28125-28.285156zm0 0"/></svg>',
	// color:Sheet.rawsvg1},
	rawsvg1: {
		img: '<?xml version="1.0" encoding="iso-8859-1"?> <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --> <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 310.42 310.42" style="enable-background:new 0 0 310.42 310.42;" xml:space="preserve"> <g> <g> <path d="M273.587,214.965c49.11-49.111,49.109-129.021,0-178.132c-49.111-49.111-129.02-49.111-178.13,0 C53.793,78.497,47.483,140.462,76.51,188.85c0,0,2.085,3.498-0.731,6.312c-16.065,16.064-64.263,64.263-64.263,64.263 c-12.791,12.79-15.836,30.675-4.493,42.02l1.953,1.951c11.343,11.345,29.229,8.301,42.019-4.49c0,0,48.096-48.097,64.128-64.128 c2.951-2.951,6.448-0.866,6.448-0.866C169.958,262.938,231.923,256.629,273.587,214.965z M118.711,191.71 c-36.288-36.288-36.287-95.332,0.001-131.62c36.288-36.287,95.332-36.288,131.619,0c36.288,36.287,36.288,95.332,0,131.62 C214.043,227.996,155,227.996,118.711,191.71z"/> <g> <path d="M126.75,118.424c-1.689,0-3.406-0.332-5.061-1.031c-6.611-2.798-9.704-10.426-6.906-17.038 c17.586-41.559,65.703-61.062,107.261-43.476c6.611,2.798,9.704,10.426,6.906,17.038c-2.799,6.612-10.425,9.703-17.039,6.906 c-28.354-11.998-61.186,1.309-73.183,29.663C136.629,115.445,131.815,118.424,126.75,118.424z"/> </g> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> ',
		color: Sheet.rawsvg2
	},
	//rawsvg3:{img:'<?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 286.9 286.9" style="enable-background:new 0 0 286.9 286.9;" xml:space="preserve" > <g> <polygon points="248.65,76.5 181.65,76.5 210.35,0 95.65,0 38.25,153 86.05,153 38.25,286.9 	"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>' ,
	rawsvg2: {
		img: '<?xml version="1.0" encoding="iso-8859-1"?> <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 334 334" style="enable-background:new 0 0 334 334;" xml:space="preserve"> <g> <g> <path d="M298.6,84.4c0.4-0.4,0.4-0.4,0-0.8c0-0.4-0.4-0.8-0.4-1.2c0-0.4-0.4-0.4-0.4-0.8c0-0.4-0.4-0.8-0.4-1.2 c0-0.4-0.4-0.4-0.4-0.8c-0.4-0.4-0.4-0.8-0.8-0.8l-76-76c-0.4-0.4-1.2-0.8-1.6-1.2c-0.4,0-0.4-0.4-0.8-0.4 c-0.4-0.4-0.8-0.4-1.2-0.4c-0.4,0-0.4,0-0.8-0.4c-0.4,0-0.8-0.4-1.2-0.4c-0.4,0-1.2,0-1.6,0h-0.4H73.8C63,0,53.4,4.4,46.2,11.6 C39,18.4,35,28.4,35,38.8v256c0,10.8,4.4,20.4,11.6,27.6c7.2,7.2,16.8,11.6,27.6,11.6h186.4c10.8,0,20.4-4.4,27.6-11.6 c6.8-7.2,10.8-17.2,10.8-27.6V86.4C299,85.6,299,84.8,298.6,84.4z M222.6,34.8L264.2,76h-22.8c-5.2,0-9.6-2-13.2-5.6 c-3.2-3.2-5.6-8-5.6-13.2V34.8z M278.6,294.8c0,5.2-2,9.6-5.6,13.2c-3.2,3.2-8,5.6-13.2,5.6h-186c-5.2,0-9.6-2-13.2-5.6 c-3.2-3.2-5.6-8-5.6-13.2v-256c0-5.2,2-9.6,5.6-13.2c3.2-3.2,8-5.6,13.2-5.6h128.4v37.2c0,10.8,4.4,20.4,11.6,27.6 s16.8,11.6,27.6,11.6h37.2V294.8z"/> </g> </g> <g> <g> <path d="M241,123.6H93c-5.6,0-10.4,4.4-10.4,10.4S87,144.4,93,144.4h148c5.6,0,10.4-4.4,10.4-10.4S247,123.6,241,123.6z"/> </g> </g> <g> <g> <path d="M241,189.2H93c-5.6,0-10.4,4.4-10.4,10.4c0,5.6,4.4,10.4,10.4,10.4h148c5.6,0,10.4-4.4,10.4-10.4 C251,194,246.6,189.2,241,189.2z"/> </g> </g> <g> <g> <path d="M241,254.8H93c-5.6,0-10.4,4.4-10.4,10.4c0,5.6,4.4,10.4,10.4,10.4h148c5.6,0,10.4-4.4,10.4-10.4 C251,259.6,246.6,254.8,241,254.8z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> ',
		color: Sheet.rawsvg3
	},
	//rawsvg4:{img:'<svg viewBox="-41 0 511 512" xmlns="http://www.w3.org/2000/svg"><path d="m73.460938 185.210938v72.316406c0 40.027344-14.441407 78.570312-39.789063 108.691406h363.113281c-25.347656-30.121094-39.789062-68.664062-39.789062-108.691406v-72.316406c0-78.171876-63.597656-141.769532-141.765625-141.769532-78.171875 0-141.769531 63.597656-141.769531 141.769532zm0 0"/><path d="m10.886719 445.113281h408.6875v-48.878906h-408.6875zm0 0"/><path d="m215.230469 512c20.476562 0 37.175781-16.476562 37.539062-36.867188h-75.078125c.359375 20.390626 17.0625 36.867188 37.539063 36.867188zm0 0"/><path d="m140.390625 27.4375-12.175781-27.4375c-77.582032 34.429688-127.714844 111.5-127.714844 196.351562h30.015625c0-72.992187 43.128906-139.296874 109.875-168.914062zm0 0"/><path d="m399.941406 196.351562h30.015625c0-84.851562-50.128906-161.921874-127.714843-196.351562l-12.175782 27.4375c66.746094 29.617188 109.875 95.921875 109.875 168.914062zm0 0"/></svg>',
	rawsvg3: {
		img: '<?xml version="1.0" encoding="UTF-8"?><svg id="Capa_1" enable-background="new 0 0 511.982 511.982" viewBox="0 0 511.982 511.982" xmlns="http://www.w3.org/2000/svg"><g><path d="m255.991 169.039c-30.327 0-55 24.673-55 55 0 25.127 16.943 46.356 40 52.904v171.096c0 8.284 6.716 15 15 15s15-6.716 15-15v-171.096c23.057-6.547 40-27.777 40-52.904 0-30.327-24.673-55-55-55zm0 80c-13.785 0-25-11.215-25-25s11.215-25 25-25 25 11.215 25 25-11.215 25-25 25z"/><path d="m186.597 143.845c-5.857-5.858-15.354-5.858-21.213 0-46.505 46.503-46.512 121.781 0 168.291 5.859 5.858 15.355 5.858 21.213 0 5.858-5.857 5.858-15.355 0-21.213-34.78-34.779-34.786-91.08 0-125.865 5.858-5.858 5.858-15.356 0-21.213z"/><path d="m346.597 143.845c-5.857-5.857-15.355-5.857-21.213 0s-5.858 15.355 0 21.213c34.701 34.701 34.701 91.164 0 125.865-5.858 5.857-5.858 15.355 0 21.213 5.859 5.858 15.355 5.858 21.213 0 46.399-46.397 46.399-121.894 0-168.291z"/><path d="m141.342 119.803c5.858-5.857 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.213 0-71.352 71.352-71.352 187.449 0 258.801 5.856 5.857 15.354 5.86 21.213 0 5.858-5.857 5.858-15.355 0-21.213-59.654-59.655-59.654-156.72 0-216.375z"/><path d="m391.852 98.59c-5.857-5.857-15.355-5.857-21.213 0s-5.858 15.355 0 21.213c59.654 59.655 59.654 156.72 0 216.375-5.858 5.857-5.858 15.355 0 21.213 5.859 5.858 15.355 5.858 21.213 0 71.352-71.352 71.352-187.449 0-258.801z"/><path d="m96.087 74.548c5.858-5.857 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.213 0-99.941 99.94-99.724 249.587 0 349.311 5.856 5.857 15.354 5.86 21.213 0 5.858-5.857 5.858-15.355 0-21.213-87.475-87.477-87.475-219.408 0-306.885z"/><path d="m437.107 53.335c-5.857-5.857-15.355-5.857-21.213 0s-5.858 15.355 0 21.213c87.477 87.477 87.477 219.408 0 306.885-5.858 5.857-5.858 15.355 0 21.213 5.859 5.858 15.355 5.858 21.213 0 99.94-99.939 99.725-249.587 0-349.311z"/></g></svg>',
		color: '#ff0066'
	},
	


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
var ParSelect = "";
//Окно параметра. Панель выбора границ параметров и тд...
function parPan(name_select) {
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
	ParSelect = name_select;
	if (refresh) { refresh = false; online = true; }
	/* $("#nastrgraf").css('background-color', Sheet.curcolorval);
	$('#nastrgraf').iziModal('open'); */
	$("#myModal7").modal('show');

}
//Кнопка OK для окна параметра
function parOK() {
	/* PArmyDialog.hide(); */
	/* console.log(basePar);
	console.log(" gggiugFFFF"); */
	//Изменение значений атрубиутов окна Запись
	basePar[String(ParSelect)].min = Number($("#begedge").val());
	basePar[String(ParSelect)].max = Number($("#endedge").val());
	basePar[String(ParSelect)].color = String($("#parcolor").val());
	basePar[String(ParSelect)].log = $("#parlog").is(':checked');
	basePar[String(ParSelect)].unit = String($("#nameUnit").val());
	//Проверить "Удалить параметр"
	if ($("#pardel").prop("checked")) {
		//Текущая позиция
		var curcol = basePar[String(ParSelect)].poz.x;
		var curnumb = basePar[String(ParSelect)].poz.y;
		//парметры
		for (key in basePar) {

			if (basePar[key].poz.x == curcol && basePar[key].poz.y > curnumb) { basePar[key].poz.y -= 1; }
		}

		for (key in txtPar) {

			if (txtPar[key].poz.x == curcol && txtPar[key].poz.y > curnumb) { txtPar[key].poz.y -= 1; }
		}

		for (key in txtOknOPar) {

			if (txtOknOPar[key].poz.x == curcol && txtOknOPar[key].poz.y > curnumb) { txtOknOPar[key].poz.y -= 1; }
		}
		for (key in geoOknOPar) {

			if (geoOknOPar[key].poz.x == curcol && geoOknOPar[key].poz.y > curnumb) { geoOknOPar[key].poz.y -= 1; }
		}

		//Удалить параметр
		delete (basePar[String(ParSelect)]);
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
function colPan(name_select) {

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
		if (basePar[keey].poz.x == Number(name_select.toString().substr(3))) {
			$('#colitems').append($('<option>',
				{
					value: basePar[keey].par,
					text: basePar[keey].txt
				}));
			numbcol += 1;
		}
	}
	$('#segedge').attr('min', 0);
	//$('#segedge').attr('max', numbcol);
	$('#segedge').attr('value', -1);
	$('#colitems').on('change', function () {
		//console.log($("#colitems").prop('selectedIndex'));
		//console.log($("#colitems").prop('selectedName'));
		selpar = $("#colitems").prop('value');
		//console.log(selpar);
		var cur = 0;
		for (var keey in basePar) {

			if (basePar[keey].poz.x == Number(name_select.toString().substr(3)) && cur == Number($("#colitems").prop('selectedIndex'))) {
				document.getElementById("segedge").value = basePar[keey].poz.y;
			}
			cur += 1;
		}
	});

	ParSelect = name_select;

	/* $("#nastrstolb").css('background-color', Sheet.curcolorval);
	$('#nastrstolb').iziModal('open'); */

	//bootstrap modal
	$("#myModal6").modal('show');

}



//Кнопка OK для окна параметра
function colOK() {
	/* PArmyDialog1.hide(); */
	//Цвет областей
	Columns[String(ParSelect)].colorhead = String($("#colcolor1").val());
	Columns[String(ParSelect)].colorbody = String($("#colcolor2").val());
	//Шаг сетки
	Columns[String(ParSelect)].grid.num = Number($("#gridnum").val());
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
function colPan1(name_select) {
if (curtemp == 'time'){
	ParSelect = name_select;
	var numbcol = 0;
	//Очистка списка
	$('#colitems2').empty();
	$('#colitems7').empty();
	$('#colitems7').append($('<option>', { value: basePar, text: 'Графический параметр' }));
	$('#colitems7').append($('<option>', { value: txtPar, text: 'Цифровой  параметр' }));
	$('#colitems7').append($('<option>', { value: txtOknOPar, text: 'Название скважины' }));
	$("#colitems2").show();
	$("#colitems22").show();

	$("#colitems7").change(function () {
		if ($("#colitems7")[0].selectedIndex == 2) {
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
				value: keey,
				text: bigPar[keey].txt
			}));
	}
}
if (curtemp == 'depth'){
	ParSelect = name_select;
	var numbcol = 0;
	//Очистка списка
	$('#colitems2').empty();
	$('#colitems7').empty();
	$('#colitems7').append($('<option>', { value: basePar, text: 'Графический параметр' }));
	$('#colitems7').append($('<option>', { value: txtPar, text: 'Цифровой  параметр' }));
	$('#colitems7').append($('<option>', { value: txtPar, text: 'Геология' }));
	$('#colitems7').append($('<option>', { value: txtOknOPar, text: 'Название скважины' }));
	$("#colitems2").show();
	$("#colitems22").show();

	$("#colitems7").change(function () {
		if ($("#colitems7")[0].selectedIndex == 3) {
			$("#colitems2").hide();
			$("#colitems22").hide();
		}

		if ($("#colitems7")[0].selectedIndex == 0 || $("#colitems7")[0].selectedIndex == 1 ) {
			$('#colitems2').empty();
			//добавление в список
			for (var keey in bigPar) {
				
				$('#colitems2').append($('<option>',
					{
						value: keey,
						text: bigPar[keey].txt
					}));
			}
			$("#colitems2").show();
			$("#colitems22").show();
		}
		
		if ($("#colitems7")[0].selectedIndex == 2 ) {
			$('#colitems2').empty();
			//добавление в список
			for (var keey in ShablongeoOknOPar) {
				$('#colitems2').append($('<option>',
					{
						value: keey,
						text: ShablongeoOknOPar[keey].txt
					}));
			}
			$("#colitems2").show();
			$("#colitems22").show();
		}
	});



	//добавление в список
	for (var keey in bigPar) {
		$('#colitems2').append($('<option>',
			{
				value: keey,
				text: bigPar[keey].txt
			}));
	}
}

$("#myModal5").modal('show');

}

function colOK2() {
	//console.log($("#colitems2").val(), ParSelect,);
	//создание объекта

	var curPar = {};
	var curXpoz = 1;
	//Поиск последнего параметра в столбце для добавление в конец
	for (var keey in basePar) {
		//console.log(basePar[keey].poz.y,Number(ParSelect.substr(3)));
		if (basePar[keey].poz.x == Number(ParSelect.substr(3))) {
			//console.log(basePar[keey]);
			if (basePar[keey].poz.y > curXpoz) {
				curXpoz = basePar[keey].poz.y;
			}
		}
	}
	for (var keey in txtPar) {
		//console.log(basePar[keey].poz.y,Number(ParSelect.substr(3)));
		if (txtPar[keey].poz.x == Number(ParSelect.substr(3))) {
			//console.log(txtPar[keey]);
			if (txtPar[keey].poz.y > curXpoz) {
				curXpoz = txtPar[keey].poz.y;
			}
		}
	}
	for (var keey in txtOknOPar) {
		//console.log(basePar[keey].poz.y,Number(ParSelect.substr(3)));
		if (txtOknOPar[keey].poz.x == Number(ParSelect.substr(3))) {
			//console.log(txtOknOPar[keey]);
			if (txtOknOPar[keey].poz.y > curXpoz) {
				curXpoz = txtOknOPar[keey].poz.y;
			}
		}
	}


	//Выбран графический параметр
	if ($("#colitems7")[0].selectedIndex == 0) {
		//Копирование в объект
		curPar = JSON.stringify(Object.assign({}, bigPar[String($("#colitems2").val())]));
		curPar = JSON.parse(curPar);
		curPar.poz.y = curXpoz + 1;
		curPar.poz.x = Number(ParSelect.substr(3));
		//console.log(curPar);
		var idr = makeid();
		//Создание новой записи параметра!!!
		//basePar[String('par'+(Object.keys(basePar).length+1))]=curPar;
		basePar[String('par' + idr)] = curPar;
	}


	//Выбран цифровой параметр
	if ($("#colitems7")[0].selectedIndex == 1) {
		//Копирование в объект
		curPar = JSON.stringify(Object.assign({}, ShablontxtPar['par0']));
		curPar = JSON.parse(curPar);

		curPar.par = bigPar[String($("#colitems2").val())].par;
		curPar.txt = bigPar[String($("#colitems2").val())].txt;
		curPar.unit= bigPar[String($("#colitems2").val())].unit;
		//curPar.color= bigPar[String($("#colitems2").val())].unit;
		curPar.poz.y = curXpoz + 1;
		curPar.poz.x = Number(ParSelect.substr(3));
		//console.log(curPar);
		var idr = makeid();
		//var idr = bigPar[String($("#colitems2").val())].par;
		//Создание новой записи параметра!!!
		//basePar[String('par'+(Object.keys(basePar).length+1))]=curPar;
		txtPar[String('par' + idr)] = curPar;
		/* console.log (txtPar); */
	}

	//Выбрана геология
	if (($("#colitems7")[0].selectedIndex == 2 && curtemp=='depth') ) {
		//Копирование в объект
		curPar = JSON.stringify(Object.assign({}, ShablongeoOknOPar['par'+$("#colitems2")[0].selectedIndex]));
		curPar = JSON.parse(curPar);

		curPar.par = ShablongeoOknOPar['par'+$("#colitems2")[0].selectedIndex].par;
		curPar.txt = ShablongeoOknOPar['par'+$("#colitems2")[0].selectedIndex].txt;
		curPar.poz.y = curXpoz + 1;
		curPar.poz.x = Number(ParSelect.substr(3));
		//console.log(curPar);
		var idr = makeid();
		//var idr = bigPar[String($("#colitems2").val())].par;
		//Создание новой записи параметра!!!
		//basePar[String('par'+(Object.keys(basePar).length+1))]=curPar;
		geoOknOPar[String('par' + idr)] = curPar;
		// for (var keey in geoOknOPar){
		//  	// console.log (geoOknOPar[keey].txt);
		// }
		/* console.log (txtPar); */
	}

	//Выбрана текстовая метка
	if (($("#colitems7")[0].selectedIndex == 2 && curtemp=='time') || ($("#colitems7")[0].selectedIndex == 3 && curtemp=='depth')) {
		//Копирование в объект
		curPar = JSON.stringify(Object.assign({}, ShablontxtOknOPar['par0']));
		curPar = JSON.parse(curPar);

		curPar.par = ShablontxtOknOPar['par0'].par;
		curPar.txt = ShablontxtOknOPar['par0'].txt;
		curPar.poz.y = curXpoz + 1;
		curPar.poz.x = Number(ParSelect.substr(3));
		//console.log(curPar);
		var idr = makeid();
		//var idr = bigPar[String($("#colitems2").val())].par;
		//Создание новой записи параметра!!!
		//basePar[String('par'+(Object.keys(basePar).length+1))]=curPar;
		txtOknOPar[String('par' + idr)] = curPar;
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




//Выбор даты или глубины
function colPan3() {
	refresh = false;
	if (curtemp == 'time'){
		$("#myModal2").modal('show');}
	if (curtemp == 'depth'){
		$("#depth222").val(start_time);

		$("#myModal2depth").modal('show');}
}

function colOK3() {
	
	if (curtemp == 'time'){
	refresh = false; //navigation.js
	var dataEnd = $('input[name="date1"]').val();
	start_time = Math.round(Number((new Date(dataEnd)).getTime()) / 1000) - 14400;
	end_time = start_time + disp_time;
	Sheet.Kzoom = Number($("#zooom1").val());
	read_random();
	}

	if (curtemp == 'depth'){
		refresh = false; //navigation.js
		start_time = Number($("#depth222").val());
		// Sheet.Kzoomdepth = Number($("#zzzzooom1depth option:selected").text())/10;
		// Kzoomdepth = Sheet.Kzoomdepth;
		read_next();
	}
	
}


//Кнопка лупа	
function colPan4() {

	// refresh = false;
	$('#form7').empty();
	/* PArmyDialog4.show(); */
	/* $("#lupa").css('background-color', Sheet.curcolorval);
	$('#lupa').iziModal('open'); */
	//bootstrap modal
	$('#zzm1 option').remove();
	// ?append('<option selected="selected" value="test">White</option>');
	//добавление в список

	for (var keey in cams) {
		$('#zzm1').append($('<option>',
			{
				value: cams[keey].wellN,
				text: cams[keey].txt
			}));
		console.log(cams[keey]);
	}
	//console.log(cams[keey]);

	//статус подключения
	//$('#form7').empty();
	$("#myModal3").modal('show');


}

var namecams = '';
var streamId = '';
//Количество попыток
var jumpjump = 0;
//Проверка стрима
var checkstream = false;
// var frame;

function colOK4cams(nnamecams) {
	// $("#myModal3").on("hidden.bs.modal", function () {
	// 	checkstream = false;
	// });
	//Проверка Проверка существующих потоков
	// namecams=$("#zzm1 option:selected").text() +'_'+$("#zzzooom1 option:selected").text();// +'_'+$("#zzzzooom1 option:selected").text();
	//console.log(nnamecams);
	//$('#progress'+namecams).prop('width','50%');

	jumpjump = 0;
	checkstream = true;
	namecams = nnamecams.slice(3);
	let pgg = document.querySelector('#progress' + namecams);
	pgg.setAttribute('aria-valuenow', '0');
	pgg.setAttribute('style', 'width:' + '0%')
	//console.log(namecams);
	getstatcamscams('check', namecams);
}




function colOK4() {
	$("#myModal3").on("hidden.bs.modal", function () {
		checkstream = false;
	});
	//Проверка Проверка существующих потоков
	namecams = $("#zzm1 option:selected").text() + '_' + $("#zzzooom1 option:selected").text();// +'_'+$("#zzzzooom1 option:selected").text();
	// console.log(namecams);
	jumpjump = 0;
	checkstream = true;
	getstatcams('check', namecams);



}


//Добавление столбца
function addcoll() {


	for (key in Columns) {
	}
	var curCol = {};
	//Копирование в объект
	//curCol = JSON.stringify(Object.assign({}, Columns[String('col'+(Object.keys(Columns).length-1))]));
	curCol = JSON.stringify(Object.assign({}, Columns[key]));
	curCol = JSON.parse(curCol);
	/* console.log(Columns[String('col'+(Number(key.substr(3))))].size.w); */
	//Половиним преидущий столбец
	Columns[String('col' + (Number(key.substr(3))))].size.w = Number(Columns[String('col' + (Number(key.substr(3))))].size.w) / 2;
	curCol.poz.x = Columns[String('col' + (Number(key.substr(3))))].poz.x + Columns[String('col' + (Number(key.substr(3))))].size.w;
	Columns[String('col' + (Number(key.substr(3)) + 1))] = curCol;
	Columns[String('col' + (Number(key.substr(3)) + 1))].size.w = Columns[String('col' + (Number(key.substr(3))))].size.w;
	/* console.log(Columns); */
	repaint();
}




//Кнопка настройки формы
function colPan5() {
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
				value: keey,
				text: fonts[keey].name
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
	
	//$('#font option[text='+ Sheet.fnt +']').prop('selected', true);
	//$('#font').find('option[text="' + Sheet.fnt + '"]').prop("selected",true);
	$('#font option:contains("' + Sheet.fnt + '")').prop('selected', true);
	
	//$("#font > select > option[value=" + Sheet.fnt + "]").prop("selected",true);
	// console.log(Sheet.fnt+'  '+$('#font option:selected').text());

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
	$("#myModal1").modal({ show: true });

	//$("#width_line_p").attr("value", 500);
}
//ок старый модал
function colOK5() {
	/* PArmyDialog5.hide(); */




	Sheet.width_line_p = Number($("#width_line_p").val());
	Sheet.width_gxf_line = Number($("#width_gxf_line").val());
	Sheet.syscolor = String($("#syscolor").val());
	Sheet.fnt = String($('#font option:selected').text());
	Sheet.K_size_txt = Number($("#K_size_txt").val());
	Sheet.K_size_txt_mobile = Number($("#K_size_txt_mobile").val());
	Sheet.width_gxf_line = Number($("#width_gxf_line").val());
	Sheet.markheight = Number($("#markheight").val());
	Sheet.markcol = String($("#markcol").val());
	Columns['col0'].fill = String($("#marktime").val());
	Sheet.marktime = String($("#marktime").val());
	Sheet.cmtsize = Number($("#cmtsize").val());
	Sheet.cmtcolor = String($("#cmtcolor").val());
	Sheet.icosize = Number($("#icosize").val());
	Sheet.icosizem = Number($("#icosizem").val());
	Sheet.grcol1 = String($("#grcol1").val());
	Sheet.grcol2 = String($("#grcol2").val());
	Sheet.dasharray = String($("#dasharray").val());
	Sheet.dashcol1 = String($("#dashcol1").val());
	Sheet.holcol = String($("#holcol").val());
	Sheet.holhide = Number($("#holhide").val());
	Sheet.height_value = Number($("#height_value").val());
	Sheet.width_value = Number($("#width_value").val());
	Sheet.curcolorval = String($("#curcolorval").val());
	Sheet.faderr = Number($("#faderr").val());
	Sheet.delcol = String($("#delcol").val());
	Sheet.toolcol = String($("#toolcol").val());
	Sheet.pluscol = String($("#pluscol").val());
	Sheet.rawsvg0 = String($("#rawsvg0").val());
	Sheet.rawsvg1 = String($("#rawsvg1").val());
	Sheet.rawsvg2 = String($("#rawsvg2").val());
	Sheet.rawsvg3 = String($("#rawsvg3").val());
	Sheet.rawsvg4 = String($("#rawsvg4").val());
	//console.log($("#fonbut").is(':checked'));
	//editbut
	Sheet.editscrn = $("#editscrn").is(':checked');
	Sheet.fonbut = $("#fonbut").is(':checked');
	//console.log(Sheet.editscrn);
	//alert(editscrn);
	//$('#modal').iziModal('close');

	repaint();


}


//Выбранный параметр текстовая метка
function colPan6(name_select) {
	refresh = false;
	$("#pardel6").prop("checked", false);
	//Установка атрибутов цвет
	$("#parcolor6").val(txtOknOPar[name_select].color);
	ParSelect = name_select;
	/* PArmyDialog6.show(); */
	/* $("#nastrtxtlabel").css('background-color', Sheet.curcolorval);
	$('#nastrtxtlabel').iziModal('open'); */
	$("#myModal9").modal('show');

}

function colOK6() {
	/* PArmyDialog6.hide(); */

	refresh = false; //navigation.js
	txtOknOPar[ParSelect].color = String($("#parcolor6").val());

	//Проверить "Удалить параметр"
	if ($("#pardel6").prop("checked")) {
		//Текущая позиция
		var curcol = txtOknOPar[String(ParSelect)].poz.x;
		var curnumb = txtOknOPar[String(ParSelect)].poz.y;
		//парметры
		for (key in basePar) {

			if (basePar[key].poz.x == curcol && basePar[key].poz.y > curnumb) { basePar[key].poz.y -= 1; }
		}

		for (key in txtPar) {

			if (txtPar[key].poz.x == curcol && txtPar[key].poz.y > curnumb) { txtPar[key].poz.y -= 1; }
		}

		for (key in txtOknOPar) {

			if (txtOknOPar[key].poz.x == curcol && txtOknOPar[key].poz.y > curnumb) { txtOknOPar[key].poz.y -= 1; }
		}
		for (key in geoOknOPar) {

			if (geoOknOPar[key].poz.x == curcol && geoOknOPar[key].poz.y > curnumb) { geoOknOPar[key].poz.y -= 1; }
		}

		//Удалить параметр
		delete (txtOknOPar[String(ParSelect)]);
	}
	/* $('#nastrtxtlabel').iziModal('close'); */

	repaint();
}

//Выбранный параметр Геология
function colPan66(name_select) {
	refresh = false;
	$("#pardel66").prop("checked", false);
	//Установка атрибутов цвет
	$("#parcolor66").val(geoOknOPar[name_select].color);
	$("#namePar22").text(geoOknOPar[name_select].txt);
	
	ParSelect = name_select;
	/* PArmyDialog6.show(); */
	/* $("#nastrtxtlabel").css('background-color', Sheet.curcolorval);
	$('#nastrtxtlabel').iziModal('open'); */
	$("#myModal99").modal('show');

}

function colOK66() {
	/* PArmyDialog6.hide(); */

	refresh = false; //navigation.js
	geoOknOPar[ParSelect].color = String($("#parcolor66").val());

	//Проверить "Удалить параметр"
	if ($("#pardel66").prop("checked")) {
		//Текущая позиция
		var curcol = geoOknOPar[String(ParSelect)].poz.x;
		var curnumb = geoOknOPar[String(ParSelect)].poz.y;
		//парметры
		for (key in basePar) {

			if (basePar[key].poz.x == curcol && basePar[key].poz.y > curnumb) { basePar[key].poz.y -= 1; }
		}

		for (key in txtPar) {

			if (txtPar[key].poz.x == curcol && txtPar[key].poz.y > curnumb) { txtPar[key].poz.y -= 1; }
		}

		for (key in txtOknOPar) {

			if (txtOknOPar[key].poz.x == curcol && txtOknOPar[key].poz.y > curnumb) { txtOknOPar[key].poz.y -= 1; }
		}

		for (key in geoOknOPar) {

			if (geoOknOPar[key].poz.x == curcol && geoOknOPar[key].poz.y > curnumb) { geoOknOPar[key].poz.y -= 1; }
		}
		//Удалить параметр
		delete (geoOknOPar[String(ParSelect)]);
	}
	/* $('#nastrtxtlabel').iziModal('close'); */

	repaint();
}


//Выбранный параметр Текстовый параметр
function colPan7(name_select) {
	refresh = false;
	$("#pardel7").prop("checked", false);
	//Установка атрибута название
	$("#namePar1").text(txtPar[name_select].txt);
	//Установка атрибутов цвет
	$("#parcolor7").val(txtPar[name_select].color);
	//Положение параметра
	$("#txt7").val(txtPar[name_select].step);
	ParSelect = name_select;
	/* PArmyDialog7.show(); */
	/* $("#nastrtxtpar").css('background-color', Sheet.curcolorval);
	$('#nastrtxtpar').iziModal('open'); */
	$("#myModal8").modal('show');

}

function colOK7() {
	/* PArmyDialog7.hide(); */

	refresh = false; //navigation.js
	//Цвет
	txtPar[ParSelect].color = String($("#parcolor7").val());
	//Положение
	txtPar[ParSelect].step = String($("#txt7").val());
	//Проверить "Удалить параметр"
	if ($("#pardel7").prop("checked")) {
		//Текущая позиция
		var curcol = txtPar[String(ParSelect)].poz.x;
		var curnumb = txtPar[String(ParSelect)].poz.y;
		//парметры
		for (key in basePar) {

			if (basePar[key].poz.x == curcol && basePar[key].poz.y > curnumb) { basePar[key].poz.y -= 1; }
		}

		for (key in txtPar) {

			if (txtPar[key].poz.x == curcol && txtPar[key].poz.y > curnumb) { txtPar[key].poz.y -= 1; }
		}

		for (key in txtOknOPar) {

			if (txtOknOPar[key].poz.x == curcol && txtOknOPar[key].poz.y > curnumb) { txtOknOPar[key].poz.y -= 1; }
		}

		//Удалить параметр
		delete (txtPar[String(ParSelect)]);
	}
	/* $('#nastrtxtpar').iziModal('close'); */
	/*console.log("тут");
	 $("#myModal8").modal('show'); */
	repaint();
}


//Список файлов
var filesss;
//Открыть файл
function colPan8(name_select) {
	refresh = false;
	filesss = {};
	$('#colitems8').empty();

	readddir();
	//из json объекта в массив
	/* var arr = Object.values(filesss); */
	for (keey in filesss) {
		$('#colitems8').append($('<option>',
			{
				value: filesss[keey],
				text: filesss[keey]
			}));
	}
	//Длина объекта
	/* alert(filesss.length); */
	/* PArmyDialog8.show(); */
	/* $("#openfile").css('background-color', Sheet.curcolorval);
	$('#openfile').iziModal('open'); */
	$("#myModal8").modal('show');

}
//Загрузить форму файл при старте
function colOK8start(name_start) {
	// console.log(Sheet.editscrn);
	var name = name_start;
	toponof = true;
	loadddata(name);
	refresh=true;
	if (curtemp=='time'){
	read_next();}
	if (curtemp=='depth'){read_depth_last();}

	onoffpan();
	



}

//Загрузить файл
function colOK8() {
	/* PArmyDialog8.hide(); */
	refresh = false; //navigation.js
	toponof = true;
	if (($("#colitems9")[0].selectedIndex) > -1) {
		

		//Сохранить в локальное хранилище
		
		if (curtemp=='time'){
			colPan9save(wellName, skv, namecmt, filesss[$("#colitems9")[0].selectedIndex], formnamedepth);
			formname = filesss[$("#colitems9")[0].selectedIndex];
			loadddata(formname);
		}
		if (curtemp=='depth'){
			colPan9save(wellName, skv, namecmt, formname, filesss[$("#colitems9")[0].selectedIndex]);
			formnamedepth = filesss[$("#colitems9")[0].selectedIndex];
			loadddata(formdirdepth+formnamedepth);
		}

		repaint();
	} else {

	}
	onoffpan();
	/* $('#savefile').iziModal('close'); */


}

//Сохранить в локальное хранилище текущие настройки
function colPan9save(wellName, skv, namecmt, formname, formnamedepth) {
	localStorage.setItem(_uz[0],
		window.btoa(unescape(encodeURIComponent(wellName + ',' + skv + ',' + namecmt + ',' + formname + ',' + formnamedepth ))));



}


//Сохранить файл
function colPan9(name_select) {
	refresh = false;
	filesss = {};
	$('#colitems9').empty();
	if (curtemp =='time'){
	$("#colitems99").val(formname);}
	if (curtemp == 'depth'){
		$("#colitems99").val(formnamedepth);}
	//Чтение списка  файлов
	readddir();
	//из json объекта в массив
	/* var arr = Object.values(filesss); */
	for (keey in filesss) {
		let strarr = filesss[keey].split('/');
		let str = strarr[strarr.length-1];
		filesss[keey]= str;
		//console.log(str);
		$('#colitems9').append($('<option>',
			{
				value: str,
				text: str
			}));

	}
	//`Выбор файла для перезаписи
	$("#colitems9").change(function () {
		$("#colitems99").val(filesss[$("#colitems9")[0].selectedIndex]);
	});
	//Длина объекта
	/* alert(filesss.length); */
	/* PArmyDialog9.show(); */

	/* $("#savefile").css('background-color', Sheet.curcolorval);
	$('#savefile').iziModal('open'); */
	$("#myModal10").modal('show');

}

function colOK9() {
	/* PArmyDialog9.hide(); */
	//Восстановление размера шапки
	if (!onoffpan){
		for (var curcol in Columns){
			Columns[curcol].size.h=backcolh;
		}
		Sheet.disp_up= backsheetdisp;

	}
	Sheet.editscrn = false;
	refresh = false; //navigation.js
	if (($("#colitems99").val()) != "") {
		
		
		
		if (curtemp=='time'){
			//Сохранить в локальное хранилище
			colPan9save(wellName, skv, namecmt, $("#colitems99").val(), formnamedepth);
			formname = String($("#colitems99").val());
			savedata(formname);
		}
		if (curtemp=='depth'){
			//Сохранить в локальное хранилище
			colPan9save(wellName, skv, namecmt, formname, $("#colitems99").val());
			formnamedepth = String($("#colitems99").val());
			savedata(formdirdepth+ formnamedepth);
		
		}

		repaint();
		/* loadddata(filesss[$("#colitems8")[0].selectedIndex]); */
	} else {

	}
	/* $('#savefile').iziModal('close'); */

}


//Удаление дубликатов объектов
function removeDuplicates(arr) {

	const result = [];
	const duplicatesIndices = [];

	// Перебираем каждый элемент в исходном массиве
	arr.forEach((current, index) => {

		if (duplicatesIndices.includes(index)) return;

		result.push(current);

		// Сравниваем каждый элемент в массиве после текущего
		for (let comparisonIndex = index + 1; comparisonIndex < arr.length; comparisonIndex++) {

			const comparison = arr[comparisonIndex];
			const currentKeys = Object.keys(current);
			const comparisonKeys = Object.keys(comparison);

			// Проверяем длину массивов
			if (currentKeys.length !== comparisonKeys.length) continue;

			// Проверяем значение ключей
			const currentKeysString = currentKeys.sort().join("").toLowerCase();
			const comparisonKeysString = comparisonKeys.sort().join("").toLowerCase();
			if (currentKeysString !== comparisonKeysString) continue;

			// Проверяем индексы ключей
			let valuesEqual = true;
			for (let i = 0; i < currentKeys.length; i++) {
				const key = currentKeys[i];
				if (current[key] !== comparison[key]) {
					valuesEqual = false;
					break;
				}
			}
			if (valuesEqual) duplicatesIndices.push(comparisonIndex);

		} // Конец цикла
	});
	return result;
}

//Выбор скважины
var wellSelectBase = '';
var wellSelectName = '';
function colPan10(name_select) {
	refresh = false;
	
	
	$('#wellN').empty();
	$('#wellNdepth').empty();
	if (curtemp == 'time') {
		//добавление в список
		for (var keey in wells) {
			$('#wellN').append($('<option>',
				{
					value: wells[keey].wellN,
					text: wells[keey].txt
				}));
		}
		//Восстановление выбора
		$('#wellN').val(wellName);


		if ((Object.keys(wells).length > 0)) {
			for (var keey in wells) {
				if (wells[keey].txt == skv) {
					$("#wellNwork1").text(wells[keey].type);
					$("#wellNwork2").text(wells[keey].typeStn);
					$("#wellNwork3").text(wells[keey].nach);
					$("#wellNwork4").text(wells[keey].tel);
					$("#wellNwork5").text(wells[keey].email);
				}
			}
		}

		//Выбранная скважина
		$('#wellN').on('change', function () {
			wellSelectBase = $("#wellN").prop('value');
			wellSelectName = $("#wellN option:selected").text();

			for (var keey in wells) {
				if (wells[keey].txt == wellSelectName) {
					$("#wellNwork1").text(wells[keey].type);
					$("#wellNwork2").text(wells[keey].typeStn);
					$("#wellNwork3").text(wells[keey].nach);
					$("#wellNwork4").text(wells[keey].tel);
					$("#wellNwork5").text(wells[keey].email);
				}
			}
		
		});

		$("#myModal4").modal('show');
	};


	if (curtemp == 'depth') {
		//добавление в список
		for (var keey in wells) {
			$('#wellNdepth').append($('<option>',
				{
					value: wells[keey].wellN,
					text: wells[keey].txt
				}));
		}
		//Восстановление выбора
		$('#wellNdepth').val(wellName);


		if ((Object.keys(wells).length > 0)) {
			for (var keey in wells) {
				if (wells[keey].txt == skv) {
					$("#wellNwork1depth").text(wells[keey].type);
					$("#wellNwork2depth").text(wells[keey].typeStn);
					$("#wellNwork3depth").text(wells[keey].nach);
					$("#wellNwork4depth").text(wells[keey].tel);
					$("#wellNwork5depth").text(wells[keey].email);
				}
			}
		}

		//Выбранная скважина
		$('#wellNdepth').on('change', function () {
			wellSelectBase = $("#wellNdepth").prop('value');
			wellSelectName = $("#wellNdepth option:selected").text();

			for (var keey in wells) {
				if (wells[keey].txt == wellSelectName) {
					$("#wellNwork1depth").text(wells[keey].type);
					$("#wellNwork2depth").text(wells[keey].typeStn);
					$("#wellNwork3depth").text(wells[keey].nach);
					$("#wellNwork4depth").text(wells[keey].tel);
					$("#wellNwork5depth").text(wells[keey].email);
				}
			}
		
		});

		$("#myModal13").modal('show');
	};


	if (curtemp == 'video') {
		//удаление старых потоков
		deleteoldcams();
		$('#videoN').empty();

		//let cams={};

		for (var keey in camswell) {
			let no = true;
			let len = document.getElementById("videoN").length
			//console.log(len);
			for (var i = 0; i < len; i++) {
				let curtxt = document.getElementById("videoN").options[i].text;
				//console.log(i);
				if (curtxt == camswell[keey].txt) {
					no = false;
				}

			}
			if (no) {
				$('#videoN').append($('<option>',
					{
						value: camswell[keey].wellN,
						text: camswell[keey].txt
					}));
			}

		}
		$("#myModal12").modal('show');
	}

	if (curtemp == 'svodka') {
		$("#myModal21").modal('show');
	}

}


function colOK10() {

	if (curtemp == 'time') {
		refresh = false; //pong.js
		//$('#wells').iziModal('close');
		skv = wellSelectName;
		wellName = wellSelectBase;
		namecmt = wellName + "kr";
		//Сменить название в шапке
		$('#skvnamelabt').text(skv);
		//Сохранить в локальное хранилище
		colPan9save(wellName, skv, namecmt, formname, formnamedepth);
		refresh = true;
		read_next();
		/* repaint(); */
		/* namecmt=wellSelectBase + "kr"; */
	}
	if (curtemp == 'video') {
		real=$('input[id="real1"]:checked').val();
		//если выбран архив
		if (real!='on'){
			let strd1=$('input[name="startdate1"]').val();
			let strt1=$('input[name="starttime1"]').val();
			let strd2=$('input[name="startdate2"]').val();
			let strt2=$('input[name="starttime2"]').val();
		
			backfuture='?starttime='+strd1.replaceAll('-', '')+'t'+strt1.replaceAll(':', '')+'00z'+
			'&endtime='+strd2.replaceAll('-', '')+'t'+strt2.replaceAll(':', '')+'00z';
			
		}
		let n = document.getElementById("videoN").options.selectedIndex;
		let txt = document.getElementById("videoN").options[n].text;
		$('#skvnamelabt').text(txt);
		adm();
	}

	if (curtemp == 'depth') {
		refresh = false; //pong.js
		online = false;
		//$('#wells').iziModal('close');
		skv = wellSelectName;
		wellName = wellSelectBase;
		namecmt = wellName + "kr";
		//Сменить название в шапке
		$('#skvnamelabt').text(skv);
		//Сохранить в локальное хранилище
		colPan9save(wellName, skv, namecmt, formname, formnamedepth);
		adm4();
		
		// read_now();
		// start_time=Number(d110d[d110d.length-1]['Zaboj']-Kzoomdepth*10);
		// read_now();
		// // read_now_depth();
		// // start_time=Number(d110d[d110d.length-1]['Zaboj']-Kzoomdepth*10);
		// console.log('first read');
		// // read_now_depth();
	}

}


//включение и отключение верхней панели и панели настроек
function onoffpan() {
	// console.log(Sheet.editscrn);
	if (Sheet.editscrn) {
		// $("#bigpan").attr("style", "display:yes");
		//Sheet.icosize=String($("#icosize").val());
		// Sheet.icosizem=String($("#icosizem").val());
		$('#drawing').height($(window).height() - $('#bigpan').height())
	} else {
		// $("#bigpan").attr("style", "display:none");
		// Sheet.icosize=0;
		// Sheet.icosizem=0;
		// $('#drawing').height($(window).height());
		$('#drawing').height($(window).height() - $('#bigpan').height())
	}


}

//редактирование экрана вкл выкл
function colOK11() {
	//refresh = false;
	if (Sheet.editscrn) {
		Sheet.editscrn = false;
	}
	else { Sheet.editscrn = true; }
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
	catch (e) { }
	if (Sheet.vertical) {
		Sheet.vertical = false;
		K_size_txt = 95;
	}
	else {
		Sheet.vertical = true;
		K_size_txt = 73;
	}
	init();

}



//Выбор скважины Bootstrap navi
$(document).ready(function () {


	//Чтение списка скважин
	readskvstart('read', 'skvs', '', '');
	//проверка сессий
	check_session('check', 'active', _ut);

	$(window).bind("beforeunload", function () {
		//удаление старых потоков
		deleteoldcams();
	});


	//ВИДЕО
	//autoPlayYouTubemodal('show');
});
// ресайз окна
$(window).resize(function () {

	onoffpan();

});


//Стоп видео поток
function stopCam(event) {

	//event.preventDefault(); // To prevent following the link (optional)
	$.ajax({
		type: 'POST',
		url: 'https://hydrofalll.ddns.net:5443/LiveApp/rest/broadcasts/stop',
		crossDomain: true,
		data: '{"streamId":"211275258683608619992096"}',
		dataType: 'jsonp',
		success: function (responseData, textStatus, jqXHR) {
			var value = responseData.someKey;
		},
		error: function (responseData, textStatus, errorThrown) {
			alert('POST failed.');
		}
	});
	// $.post('https://hydrofalll.ddns.net:5443/v2/broadcasts/983687349095562644239572/stop', {text: 'Текст'}, function(data){
	// alert(data);});
};


var selectkeey = '';
//Изменить/ удалить  диалог по скважине
function colPan13() {
	$("#myModal13").modal('show');
	for (var keey in wells) {
		if (wells[keey].wellN == String($("#colitems132").val())) {
			selectkeey = keey;
		}
	}

	//console.log('fdsf');
}
//Изменить запись
function colOK13() {
	//Изменить выбранную из скважин
	for (var keey in wells) {
		if (keey == selectkeey) {
			wells[keey].wellN = String($("#colitems132").val());
			wells[keey].txt = String($("#colitems131").val());
			wells[keey].type = String($("#colitems133").val());
			wells[keey].typeStn = String($("#colitems134").val());
			wells[keey].nach = String($("#colitems135").val());
			wells[keey].tel = String($("#colitems136").val());
			wells[keey].email = String($("#colitems137").val());
			//Обновить скважину в mysql в таблицу skvs
			update('update', 'skvs', keey.slice(3, keey.length - 1), JSON.stringify(Object.assign({}, wells[keey])));
		}
	}

	console.log(wells);
	$('#skvs tbody').empty();
	for (var keey in wells) {
		$('#skvs tbody').append('<tr><td>' + wells[keey].txt + '</td><td>' + wells[keey].wellN + '</td><td>' + wells[keey].type + '</td><td>' + wells[keey].typeStn + '</td><td>' + wells[keey].nach + '</td><td>' + wells[keey].tel + '</td><td>' + wells[keey].email + '</td></tr>');
	}

}

//Удалить запись
function colOK131() {

	//Удалить выбранную из скважин
	for (var keey in wells) {
		//console.log( keey);
		if (wells[keey].wellN == String($("#colitems132").val())) {
			deleteskvs('delete', 'skvs', keey.slice(3, keey.length - 1));
			//console.log( keey, keey.slice(3 , ));
			delete (wells[keey]);
		}
	}
	tmpwells = {};
	//Чтение всех скважин
	readskvs('read', 'skvs', '', '');

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
		$('#skvs tbody').append('<tr><td>' + wells[keey].txt + '</td><td>' + wells[keey].wellN + '</td><td>' + wells[keey].type + '</td><td>' + wells[keey].typeStn + '</td><td>' + wells[keey].nach + '</td><td>' + wells[keey].tel + '</td><td>' + wells[keey].email + '</td></tr>');
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
function colPan12() {
	$("#myModal12").modal('show');

	//console.log('fdsf');
}

//Добавление  записи по скважине
function colOK12() {
	var curPar = {};
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
	$('#skvs tr:last').after('<tr><td>' + String($("#colitems121").val()) + '</td>' +
		'<td>' + String($("#colitems122").val()) + '</td>' +
		'<td>' + String($("#colitems123").val()) + '</td>' +
		'<td>' + String($("#colitems124").val()) + '</td>' +
		'<td>' + String($("#colitems125").val()) + '</td>' +
		'<td>' + String($("#colitems126").val()) + '</td>' +
		'<td>' + String($("#colitems127").val()) + '</td>' +
		'</tr>'
	);
	// //Запись всех текущих скважин
	// for (var keey in wells) {
	// 	writeskvs('create','skvs', String(keey), JSON.stringify(wells[keey]));
	// 	// console.log(keey);
	// 	// console.log(wells[keey]);
	// }

	//Создание новой записи параметра!!!
	wells[String('par' + String((Object.keys(wells).length)))] = curPar;

	//Добавление скважины в mysql в таблицу skvs
	writeskvs('create', 'skvs', String('par' + String((Object.keys(wells).length - 1))), JSON.stringify(Object.assign({}, curPar)));

	//Чтение всех скважин
	readskvs('read', 'skvs', '', '');
}

function resizeiframe() {
	var div = document.getElementById("camsf2");
	div.onload = function () {
		div.style.height = div.contentWindow.document.body.scrollHeight + 'px';
	}
}

// function ()
//Если с английского на русский, то передаём вторым параметром true.
transliterate = (
	function () {
		var
			rus = "щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь".split(/ +/g),
			eng = "shh sh ch cz yu ya yo zh eee iii ee a b v g d e z i j k l m n o p r s t u f x ooo".split(/ +/g)
			;
		return function (text, engToRus) {
			var x;
			for (x = 0; x < rus.length; x++) {
				text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);
				text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase());
			}
			return text;
		}
	}
)();
// var txt = "Съешь ещё этих мягких французских булок, да выпей же чаю!";
// alert(transliterate(txt));
// alert(transliterate(transliterate(txt), true));


//вкладка камеры
var camscreate = true;
function adm() {
	
	//удаление старых потоков
	deleteoldcams();

	curtemp = 'video';
	$("#myModal11").modal('hide');
	$('#dropdownMenu1').hide();
	$('#dropdownMenu3').hide();
	$('#dropdownMenu4').hide();
	$("#dropdownMenu2").attr("style", "display:yes; padding-top:3; padding-bottom:3;");
	$('#dropdownMenu2').show();

	
	//$('.modal-backdrop').hide();

	online = false;
	refresh = false;
	$('#drawing').empty();
	$('#drawing').hide();
	//$('#skvnamelab').hide();





	onofadm = false;

	getcamswell();
	
	$('#taabs-3').hide();
	$('#taabs-2').hide();
	$('#tabs').show();
	$('#taabs-1').empty();
	$('#ul1').hide();
	$('#taabs-1').show();
	camscreate = true;
	//Работающие потоки
	workstream = {};

	//Текущая скважина
	let cam = $('#skvnamelabt').text();
	//console.log(cam);

	var bigelem = '<div class="container-fluid"><div class=" row text-justify">';
	for (var keey in camswell) {

		if (cam == camswell[keey].txt) {
			namecams = camswell[keey].txt + '_' + camswell[keey].name;

			bigelem = bigelem + '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 " >' +
				'<p><div class="thumbnail border border-white  text-light  text-center ">' +
				//'<img src="css/cam.jpg" class="img-fluid" alt="..."> '+
				'<div id="iframeembdiv' + camswell[keey].id + '" class="embed-responsive embed-responsive-16by9 border border-white ">' +
				'<iframe id="iframeemb' + camswell[keey].id + '" class="embed-responsive-item bg-success rounded mx-auto d-block" src="css/cams.svg" allowfullscreen ></iframe>' +
				'</div>' +
				'<div class="caption text-center   ">' +
				'<h6 style="font-weight: bold;" >' + camswell[keey].txt + ' ' + camswell[keey].name + '</h6>' +
				'<div class="progress m-1" style="height:10px" >' +

				'<div class="progress-bar  progress-bar-info progress-bar-striped progress-bar-animated bg-success" id="progress' + camswell[keey].id + '" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div></div>' +
				'<button type="button"  class=" m-1 btn btn-outline-light " id="con' + camswell[keey].id + '" >Подключение</button>' +// <button type="button" disabled class="btn btn-success" id="gogogo'+camswell[keey].id+'">Просмотр</button>'+//<a href="#" class="btn btn-default" disabled  id="gogogo'+camswell[keey].id+'" role="button" ">Просмотр</a></p>'+
				'</div>' +
				'</div>' +
				'</div>';
		}
	}
	bigelem = bigelem + '</div>';

	$('#taabs-1').html(bigelem);
	//Повесить событие клик на подключение
	for (var keey in camswell) {
		$('#con' + camswell[keey].id).click(function () {
			var idss = $(this).attr('id');

			if (camscreate) {
				
				camscreate = false;
				colOK4cams(idss);
			}

		});
	}

	//Повесить событие клик на воспроизведение
	for (var keey in camswell) {
		$('#gogogo' + camswell[keey].id).click(function () {
			var idss = $(this).attr('id');

			//console.log( idss);

			gogocams();

		});
	}

}



//вкладка настройки
function adm2() {
	//удаление старых потоков
	deleteoldcams();

	// setTimeout(function(){deleteoldcams();}
	// , 30000);
	online = false;
	refresh = false;
	$('#drawing').empty();
	$('#drawing').hide();
	// $('#skvnamelab').hide();


	$('#dialogvideo').dialog("close");// Для скрытия


	onofadm = false;

	getcamswell();


	$('#taabs-1').hide();
	$('#taabs-2').empty();
	$('#taabs-3').empty();
	$('#dropdownMenu1').hide();
	$('#dropdownMenu2').hide();
	
	$('#taabs-2').show();
	$('#ul1').hide();
	$('#tabs').show();

	var bigelem2 = '<div class="container container-fluid h-75 text-center bg-dark"  >';
	bigelem2 = bigelem2 + '<br><br><button type="button"  id="datatab"  class="btn btn-outline-light btn-block " style="width: 75%; margin: 5px auto;  font-weight: bold; font-size: 23px;" onClick="adm3();">Данные "По времени"</button>' +
		'<button type="button"  id="vidotab"  class="btn btn-outline-light btn-block  "  style="width: 75%; margin: 5px auto; font-weight: bold; font-size: 23px;" onClick="adm();">Видеокамеры</button>' +
		// '<p><div class="thumbnail bg-info text-light  text-center">'+
		// //'<img src="css/cam.jpg" class="img-fluid" alt="..."> '+
		// '<div id="iframeembdiv'+camswell[keey].id + '" class="embed-responsive embed-responsive-16by9">'+
		// '<iframe id="iframeemb'+camswell[keey].id + '" class="embed-responsive-item" src="" allowfullscreen ></iframe>'+  
		// '</div>'+
		// '<div class="caption text-center">'+
		// 	'<h6>'+camswell[keey].txt+' '+camswell[keey].name+'</h6>'+
		// 	'<div class="progress" >'+

		// 	'<div class="progress-bar progress-bar progress-bar-striped progress-bar-animated bg-success" id="progress'+camswell[keey].id + '" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div></div>'+
		// 	'<p><button type="button"  class="btn btn-success" id="con'+camswell[keey].id+'" >Подключение</button>'+// <button type="button" disabled class="btn btn-success" id="gogogo'+camswell[keey].id+'">Просмотр</button>'+//<a href="#" class="btn btn-default" disabled  id="gogogo'+camswell[keey].id+'" role="button" ">Просмотр</a></p>'+
		// '</div>'+
		// '</div>'+
		// '</div>'+
		'</div>';


	$('#taabs-2').html(bigelem2);
	//Повесить событие клик на подключение

	// $('#con'+camswell[keey].id).click(function() {
	// 	var idss= $(this).attr('id');


	// })

}

//вкладка По времени
function adm3() {
	if (curtemp=='video'){
		//удаление старых потоков
		deleteoldcams();
	}
	if (curtemp=='depth'){
		
	}
	
	readsavestartstorage();
	curtemp = 'time';


	$("#myModal11").modal('hide');
	$('#dropdownMenu3').hide();
	$('#dropdownMenu2').hide();
	$('#dropdownMenu4').hide();
	$('#dropdownMenu1').show();

	//$('.modal-backdrop').hide();

	
	// setTimeout(function(){deleteoldcams();}
	// , 30000);

	//$('#dialogvideo').dialog( "open" );// Для скрытия
	$('#tabs').hide();
	$('#camsf2').remove();
	$('#taabs-1').empty();
	$('#taabs-2').empty();
	$('#taabs-3').empty();
	//document.getElementById("camsf2").innerHTML="Роторный стол";
	// $('#tabs').empty();
	// $('#tabs').hide();

	$('#drawing').empty();
	$('#drawing').show();
	$('#skvnamelab').show();
	online = true;
	refresh = true;
	onofadm = true;
	$('#skvnamelabt').text(skv);
	// init();
	// colOK11();
	
	colOK8start(formname);
	read_now();

}

//вкладка По Глубине
function adm4() {
	if (curtemp=='video'){
		//удаление старых потоков
		deleteoldcams();
	}
	if (curtemp=='time'){

	}
	
	readsavestartstorage();
	curtemp = 'depth';


	
	$("#myModal11").modal('hide');
	$('#dropdownMenu1').hide();
	$('#dropdownMenu2').hide();
	$('#dropdownMenu4').hide();
	$('#dropdownMenu3').show();
	

	//$('.modal-backdrop').hide();

	
	// setTimeout(function(){deleteoldcams();}
	// , 30000);

	//$('#dialogvideo').dialog( "open" );// Для скрытия
	$('#tabs').hide();
	$('#camsf2').remove();
	$('#taabs-1').empty();
	$('#taabs-2').empty();
	$('#taabs-3').empty();
	//document.getElementById("camsf2").innerHTML="Роторный стол";
	// $('#tabs').empty();
	// $('#tabs').hide();

	$('#drawing').empty();
	$('#drawing').show();
	$('#skvnamelab').show();
	refresh = false; 
	online = false;
	$('#skvnamelabt').text(skv);
	// init();
	// colOK11();
	// read_now();
	colOK8start(formdirdepth+formnamedepth);
	// read_depth_last();
	

}

//Список файлов
var files_svodka;
//вкладка Суточные сводки
function adm5() {
	curtemp = 'svodka';
	read_svodka();
	console.log(files_svodka);


	$("#myModal11").modal('hide');
	$('#dropdownMenu3').hide();
	$('#dropdownMenu2').hide();
	$('#dropdownMenu1').hide();
	$('#dropdownMenu4').show();

	//$('.modal-backdrop').hide();

	
	// setTimeout(function(){deleteoldcams();}
	// , 30000);

	//$('#dialogvideo').dialog( "open" );// Для скрытия
	$('#tabs').hide();
	$('#camsf2').remove();
	$('#taabs-1').empty();
	$('#taabs-2').empty();
	$('#taabs-3').empty();
	//document.getElementById("camsf2").innerHTML="Роторный стол";
	// $('#tabs').empty();
	// $('#tabs').hide();

	$('#drawing').empty();
	$('#drawing').hide();
	$('#taabs-2').hide();
	$('#tabs').show();
	$('#taabs-1').empty();
	$('#ul1').hide();
	$('#taabs-3').show();

	$('#skvnamelab').show();
	online = false;
	refresh = false;
	onofadm = false;
	$('#skvnamelabt').text(skv);

	var bigelem = '<div class="container-fluid">';
	// '<div class="container container-fluid vh-100 text-center bg-light"  >';

	// for (var keey in camswell) {

	// 	if (cam == camswell[keey].txt) {
	// 		namecams = camswell[keey].txt + '_' + camswell[keey].name;

	// 		bigelem = bigelem + '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 " >' +
	// 			'<p><div class="thumbnail border border-white  text-light  text-center ">' +
	// 			//'<img src="css/cam.jpg" class="img-fluid" alt="..."> '+
	// 			'<div id="iframeembdiv' + camswell[keey].id + '" class="embed-responsive embed-responsive-16by9 border border-white ">' +
	// 			'<iframe id="iframeemb' + camswell[keey].id + '" class="embed-responsive-item bg-success rounded mx-auto d-block" src="css/cams.svg" allowfullscreen ></iframe>' +
	// 			'</div>' +
	// 			'<div class="caption text-center   ">' +
	// 			'<h6 style="font-weight: bold;" >' + camswell[keey].txt + ' ' + camswell[keey].name + '</h6>' +
	// 			'<div class="progress m-1" style="height:10px" >' +

	// 			'<div class="progress-bar  progress-bar-info progress-bar-striped progress-bar-animated bg-success" id="progress' + camswell[keey].id + '" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div></div>' +
	// 			'<button type="button"  class=" m-1 btn btn-outline-light " id="con' + camswell[keey].id + '" >Подключение</button>' +// <button type="button" disabled class="btn btn-success" id="gogogo'+camswell[keey].id+'">Просмотр</button>'+//<a href="#" class="btn btn-default" disabled  id="gogogo'+camswell[keey].id+'" role="button" ">Просмотр</a></p>'+
	// 			'</div>' +
	// 			'</div>' +
	// 			'</div>';
	// 	}
	// }
	// $.ajax({
	// 	url : "report/542.html",
	// 	dataType: "html",
	// 	success : function (data) {
	// 		// $(".text").html(data);
	// 		bigelem = bigelem + data+'</div>';
	// 		$('#taabs-3').html(bigelem);
	// 	}
	// });
	bigelem= bigelem+'<iframe src="https://hydrofalll.ddns.net'+files_svodka[0].slice(5)+'" style="width:100%;height:100%;"></iframe>'+ '</div>';
	$('#taabs-3').html(bigelem);
// import pdfkit

// pdfkit.from_url('http://google.com', 'out.pdf')
// pdfkit.from_file('test.html', 'out.pdf')
// pdfkit.from_string('Hello!', 'out.pdf')
	


// bigelem = bigelem + '</div>';

	
	

	// colOK8start(formdirdepth+formnamedepth);
	// Сводка

}	




//старт стоп прием
function colok14() {

	if (refresh) { refresh = false; online = false; }
	else {
		if (loaddata == false) {
			read_now(); //pong.js
		}
	}
}


//свернуть открыть шапку
function colOK15() {

	if (toponof) {
		toponof = false;
		for (var curcol in Columns){
			backcolh= Columns[curcol].size.h;
			Columns[curcol].size.h=0;
		}
		backsheetdisp= Sheet.disp_up;
		Sheet.disp_up=0;
	}
	else {
		toponof = true;
		for (var curcol in Columns){
			Columns[curcol].size.h=backcolh;
		}
		Sheet.disp_up= backsheetdisp;
	}
	repaint();
}

//выбор для вкладки видео, реалтайм или архив
//Streaming/tracks/1901?starttime=20201214t063812z&endtime=20201214t064816z
function colOK161() {
	$('input[name="menu"]:checked').val();


}

//Очистка и рендеринг
function repaint() {
	//Очистка документа
	try {
		$("#drawing").find("*").not("rect, g").remove();
		$('#drawing').empty();
	}
	catch (e) { }

	init();

}
