
//Округление после операций с плавающей точкой
function roundPlus(x, n) { //x - число, n - количество знаков
	if (isNaN(x) || isNaN(n)) return false;
	var m = Math.pow(10, n);
	return Math.round(x * m) / m;
}


//Преобразование координат экрана в svg
function getCursorPosition(event, svgElement) {
	var svgPoint = svgElement.createSVGPoint();

	svgPoint.x = event.clientX;
	svgPoint.y = event.clientY;

	return svgPoint.matrixTransform(svgElement.getScreenCTM().inverse());
}

//Случайный цвет
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

//Размер Div
function getElementPosition(elemId) {
	var elem = document.getElementById(elemId);
	var w = elem.offsetWidth;
	var h = elem.offsetHeight;
	var l = 0;
	var t = 0;
	while (elem) {
		l += elem.offsetLeft;
		t += elem.offsetTop;
		elem = elem.offsetParent;
	}
	return { "left": l, "top": t, "width": w, "height": h };
}

function init() {
	/* try{ */
	//Очистка документа

	try {
		$("#drawing").find("*").not("rect, g").remove();
		draw.clear();
		SVG.clear();
		SVG.parentNode.replaceChild(SVG.cloneNode(false), SVG);
		/* var parentElement = svg.parentElement
		var emptySvg = svg.cloneNode(false);
		parentElement.removeChild(svg);
		parentElement.appendChild(emptySvg); */
	}
	catch (e) { }


	//Чтение комментариев по времени
	if (curtemp=='time'){
	try {
		$(read_comment());//см. read_comment.js
	} catch (e) { }
		} else{
			//пока что нет комментариев по глубине
			comment=null;}
	//Наш div
	let pos = getElementPosition("drawing");
	var widthdiv = $('#drawing').width();

	var heightdiv = $('#drawing').height();
	var topdiv = pos.top;
	var leftdiv = pos.left;

	///
	//var isMobile = false;
	if (!isMobile) {
		width = widthdiv;
		height = heightdiv * Sheet.K_mobule_not_mobile;
		/* Sheet.cmtsize = 13; */

	}
	else {
		//Размер полосы управления
		Sheet.icosize = Sheet.icosizem;
		//Если телефон вертикально
		if (widthdiv < heightdiv) {
			width = widthdiv;
			height = heightdiv * Sheet.K_A4;

		}
		else {
			//Если телефон горизонтально

			width = widthdiv;
			height = widthdiv * Sheet.K_A4 * 1.3;
			// height = widthdiv *Sheet.K_A4;

		}
	}


	var w1 = width / 100;
	var h1 = height / 100;

	if (Boolean(Sheet.vertical)) {

		var draw = SVG('drawing').size('100%', height);

		draw.viewbox(0, 0, width, height);
		draw.attr('preserveAspectRatio', 'xMidYMid meet');
		w1 = width / 100;
		h1 = height / 100;
	} else {

		if (widthdiv > heightdiv) {
			var draw = SVG('drawing').size(height, height);
			draw.viewbox(0, 0, height, height);
			draw.attr('preserveAspectRatio', 'xMidYMid meet');
			draw.rotate(-90);
			w1 = height / 100;
			h1 = height / 100;
			var buff = height;
			height = height;
			width = buff;
		} else {
			var draw = SVG('drawing').size(width, width);
			draw.viewbox(0, 0, width, width);
			draw.attr('preserveAspectRatio', 'xMidYMid meet');
			draw.rotate(-90);
			w1 = width / 100;
			h1 = width / 100;
			var buff = width;
			width = width;
			width = buff;
		}
	}

	// Загрузка прогресс
	var text_value = draw.text('Загрузка...')
		.font({ family: Sheet.fnt, size: size_text_p + 7 })
		.move(50 * w1, 50 * h1)
		.center(50 * w1, 50 * h1)





	///////////////////////////////////
	//МЫШЬ Курсор клик
	var svg = document.querySelector('svg');
	var X_cur_mouse_click = 0;
	var Y_cur_mouse_click = 0;

	svg.addEventListener('mousedown', function (e) {
		var cursor = getCursorPosition(e, svg);
		X_cur_mouse_click = cursor.x;
		Y_cur_mouse_click = cursor.y;
	}, false);

	//Колесико
	let oneW = true;
	svg.addEventListener('wheel', function (e) {
		if (oneW) {
			oneW = false;
			var whee1 = e.deltaY;
			let mi = Sheet.markwidthtime / 2;
			if (whee1 > 0) {

				if (loaddata == false) {
					cir1.dy(mi);
					cir2.dy(mi);
					cir4.dy(mi);
					read_down();
				};//см .navigation.js 

			} else {
				if (loaddata == false) {
					cir1.dy(-mi);
					cir2.dy(-mi);
					cir4.dy(-mi);

					read_up();
				}//см .navigation.js 
			}
		}

	}, false);
	//ТЕСТ
	//Бакграунт
	/*
	var background = draw.rect(width, height).fill('#dde3e1')
	
	//Текст
	draw.text('Вес на крюке')
	.move(w1*50, 1)
	.font({ family: Sheet.fnt, size: 16 })
	.fill('#ff0066')
	
	//Линия
	var line10 = draw.line(0, 0, w1*50, h1*50)
	line10.stroke({ width: 2, color: '#f0f'});
	//Клик
	line10.click(function() {
	this.fill({ color: '#f06' });
	alert('ta-da!');
	})
	
	//Линия пунктирная
	var line = draw.line(width/2, 0, width/2, height);
	line.stroke({ width: 5, color: '#fff', dasharray: '5,5' });
	
	*/

	//Столбец

	/* for (var i = 1; i < Number(Sheet.numbs_colmns); i++){
		var Column = {
		numb:i
		leftup:0,rightup:0,
		leftdown:0,rightdown:0,
		widht:2,
		color:'#fff'};
		Columns.push(Column:Column);
		
	}; */
	//console.log(Columns);
	/* var element = {}, cart = [];
	element.id = id;
	element.quantity = quantity;
	cart.push({element: element}); */
	//console.log (Number(Sheet.Sheet.height_risk));
	//var idx = 1;
	//console.log (Columns["col"+String(idx)].size.h);
	//Маcштаб (час)
	end_time = start_time / 1 + Sheet.Kzoom * 60 * 60;
	//Ширина шапки времени в %
	var time_w = Number(Columns.col0.size.w);
	//Высота шапки по высоте в %
	var disp_up = Number(Columns.col0.size.h);
	//var element = draw.element('title').words('This is a title.');

	//Шаг насечек
	var steep_risk1 = weight_colmn1 / Sheet.numbs_risk;

	//Вычисляемые параметры
	//Ширина каждого Столбца
	var weight_colmn1 = Number(Columns.col1.size.w);
	//Высота одного параметра box

	//Вычисляемые параметры
	//Ширина каждого Столбца
	//var weight_colmn1 = Number(Columns.col1.size.w);
	//Максимальное количество параметров в одном столбце по всем столбцам
	var max_numb = 0;
	//Высота одного параметра box
	Sheet.numbs_colmns = 0;
	for (key in Columns) {
		if (key != 'col0') {
			//Обрезка col(Номер столбца)
			var strNcol = Number(key.toString().substr(3));

			//Максимальная позиция на форме
			var numb_value = 0;
			for (keey in basePar) {
				if (basePar[keey].poz.x == strNcol) {
					numb_value = numb_value + 1;
				}
			}
			for (keey in txtPar) {
				if (txtPar[keey].poz.x == strNcol && txtPar[keey].show == true) {
					numb_value = numb_value + 1;
				}
			}

			for (keey in txtOknOPar) {
				if (txtOknOPar[keey].poz.x == strNcol) {
					numb_value = numb_value + 1;
				}
			}

			if (max_numb < numb_value) {
				max_numb = numb_value;
			}

		}
		Sheet.numbs_colmns += 1;
	}
	//console.log(max_numb);
	//Вычисляемая высота на основе количества параметров
	max_numb += 1;
	if (max_numb < 4) { max_numb = 4; }
	Sheet.numbs_colmn1 = max_numb;
	max_numb = 4;
	for (key in basePar) {
		if (basePar[key].poz.y > max_numb) { max_numb = basePar[key].poz.y; }
	}
	for (key in txtPar) {
		if (txtPar[key].poz.y > max_numb) { max_numb = txtPar[key].poz.y; }
	}
	for (key in txtOknOPar) {
		if (txtOknOPar[key].poz.y > max_numb) { max_numb = txtOknOPar[key].poz.y; }
	}
	var height_colmn1_p1 = h1 * Number(Sheet.disp_up) / max_numb;




	if (isMobile) { Sheet.K_size_txt = Number(Sheet.K_size_txt_mobile) }
	//var Sheet.K_size_txt = 73;
	var size_text_p = width / Sheet.K_size_txt;

	//////////////////////////////
	////////////////////////////////
	//////////////////////РЕШЕТКА СТАРАЯ
	////////////////////////////////////
	///////////////////////////////////
	////////////////////////////////////////////
	//////////////////////////НОВОЕ
	//Все шапки
	var headgroup = draw.group();
	//Все тела
	var bodygroup = draw.group();
	//Все кривые
	var grafgroup = draw.group();
	//Параметры шапки для объектов
	for (key in Columns) {


		if (key != 'col0') {
			//Шапка
			var colmn1 = draw.polygon(Number(Columns[key].poz.x) * w1 + ',' + Number(Columns[key].poz.y) * h1 + ' ' + (Number(Columns[key].poz.x) * w1 + Number(Columns[key].size.w) * w1) + ',' + Number(Columns[key].poz.y) * h1 + ' ' + (Number(Columns[key].poz.x) * w1 + Number(Columns[key].size.w) * w1) + ',' + (Number(Columns[key].poz.y) * h1 + Number(Columns[key].size.h) * h1) + ' ' + Number(Columns[key].poz.x) * w1 + ',' + (Number(Columns[key].poz.y) * h1 + Number(Columns[key].size.h) * h1))
				.fill({ color: Columns[key].colorhead })
				.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor });

			headgroup.add(colmn1);
			//Столбец
			var colmn2 = draw.polygon(Number(Columns[key].poz.x) * w1 + ',' + (Number(Columns[key].poz.y) * h1 + Number(Columns[key].size.h) * h1) + ' ' + (Number(Columns[key].poz.x) * w1 + Number(Columns[key].size.w) * w1) + ',' + (Number(Columns[key].poz.y) * h1 + Number(Columns[key].size.h) * h1) + ' ' + (Number(Columns[key].poz.x) * w1 + Number(Columns[key].size.w) * w1) + ',' + 100 * h1 + ' ' + Number(Columns[key].poz.x) * w1 + ',' + 100 * h1)
				.fill({ color: Columns[key].colorbody })
				.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor })
			bodygroup.add(colmn2);

			//Полоса меню с градиентом
			var gradient = draw.gradient('linear', function (stop) {
				stop.at(0, Sheet.grcol1)
				stop.at(1, Sheet.grcol2)
			})
			gradient.from(0, 0).to(0, 1);
			//Коррекция размера
			var curicosize = 0;
			if (Sheet.icosize * w1 < height_colmn1_p1) {
				curicosize = Sheet.icosize * w1;
			} else { curicosize = height_colmn1_p1; }
			var colmn1 = draw.polygon(Number(Columns[key].poz.x) * w1 + ',' + Number(Columns[key].poz.y) * h1 + ' ' + (Number(Columns[key].poz.x) * w1 + Number(Columns[key].size.w) * w1) + ',' + Number(Columns[key].poz.y) * h1 + ' ' + (Number(Columns[key].poz.x) * w1 + Number(Columns[key].size.w) * w1) + ',' + (Number(Columns[key].poz.y) * h1 + curicosize) + ' ' + Number(Columns[key].poz.x) * w1 + ',' + (Number(Columns[key].poz.y) * h1 + curicosize))
				.fill({ color: gradient })
				.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor });

			headgroup.add(colmn1);

			//Пунктирная решетка
			//var Sheet.numbr_teeth_сolmn4 = 10;
			//Шаг засечек
			var steep_col4 = (Number(Columns[key].size.w) * w1) / Columns[key].grid.num;
			//Отступ по вертикале от шапки
			var disp_col4 = Number(Columns[key].poz.x) * w1;
			for (let i = 0; i < Columns[key].grid.num; i++) {
				var line = draw.line(disp_col4, (Number(Columns[key].poz.y) * h1 + Number(Columns[key].size.h) * h1), disp_col4, h1 * 100);
				line.stroke({ width: Sheet.width_line_p, color: Sheet.dashcol1, dasharray: Sheet.dasharray });
				//Объединение событий кликов
				//gfx_group.add(polyline);
				disp_col4 = disp_col4 + steep_col4;
				bodygroup.add(line);
			}
		}
	}


	//!!!Текстовые метки
	for (var keey in txtPar) {
		//Текущий столбец
		//Ширина текущего столбца
		weight_colmn1 = Columns["col" + String(Number((txtPar[keey].poz.x)))].size.w;
		//Отступ Столбца
		xcolmn1Poz = Columns["col" + String(Number((txtPar[keey].poz.x)))].poz.x;
		ycolmn1Poz = Columns["col" + String(Number((txtPar[keey].poz.x)))].poz.y;

		//Шапка отступ Столбца № по Х
		var colmn11_x0 = w1 * xcolmn1Poz;
		var colmn11_x1 = w1 * xcolmn1Poz + w1 * weight_colmn1;
		var colmn1_y0 = h1 * ycolmn1Poz;
		//var cur_val =String(d110d[d110d.length-1][String(key)]);
		var cur_val;
		try {
			cur_val = String(d110d[d110d.length - 1][txtPar[String(keey)].par]);
		} catch (e) { cur_val = -2147480; }
		if (Number(cur_val) <= -2147480) { cur_val = "NaN"; }
		//Мегагруппа
		var meg = draw.nested();
		//если включен показывать параметр
		if (txtPar[keey].show) {
			var name_p1 = txtPar[keey].txt + ' ' + cur_val + ' (' + txtPar[keey].unit + ')';
			var text_name_p1 = draw.text(name_p1)
				.font({ family: Sheet.fnt, size: size_text_p, })
				.move(colmn11_x0 + w1 * weight_colmn1 / 2, colmn1_y0 + Number(txtPar[keey].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
				.center(colmn11_x0 + w1 * weight_colmn1 / 2, colmn1_y0 + Number(txtPar[keey].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
				.fill(txtPar[keey].color)
				.id(keey)
				.style({ cursor: 'pointer' });

			//Ресайз текста если не влезает!
			if (text_name_p1.length() > weight_colmn1 * w1 * 0.7) {
				var coef = text_name_p1.length() / text_name_p1.attr('font-size');
				text_name_p1.clear();
				delete (text_name_p1);
				var text_name_p1 = draw.text(name_p1)
					.font({ family: Sheet.fnt, size: weight_colmn1 * w1 / coef * 0.7, })
					.move(colmn11_x0 + w1 * weight_colmn1 / 2, colmn1_y0 + Number(txtPar[keey].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
					.center(colmn11_x0 + w1 * weight_colmn1 / 2, colmn1_y0 + Number(txtPar[keey].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
					.fill(txtPar[keey].color)
					.id(keey)
					.style({ cursor: 'pointer' });
			}

			if (Number(text_name_p1.attr('font-size')) > height_colmn1_p1 * h1 / 7.6) {
				//var coef =text_name_p1.length()/text_name_p1.attr('font-size')
				text_name_p1.clear();
				delete (text_name_p1);
				var text_name_p1 = draw.text(name_p1)
					.font({ family: Sheet.fnt, size: height_colmn1_p1 * h1 / 7.6 })
					.move(colmn11_x0 + w1 * weight_colmn1 / 2, colmn1_y0 + Number(txtPar[keey].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
					.center(colmn11_x0 + w1 * weight_colmn1 / 2, colmn1_y0 + Number(txtPar[keey].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
					.fill(txtPar[keey].color)
					.id(keey)
					.style({ cursor: 'pointer' });
			}
			meg.add(text_name_p1);
			meg.id(keey);
			//DragnDrop
			//Контроль что начался драг
			if (Sheet.editscrn) {
				var draggi = false;
				meg.on('beforedrag', function (e) {
					e.detail.event.stopPropagation();
					refresh = false; //navigation.js
					draggi = true;
					this.front();
				})
				meg.draggable().on('dragstart', function (e) {
					exs = e.detail.p.x;
					eys = e.detail.p.y;
				})
				meg.draggable().on('dragmove', function (e) {
					ex = e.detail.p.x;
					ey = e.detail.p.y;
				})
				meg.draggable(
				).on('dragend', function (e) {
					if (isMobile) { colPan7(this.attr('id')); }
					var oldCol = txtPar[this.attr('id')].poz.x;
					var oldStr = txtPar[this.attr('id')].poz.y;
					for (var key in Columns) {
						//В какой столбец дропнуто
						if (Columns[key].poz.x <= ex / w1 && ((Columns[key].poz.x + Columns[key].size.w) >= ex / w1)) {

							var newCol = Number(key.substr(3));
							//Отступ в столбце
							ycolmn1Poz = h1 * Columns[key].poz.y;
							//В какую строку дропнуто
							var newStr = Math.trunc((ey) / height_colmn1_p1) + 1;
							if (newStr > 0) {
								//если текущий столбец 
								if (newCol == oldCol) {
									for (var keey in basePar) {
										//Ищем текущий столбец
										var how = oldStr - newStr;
										if (basePar[keey].poz.x == newCol) {
											if (oldStr < newStr) {
												if (basePar[keey].poz.y <= newStr && basePar[keey].poz.y > oldStr) {
													basePar[keey].poz.y = basePar[keey].poz.y - 1;
												}
											} else {
												if (basePar[keey].poz.y >= newStr && basePar[keey].poz.y < oldStr) {
													basePar[keey].poz.y = basePar[keey].poz.y + 1;
												}
											}
										}
									}
									for (var keey in txtPar) {
										//Ищем текущий столбец
										var how = oldStr - newStr;
										if (txtPar[keey].poz.x == newCol) {
											if (oldStr < newStr) {
												if (txtPar[keey].poz.y <= newStr && txtPar[keey].poz.y > oldStr) {
													txtPar[keey].poz.y = txtPar[keey].poz.y - 1;
												}
											} else {
												if (txtPar[keey].poz.y >= newStr && txtPar[keey].poz.y < oldStr) {
													txtPar[keey].poz.y = txtPar[keey].poz.y + 1;
												}
											}
										}
									}
									for (var keey in txtOknOPar) {
										//Ищем текущий столбец
										var how = oldStr - newStr;
										if (txtOknOPar[keey].poz.x == newCol) {
											if (oldStr < newStr) {
												if (txtOknOPar[keey].poz.y <= newStr && txtOknOPar[keey].poz.y > oldStr) {
													txtOknOPar[keey].poz.y = txtOknOPar[keey].poz.y - 1;
												}
											} else {
												if (txtOknOPar[keey].poz.y >= newStr && txtOknOPar[keey].poz.y < oldStr) {
													txtOknOPar[keey].poz.y = txtOknOPar[keey].poz.y + 1;
												}
											}
										}
									}

								} else {
									for (var keey in basePar) {
										//Ищем текущий столбец
										var how = oldStr - newStr;
										if (basePar[keey].poz.x == newCol) {
											if (basePar[keey].poz.y >= newStr) {
												basePar[keey].poz.y = basePar[keey].poz.y + 1;
											}
										}
									}
									for (var keey in txtPar) {
										//Ищем текущий столбец
										var how = oldStr - newStr;
										if (txtPar[keey].poz.x == newCol) {
											if (txtPar[keey].poz.y >= newStr) {
												txtPar[keey].poz.y = txtPar[keey].poz.y + 1;
											}
										}
									}
									for (var keey in txtOknOPar) {
										//Ищем текущий столбец
										var how = oldStr - newStr;
										if (txtOknOPar[keey].poz.x == newCol) {
											if (txtOknOPar[keey].poz.y >= newStr) {
												txtOknOPar[keey].poz.y = txtOknOPar[keey].poz.y + 1;
											}
										}
									}
								}
								txtPar[this.attr('id')].poz.x = Number(newCol);
								txtPar[this.attr('id')].poz.y = newStr;
							}
						}
					}
					repaint();
				})
				//Клик по названию параметра
				//События Драг
				var flag = 0;
				meg.mousedown(function () {
					flag = 0;
				}, false);
				meg.mousemove(function () {
					flag = 1;
				}, false);
				meg.mouseup(function () {
					if (flag === 0) {
						colPan7(this.attr('id'));
						//Клик Панель настроек параметра см.settings.js
						//parPan(this.attr('id'));
					}
					else if (flag === 1) {
						//console.log("drag");
					}
				}, false);
			}
		}
	}



	//!!!Текстовые метки Ключевой параметр диапазон

	for (var keey in txtOknOPar) {
		//Текущий столбец
		//Ширина текущего столбца
		weight_colmn1 = Columns["col" + String(Number((txtOknOPar[keey].poz.x)))].size.w;
		//Отступ Столбца
		xcolmn1Poz = Columns["col" + String(Number((txtOknOPar[keey].poz.x)))].poz.x;
		ycolmn1Poz = Columns["col" + String(Number((txtOknOPar[keey].poz.x)))].poz.y;

		//Шапка отступ Столбца № по Х
		var colmn11_x0 = w1 * xcolmn1Poz;
		var colmn11_x1 = w1 * xcolmn1Poz + w1 * weight_colmn1;
		var colmn1_y0 = h1 * ycolmn1Poz;
		//Время начало
		//var cur_val =String(d110d[0][String(keey)]);
		var cur_val = String(start_time);
		if (Number(cur_val) <= -2147480) { cur_val = "NaN"; }
		var day = new Date(cur_val * 1000);
		var last_hour = day.getHours();
		var minutes = day.getMinutes();
		if (last_hour < 10) { last_hour = "0" + last_hour; }
		if (minutes < 10) { minutes = "0" + minutes; }
		var yearr = day.getFullYear();
		var dates = day.getDate();
		if (dates < 10) { dates = "0" + dates; }
		var month = day.getMonth() + 1;
		if (month < 10) { month = "0" + month; }
		var time_viz1 = ' ' + last_hour + ":" + minutes + " " + dates + "." + month;// +(2000-yearr);
		//Время конец
		//var cur_val =String(d110d[d110d.length-1][String(keey)]);
		var cur_val = String(end_time);
		if (Number(cur_val) <= -2147480) { cur_val = "NaN"; }
		var day = new Date(cur_val * 1000);
		var last_hour = day.getHours();
		var minutes = day.getMinutes();
		if (last_hour < 10) { last_hour = "0" + last_hour; }
		if (minutes < 10) { minutes = "0" + minutes; }
		var yearr = day.getFullYear();
		var dates = day.getDate();
		if (dates < 10) { dates = "0" + dates; }
		var month = day.getMonth() + 1;
		if (month < 10) { month = "0" + month; }
		var time_viz2 = ' ' + last_hour + ":" + minutes + " " + dates + "." + month;// +(2000-yearr);
		//Мегагруппа
		var meg = draw.nested();

		var name_p1 = 'Скв.' + skv + ': ' + time_viz1 + ' -' + time_viz2;
		var text_name_p1 = draw.text(name_p1)
			.font({ family: Sheet.fnt, size: size_text_p })
			.move(colmn11_x0 + w1 * weight_colmn1 / 2, colmn1_y0 + Number(txtOknOPar[keey].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
			.center(colmn11_x0 + w1 * weight_colmn1 / 2, colmn1_y0 + Number(txtOknOPar[keey].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
			.fill(txtOknOPar[keey].color)
			.id(keey)
			.style({ cursor: 'pointer' });
		//Ресайз текста если не влезает!
		if (text_name_p1.length() > weight_colmn1 * w1 * 0.9) {
			var coef = text_name_p1.length() / text_name_p1.attr('font-size')
			text_name_p1.clear();
			delete (text_name_p1);

			var text_name_p1 = draw.text(name_p1)
				.font({ family: Sheet.fnt, size: weight_colmn1 * w1 / coef * 0.9 })
				.move(colmn11_x0 + w1 * weight_colmn1 / 2, colmn1_y0 + Number(txtOknOPar[keey].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
				.center(colmn11_x0 + w1 * weight_colmn1 / 2, colmn1_y0 + Number(txtOknOPar[keey].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
				.fill(txtOknOPar[keey].color)
				.id(keey)
				.style({ cursor: 'pointer' });
		}

		if (Number(text_name_p1.attr('font-size')) > height_colmn1_p1 * h1 / 7.6) {
			//var coef =text_name_p1.length()/text_name_p1.attr('font-size')
			text_name_p1.clear();
			delete (text_name_p1);
			var text_name_p1 = draw.text(name_p1)
				.font({ family: Sheet.fnt, size: height_colmn1_p1 * h1 / 7.6 })
				.move(colmn11_x0 + w1 * weight_colmn1 / 2, colmn1_y0 + Number(txtOknOPar[keey].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
				.center(colmn11_x0 + w1 * weight_colmn1 / 2, colmn1_y0 + Number(txtOknOPar[keey].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
				.fill(txtOknOPar[keey].color)
				.id(keey)
				.style({ cursor: 'pointer' });
		}
		meg.add(text_name_p1);
		meg.id(keey);
		//DragnDrop
		//Контроль что начался драг
		if (Sheet.editscrn) {
			var draggi = false;
			meg.on('beforedrag', function (e) {
				e.detail.event.stopPropagation();
				refresh = false; //navigation.js
				draggi = true;
				this.front();
			})
			meg.draggable().on('dragstart', function (e) {
				exs = e.detail.p.x;
				eys = e.detail.p.y;
			})
			meg.draggable().on('dragmove', function (e) {
				ex = e.detail.p.x;
				ey = e.detail.p.y;
			})
			meg.draggable(
			).on('dragend', function (e) {
				if (isMobile) { colPan6(this.attr('id')); }
				var oldCol = txtOknOPar[this.attr('id')].poz.x;
				var oldStr = txtOknOPar[this.attr('id')].poz.y;
				for (var key in Columns) {
					//В какой столбец дропнуто
					if (Columns[key].poz.x <= ex / w1 && ((Columns[key].poz.x + Columns[key].size.w) >= ex / w1)) {

						var newCol = Number(key.substr(3));
						//Отступ в столбце
						ycolmn1Poz = h1 * Columns[key].poz.y;
						//В какую строку дропнуто
						var newStr = Math.trunc((ey) / height_colmn1_p1) + 1;
						if (newStr > 0) {
							//если текущий столбец 
							if (newCol == oldCol) {
								for (var keey in basePar) {
									//Ищем текущий столбец
									var how = oldStr - newStr;
									if (basePar[keey].poz.x == newCol) {
										if (oldStr < newStr) {
											if (basePar[keey].poz.y <= newStr && basePar[keey].poz.y > oldStr) {
												basePar[keey].poz.y = basePar[keey].poz.y - 1;
											}
										} else {
											if (basePar[keey].poz.y >= newStr && basePar[keey].poz.y < oldStr) {
												basePar[keey].poz.y = basePar[keey].poz.y + 1;
											}
										}
									}
								}
								for (var keey in txtPar) {
									//Ищем текущий столбец
									var how = oldStr - newStr;
									if (txtPar[keey].poz.x == newCol) {
										if (oldStr < newStr) {
											if (txtPar[keey].poz.y <= newStr && txtPar[keey].poz.y > oldStr) {
												txtPar[keey].poz.y = txtPar[keey].poz.y - 1;
											}
										} else {
											if (txtPar[keey].poz.y >= newStr && txtPar[keey].poz.y < oldStr) {
												txtPar[keey].poz.y = txtPar[keey].poz.y + 1;
											}
										}
									}
								}
								for (var keey in txtOknOPar) {
									//Ищем текущий столбец
									var how = oldStr - newStr;
									if (txtOknOPar[keey].poz.x == newCol) {
										if (oldStr < newStr) {
											if (txtOknOPar[keey].poz.y <= newStr && txtOknOPar[keey].poz.y > oldStr) {
												txtOknOPar[keey].poz.y = txtOknOPar[keey].poz.y - 1;
											}
										} else {
											if (txtOknOPar[keey].poz.y >= newStr && txtOknOPar[keey].poz.y < oldStr) {
												txtOknOPar[keey].poz.y = txtOknOPar[keey].poz.y + 1;
											}
										}
									}
								}

							} else {
								for (var keey in basePar) {
									//Ищем текущий столбец
									var how = oldStr - newStr;
									if (basePar[keey].poz.x == newCol) {
										if (basePar[keey].poz.y >= newStr) {
											basePar[keey].poz.y = basePar[keey].poz.y + 1;
										}
									}
								}
								for (var keey in txtPar) {
									//Ищем текущий столбец
									var how = oldStr - newStr;
									if (txtPar[keey].poz.x == newCol) {
										if (txtPar[keey].poz.y >= newStr) {
											txtPar[keey].poz.y = txtPar[keey].poz.y + 1;
										}
									}
								}
								for (var keey in txtOknOPar) {
									//Ищем текущий столбец
									var how = oldStr - newStr;
									if (txtOknOPar[keey].poz.x == newCol) {
										if (txtOknOPar[keey].poz.y >= newStr) {
											txtOknOPar[keey].poz.y = txtOknOPar[keey].poz.y + 1;
										}
									}
								}
							}
							txtOknOPar[this.attr('id')].poz.x = Number(newCol);
							txtOknOPar[this.attr('id')].poz.y = newStr;
						}
					}
				}
				repaint();
			})
			//Клик по названию параметра
			//События Драг
			var flag = 0;
			meg.mousedown(function () {
				flag = 0;
			}, false);
			meg.mousemove(function () {
				flag = 1;
			}, false);
			meg.mouseup(function () {
				if (flag === 0) {
					//Клик Панель настроек параметра см.settings.js
					colPan6(this.attr('id'));
					//parPan(this.attr('id'));
				}
				else if (flag === 1) {
					//console.log("drag");
				}
			}, false);
		}
	}



	var backcolor = '#000000';
	//!!!!!!!!!!!!Текущие параметры График

	for (var key in basePar) {
		if (basePar[key].poz.x <= Number(Sheet.numbs_colmns)) {




			//Текущий столбец
			//Ширина текущего столбца
			weight_colmn1 = Columns["col" + String(Number((basePar[key].poz.x)))].size.w;
			//Отступ Столбца
			xcolmn1Poz = Columns["col" + String(Number((basePar[key].poz.x)))].poz.x;
			ycolmn1Poz = Columns["col" + String(Number((basePar[key].poz.x)))].poz.y;
			steep_risk1 = weight_colmn1 / Sheet.numbs_risk;

			//Шапка отступ Столбца № по Х
			var colmn11_x0 = w1 * xcolmn1Poz;
			var colmn11_x1 = w1 * xcolmn1Poz + w1 * weight_colmn1;
			var colmn1_y0 = h1 * ycolmn1Poz;

			//Мегагруппа
			var meg = draw.nested();
			//Линия c насечками

			var line_new = draw.line(colmn11_x0, height_colmn1_p1 * Number(basePar[key].poz.y), colmn11_x1, height_colmn1_p1 * Number(basePar[key].poz.y));
			line_new.stroke({ width: Sheet.width_line_p, color: basePar[key].color });
			meg.add(line_new);

			for (let i = 1; i < Sheet.numbs_risk; i++) {
				var linerisk = height_colmn1_p1 * 0.13;
				if (linerisk > Sheet.height_risk * h1) { linerisk = Sheet.height_risk * h1; }
				var line_new = draw.line(i * w1 * steep_risk1 + colmn11_x0, height_colmn1_p1 * Number(basePar[key].poz.y), i * w1 * steep_risk1 + colmn11_x0, Number(basePar[key].poz.y) * height_colmn1_p1 - linerisk);
				line_new.stroke({ width: Sheet.width_line_p, color: basePar[key].color });
				meg.add(line_new);
			}

			//Название параметра  и текущее значение
			var cur_val;
			try {
				cur_val = String(d110d[d110d.length - 1][basePar[key].par]);
			} catch (e) { cur_val = -2147480; }
			if (Number(cur_val) <= -2147480) { cur_val = "NaN"; }
			var name_p1 = basePar[key].txt + ' ' + cur_val + ' (' + basePar[key].unit + ')';
			var text_name_p1 = draw.text(name_p1)
				.font({ family: Sheet.fnt, size: size_text_p })
				.move(colmn11_x0 + w1 * weight_colmn1 / 2, colmn1_y0 + Number(basePar[key].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
				.center(colmn11_x0 + w1 * weight_colmn1 / 2, colmn1_y0 + Number(basePar[key].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
				.fill(basePar[key].color)
				.id(key)
				.style({ cursor: 'pointer' });

			var resizeH = size_text_p;
			//Ресайз текста если не влезает!
			if (text_name_p1.length() > weight_colmn1 * w1 * 0.7) {

				var coef = text_name_p1.length() / text_name_p1.attr('font-size');
				resizeH = weight_colmn1 * w1 / coef * 0.7;
				text_name_p1.clear();
				delete (text_name_p1);
				var text_name_p1 = draw.text(name_p1)
					.font({ family: Sheet.fnt, size: weight_colmn1 * w1 / coef * 0.7 })
					.move(colmn11_x0 + w1 * weight_colmn1 / 2, colmn1_y0 + Number(basePar[key].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
					.center(colmn11_x0 + w1 * weight_colmn1 / 2, colmn1_y0 + Number(basePar[key].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
					.fill(basePar[key].color)
					.id(key)
					.style({ cursor: 'pointer' });
			}

			var resizeV = size_text_p;
			//console.log(Number(text_name_p1.attr('font-size')), height_colmn1_p1*h1, text_name_p1.attr());
			if (Number(text_name_p1.attr('font-size')) > height_colmn1_p1 * h1 / 7.7) {
				resizeV = height_colmn1_p1 * h1 / 7.7;
				//var coef =text_name_p1.length()/text_name_p1.attr('font-size')
				text_name_p1.clear();
				delete (text_name_p1);
				var text_name_p1 = draw.text(name_p1)
					.font({ family: Sheet.fnt, size: resizeV })
					.move(colmn11_x0 + w1 * weight_colmn1 / 2, colmn1_y0 + Number(basePar[key].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
					.center(colmn11_x0 + w1 * weight_colmn1 / 2, colmn1_y0 + Number(basePar[key].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
					.fill(basePar[key].color)
					.id(key)
					.style({ cursor: 'pointer' });

				sizeedge = height_colmn1_p1 * h1 / 7.7;
			}


			//Границы параметра
			var l_p1 = basePar[key].min;
			var r_p1 = basePar[key].max;
			var sizeedge = size_text_p;
			if ((size_text_p != resizeH) && (resizeH < resizeV)) { sizeedge = resizeH; }
			if ((size_text_p != resizeV) && (resizeV < resizeH)) { sizeedge = resizeV; }
			//console.log(size_text_p, resizeH, resizeV);
			var text_l_p1 = draw.text(String(l_p1))
				.font({ family: Sheet.fnt, size: sizeedge })
				.move(colmn11_x0 + w1 * steep_risk1 / 4, colmn1_y0 + Number(basePar[key].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
				.center(colmn11_x0 + w1 * steep_risk1 / 4, colmn1_y0 + Number(basePar[key].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
				.fill(basePar[key].color)

			//Ресайз текста если не влезает!
			if (text_l_p1.length() > weight_colmn1 * w1 * 0.1) {

				var coef = text_l_p1.length() / text_l_p1.attr('font-size');
				resizeH = weight_colmn1 * w1 / coef * 0.1;
				text_l_p1.clear();
				delete (text_l_p1);
				var text_l_p1 = draw.text(String(l_p1))
					.font({ family: Sheet.fnt, size: resizeH })
					.move(colmn11_x0 + w1 * steep_risk1 / 4, colmn1_y0 + Number(basePar[key].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
					.center(colmn11_x0 + w1 * steep_risk1 / 4, colmn1_y0 + Number(basePar[key].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
					.fill(basePar[key].color)
			}


			var text_r_p1 = draw.text(String(r_p1))
				.font({ family: Sheet.fnt, size: sizeedge })
				.move(colmn11_x0 + 9.3 * w1 * steep_risk1 / 2, colmn1_y0 + Number(basePar[key].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
				.center(colmn11_x0 + 9.3 * w1 * steep_risk1 / 2, colmn1_y0 + Number(basePar[key].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
				.fill(basePar[key].color)

			//Ресайз текста если не влезает!
			if (text_r_p1.length() > weight_colmn1 * w1 * 0.1) {

				var coef = text_r_p1.length() / text_r_p1.attr('font-size');
				resizeH = weight_colmn1 * w1 / coef * 0.1;
				text_r_p1.clear();
				delete (text_r_p1);
				var text_r_p1 = draw.text(String(r_p1))
					.font({ family: Sheet.fnt, size: resizeH })
					.move(colmn11_x0 + 9.3 * w1 * steep_risk1 / 2, colmn1_y0 + Number(basePar[key].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
					.center(colmn11_x0 + 9.3 * w1 * steep_risk1 / 2, colmn1_y0 + Number(basePar[key].poz.y) * height_colmn1_p1 - height_colmn1_p1 / 2)
					.fill(basePar[key].color)
			}

			meg.add(text_l_p1);
			meg.add(text_r_p1);
			meg.add(text_name_p1);
			meg.id(key);
			//DragnDrop
			//Контроль что начался драг
			if (Sheet.editscrn) {
				var draggi = false;
				meg.on('beforedrag', function (e) {
					e.detail.event.stopPropagation();
					refresh = false; //navigation.js
					draggi = true;
					this.front();
				})

				meg.draggable().on('dragstart', function (e) {
					exs = e.detail.p.x;
					eys = e.detail.p.y;
				})

				meg.draggable().on('dragmove', function (e) {
					ex = e.detail.p.x;
					ey = e.detail.p.y;
				})

				meg.draggable(
					/* {minX: time_w*w1
						, minY: curicosize
						, maxX: 100*w1
						, maxY: disp_up*h1} */
					//, snapToGrid: height_colmn1_p1*h1/10 }
				).on('dragend', function (e) {
					if (isMobile) { parPan(this.attr('id')); }
					//console.log(exs,eys,ex,ey);
					//console.log('парам.',this.attr('id'), basePar[this.attr('id')]);
					//console.log('полож.столб',exs/w1, ex/w1);
					//Старое положение
					var oldCol = basePar[this.attr('id')].poz.x;
					var oldStr = basePar[this.attr('id')].poz.y;

					for (var key in Columns) {
						//В какой столбец дропнуто
						if (Columns[key].poz.x <= ex / w1 && ((Columns[key].poz.x + Columns[key].size.w) >= ex / w1)) {

							var newCol = Number(key.substr(3));
							//Отступ в столбце
							ycolmn1Poz = h1 * Columns[key].poz.y;
							//В какую строку дропнуто
							var newStr = Math.trunc((ey) / height_colmn1_p1) + 1;
							if (newStr > 0) {
								//если текущий столбец 
								if (newCol == oldCol) {
									for (var keey in basePar) {
										//Ищем текущий столбец
										var how = oldStr - newStr;
										if (basePar[keey].poz.x == newCol) {
											if (oldStr < newStr) {
												if (basePar[keey].poz.y <= newStr && basePar[keey].poz.y > oldStr) {
													basePar[keey].poz.y = basePar[keey].poz.y - 1;
												}
											} else {
												if (basePar[keey].poz.y >= newStr && basePar[keey].poz.y < oldStr) {
													basePar[keey].poz.y = basePar[keey].poz.y + 1;
												}
											}
										}
									}
									for (var keey in txtPar) {
										//Ищем текущий столбец
										var how = oldStr - newStr;
										if (txtPar[keey].poz.x == newCol) {
											if (oldStr < newStr) {
												if (txtPar[keey].poz.y <= newStr && txtPar[keey].poz.y > oldStr) {
													txtPar[keey].poz.y = txtPar[keey].poz.y - 1;
												}
											} else {
												if (txtPar[keey].poz.y >= newStr && txtPar[keey].poz.y < oldStr) {
													txtPar[keey].poz.y = txtPar[keey].poz.y + 1;
												}
											}
										}
									}
									for (var keey in txtOknOPar) {
										//Ищем текущий столбец
										var how = oldStr - newStr;
										if (txtOknOPar[keey].poz.x == newCol) {
											if (oldStr < newStr) {
												if (txtOknOPar[keey].poz.y <= newStr && txtOknOPar[keey].poz.y > oldStr) {
													txtOknOPar[keey].poz.y = txtOknOPar[keey].poz.y - 1;
												}
											} else {
												if (txtOknOPar[keey].poz.y >= newStr && txtOknOPar[keey].poz.y < oldStr) {
													txtOknOPar[keey].poz.y = txtOknOPar[keey].poz.y + 1;
												}
											}
										}
									}

								} else {
									for (var keey in basePar) {
										//Ищем текущий столбец
										var how = oldStr - newStr;
										if (basePar[keey].poz.x == newCol) {
											if (basePar[keey].poz.y >= newStr) {
												basePar[keey].poz.y = basePar[keey].poz.y + 1;
											}
										}
									}
									for (var keey in txtPar) {
										//Ищем текущий столбец
										var how = oldStr - newStr;
										if (txtPar[keey].poz.x == newCol) {
											if (txtPar[keey].poz.y >= newStr) {
												txtPar[keey].poz.y = txtPar[keey].poz.y + 1;
											}
										}
									}
									for (var keey in txtOknOPar) {
										//Ищем текущий столбец
										var how = oldStr - newStr;
										if (txtOknOPar[keey].poz.x == newCol) {
											if (txtOknOPar[keey].poz.y >= newStr) {
												txtOknOPar[keey].poz.y = txtOknOPar[keey].poz.y + 1;
											}
										}
									}

								}
								basePar[this.attr('id')].poz.x = Number(newCol);
								basePar[this.attr('id')].poz.y = newStr;
								/* if (Sheet.numbs_colmn1>(newStr+1)){
									basePar[this.attr('id')].poz.y=newStr+1;
								} else {
									
									basePar[this.attr('id')].poz.y=Sheet.numbs_colmn1;
								} */
							}
						}
					}
					repaint();
				})

				//Клик по названию параметра
				//События Драг
				var flag = 0;
				meg.mousedown(function () {
					flag = 0;
				}, false);
				meg.mousemove(function () {
					flag = 1;
				}, false);
				meg.mouseup(function () {
					if (flag === 0) {
						/* console.log("click"); */
						//Панель настроек параметра см.settings.js
						parPan(this.attr('id'));
					}
					else if (flag === 1) {
						//console.log("drag");
					}
				}, false);


				/* text_name_p1.click(function(e) { 
				//if (draggi){e.detail.event.stopPropagation(); return;}
				parPan(this.attr('id'));
				})
				*/
				//На шрифте по названию параметра
				meg.mouseover(function (e) {
					this.attr('font-size', Number(this.attr('font-size' + 3)));
					// backcolor=this.attr('fill');
					// this.attr('fill', getRandomColor()) ;
				})

				//За шрифтом по названию параметра
				meg.mouseout(function (e) {
					//this.attr(font,({ family: Sheet.fnt, size: size_text_p }));
					//this.attr('font-size', Number(size_text_p)) ;			
					this.attr('fill', backcolor);
					//console.log(this.attr());
				})
			}


			//Графики рисуем полилинию
			try { if (curtemp=="time"){
				if (drawGraf == true && d110d.length > 0) {
					var K_x1 = (w1 * weight_colmn1) / ((Number(basePar[key].max)) - (Number(basePar[key].min)));
					var value = '';
					var cur_value_x = colmn11_x0;
					var cur_value_y = height_colmn1_p1 * h1;
					//var cur_value_y_step = (h1*100 - h1*disp_up)/(end_time-start_time);
					var cur_value_y_step = (h1 * 100 - h1 * disp_up) / (Sheet.Kzoom * 60 * 60);

					//Если есть хоть одна запись, то рисуем начало и конец линий(первая и последняя запись) чтобы не было дырок
					//Первая запись если меньше 10 сек то полоса
					if (d110d.length > 1) {
						if (d110d[0]["Vrema"] - start_time > 60) {
							//cur_value_y = h1*disp_up;
							cur_value_y = h1 * disp_up + (d110d[0]["Vrema"] - start_time) * cur_value_y_step;
						}
						else {
							cur_value_y = h1 * disp_up;
						}

						cur_value_x = colmn11_x0 + (d110d[0][basePar[key].par]) * K_x1 - (Number(basePar[key].min)) * K_x1;
						if (cur_value_x <= colmn11_x0) { cur_value_x = colmn11_x0 }
						if (cur_value_x > colmn11_x1) { cur_value_x = colmn11_x1 }
						if (cur_value_x >= 0) {
							value = value + cur_value_x;
							value = value + ',' + cur_value_y + ' ';
						}
					}

					//Последующие записи
					for (let j = 1; j < d110d.length - 1; j++) {
						cur_value_x = colmn11_x0 + (d110d[j][basePar[key].par]) * K_x1 - (Number(basePar[key].min)) * K_x1;
						cur_value_y = h1 * disp_up + (d110d[j]["Vrema"] - start_time) * cur_value_y_step;
						//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
						/* cur_value_y =  (d110d[j]["Vrema"]-start_time)*cur_value_y_step; */
						if (cur_value_x <= colmn11_x0) { cur_value_x = colmn11_x0 }
						if (cur_value_x > colmn11_x1) { cur_value_x = colmn11_x1 }
						if (cur_value_x >= 0) {
							value = value + cur_value_x;
							value = value + ',' + cur_value_y + ' ';
						}
					}

					//Последняя запись если меньше 10 сек то полоса
					if (d110d.length > 1) {
						cur_value_x = colmn11_x0 + (d110d[d110d.length - 1][basePar[key].par]) * K_x1 - (Number(basePar[key].min)) * K_x1;
						if (d110d[d110d.length - 1]["Vrema"] - end_time > 60) {
							cur_value_y = h1 * 100;
						}
						else {
							//cur_value_y = h1*100;
							cur_value_y = h1 * disp_up + (d110d[d110d.length - 1]["Vrema"] - start_time) * cur_value_y_step;
						}
						cur_value_x = colmn11_x0 + (d110d[d110d.length - 1][basePar[key].par]) * K_x1 - (Number(basePar[key].min)) * K_x1;
						if (cur_value_x <= colmn11_x0) { cur_value_x = colmn11_x0 }
						if (cur_value_x > colmn11_x1) { cur_value_x = colmn11_x1 }
						if (cur_value_x >= 0) {
							value = value + cur_value_x;
							value = value + ',' + cur_value_y + ' ';
						}
					}

					var polyline = draw.polyline(value).fill('none').stroke({ width: Sheet.width_gxf_line, color: basePar[key].color });
					//polyline.back();
					grafgroup.add(polyline);
					//Все тела назад
					bodygroup.back();
					//Кривые после шапок
					grafgroup.after(headgroup);

				}
			}
			if (curtemp=="depth"){
				if (drawGraf == true && d110d.length > 0) {
					var K_x1 = (w1 * weight_colmn1) / ((Number(basePar[key].max)) - (Number(basePar[key].min)));
					var value = ''; 
					var cur_value_x = colmn11_x0;
					var cur_value_y = height_colmn1_p1 * h1;
					//var cur_value_y_step = (h1*100 - h1*disp_up)/(end_time-start_time);
					var cur_value_y_step = (h1 * 100 - h1 * disp_up) / (Kzoomdepth* 10);
				
					//Если есть хоть одна запись, то рисуем начало и конец линий(первая и последняя запись) чтобы не было дырок
					//Первая запись если меньше 10 сек то полоса
					if (d110d.length > 1) {
						if (d110d[0]["Zaboj"] - start_time > 1) {
							//cur_value_y = h1*disp_up;
							cur_value_y = h1 * disp_up + (d110d[0]["Zaboj"] - start_time) * cur_value_y_step;
						}
						else {
							cur_value_y = h1 * disp_up;
						}
				
						cur_value_x = colmn11_x0 + (d110d[0][basePar[key].par]) * K_x1 - (Number(basePar[key].min)) * K_x1;
						if (cur_value_x <= colmn11_x0) { cur_value_x = colmn11_x0 }
						if (cur_value_x > colmn11_x1) { cur_value_x = colmn11_x1 }
						if (cur_value_x >= 0) {
							value = value + cur_value_x;
							value = value + ',' + cur_value_y + ' ';
						}
					}
				
					//Последующие записи
					for (let j = 1; j < d110d.length - 1; j++) {
						cur_value_x = colmn11_x0 + (d110d[j][basePar[key].par]) * K_x1 - (Number(basePar[key].min)) * K_x1;
						cur_value_y = h1 * disp_up + (d110d[j]["Zaboj"] - start_time) * cur_value_y_step;
						//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
						/* cur_value_y =  (d110d[j]["Zaboj"]-start_time)*cur_value_y_step; */
						if (cur_value_x <= colmn11_x0) { cur_value_x = colmn11_x0 }
						if (cur_value_x > colmn11_x1) { cur_value_x = colmn11_x1 }
						if (cur_value_x >= 0) {
							value = value + cur_value_x;
							value = value + ',' + cur_value_y + ' ';
						}
					}
				
					//Последняя запись если меньше 10 сек то полоса
					if (d110d.length > 1) {
						cur_value_x = colmn11_x0 + (d110d[d110d.length - 1][basePar[key].par]) * K_x1 - (Number(basePar[key].min)) * K_x1;
						if (d110d[d110d.length - 1]["Zaboj"] - end_time > 60) {
							cur_value_y = h1 * 100;
						}
						else {
							//cur_value_y = h1*100;
							cur_value_y = h1 * disp_up + (d110d[d110d.length - 1]["Zaboj"] - start_time) * cur_value_y_step;
						}
						cur_value_x = colmn11_x0 + (d110d[d110d.length - 1][basePar[key].par]) * K_x1 - (Number(basePar[key].min)) * K_x1;
						if (cur_value_x <= colmn11_x0) { cur_value_x = colmn11_x0 }
						if (cur_value_x > colmn11_x1) { cur_value_x = colmn11_x1 }
						if (cur_value_x >= 0) {
							value = value + cur_value_x;
							value = value + ',' + cur_value_y + ' ';
						}
					}
				
					var polyline = draw.polyline(value).fill('none').stroke({ width: Sheet.width_gxf_line, color: basePar[key].color });
					//polyline.back();
					grafgroup.add(polyline);
					//Все тела назад
					bodygroup.back();
					//Кривые после шапок
					grafgroup.after(headgroup);

				}}
		} catch (e) { }

		}
	}







	//Настройки мин макс
	/*
	colmn3.draggable({
	  minX: 10
	, minY: 15
	, maxX: 200
	, maxY: 100
	, snapToGrid: 20 
	})
	*/

	//Рамка шкалы времени
	//


	/*colmn0.click(function() {
	this.fill({ color: '#f06' });
	alert('ta-da!');
	})*/
	//var group_time_rul = draw.nested();
	var time1 = draw.polygon('0,' + h1 * disp_up + ' ' + w1 * time_w + ',' + h1 * disp_up + ' ' + w1 * time_w + ',' + h1 * 100 + ' 0,' + h1 * 100)
	.fill({ color: Columns.col0.fill })
	.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor });
	// var time1 = draw.polygon('0,0' + ' ' + w1 * time_w + ',0' + ' ' + w1 * time_w + ',' + h1 * 100 + ' 0,' + h1 * 100)






	////////////////////////////////////////////////////////////////
	//Шкала времени
	////////////////////////////////////////////////////////////////
	//
	//Большие насечки
	//Длина насечки
	if (curtemp=='time'){
	var length = 1.5;
	var width_line = 2;
	//Шаг основынх насечек
	var big_teth_step = 1;
	if (isMobile) {
		big_teth_step = 1;
	}
	//Шаг значения 10 минут
	var stepMin = 10;
	//Основная насечка
	var big_teth = true;
	//Коэффициент зума и разряживание

	stepMin = Sheet.Kzoom * 2 * 4;

	var last_time2 = start_time / 1 + Sheet.Kzoom * 60 * 60;
	var day = new Date(last_time2 * 1000);
	var last_hour = day.getHours();
	var last_minutes = day.getMinutes();
	//Начало и конец
	var beg_time2 = start_time / 1;
	var cur_time2 = beg_time2;
	var day = new Date(cur_time2 * 1000);
	var plats = height - h1 * disp_up; //Ширина всего поля в единицах экрана
	var plats_data = last_time2 - beg_time2; //Ширина всего поля в единицах данных (диапазон в сек)
	var K_rul = plats / plats_data; //Коэф Ширина одной секунды в % колонки
	var beg_plats = h1 * disp_up //Отступ от шапки

	//Сколько целых минут?
	var minut_round = (last_time2 - beg_time2) / 60;

	// Сколько 10 минуток ?
	var ten_minuts = minut_round / stepMin;

	//Дата для первой 10 минутки в секундах от начала
	var ten = beg_time2 + stepMin * 60;//+10 минут
	var day = new Date(ten * 1000);
	var next_ten = Math.floor(day.getMinutes() / stepMin) * stepMin;//удалили минуты от 1..9
	var ten_date = new Date(day.getFullYear(), day.getMonth(), day.getDate(), day.getHours(), next_ten, 0, 0); // Дата 10 минут 0 сек 0 мсек
	var startTime = new Date(ten_date.getTime()); //Время старта в милисекундах первой 10ти минутки
	// Сколько секунд в начале надо отступить до круглой первой 10 минуты?
	var disp_sec_ten = startTime / 1000 - beg_time2;

	//Сколько надо отступить от начала планшета до первой 10 минуты
	beg_plats = beg_plats + K_rul * disp_sec_ten;

	//Шаг записей для текстовой глубины долота  и суммы объемов
	var step_txt_numb_rec = d110d.length / ten_minuts;

	for (let i = 0; i < ten_minuts; i++) {
		//Проверка на большую или малую засечку
		if ((i % big_teth_step) == 0) {
			big_teth = true;
			//big_teth_step = i+big_teth_step;
			length = Columns["col0"].size.w * 0.2;
			width_line = 2;
		} else {
			big_teth = false;
			length = Columns["col0"].size.w * 0.1;
			width_line = 1;
		}

		//Большие насечки и малые насечки
		var line_new = draw.line(0, beg_plats, w1 * length, beg_plats);
		line_new.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor });
		//group_time_rul.add(line_new);
		var line_new = draw.line(w1 * time_w - w1 * length, beg_plats, w1 * time_w, beg_plats);
		line_new.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor });
		//group_time_rul.add(line_new);

		//Маленькие насечки пунктир на все графики
		//Линия пунктирная

		var line = draw.line(w1 * time_w, beg_plats, w1 * 100, beg_plats);
		line.stroke({ width: Sheet.width_line_p, color: Sheet.dashcol1, dasharray: Sheet.dasharray });

		//Цифровые значения шкалы
		if (big_teth) {
			var day = new Date(Math.floor(startTime.getTime() + i * stepMin * 60 * 1000));
			var date = day.getDate();
			var hour = day.getHours();
			var minutes = day.getMinutes();
			if (hour < 10) { hour = "0" + hour }
			if (minutes < 10) { minutes = "0" + minutes }

			weight_colmn1 = Columns["col0"].size.w;
			//var text_time = draw.text(String(date)+' '+String(hour)+':'+String(minutes))
			var name_p1 = String(hour) + ':' + String(minutes);
			var text_name_p1 = draw.text(name_p1)
				.font({ family: Sheet.fnt, size: size_text_p, color: Columns.col0.color })
				.move(w1 * time_w / 2, beg_plats)
				.center(w1 * time_w / 2, beg_plats)
				.fill(Sheet.syscolor)

			//Ресайз текста если не влезает!
			if (text_name_p1.length() > weight_colmn1 * w1 * 0.5) {
				var coef = text_name_p1.length() / text_name_p1.attr('font-size')
				text_name_p1.clear();
				delete (text_name_p1);

				var text_name_p1 = draw.text(name_p1)
					.font({ family: Sheet.fnt, size: weight_colmn1 * w1 / coef * 0.5 })
					.move(w1 * time_w / 2, beg_plats)
					.center(w1 * time_w / 2, beg_plats)
					.fill(Sheet.syscolor)


			}


			if (Number(text_name_p1.attr('font-size')) > K_rul * stepMin * 60 * h1 / 7.7) {
				let resizeV = K_rul * stepMin * 60 * h1 / 7.7;
				//var coef =text_name_p1.length()/text_name_p1.attr('font-size')
				text_name_p1.clear();
				delete (text_name_p1);
				var text_name_p1 = draw.text(name_p1)
					.font({ family: Sheet.fnt, size: resizeV })
					.move(w1 * time_w / 2, beg_plats)
					.center(w1 * time_w / 2, beg_plats)
					.fill(Sheet.syscolor)
			}

			//Текстовые значения на КолонкаХ забой глубина суммарный объем и тд.
			try {
				if (d110d.length > 0) {
					for (var keey in txtPar) {
						weight_colmn1 = Columns["col" + String(Number((txtPar[keey].poz.x)))].size.w;
						//Отступ Столбца
						xcolmn1Poz = Columns["col" + String(Number((txtPar[keey].poz.x)))].poz.x;
						ycolmn1Poz = Columns["col" + String(Number((txtPar[keey].poz.x)))].poz.y;

						//Шапка отступ Столбца № по Х
						var colmn11_x0 = w1 * xcolmn1Poz;
						var colmn11_x1 = w1 * xcolmn1Poz + w1 * weight_colmn1;
						var colmn1_y0 = h1 * ycolmn1Poz;
						//console.log(i, step_txt_numb_rec,keey,Math.ceil(i*step_txt_numb_rec));

						//БУМ ШОКО var name_p1= String(d110d[Math.ceil(i*step_txt_numb_rec)]['Vrema'])+" - " + String ((startTime.getTime() + i* stepMin* 60 *1000)/1000);
						//var name_p1 =d110d[Math.ceil(i*step_txt_numb_rec)][keey];
						//Точное время
						//String ((startTime.getTime() + i* stepMin* 60 *1000)/1000)
						var ttime = (startTime.getTime() + i * stepMin * 60 * 1000) / 1000;
						name_p1 = "NaN";
						//Разница между временем
						var sub;
						for (var tmark in d110d) {
							sub = Number(d110d[tmark]['Vrema']) - ttime;
							if (sub < 20 && sub > -20) {
								name_p1 = d110d[tmark][txtPar[String(keey)].par];
								break;
							}

						}


						var text_name_p1 = draw.text(name_p1)
							.font({ family: Sheet.fnt, size: size_text_p })
							.move(colmn11_x0 + txtPar[keey].step * w1 * weight_colmn1, beg_plats)
							.center(colmn11_x0 + txtPar[keey].step * w1 * weight_colmn1, beg_plats)
							.fill(txtPar[keey].color)
							.id(keey);
						text_name_p1.backward();
						//Ресайз текста если не влезает!
						if (text_name_p1.length() > weight_colmn1 * w1 * 0.3) {
							var coef = text_name_p1.length() / text_name_p1.attr('font-size')
							text_name_p1.clear();
							delete (text_name_p1);

							var text_name_p1 = draw.text(name_p1)
								.font({ family: Sheet.fnt, size: weight_colmn1 * w1 / coef * 0.3 })
								.move(colmn11_x0 + txtPar[keey].step * w1 * weight_colmn1, beg_plats)
								.center(colmn11_x0 + txtPar[keey].step * w1 * weight_colmn1, beg_plats)
								.fill(txtPar[keey].color)
								.id(keey)

						}

						if (Number(text_name_p1.attr('font-size')) > K_rul * stepMin * 60 * h1 / 7.7) {
							let resizeV = K_rul * stepMin * 60 * h1 / 7.7;
							//var coef =text_name_p1.length()/text_name_p1.attr('font-size')
							text_name_p1.clear();
							delete (text_name_p1);
							var text_name_p1 = draw.text(name_p1)
								.font({ family: Sheet.fnt, size: resizeV })
								.move(colmn11_x0 + txtPar[keey].step * w1 * weight_colmn1, beg_plats)
								.center(colmn11_x0 + txtPar[keey].step * w1 * weight_colmn1, beg_plats)
								.fill(txtPar[keey].color)
								.id(keey)
						}


					}
				}
			} catch (e) { }


		}
		beg_plats = beg_plats + K_rul * stepMin * 60; //Следующие 10 минут		
	}

	//МАЛЕНЬКИЕ НАСЕЧКИ 
	stepMin = Sheet.Kzoom * 1.0;

	var last_time2 = start_time / 1 + Sheet.Kzoom * 60 * 60;
	var day = new Date(last_time2 * 1000);
	var last_hour = day.getHours();
	var last_minutes = day.getMinutes();
	//Начало и конец
	var beg_time2 = start_time / 1;
	var cur_time2 = beg_time2;
	var day = new Date(cur_time2 * 1000);
	/* var beg_year = day.getFullYear();
	var beg_month = day.getMonth();
	var beg_date = day.getDate();
	var beg_hour = day.getHours();
	var beg_minutes = day.getMinutes();
	var beg_sec = day.getSeconds();
	var beg_msec = day.getMilliseconds(); */

	var plats = height - h1 * disp_up; //Ширина всего поля в единицах экрана
	var plats_data = last_time2 - beg_time2; //Ширина всего поля в единицах данных (диапазон в сек)
	var K_rul = plats / plats_data; //Коэф Ширина одной секунды в % колонки
	var beg_plats = h1 * disp_up //Отступ от шапки

	//Сколько целых минут?
	var minut_round = (last_time2 - beg_time2) / 60;
	/*if (beg_sec !== 0){
		minut_round = minut_round - 1;
	}
	*/
	// Сколько 10 минуток ?
	var ten_minuts = minut_round / stepMin;

	//Дата для первой 10 минутки в секундах от начала
	var ten = beg_time2 + stepMin * 60;//+10 минут
	var day = new Date(ten * 1000);
	var next_ten = Math.floor(day.getMinutes() / stepMin) * stepMin;//удалили минуты от 1..9
	var ten_date = new Date(day.getFullYear(), day.getMonth(), day.getDate(), day.getHours(), next_ten, 0, 0); // Дата 10 минут 0 сек 0 мсек
	var startTime = new Date(ten_date.getTime()); //Время старта в милисекундах первой 10ти минутки
	// Сколько секунд в начале надо отступить до круглой первой 10 минуты?
	var disp_sec_ten = startTime / 1000 - beg_time2;

	//Сколько надо отступить от начала планшета до первой 10 минуты
	beg_plats = beg_plats + K_rul * disp_sec_ten;

	//Шаг записей для текстовой глубины долота  и суммы объемов
	var step_txt_numb_rec = d110d.length / ten_minuts;

	for (let i = 0; i < ten_minuts; i++) {
		//Проверка на большую или малую засечку

		length = Columns["col0"].size.w * 0.1;
		width_line = 1;
		//Большие насечки и малые насечки
		var line_new = draw.line(0, beg_plats, w1 * length, beg_plats);
		line_new.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor });
		//group_time_rul.add(line_new);
		var line_new = draw.line(w1 * time_w - w1 * length, beg_plats, w1 * time_w, beg_plats);
		line_new.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor });
		beg_plats = beg_plats + K_rul * stepMin * 60; //Следующие 10 минут

	}


	try {
		//
		//Пропуск материала
		//Поиск дырки
		var hole = "";


		for (let j = 0; j < d110d.length - 2; j++) {
			if (d110d[j + 1]["Vrema"] - d110d[j]["Vrema"] > 120) {
				hole += j + ", " + (j + 1) + ", ";
			}
			if (end_time - d110d[j]["Vrema"] > 120 && online != true && j == d110d.length - 3) {
				hole += j + ", " + (j + 1) + ", ";
			}
			if (d110d[j]["Vrema"] - start_time > 120 && j == 0) {
				hole += j + ", " + (j + 1) + ", ";
			}
		}

		function unique(arr) {
			var obj = {};

			for (let i = 0; i < arr.length; i++) {
				var str = arr[i];
				obj[str] = true; // запомнить строку в виде свойства объекта
			}

			return Object.keys(obj); // или собрать ключи перебором для IE8-
		}
		var colmn11_y0 = h1 * disp_up;
		var holearr = hole.split(',');
		/* console.log(d110d.length,holearr); */
		for (let j = 0; j < (holearr.length) - 1; j += 2) {
			var holl1 = Number(holearr[j]);
			var holl2 = Number(holearr[j + 1]);
			/* console.log(holl1,holl2,j,d110d.length-1,holearr[j]); */
			var y1_hole = colmn11_y0 + (d110d[holl1]["Vrema"] - start_time) * cur_value_y_step;
			var y2_hole = colmn11_y0 + (d110d[holl2]["Vrema"] - start_time) * cur_value_y_step;
			if (holearr[j] == 0) {
				y1_hole = colmn11_y0;
				y2_hole = colmn11_y0 + (d110d[holl2]["Vrema"] - start_time) * cur_value_y_step;
			}
			if ((holearr[j] == d110d.length - 3) && refresh != true) {
				y1_hole = colmn11_y0 + (d110d[holl1]["Vrema"] - start_time) * cur_value_y_step;
				y2_hole = colmn11_y0 + h1 * 100;
			}
			//var hol1 = draw.polygon(5+',0' +' '+18+',0'+' '+18+','+w1*100+5+','+w1*100, {'fill-opacity': 0.6})
			var hol1 = draw.polygon('0,' + y1_hole + ' ' + '0,' + y2_hole + ' ' + w1 * 100 + ',' + y2_hole + ' ' + w1 * 100 + ',' + y1_hole)
				//var hol1 = draw.polygon('0, '+ y1_hole +'0, '+y2_hole+' '+w1*100+','+y1_hole +' '+w1*100+','+y2_hole)
				.fill({ color: Sheet.holcol });
			hol1.attr({ 'fill-opacity': Sheet.holhide });

		}
	} catch (e) { }

	try {
		//
		//Комментарии
		//Ширина текущего столбца
		weight_colmn1 = Columns["col0"].size.w;
		//Отступ Столбца
		xcolmn1Poz = Columns["col0"].poz.x;
		ycolmn1Poz = Columns["col0"].poz.y;

		//Шапка отступ Столбца № по Х
		var colmn11_x0 = w1 * xcolmn1Poz;
		var colmn11_x1 = w1 * xcolmn1Poz + w1 * weight_colmn1;
		var colmn11_y0 = h1 * disp_up;

		for (let j = 0; j < comment.length; j++) {
			var ncolcmt = colmn11_x0 + (w1 * 100 - w1 * Columns["col0"].size.w) / 8;
			var left = comment[j]["left_txt"];
			
			if (left > 50) { ncolcmt = (w1 * 100 - w1 * Columns["col0"].size.w) / 4 * 1 + (w1 * 100 - w1 * Columns["col0"].size.w) / 8 + w1 * Columns["col0"].size.w; }
			if (left > 100) { ncolcmt = (w1 * 100 - w1 * Columns["col0"].size.w) / 4 * 2 + (w1 * 100 - w1 * Columns["col0"].size.w) / 8 + w1 * Columns["col0"].size.w; }
			if (left > 140) { ncolcmt = (w1 * 100 - w1 * Columns["col0"].size.w) / 4 * 3 + (w1 * 100 - w1 * Columns["col0"].size.w) / 8 + w1 * Columns["col0"].size.w; }
			//если отступ меньше начала колонки
			if (ncolcmt < w1 * weight_colmn1) { ncolcmt = w1 * weight_colmn1; };
			//если мобильный, то по середине
			if(isMobile){ncolcmt =50*w1;}
			var cury = colmn11_y0 + (comment[j]["Vrema"] - start_time) * cur_value_y_step;
			var name_p3 = '' + comment[j]["Comment"]; //d110d[d110d.length-1]["Npot"];
			//Если попадает в окно
			if (cury > colmn11_y0) {
				name_p3 = name_p3.match(/.{1,32}/g);
				//console.log(name_p3);
				var cur_comm = ""
				for (let i = 0; i < name_p3.length; i++) {
					name_p3[i] = name_p3[i] + '\n'
					cur_comm = cur_comm + name_p3[i]
				}
				var text_name_p3 = draw.text(cur_comm)
					.font({ family: Sheet.fnt, size: Sheet.cmtsize })
					.move(ncolcmt, cury)
					.center(ncolcmt, cury)
					.fill(Sheet.cmtcolor)

			}
			//console.log(cur_comm);
		}

	} catch (e) { }

}



//Если ШКАЛА ГЛУБИН А
if (curtemp=='depth'){

	var length = 1.5;
	var width_line = 2;
	//Шаг основынх насечек
	var big_teth_step = 1;
	if (isMobile) {
		big_teth_step = 1;
	}
	//Шаг значения 10 метров
	var stepMin = 10;
	//Основная насечка
	var big_teth = true;
	//Коэффициент зума и разряживание
	// console.log(start_time);
	
	// 10 Значений
	//var ten_minuts = minut_round / stepMin;
	var ten_minuts = 10;
	var ten_minuts_small = 10;
	var last_time2 = Number(start_time/1)+Kzoomdepth*ten_minuts;
	
	
	
	//Начало и конец
	var beg_time2 = start_time / 1;
	var cur_time2 = beg_time2;
	var day = cur_time2;
	var plats = height - h1 * disp_up; //Ширина всего поля в единицах экрана
	var plats_data = last_time2 - beg_time2; //Ширина всего поля в единицах данных (диапазон в сек)
	var K_rul = plats / stepMin; //Коэф Ширина одной секунды в % колонки
	var beg_plats = h1 * disp_up //Отступ от шапки

	//Сколько целых минут?
	var minut_round = (last_time2 - beg_time2) / 10;

	

	// //Дата для первой 10 минутки в секундах от начала
	// var ten = beg_time2;//+10 минут
	// var day = new Date(ten * 1000);
	// var next_ten = Math.floor(day.getMinutes() / stepMin) * stepMin;//удалили минуты от 1..9
	// var ten_date = new Date(day.getFullYear(), day.getMonth(), day.getDate(), day.getHours(), next_ten, 0, 0); // Дата 10 минут 0 сек 0 мсек
	// var startTime =beg_time2; //Время старта в милисекундах первой 10ти минутки
	// // Сколько секунд в начале надо отступить до круглой первой 10 минуты?
	// var disp_sec_ten = 0;

	// //Сколько надо отступить от начала планшета до первой 10 минуты
	// beg_plats = beg_plats + K_rul * disp_sec_ten;

	

	
	// console.log(ten_minuts);
	for (let i = 0; i < ten_minuts; i++) {
		// // console.log(i);
		// if ((i % big_teth_step) == 0) {
		// 	big_teth = true;
		// 	//big_teth_step = i+big_teth_step;
		// 	length = Columns["col0"].size.w * 0.2;
		// 	width_line = 2;
		// } else {
		// 	big_teth = false;
		// 	length = Columns["col0"].size.w * 0.1;
		// 	width_line = 1;
		// }
		length=Columns["col0"].size.w * 0.2;
		//Большие насечки и малые насечки
		var line_new = draw.line(0, beg_plats, w1 * length, beg_plats);
		line_new.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor });
		//group_time_rul.add(line_new);
		var line_new = draw.line(w1 * time_w - w1 * length, beg_plats, w1 * time_w, beg_plats);
		line_new.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor });
		//group_time_rul.add(line_new);

		//Маленькие насечки пунктир на все графики
		//Линия пунктирная

		var line = draw.line(w1 * time_w, beg_plats, w1 * 100, beg_plats);
		line.stroke({ width: Sheet.width_line_p, color: Sheet.dashcol1, dasharray: Sheet.dasharray });

		//Цифровые значения шкалы
		if (big_teth) {
			

			weight_colmn1 = Columns["col0"].size.w;
			//var text_time = draw.text(String(date)+' '+String(hour)+':'+String(minutes))
			//var name_p1 = String(Math.floor(Number(start_time/1 +(h1 * 100 - h1 * disp_up) / (Sheet.Kzoom*100)+ cur_value_y_step *i)));
			var name_p1 = String(Number(start_time)+ i* stepMin );
			var text_name_p1 = draw.text(name_p1)
				.font({ family: Sheet.fnt, size: size_text_p, color: Columns.col0.color })
				.move(w1 * time_w / 2, beg_plats)
				.center(w1 * time_w / 2, beg_plats)
				.fill(Sheet.syscolor)

			//Ресайз текста если не влезает!
			if (text_name_p1.length() > weight_colmn1 * w1 * 0.5) {
				var coef = text_name_p1.length() / text_name_p1.attr('font-size')
				text_name_p1.clear();
				delete (text_name_p1);

				var text_name_p1 = draw.text(name_p1)
					.font({ family: Sheet.fnt, size: weight_colmn1 * w1 / coef * 0.5 })
					.move(w1 * time_w / 2, beg_plats)
					.center(w1 * time_w / 2, beg_plats)
					.fill(Sheet.syscolor)


			}


			if (Number(text_name_p1.attr('font-size')) > K_rul * stepMin * 100 * h1 / 7.7) {
				let resizeV = K_rul * stepMin * 100 * h1 / 7.7;
				//var coef =text_name_p1.length()/text_name_p1.attr('font-size')
				text_name_p1.clear();
				delete (text_name_p1);
				var text_name_p1 = draw.text(name_p1)
					.font({ family: Sheet.fnt, size: resizeV })
					.move(w1 * time_w / 2, beg_plats)
					.center(w1 * time_w / 2, beg_plats)
					.fill(Sheet.syscolor)
			}

			//Текстовые значения на КолонкаХ забой глубина суммарный объем и тд.
			try {
				if (d110d.length > 0) {
					for (var keey in txtPar) {
						weight_colmn1 = Columns["col" + String(Number((txtPar[keey].poz.x)))].size.w;
						//Отступ Столбца
						xcolmn1Poz = Columns["col" + String(Number((txtPar[keey].poz.x)))].poz.x;
						ycolmn1Poz = Columns["col" + String(Number((txtPar[keey].poz.x)))].poz.y;

						//Шапка отступ Столбца № по Х
						var colmn11_x0 = w1 * xcolmn1Poz;
						var colmn11_x1 = w1 * xcolmn1Poz + w1 * weight_colmn1;
						var colmn1_y0 = h1 * ycolmn1Poz;
						//console.log(i, step_txt_numb_rec,keey,Math.ceil(i*step_txt_numb_rec));

						//БУМ ШОКО var name_p1= String(d110d[Math.ceil(i*step_txt_numb_rec)]['Zaboj'])+" - " + String ((startTime.getTime() + i* stepMin* 100 *1000)/1000);
						//var name_p1 =d110d[Math.ceil(i*step_txt_numb_rec)][keey];
						//Точное время
						//String ((startTime.getTime() + i* stepMin* 100 *1000)/1000)
						var ttime = Number(start_time)+ i* stepMin;
						name_p1 = "NaN";
						//Разница между временем
						var sub;
						for (var tmark in d110d) {
							sub = Number(d110d[tmark]['Zaboj']) - ttime;
							if (sub < 0.2 && sub > -0.2) {
								name_p1 = d110d[tmark][txtPar[String(keey)].par];
								break;
							}

						}


						var text_name_p1 = draw.text(name_p1)
							.font({ family: Sheet.fnt, size: size_text_p })
							.move(colmn11_x0 + txtPar[keey].step * w1 * weight_colmn1, beg_plats)
							.center(colmn11_x0 + txtPar[keey].step * w1 * weight_colmn1, beg_plats)
							.fill(txtPar[keey].color)
							.id(keey);
						text_name_p1.backward();
						//Ресайз текста если не влезает!
						if (text_name_p1.length() > weight_colmn1 * w1 * 0.3) {
							var coef = text_name_p1.length() / text_name_p1.attr('font-size')
							text_name_p1.clear();
							delete (text_name_p1);

							var text_name_p1 = draw.text(name_p1)
								.font({ family: Sheet.fnt, size: weight_colmn1 * w1 / coef * 0.3 })
								.move(colmn11_x0 + txtPar[keey].step * w1 * weight_colmn1, beg_plats)
								.center(colmn11_x0 + txtPar[keey].step * w1 * weight_colmn1, beg_plats)
								.fill(txtPar[keey].color)
								.id(keey)

						}

						if (Number(text_name_p1.attr('font-size')) > K_rul * stepMin * 100 * h1 / 7.7) {
							let resizeV = K_rul * stepMin * 100 * h1 / 7.7;
							//var coef =text_name_p1.length()/text_name_p1.attr('font-size')
							text_name_p1.clear();
							delete (text_name_p1);
							var text_name_p1 = draw.text(name_p1)
								.font({ family: Sheet.fnt, size: resizeV })
								.move(colmn11_x0 + txtPar[keey].step * w1 * weight_colmn1, beg_plats)
								.center(colmn11_x0 + txtPar[keey].step * w1 * weight_colmn1, beg_plats)
								.fill(txtPar[keey].color)
								.id(keey)
						}


					}
				}
			} catch (e) { }


		}
		length = Columns["col0"].size.w * 0.1;
		for (let j = 0; j < ten_minuts_small; j++) {
			let step1=beg_plats+(K_rul*j)/ten_minuts_small;
			var line_new = draw.line(0, step1, w1 * length, step1);
			line_new.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor });
			var line_new = draw.line(w1 * time_w - w1 * length, step1, w1 * time_w, step1);
			line_new.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor });
		}
		beg_plats = beg_plats + K_rul; //Следующие 10 минут		
	}

	


	try {
		//
		//Пропуск материала
		//Поиск дырки
		var hole = "";


		for (let j = 0; j < d110d.length - 2; j++) {
			if (d110d[j + 1]["Zaboj"] - d110d[j]["Zaboj"] > 1) {
				hole += j + ", " + (j + 1) + ", ";
			}
			if (end_time - d110d[j]["Zaboj"] > 1 && online != true && j == d110d.length - 3) {
				hole += j + ", " + (j + 1) + ", ";
			}
			if (d110d[j]["Zaboj"] - start_time > 1 && j == 0) {
				hole += j + ", " + (j + 1) + ", ";
			}
		}

		function unique(arr) {
			var obj = {};

			for (let i = 0; i < arr.length; i++) {
				var str = arr[i];
				obj[str] = true; // запомнить строку в виде свойства объекта
			}

			return Object.keys(obj); // или собрать ключи перебором для IE8-
		}
		var colmn11_y0 = h1 * disp_up;
		var holearr = hole.split(',');
		/* console.log(d110d.length,holearr); */
		for (let j = 0; j < (holearr.length) - 1; j += 2) {
			var holl1 = Number(holearr[j]);
			var holl2 = Number(holearr[j + 1]);
			/* console.log(holl1,holl2,j,d110d.length-1,holearr[j]); */
			var y1_hole = colmn11_y0 + (d110d[holl1]["Zaboj"] - start_time) * cur_value_y_step;
			var y2_hole = colmn11_y0 + (d110d[holl2]["Zaboj"] - start_time) * cur_value_y_step;
			if (holearr[j] == 0) {
				y1_hole = colmn11_y0;
				y2_hole = colmn11_y0 + (d110d[holl2]["Zaboj"] - start_time) * cur_value_y_step;
			}
			if ((holearr[j] == d110d.length - 3) && refresh != true) {
				y1_hole = colmn11_y0 + (d110d[holl1]["Zaboj"] - start_time) * cur_value_y_step;
				y2_hole = colmn11_y0 + h1 * 100;
			}
			//var hol1 = draw.polygon(5+',0' +' '+18+',0'+' '+18+','+w1*100+5+','+w1*100, {'fill-opacity': 0.6})
			var hol1 = draw.polygon('0,' + y1_hole + ' ' + '0,' + y2_hole + ' ' + w1 * 100 + ',' + y2_hole + ' ' + w1 * 100 + ',' + y1_hole)
				//var hol1 = draw.polygon('0, '+ y1_hole +'0, '+y2_hole+' '+w1*100+','+y1_hole +' '+w1*100+','+y2_hole)
				.fill({ color: Sheet.holcol });
			hol1.attr({ 'fill-opacity': Sheet.holhide });

		}
	} catch (e) { }

	try {
		//
		//Комментарии
		//Ширина текущего столбца
		weight_colmn1 = Columns["col0"].size.w;
		//Отступ Столбца
		xcolmn1Poz = Columns["col0"].poz.x;
		ycolmn1Poz = Columns["col0"].poz.y;

		//Шапка отступ Столбца № по Х
		var colmn11_x0 = w1 * xcolmn1Poz;
		var colmn11_x1 = w1 * xcolmn1Poz + w1 * weight_colmn1;
		var colmn11_y0 = h1 * disp_up;

		for (let j = 0; j < comment.length; j++) {
			var ncolcmt = colmn11_x0 + (w1 * 100 - w1 * Columns["col0"].size.w) / 8;
			var left = comment[j]["left_txt"];
			
			if (left > 50) { ncolcmt = (w1 * 100 - w1 * Columns["col0"].size.w) / 4 * 1 + (w1 * 100 - w1 * Columns["col0"].size.w) / 8 + w1 * Columns["col0"].size.w; }
			if (left > 100) { ncolcmt = (w1 * 100 - w1 * Columns["col0"].size.w) / 4 * 2 + (w1 * 100 - w1 * Columns["col0"].size.w) / 8 + w1 * Columns["col0"].size.w; }
			if (left > 140) { ncolcmt = (w1 * 100 - w1 * Columns["col0"].size.w) / 4 * 3 + (w1 * 100 - w1 * Columns["col0"].size.w) / 8 + w1 * Columns["col0"].size.w; }
			//если отступ меньше начала колонки
			if (ncolcmt < w1 * weight_colmn1) { ncolcmt = w1 * weight_colmn1; };
			//если мобильный, то по середине
			if(isMobile){ncolcmt =50*w1;}
			var cury = colmn11_y0 + (comment[j]["Zaboj"] - start_time) * cur_value_y_step;
			var name_p3 = '' + comment[j]["Comment"]; //d110d[d110d.length-1]["Npot"];
			//Если попадает в окно
			if (cury > colmn11_y0) {
				name_p3 = name_p3.match(/.{1,32}/g);
				//console.log(name_p3);
				var cur_comm = ""
				for (let i = 0; i < name_p3.length; i++) {
					name_p3[i] = name_p3[i] + '\n'
					cur_comm = cur_comm + name_p3[i]
				}
				var text_name_p3 = draw.text(cur_comm)
					.font({ family: Sheet.fnt, size: Sheet.cmtsize })
					.move(ncolcmt, cury)
					.center(ncolcmt, cury)
					.fill(Sheet.cmtcolor)

			}
			//console.log(cur_comm);
		}

	} catch (e) { }

}


	//////////////////////
	//Табличка со значениями ВРЕМЯ
	///////////////////////	
	if (curtemp=='time'){
	for (key in Columns) {
		if (key != 'col0') {
			// var inv_col = draw.group();
			// inv_col.clear();

			//Столбец
			var colmn2 = draw.polygon(Number(Columns[key].poz.x) * w1 + ',' + (Number(Columns[key].poz.y) * h1 + Number(Columns[key].size.h) * h1) + ' ' + (Number(Columns[key].poz.x) * w1 + Number(Columns[key].size.w) * w1) + ',' + (Number(Columns[key].poz.y) * h1 + Number(Columns[key].size.h) * h1) + ' ' + (Number(Columns[key].poz.x) * w1 + Number(Columns[key].size.w) * w1) + ',' + 100 * h1 + ' ' + Number(Columns[key].poz.x) * w1 + ',' + 100 * h1)
				.fill({ color: getRandomColor() })
				.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor })
				.opacity(0)
				.id(key);
			// colmn2.attr({'fill-opacity': 0.5});
			// //inv_col.add(colmn2);
			// var gfx_group = draw.group()
			// .id(key);
			// var mouseDwn = false;

			// colmn2.mouseup(function(e) {
			// 	mouseDwn = false;
			// 	//inv_col.clear();
			// 	//inv_col = draw.group();
			// 	gfx_group.remove();
			// 	gfx_group = draw.group();
			// });



			colmn2.click(function (e) {

				// gfx_group.clear();
				// if (mouseDwn){
				// 	//var gfx_group = draw.group();
				// 	gfx_group.clear();
				// 	// inv_col.clear();
				let cursor = getCursorPosition(e, svg);
				let X_cur_mouse_click = cursor.x;
				let Y_cur_mouse_click = cursor.y;
				//Группа
				var gfx_group = draw.group();
				//parPan(this.attr('id'));
				//Выкл обновления
				refresh = false;
				// if (!isMobile) {
				// 	Sheet.height_value = disp_up;
				// } else {

				// 	Sheet.height_value = disp_up;
				// }
				//не уверен!


				var text_size_value = size_text_p;
				/* if (resizeH>resizeV) {text_size_value=resizeV;} */
				/* text_size_value = Sheet.curvalsize; */
				if (text_size_value > Sheet.height_value * h1 / 7.6) {
					text_size_value = Sheet.height_value * h1 / 7.6;
				}



				// let wcol=w1/2.0*Number(Columns[this.attr('id')].size.w);
				// console.log(w1/2.0*Number(Columns[this.attr('id')].size.w));
				// var gfxr = draw.polygon((X_cur_mouse_click-wcol)+','+(Y_cur_mouse_click -h1*(Sheet.height_value+0.5)) +' '+(X_cur_mouse_click+wcol)+','+(Y_cur_mouse_click -h1*(Sheet.height_value+0.5))+' '+(X_cur_mouse_click+wcol)+' '+Y_cur_mouse_click+' '+(X_cur_mouse_click-wcol)+' '+Y_cur_mouse_click)

				//var gfxr = draw.polygon((X_cur_mouse_click-w1*(Sheet.width_value/2-0.5))+','+(Y_cur_mouse_click -h1*(Sheet.height_value+0.5)) +' '+(X_cur_mouse_click+w1*(Sheet.width_value/2+0.5))+','+(Y_cur_mouse_click -h1*(Sheet.height_value+0.5))+' '+(X_cur_mouse_click+w1*(Sheet.width_value/2+0.5))+' '+Y_cur_mouse_click+' '+(X_cur_mouse_click-w1*(Sheet.width_value/2-0.5))+' '+Y_cur_mouse_click)
				var gfxr = draw.polygon((X_cur_mouse_click - w1 * (Sheet.width_value / 2)) + ',' + (Y_cur_mouse_click - h1 * (Sheet.height_value)) + ' ' + (X_cur_mouse_click + w1 * (Sheet.width_value / 2)) + ',' + (Y_cur_mouse_click - h1 * (Sheet.height_value)) + ' ' + (X_cur_mouse_click + w1 * (Sheet.width_value / 2)) + ',' + Y_cur_mouse_click + ' ' + (X_cur_mouse_click - w1 * (Sheet.width_value / 2)) + ',' + Y_cur_mouse_click)
					//ширина поля со клик зачениями
					// weight_colmn1 = w1*(Columns["col"+String(Number((txtPar[keey].poz.x)))].size.w)/2;
					// var gfxr = draw.polygon((X_cur_mouse_click-weight_colmn1)+','+(Y_cur_mouse_click -h1*(Sheet.height_value+0.5)) +' '+(X_cur_mouse_click+weight_colmn1)+','+(Y_cur_mouse_click -h1*(Sheet.height_value+0.5))+' '+(X_cur_mouse_click+weight_colmn1)+','+Y_cur_mouse_click+' '+(X_cur_mouse_click-weight_colmn1)+','+Y_cur_mouse_click)
					.fill({ color: Sheet.curcolorval })
					.stroke({ width: Sheet.width_gxf_line, dasharray: '2,3', color: Sheet.syscolor })
					.id(this.attr('id'));
				gfx_group.add(gfxr);

				//Визир
				gfxr.attr({ 'fill-opacity': Sheet.faderr });
				//var gfxr_line = draw.line( '0 ,'+ Y_cur_mouse_click +' ' +(w1*100)+',' + Y_cur_mouse_click)
				var gfxr_line = draw.line('0 ,' + Y_cur_mouse_click + ' ' + (w1 * 100) + ',' + Y_cur_mouse_click)
					.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor });

				gfx_group.add(gfxr_line);

				//var cur_value_y_step_val = (h1*100 - (Number(Columns[this.attr('id')].size.h)*h1))/d110d.length;



				//БУМ ШОКО var name_p1= String(d110d[Math.ceil(i*step_txt_numb_rec)]['Vrema'])+" - " + String ((startTime.getTime() + i* stepMin* 60 *1000)/1000);
				//var name_p1 =d110d[Math.ceil(i*step_txt_numb_rec)][keey];
				//Точное время
				//String ((startTime.getTime() + i* stepMin* 60 *1000)/1000)
				var cur_value_y_step_val = (h1 * 100 - (Number(Columns[this.attr('id')].size.h) * h1)) / (Sheet.Kzoom * 60 * 60);
				// var ttime =start_time/1 + Math.round((Y_cur_mouse_click - Number(Columns[this.attr('id')].size.h)*h1)/cur_value_y_step_val);
				var ttime = start_time / 1 + Math.round((Y_cur_mouse_click - Number(Columns[this.attr('id')].size.h) * h1) / cur_value_y_step_val);
				//Индекс искомой записи -1 не найдена
				var disp_val1 = -1;
				//Разница между значение записи и клика
				var sub;
				// Первая запись индекс
				var fidx = -1;
				// Последняя запись индекс
				var lidx = -1;
				for (let tmark in d110d) {

					sub = (d110d[tmark]['Vrema']) - ttime;
					/* console.log (Number (d110d[tmark]['Vrema']) ,'-',ttime,'-' ,sub); */
					if (sub < 60 && sub > -60) {
						if (fidx == -1) {
							fidx = tmark;
						}
						lidx = tmark;

					}

				}
				// Если несколько записей подходят в диапазон
				if (fidx != lidx && fidx != -1 && lidx != -1) {
					disp_val1 = Number(fidx) + Number(Math.floor((lidx - fidx) / 2.0));
				} else {
					if (fidx != -1) { disp_val1 = lidx; }
				}


				/* console.log (fidx,lidx,disp_val1); */
				//1543429113 - 15434189587804
				//1543429431 - 159636.9304
				//1543429509 - 154345667.4
				/* var disp_val1 = start_time + Math.round((Y_cur_mouse_click - Number(Columns[this.attr('id')].size.h)*h1)/cur_value_y_step_val); */
				//console.log (start_time+disp_val1);
				//Обрезка col(Номер столбца)
				var strN = Number(this.attr('id').toString().substr(3));
				//ЧИсло параметров
				var numb_value = 0;
				for (keey in basePar) {
					if (basePar[keey].poz.x == strN) {
						numb_value = numb_value + 1;
					}
				}
				for (keey in txtPar) {
					if (txtPar[keey].poz.x == strN) {
						numb_value = numb_value + 1;
					}
				}
				for (keey in txtOknOPar) {
					if (txtOknOPar[keey].poz.x == strN) {
						numb_value = numb_value + 1;
					}
				}

				//Шаг вертикального отступа
				var step_val = Sheet.height_value / numb_value;
				var all_step = 0;
				//Значения
				for (keey in basePar) {
					//График
					if (basePar[keey].poz.x == strN) {
						var cur_val = -2147480;
						if (disp_val1 > 0) { cur_val = String(d110d[disp_val1][basePar[keey].par]) };
						if (Number(cur_val) <= -2147480) { cur_val = "NaN"; }
						var text_value = draw.text(basePar[keey].txt + " " + cur_val + " (" + basePar[keey].unit + ")")
							.font({ family: Sheet.fnt, size: text_size_value })
							// .move(X_cur_mouse_click, Y_cur_mouse_click -h1*Sheet.height_value + h1*all_step)
							.move(X_cur_mouse_click, Y_cur_mouse_click - h1 * Sheet.height_value + h1 * all_step)
							.cx(X_cur_mouse_click)
							.fill(basePar[keey].color);
						text_value.attr({ 'fill-opacity': 1 });



						//Ресайз текста если не влезает!
						if (text_value.length() > Sheet.width_value * w1) {
							var coef = text_value.length() / text_value.attr('font-size')
							text_value.clear();
							delete (text_value);
							var text_value = draw.text(basePar[keey].txt + " " + cur_val + " (" + basePar[keey].unit + ")")
								.font({ family: Sheet.fnt, size: Sheet.width_value * w1 / (coef * 1.1) })
								// .move(X_cur_mouse_click, Y_cur_mouse_click -h1*Sheet.height_value + h1*all_step)
								.move(X_cur_mouse_click, Y_cur_mouse_click - h1 * Sheet.height_value + h1 * all_step)
								.cx(X_cur_mouse_click)
								.fill(basePar[keey].color);
							text_value.attr({ 'fill-opacity': 1 });


						}

						if (Number(text_value.attr('font-size')) > Sheet.height_value * h1 / 7.7) {
							let resizeV = Sheet.height_value * h1 / 7.7;
							//var coef =text_name_p1.length()/text_name_p1.attr('font-size')
							text_value.clear();
							delete (text_value);
							var text_value = draw.text(basePar[keey].txt + " " + cur_val + " (" + basePar[keey].unit + ")")
								.font({ family: Sheet.fnt, size: resizeV })
								// .move(X_cur_mouse_click, Y_cur_mouse_click -h1*Sheet.height_value + h1*all_step)
								.move(X_cur_mouse_click, Y_cur_mouse_click - h1 * Sheet.height_value + h1 * all_step)
								.cx(X_cur_mouse_click)
								.fill(basePar[keey].color);
							text_value.attr({ 'fill-opacity': 1 });
						}


						all_step = all_step + step_val;
						gfx_group.add(text_value);
						// console.log(text_value.length());
					}
				}
				//Текстовые метки
				for (keey in txtPar) {
					if (txtPar[keey].poz.x == strN) {
						var cur_val = -2147480;
						if (disp_val1 > 0) { cur_val = String(d110d[disp_val1][txtPar[keey].par]) };
						if (Number(cur_val) <= -2147480) { cur_val = "NaN"; }
						var text_value = draw.text(txtPar[keey].txt + " " + cur_val + " (" + txtPar[keey].unit + ")")
							.font({ family: Sheet.fnt, size: text_size_value })
							// .move(X_cur_mouse_click, Y_cur_mouse_click -h1*Sheet.height_value + h1*all_step)
							.move(X_cur_mouse_click, Y_cur_mouse_click - h1 * Sheet.height_value + h1 * all_step)
							.cx(X_cur_mouse_click)
							.fill(txtPar[keey].color);
						text_value.attr({ 'fill-opacity': 1 });


						//Ресайз текста если не влезает!

						if (text_value.length() > Sheet.width_value * w1) {
							var coef = text_value.length() / text_value.attr('font-size')
							text_value.clear();
							delete (text_value);
							var text_value = draw.text(txtPar[keey].txt + " " + cur_val + " (" + txtPar[keey].unit + ")")
								.font({ family: Sheet.fnt, size: Sheet.width_value * w1 / (coef * 1.1) })
								// .move(X_cur_mouse_click, Y_cur_mouse_click -h1*Sheet.height_value + h1*all_step)
								.move(X_cur_mouse_click, Y_cur_mouse_click - h1 * Sheet.height_value + h1 * all_step)
								.cx(X_cur_mouse_click)
								.fill(txtPar[keey].color);
							text_value.attr({ 'fill-opacity': 1 });


						}

						if (Number(text_value.attr('font-size')) > Sheet.height_value * h1 / 7.7) {
							let resizeV = Sheet.height_value * h1 / 7.7;
							//var coef =text_name_p1.length()/text_name_p1.attr('font-size')
							text_value.clear();
							delete (text_value);
							var text_value = draw.text(txtPar[keey].txt + " " + cur_val + " (" + txtPar[keey].unit + ")")
								.font({ family: Sheet.fnt, size: resizeV })
								// .move(X_cur_mouse_click, Y_cur_mouse_click -h1*Sheet.height_value + h1*all_step)
								.move(X_cur_mouse_click, Y_cur_mouse_click - h1 * Sheet.height_value + h1 * all_step)
								.cx(X_cur_mouse_click)
								.fill(txtPar[keey].color);
							text_value.attr({ 'fill-opacity': 1 });
						}
						all_step = all_step + step_val;
						gfx_group.add(text_value);
					}
				}
				//Текстовые метки Ключевой параметр
				for (keey in txtOknOPar) {
					if (txtOknOPar[keey].poz.x == strN) {

						if (txtOknOPar[keey].par == "Vrema") {
							var cur_val = -2147480;
							if (disp_val1 > 0) { cur_val = String(d110d[disp_val1][txtOknOPar[keey].par]) };
							if (Number(cur_val) <= -2147480) { cur_val = "NaN"; }
							var day = new Date(cur_val * 1000);
							var last_hour = day.getHours();
							var minutes = day.getMinutes();
							if (last_hour < 10) { last_hour = "0" + last_hour; }
							if (minutes < 10) { minutes = "0" + minutes; }
							var yearr = day.getFullYear();
							var dates = day.getDate();
							if (dates < 10) { dates = "0" + dates; }
							var month = day.getMonth() + 1;
							if (month < 10) { month = "0" + month; }
							var time_viz1 = ' ' + last_hour + ":" + minutes + " " + dates + "." + month + (2000 - yearr);
							var text_value = draw.text(txtOknOPar[keey].txt + " " + time_viz1 + " (" + txtOknOPar[keey].unit + ")")
								.font({ family: Sheet.fnt, size: text_size_value })
								// .move(X_cur_mouse_click, Y_cur_mouse_click -h1*Sheet.height_value + h1*all_step)
								.move(X_cur_mouse_click, Y_cur_mouse_click - h1 * Sheet.height_value + h1 * all_step)
								.cx(X_cur_mouse_click)
								.fill(txtOknOPar[keey].color);
							text_value.attr({ 'fill-opacity': 1 });

							//Ресайз текста если не влезает!

							if (text_value.length() > Sheet.width_value * w1) {
								var coef = text_value.length() / text_value.attr('font-size')
								text_value.clear();
								delete (text_value);
								var text_value = draw.text(txtOknOPar[keey].txt + " " + time_viz1 + " (" + txtOknOPar[keey].unit + ")")
									.font({ family: Sheet.fnt, size: Sheet.width_value * w1 / (coef * 1.1) })
									// .move(X_cur_mouse_click, Y_cur_mouse_click -h1*Sheet.height_value + h1*all_step)
									.move(X_cur_mouse_click, Y_cur_mouse_click - h1 * Sheet.height_value + h1 * all_step)
									.cx(X_cur_mouse_click)
									.fill(txtOknOPar[keey].color);
								text_value.attr({ 'fill-opacity': 1 });


							}

							if (Number(text_value.attr('font-size')) > Sheet.height_value * h1 / 7.7) {
								let resizeV = Sheet.height_value * h1 / 7.7;
								//var coef =text_name_p1.length()/text_name_p1.attr('font-size')
								text_value.clear();
								delete (text_value);
								var text_value = draw.text(txtOknOPar[keey].txt + " " + time_viz1 + " (" + txtOknOPar[keey].unit + ")")
									.font({ family: Sheet.fnt, size: resizeV })
									// .move(X_cur_mouse_click, Y_cur_mouse_click -h1*Sheet.height_value + h1*all_step)
									.move(X_cur_mouse_click, Y_cur_mouse_click - h1 * Sheet.height_value + h1 * all_step)
									.cx(X_cur_mouse_click)
									.fill(txtOknOPar[keey].color);
								text_value.attr({ 'fill-opacity': 1 });
							}
							all_step = all_step + step_val;
							gfx_group.add(text_value);
						}
					}
				}
				var gfxr = draw.polygon((X_cur_mouse_click - w1 * (Sheet.width_value / 2 - 0.5)) + ',' + (Y_cur_mouse_click - h1 * (Sheet.height_value + 0.5)) + ' ' + (X_cur_mouse_click + w1 * (Sheet.width_value / 2 + 0.5)) + ',' + (Y_cur_mouse_click - h1 * (Sheet.height_value + 0.5)) + ' ' + (X_cur_mouse_click + w1 * (Sheet.width_value / 2 + 0.5)) + ' ' + Y_cur_mouse_click + ' ' + (X_cur_mouse_click - w1 * (Sheet.width_value / 2 - 0.5)) + ' ' + Y_cur_mouse_click)

					//var gfxr = draw.polygon((X_cur_mouse_click-w1*(Sheet.width_value/2-0.5))+','+(Y_cur_mouse_click -h1*(Sheet.height_value+0.5)) +' '+(X_cur_mouse_click+w1*(Sheet.width_value/2+0.5))+','+(Y_cur_mouse_click -h1*(Sheet.height_value+0.5))+' '+(X_cur_mouse_click+w1*(Sheet.width_value/2+0.5))+' '+Y_cur_mouse_click+' '+(X_cur_mouse_click-w1*(Sheet.width_value/2-0.5))+' '+Y_cur_mouse_click)
					//ширина поля со клик зачениями
					// weight_colmn1 = w1*(Columns["col"+String(Number((txtPar[keey].poz.x)))].size.w)/2;
					// var gfxr = draw.polygon((X_cur_mouse_click-weight_colmn1)+','+(Y_cur_mouse_click -h1*(Sheet.height_value+0.5)) +' '+(X_cur_mouse_click+weight_colmn1)+','+(Y_cur_mouse_click -h1*(Sheet.height_value+0.5))+' '+(X_cur_mouse_click+weight_colmn1)+','+Y_cur_mouse_click+' '+(X_cur_mouse_click-weight_colmn1)+','+Y_cur_mouse_click)
					.fill({ color: Sheet.curcolorval })
					.opacity(0)
					.stroke({ width: Sheet.width_gxf_line, dasharray: '2,3', color: Sheet.syscolor })
					.id(this.attr('id'))



				gfx_group.add(gfxr);
				//console.log(gfxr.attr(id));
				//gfx_group.after(colmn2);

				//inv_col.front();
				// gfx_group.mousemove(function(){
				// 	//mouseDwn = false;
				// 	gfx_group.clear();
				// });
				gfx_group
					//.delay(5000)
					.rotate(-90)
					// .move(1000,1000)
					//.scale(0.1)
					.opacity(0)
					.animate(1500, 'expoOut')
					// .scale(1.0)//.cy(h1*Sheet.height_value/2)
					.opacity(1)
					.rotate(0)
				// .move(0,0)
				//.reverse(true)
				//.loop()


				//Удаление текущих значений
				gfxr.click(function () {

					gfx_group.clear();
					/* if (online == true){refresh = true;} */



					// this.remove();
					// gfx_group.remove();



					//Очистка холста и перерисовка
					//repaint();
				})
			})
		}
	}
	}

	//////////////////////
	//Табличка со значениями ГЛУБИНА
	///////////////////////
	if (curtemp=='depth'){
		for (key in Columns) {
			if (key != 'col0') {
				// var inv_col = draw.group();
				// inv_col.clear();
	
				//Столбец
				var colmn2 = draw.polygon(Number(Columns[key].poz.x) * w1 + ',' + (Number(Columns[key].poz.y) * h1 + Number(Columns[key].size.h) * h1) + ' ' + (Number(Columns[key].poz.x) * w1 + Number(Columns[key].size.w) * w1) + ',' + (Number(Columns[key].poz.y) * h1 + Number(Columns[key].size.h) * h1) + ' ' + (Number(Columns[key].poz.x) * w1 + Number(Columns[key].size.w) * w1) + ',' + 100 * h1 + ' ' + Number(Columns[key].poz.x) * w1 + ',' + 100 * h1)
					.fill({ color: getRandomColor() })
					.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor })
					.opacity(0)
					.id(key);
	
				colmn2.click(function (e) {
	
					// gfx_group.clear();
					// if (mouseDwn){
					// 	//var gfx_group = draw.group();
					// 	gfx_group.clear();
					// 	// inv_col.clear();
					let cursor = getCursorPosition(e, svg);
					let X_cur_mouse_click = cursor.x;
					let Y_cur_mouse_click = cursor.y;
					//Группа
					var gfx_group = draw.group();
					//parPan(this.attr('id'));
					//Выкл обновления
					refresh = false;
	
					var text_size_value = size_text_p;
					if (text_size_value > Sheet.height_value * h1 / 7.6) {
						text_size_value = Sheet.height_value * h1 / 7.6;
					}
					var gfxr = draw.polygon((X_cur_mouse_click - w1 * (Sheet.width_value / 2)) + ',' + (Y_cur_mouse_click - h1 * (Sheet.height_value)) + ' ' + (X_cur_mouse_click + w1 * (Sheet.width_value / 2)) + ',' + (Y_cur_mouse_click - h1 * (Sheet.height_value)) + ' ' + (X_cur_mouse_click + w1 * (Sheet.width_value / 2)) + ',' + Y_cur_mouse_click + ' ' + (X_cur_mouse_click - w1 * (Sheet.width_value / 2)) + ',' + Y_cur_mouse_click)
						.fill({ color: Sheet.curcolorval })
						.stroke({ width: Sheet.width_gxf_line, dasharray: '2,3', color: Sheet.syscolor })
						.id(this.attr('id'));
					gfx_group.add(gfxr);
	
					//Визир
					gfxr.attr({ 'fill-opacity': Sheet.faderr });
					//var gfxr_line = draw.line( '0 ,'+ Y_cur_mouse_click +' ' +(w1*100)+',' + Y_cur_mouse_click)
					var gfxr_line = draw.line('0 ,' + Y_cur_mouse_click + ' ' + (w1 * 100) + ',' + Y_cur_mouse_click)
						.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor });
	
					gfx_group.add(gfxr_line);
					//БУМ ШОКО var name_p1= String(d110d[Math.ceil(i*step_txt_numb_rec)]['Vrema'])+" - " + String ((startTime.getTime() + i* stepMin* 60 *1000)/1000);
					//var name_p1 =d110d[Math.ceil(i*step_txt_numb_rec)][keey];
					//Точное время
					//String ((startTime.getTime() + i* stepMin* 60 *1000)/1000)
					var cur_value_y_step_val = (h1 * 100 - (Number(Columns[this.attr('id')].size.h) * h1)) / (Sheet.Kzoomdepth *10);
					// var ttime =start_time/1 + Math.round((Y_cur_mouse_click - Number(Columns[this.attr('id')].size.h)*h1)/cur_value_y_step_val);
					var ttime = start_time / 1 + Math.round((Y_cur_mouse_click - Number(olumns[this.attr('id')].size.h) * h1) / cur_value_y_step_val);
					//Индекс искомой записи -1 не найдена
					var disp_val1 = -1;
					//Разница между значение записи и клика
					var sub;
					// Первая запись индекс
					var fidx = -1;
					// Последняя запись индекс
					var lidx = -1;
					for (let tmark in d110d) {
	
						sub = (d110d[tmark]['Zaboj']) - ttime;
						/* console.log (Number (d110d[tmark]['Vrema']) ,'-',ttime,'-' ,sub); */
						if (sub < 0.2 && sub > -0.2) {
							if (fidx == -1) {
								fidx = tmark;
							}
							lidx = tmark;
	
						}
	
					}
					// Если несколько записей подходят в диапазон
					if (fidx != lidx && fidx != -1 && lidx != -1) {
						disp_val1 = Number(fidx) + Number(Math.floor((lidx - fidx) / 2.0));
					} else {
						if (fidx != -1) { disp_val1 = lidx; }
					}
	
					var strN = Number(this.attr('id').toString().substr(3));
					//ЧИсло параметров
					var numb_value = 0;
					for (keey in basePar) {
						if (basePar[keey].poz.x == strN) {
							numb_value = numb_value + 1;
						}
					}
					for (keey in txtPar) {
						if (txtPar[keey].poz.x == strN) {
							numb_value = numb_value + 1;
						}
					}
					for (keey in txtOknOPar) {
						if (txtOknOPar[keey].poz.x == strN) {
							numb_value = numb_value + 1;
						}
					}
	
					//Шаг вертикального отступа
					var step_val = Sheet.height_value / numb_value;
					var all_step = 0;
					//Значения
					for (keey in basePar) {
						//График
						if (basePar[keey].poz.x == strN) {
							var cur_val = -2147480;
							if (disp_val1 > 0) { cur_val = String(d110d[disp_val1][basePar[keey].par]) };
							if (Number(cur_val) <= -2147480) { cur_val = "NaN"; }
							var text_value = draw.text(basePar[keey].txt + " " + cur_val + " (" + basePar[keey].unit + ")")
								.font({ family: Sheet.fnt, size: text_size_value })
								// .move(X_cur_mouse_click, Y_cur_mouse_click -h1*Sheet.height_value + h1*all_step)
								.move(X_cur_mouse_click, Y_cur_mouse_click - h1 * Sheet.height_value + h1 * all_step)
								.cx(X_cur_mouse_click)
								.fill(basePar[keey].color);
							text_value.attr({ 'fill-opacity': 1 });
	
	
	
							//Ресайз текста если не влезает!
							if (text_value.length() > Sheet.width_value * w1) {
								var coef = text_value.length() / text_value.attr('font-size')
								text_value.clear();
								delete (text_value);
								var text_value = draw.text(basePar[keey].txt + " " + cur_val + " (" + basePar[keey].unit + ")")
									.font({ family: Sheet.fnt, size: Sheet.width_value * w1 / (coef * 1.1) })
									// .move(X_cur_mouse_click, Y_cur_mouse_click -h1*Sheet.height_value + h1*all_step)
									.move(X_cur_mouse_click, Y_cur_mouse_click - h1 * Sheet.height_value + h1 * all_step)
									.cx(X_cur_mouse_click)
									.fill(basePar[keey].color);
								text_value.attr({ 'fill-opacity': 1 });
	
	
							}
	
							if (Number(text_value.attr('font-size')) > Sheet.height_value * h1 / 7.7) {
								let resizeV = Sheet.height_value * h1 / 7.7;
								//var coef =text_name_p1.length()/text_name_p1.attr('font-size')
								text_value.clear();
								delete (text_value);
								var text_value = draw.text(basePar[keey].txt + " " + cur_val + " (" + basePar[keey].unit + ")")
									.font({ family: Sheet.fnt, size: resizeV })
									// .move(X_cur_mouse_click, Y_cur_mouse_click -h1*Sheet.height_value + h1*all_step)
									.move(X_cur_mouse_click, Y_cur_mouse_click - h1 * Sheet.height_value + h1 * all_step)
									.cx(X_cur_mouse_click)
									.fill(basePar[keey].color);
								text_value.attr({ 'fill-opacity': 1 });
							}
	
	
							all_step = all_step + step_val;
							gfx_group.add(text_value);
							// console.log(text_value.length());
						}
					}
					//Текстовые метки
					for (keey in txtPar) {
						if (txtPar[keey].poz.x == strN) {
							var cur_val = -2147480;
							if (disp_val1 > 0) { cur_val = String(d110d[disp_val1][txtPar[keey].par]) };
							if (Number(cur_val) <= -2147480) { cur_val = "NaN"; }
							var text_value = draw.text(txtPar[keey].txt + " " + cur_val + " (" + txtPar[keey].unit + ")")
								.font({ family: Sheet.fnt, size: text_size_value })
								// .move(X_cur_mouse_click, Y_cur_mouse_click -h1*Sheet.height_value + h1*all_step)
								.move(X_cur_mouse_click, Y_cur_mouse_click - h1 * Sheet.height_value + h1 * all_step)
								.cx(X_cur_mouse_click)
								.fill(txtPar[keey].color);
							text_value.attr({ 'fill-opacity': 1 });
	
	
							//Ресайз текста если не влезает!
	
							if (text_value.length() > Sheet.width_value * w1) {
								var coef = text_value.length() / text_value.attr('font-size')
								text_value.clear();
								delete (text_value);
								var text_value = draw.text(txtPar[keey].txt + " " + cur_val + " (" + txtPar[keey].unit + ")")
									.font({ family: Sheet.fnt, size: Sheet.width_value * w1 / (coef * 1.1) })
									// .move(X_cur_mouse_click, Y_cur_mouse_click -h1*Sheet.height_value + h1*all_step)
									.move(X_cur_mouse_click, Y_cur_mouse_click - h1 * Sheet.height_value + h1 * all_step)
									.cx(X_cur_mouse_click)
									.fill(txtPar[keey].color);
								text_value.attr({ 'fill-opacity': 1 });
	
	
							}
	
							if (Number(text_value.attr('font-size')) > Sheet.height_value * h1 / 7.7) {
								let resizeV = Sheet.height_value * h1 / 7.7;
								//var coef =text_name_p1.length()/text_name_p1.attr('font-size')
								text_value.clear();
								delete (text_value);
								var text_value = draw.text(txtPar[keey].txt + " " + cur_val + " (" + txtPar[keey].unit + ")")
									.font({ family: Sheet.fnt, size: resizeV })
									// .move(X_cur_mouse_click, Y_cur_mouse_click -h1*Sheet.height_value + h1*all_step)
									.move(X_cur_mouse_click, Y_cur_mouse_click - h1 * Sheet.height_value + h1 * all_step)
									.cx(X_cur_mouse_click)
									.fill(txtPar[keey].color);
								text_value.attr({ 'fill-opacity': 1 });
							}
							all_step = all_step + step_val;
							gfx_group.add(text_value);
						}
					}
					//Текстовые метки Ключевой параметр
					for (keey in txtOknOPar) {
						if (txtOknOPar[keey].poz.x == strN) {
	
							if (txtOknOPar[keey].par == "Vrema") {
								var cur_val = -2147480;
								if (disp_val1 > 0) { cur_val = String(d110d[disp_val1][txtOknOPar[keey].par]) };
								if (Number(cur_val) <= -2147480) { cur_val = "NaN"; }
								var day = new Date(cur_val * 1000);
								var last_hour = day.getHours();
								var minutes = day.getMinutes();
								if (last_hour < 10) { last_hour = "0" + last_hour; }
								if (minutes < 10) { minutes = "0" + minutes; }
								var yearr = day.getFullYear();
								var dates = day.getDate();
								if (dates < 10) { dates = "0" + dates; }
								var month = day.getMonth() + 1;
								if (month < 10) { month = "0" + month; }
								var time_viz1 = ' ' + last_hour + ":" + minutes + " " + dates + "." + month + (2000 - yearr);
								var text_value = draw.text(txtOknOPar[keey].txt + " " + cur_val + " (" + txtOknOPar[keey].unit + ")")
									.font({ family: Sheet.fnt, size: text_size_value })
									// .move(X_cur_mouse_click, Y_cur_mouse_click -h1*Sheet.height_value + h1*all_step)
									.move(X_cur_mouse_click, Y_cur_mouse_click - h1 * Sheet.height_value + h1 * all_step)
									.cx(X_cur_mouse_click)
									.fill(txtOknOPar[keey].color);
								text_value.attr({ 'fill-opacity': 1 });
	
								//Ресайз текста если не влезает!
	
								if (text_value.length() > Sheet.width_value * w1) {
									var coef = text_value.length() / text_value.attr('font-size')
									text_value.clear();
									delete (text_value);
									var text_value = draw.text(txtOknOPar[keey].txt + " " + cur_val + " (" + txtOknOPar[keey].unit + ")")
										.font({ family: Sheet.fnt, size: Sheet.width_value * w1 / (coef * 1.1) })
										// .move(X_cur_mouse_click, Y_cur_mouse_click -h1*Sheet.height_value + h1*all_step)
										.move(X_cur_mouse_click, Y_cur_mouse_click - h1 * Sheet.height_value + h1 * all_step)
										.cx(X_cur_mouse_click)
										.fill(txtOknOPar[keey].color);
									text_value.attr({ 'fill-opacity': 1 });
	
	
								}
	
								if (Number(text_value.attr('font-size')) > Sheet.height_value * h1 / 7.7) {
									let resizeV = Sheet.height_value * h1 / 7.7;
									//var coef =text_name_p1.length()/text_name_p1.attr('font-size')
									text_value.clear();
									delete (text_value);
									var text_value = draw.text(txtOknOPar[keey].txt + " " + cur_val + " (" + txtOknOPar[keey].unit + ")")
										.font({ family: Sheet.fnt, size: resizeV })
										// .move(X_cur_mouse_click, Y_cur_mouse_click -h1*Sheet.height_value + h1*all_step)
										.move(X_cur_mouse_click, Y_cur_mouse_click - h1 * Sheet.height_value + h1 * all_step)
										.cx(X_cur_mouse_click)
										.fill(txtOknOPar[keey].color);
									text_value.attr({ 'fill-opacity': 1 });
								}
								all_step = all_step + step_val;
								gfx_group.add(text_value);
							}
						}
					}
					var gfxr = draw.polygon((X_cur_mouse_click - w1 * (Sheet.width_value / 2 - 0.5)) + ',' + (Y_cur_mouse_click - h1 * (Sheet.height_value + 0.5)) + ' ' + (X_cur_mouse_click + w1 * (Sheet.width_value / 2 + 0.5)) + ',' + (Y_cur_mouse_click - h1 * (Sheet.height_value + 0.5)) + ' ' + (X_cur_mouse_click + w1 * (Sheet.width_value / 2 + 0.5)) + ' ' + Y_cur_mouse_click + ' ' + (X_cur_mouse_click - w1 * (Sheet.width_value / 2 - 0.5)) + ' ' + Y_cur_mouse_click)
	
						.fill({ color: Sheet.curcolorval })
						.opacity(0)
						.stroke({ width: Sheet.width_gxf_line, dasharray: '2,3', color: Sheet.syscolor })
						.id(this.attr('id'))
	
	
	
					gfx_group.add(gfxr);
					gfx_group
						.rotate(-90)
						.opacity(0)
						.animate(1500, 'expoOut')
						.opacity(1)
						.rotate(0)
	
					//Удаление текущих значений
					gfxr.click(function () {
	
						gfx_group.clear();
						
					})
				})
			}
		}
		}
	

	//Табличка со значениями
	// colmn2.mousedown(function(e) {


	// 		//Группа
	// 		//var gfx_group = draw.group();
	// 		//parPan(this.attr('id'));
	// 		//Выкл обновления
	// 		mouseDwn=true;		
	// 	});


	//Маркер сдвига по времени и глубине
	/////////////////////
	//var colmn4 = draw.circle(Sheet.markheighttime*h1)
	//.move((Columns.col0.poz.x+Columns.col0.size.w/2)*w1, (Columns.col0.poz.y+Columns.col0.size.h/2)*h1)
	Sheet.markwidthtime = (100 - Columns.col0.size.h) / 1.5;
	Sheet.markheighttime = Columns.col0.size.w / 1.1;
	var cir1 = draw.polygon(0 + ',' + Sheet.markheighttime * w1 / 2 + ' ' + Sheet.markheighttime * w1 / 2 + ',' + 0 + ' ' + Sheet.markheighttime * w1 + ',' + Sheet.markheighttime * w1 / 2 + ' ' + Sheet.markheighttime * w1 + ',' + (Sheet.markwidthtime * h1 - Sheet.markheighttime * w1 / 2) + ' ' + Sheet.markheighttime * w1 / 2 + ',' + Sheet.markwidthtime * h1 + ' ' + 0 + ',' + (Sheet.markwidthtime * h1 - Sheet.markheighttime * w1 / 2))
		//var cir4 = draw.polygon( Number(Columns[key].poz.x)*w1+','+(Number(Columns[key].poz.y)*h1+Number(Columns[key].size.h)*h1)+' '+(Number(Columns[key].poz.x)*w1+Number(Columns[key].size.w)*w1)+','+(Number(Columns[key].poz.y)*h1+Number(Columns[key].size.h)*h1)+' '+(Number(Columns[key].poz.x)*w1+Number(Columns[key].size.w)*w1)+','+100*h1+' '+Number(Columns[key].poz.x)*w1+','+100*h1 )
		.move((Columns.col0.poz.x + Columns.col0.size.w / 2) * w1, ((Columns.col0.poz.y + Columns.col0.size.h) + (100 - (Columns.col0.poz.y + Columns.col0.size.h)) / 2) * h1)
		.fill({ color: Sheet.marktime })
		//.fill('none')
		.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor })
		.opacity(0.2)
		.center((Columns.col0.poz.x + Columns.col0.size.w / 2) * w1, ((Columns.col0.poz.y + Columns.col0.size.h) + (100 - (Columns.col0.poz.y + Columns.col0.size.h)) / 2) * h1);
	//.cy(((Columns.col0.poz.y+Columns.col0.size.h)+(100-(Columns.col0.poz.y+Columns.col0.size.h))/2)*h1);

	var cir2 = draw.polygon(0 + ',' + Sheet.markheighttime * w1 / 2 + ' ' + Sheet.markheighttime * w1 / 2 + ',' + 0 + ' ' + Sheet.markheighttime * w1 + ',' + Sheet.markheighttime * w1 / 2 + ' ' + Sheet.markheighttime * w1 + ',' + (Sheet.markwidthtime * h1 - Sheet.markheighttime * w1 / 2) + ' ' + Sheet.markheighttime * w1 / 2 + ',' + Sheet.markwidthtime * h1 + ' ' + 0 + ',' + (Sheet.markwidthtime * h1 - Sheet.markheighttime * w1 / 2))
		//var cir4 = draw.polygon( Number(Columns[key].poz.x)*w1+','+(Number(Columns[key].poz.y)*h1+Number(Columns[key].size.h)*h1)+' '+(Number(Columns[key].poz.x)*w1+Number(Columns[key].size.w)*w1)+','+(Number(Columns[key].poz.y)*h1+Number(Columns[key].size.h)*h1)+' '+(Number(Columns[key].poz.x)*w1+Number(Columns[key].size.w)*w1)+','+100*h1+' '+Number(Columns[key].poz.x)*w1+','+100*h1 )
		.move((Columns.col0.poz.x + Columns.col0.size.w / 2) * w1, ((Columns.col0.poz.y + Columns.col0.size.h) + (100 - (Columns.col0.poz.y + Columns.col0.size.h)) / 2) * h1)
		//.fill({ color: Sheet.marktime})
		.fill('none')
		.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor })
		.opacity(1)
		.center((Columns.col0.poz.x + Columns.col0.size.w / 2) * w1, ((Columns.col0.poz.y + Columns.col0.size.h) + (100 - (Columns.col0.poz.y + Columns.col0.size.h)) / 2) * h1);



	var cir4 = draw.group()
	.style({ cursor: 'pointer' });
	cir4.add(cir1);
	cir4.add(cir2);
	cir4.front();
	if (isMobile) {
	var cir4 = draw.nested()
	.style({ cursor: 'pointer' });
	cir4.add(cir1);
	cir4.add(cir2);
	cir4.front();} 

	var ex = 0;
	var ey = 0;
	var exs = 0;
	var eys = 0;


	if (isMobile) {
		cir4.draggable(

		).on('touchstart', function (e) {
			
			// var touchobj1 = e.changedTouches[0] // первая точка прикосновения
			// exs = e.detail.p.x;
			// eys = e.detail.p.y;
			// eys = parseInt(touchobj1.pageY);
			// alert('dddd'+eys+ ', ' + exs);
			
		})


		cir4.draggable(

		).on('touchmove', function (e) {
			// e.preventDefault();
			// ex = e.detail.p.x;
			// ey = e.detail.p.y;
			
			// var touchobj1 = e.changedTouches[0] // первая точка прикосновения
			// exs = e.detail.p.x;
			// eys = parseInt(touchobj1.pageY);
		})


		cir4.draggable(
			{
				minX: 0
				// , minY: -Columns.col0.size.h * h1
				, minY: -50 * h1
				, maxX: Columns.col0.size.w * w1 / 1.1
				, maxY: 100 * h1
			}
		).on('touchend', function (e) {
			if (cir4.attr('y') >  0) {
				if (loaddata == false) {
					read_down();
				}//см .navigation.js 
			} else {
				if (loaddata == false) {
					read_up()
				};//см .navigation.js 
			}
		})
	} else {
		cir4.draggable(

		).on('dragstart', function (e) {
			exs = e.detail.p.x;
			eys = e.detail.p.y;
		})


		cir4.draggable(

		).on('dragmove', function (e) {
			ex = e.detail.p.x;
			ey = e.detail.p.y;
		})


		cir4.draggable(
			{
				minX: 0
				, minY: -50*h1
				, maxX: Columns.col0.size.w * w1 / 1.1
				, maxY: 100*h1
			}
		).on('dragend', function (e) {
			//console.log(ey, eys);

			if (ey > eys) {
				if (loaddata == false) {
					read_down();
				}//см .navigation.js 
			} else {
				if (loaddata == false) {
					read_up()
				};//см .navigation.js 
			}
		})

	}

	//Шапка Угловой квадрат
	var colmn0 = draw.polygon('0,0 ' + w1 * Columns.col0.size.w + ',0 ' + w1 * Columns.col0.size.w + ',' + h1 * Columns.col0.size.h + ' 0,' + h1 * Columns.col0.size.h)
		.fill({ color: Sheet.rawsvg0 })
		.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor })

	


	// //Кнопки управления, число кнопок
	// //Кнопка "Сейчас" "Масштаб" "Интервал"
	// //Градиент
	// var curicosizem = 0;
	// if (Sheet.icosize * w1 < height_colmn1_p1) {
	// 	curicosizem = Sheet.icosize * w1;
	// } else { curicosizem = height_colmn1_p1; }
	// //Сколько иконок
	// var howbutts = Number(Object.keys(butts).length);
	// var height_but = (Columns[key].size.h * h1 - curicosizem) / howbutts; //Высота одной из 4-ех кнопок
	// for (let kn = 0; kn < howbutts; kn++) {
	// 	var gradient = draw.gradient('linear', function (stop) {
	// 		stop.at(0, '#000')
	// 		stop.at(1, Columns[key].fill)
	// 	})
	// 	gradient.from(0, 0).to(0, 1);

	// 	//Коррекция размера
	// 	var key = 'col0';
	// 	var curicosize = 0;
	// 	if (Sheet.icosize * w1 < height_colmn1_p1) {
	// 		curicosize = Sheet.icosize * w1;
	// 	} else { curicosize = height_colmn1_p1; }

	// 	var kurfon = '#000000';
	// 	var kuropaci = 0.5;
	// 	if (Sheet.fonbut) {
	// 		kurfon = '#ffffff';
	// 		kuropaci = 0.1;
	// 	} else {
	// 		kurfon = '#000000'
	// 	}

	// 	var colmn1 = draw.polygon(Number(Columns[key].poz.x) * w1 + ',' + (Number(Columns[key].poz.y) * h1 + curicosizem + height_but * kn) + ' ' + (Number(Columns[key].poz.x) * w1 + Number(Columns[key].size.w) * w1) + ',' + (Number(Columns[key].poz.y) * h1 + curicosizem + height_but * kn) + ' ' + (Number(Columns[key].poz.x) * w1 + Number(Columns[key].size.w) * w1) + ',' + (Number(Columns[key].poz.y) * h1 + curicosizem + height_but * (kn + 1)) + ' ' + Number(Columns[key].poz.x) * w1 + ',' + (Number(Columns[key].poz.y) * h1 + curicosizem + height_but * (kn + 1)))
	// 		//.fill({ color: gradient})
	// 		.fill({ color: kurfon })



	// 	var colmn1 = draw.polygon(Number(Columns[key].poz.x) * w1 + ',' + (Number(Columns[key].poz.y) * h1 + curicosizem + height_but * kn) + ' ' + (Number(Columns[key].poz.x) * w1 + Number(Columns[key].size.w) * w1) + ',' + (Number(Columns[key].poz.y) * h1 + curicosizem + height_but * kn) + ' ' + (Number(Columns[key].poz.x) * w1 + Number(Columns[key].size.w) * w1) + ',' + (Number(Columns[key].poz.y) * h1 + curicosizem + height_but * (kn + 1)) + ' ' + Number(Columns[key].poz.x) * w1 + ',' + (Number(Columns[key].poz.y) * h1 + curicosizem + height_but * (kn + 1)))
	// 		//.fill({ color: gradient})
	// 		.fill({ color: Sheet['rawsvg' + String(kn)] })
	// 		.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor })
	// 		.opacity(kuropaci);

	// 	var group1 = draw.nested();
	// 	group1.svg(butts['rawsvg' + String(kn)].img);
	// 	group1.id(kn)
	// 	group1.style({ cursor: 'pointer' });

	// 	//Коррекция размера
	// 	var curicosize = 0;
	// 	if ((Columns[key].size.w) * w1 < height_but) {
	// 		curicosize = Columns[key].size.w * w1;
	// 	} else {
	// 		curicosize = height_but;
	// 	}
	// 	group1.size(curicosize, curicosize);
	// 	var x2 = Columns[key].poz.x * w1 + Columns[key].size.w * w1 / 2 - curicosize / 2;
	// 	var y2 = (Number(Columns[key].poz.y) * h1 + curicosizem + height_but * kn);
	// 	group1.attr('x', String(x2));
	// 	group1.attr('cx', String(x2));
	// 	group1.attr('y', String(y2));
	// 	group1.attr('cy', String(y2));
	// 	group1.attr('fill', Sheet['rawsvg' + String(kn)]);
	// 	//Если колокольчик то случ. цвет
	// 	var randcol = getRandomColor();
	// 	if (kn == 3) { group1.attr('fill', randcol) }
	// 	//Прозрачный квадрат для катания по кнопке
	// 	var rec1 = group1.rect(curicosize, curicosize);
	// 	rec1.attr('opacity', '0.0');
	// 	//rec1.attr('x',String(x2));
	// 	group1.mouseover(function () {
	// 		if (kn != 3) {
	// 			this.attr('fill', getRandomColor());
	// 		}
	// 	})
	// 	group1.mouseout(function () {
	// 		if (kn != 3) {
	// 			this.attr('fill', Sheet['rawsvg' + String(this.attr('id'))])
	// 		}
	// 	});
	// 	//Если нажата тарелка
	// 	if (kn == 3) {
	// 		group1.click(function () {
	// 			//this.attr('fill','#000');
	// 			colok14();
	// 			this.attr('fill', Sheet['rawsvg' + String(this.attr('id'))]);

	// 		})
	// 	}

	// 	//Если нажата редактировать экран
	// 	if (kn == 0) {
	// 		group1.click(function () {

	// 			//colPan3();

	// 			colOK11();
	// 		})
	// 	}

	// 	// //Если нажата камера	
	// 	// if (kn==3){
	// 	// 	group1.click(function() {
	// 	// 		colPan4();
	// 	// 	})

	// 	// }
	// 	//Если нажата календарь
	// 	if (kn == 1) {
	// 		group1.click(function () {

	// 			colPan3();
	// 		})
	// 	}

	// 	//Если нажата скважина
	// 	// if (kn==1){
	// 	// 	group1.click(function() {
	// 	// 		colPan10();

	// 	// 	})

	// 	// }

	// 	//Если нажата открыть сохранить
	// 	if (kn == 2) {
	// 		group1.click(function () {
	// 			colPan9();

	// 		})

	// 	}
	// }

	//Управляшки
	if (Sheet.editscrn) {

		for (key in Columns) {
			if (key != 'col0') {

				///Удаление панели XX
				//Шаг засечек
				var steep_col4 = (Number(Columns[key].size.w) * w1) / 3;
				//Отступ по вертикале от шапки
				var disp_col4 = Number(Columns[key].poz.x) * w1;
				//Панель с кнопками "Удалить столбец"

				disp_col4 = disp_col4 * Sheet.numbs_colmn1;

				//Кнопка Настройки

				var group1 = draw.nested();
				group1.svg(rawsvg1);
				group1.id(key)
				group1.style({ cursor: 'pointer' });

				//Коррекция размера
				var curicosize = 0;
				if (Sheet.icosize * w1 > height_colmn1_p1 || Sheet.icosize * w1 > steep_col4) {
					if (steep_col4 > height_colmn1_p1) {
						curicosize = height_colmn1_p1;
					}
					else {
						curicosize = steep_col4;
					}
				} else {
					curicosize = Sheet.icosize * w1;
				}
				group1.size(curicosize, curicosize);

				var x2 = Columns[key].poz.x * w1 + Columns[key].size.w * w1 - curicosize;
				var y2 = (Number(Columns[key].poz.y) * h1);
				group1.attr('x', String(x2));
				group1.attr('cx', String(x2));
				group1.attr('y', String(y2));
				group1.attr('fill', Sheet.delcol);
				//Прозрачный квадрат для катания по кнопке
				var rec1 = group1.rect(curicosize, curicosize);
				rec1.attr('opacity', '0.0');
				group1.mouseover(function () {
					this.attr('fill', getRandomColor());
				})

				group1.mouseout(function () {
					this.attr('fill', Sheet.delcol);
				})

				if (height_colmn1_p1 > Columns[key].size.w) {
					calcsize = Columns[key].size.w;
				} else { calcsize = height_colmn1_p1; }
				if (calcsize > size_text_p - 2) {
					calcsize = size_text_p - 2;
				}


				//Кнопка Удалить столбец
				group1.click(function () {
					//Удаляем параметры для данного столбца
					var cur_col = Number(String(this.attr('id')).substr(3));
					if (cur_col > 1) {
						Columns[String('col' + (cur_col - 1))].size.w += Columns[this.attr('id')].size.w;
						//console.log (cur_col, Sheet.numbs_colmns);
					} else {
						Columns[String('col' + (cur_col + 1))].size.w += Columns[this.attr('id')].size.w;
						Columns[String('col' + (cur_col + 1))].poz.x = Columns[this.attr('id')].poz.x;
					}

					for (var keey in basePar) {
						if (basePar[keey].poz.x == cur_col) {
							delete (basePar[keey]);
						}
					}
					for (var keey in basePar) {
						if (basePar[keey].poz.x > cur_col) {
							basePar[keey].poz.x = basePar[keey].poz.x - 1;
						}
					}

					for (var keey in txtPar) {
						if (txtPar[keey].poz.x == cur_col) {
							delete (txtPar[keey]);
						}
					}
					for (var keey in txtPar) {
						if (txtPar[keey].poz.x > cur_col) {
							txtPar[keey].poz.x = txtPar[keey].poz.x - 1;
						}
					}

					for (var keey in txtOknOPar) {
						if (txtOknOPar[keey].poz.x == cur_col) {
							delete (txtOknOPar[keey]);
						}
					}
					for (var keey in txtOknOPar) {
						if (txtOknOPar[keey].poz.x > cur_col) {
							txtOknOPar[keey].poz.x = txtOknOPar[keey].poz.x - 1;
						}
					}

					delete (Columns[this.attr('id')]);

					for (var keey in Columns) {
						if (Number(keey.substr(3)) > cur_col) {
							//мутация при переименовании
							Columns['col' + String(Number(keey.substr(3)) - 1)] = Columns[keey];
							delete (Columns[keey]);
						}
					}
					Sheet.numbs_colmns -= 1;
					repaint();
				})

				//Кнопка Настройки
				/*
				var text_name_p2 = draw.text('Настройки')
					.font({ family: Sheet.fnt, size:calcsize})
					.move(x2, y2)
					.center(x2,y2)
					.fill({ color: '#000000'});
				*/
				if (Sheet.editscrn) {
					var group1 = draw.nested();
					group1.svg(rawsvg2);
					group1.id(key)
					group1.style({ cursor: 'pointer' });

					//Коррекция размера
					var curicosize = 0;
					if (Sheet.icosize * w1 > height_colmn1_p1 || Sheet.icosize * w1 > steep_col4) {
						if (steep_col4 > height_colmn1_p1) {
							curicosize = height_colmn1_p1;
						}
						else {
							curicosize = steep_col4;
						}
					} else {
						curicosize = Sheet.icosize * w1;
					}
					group1.size(curicosize, curicosize);
					var x2 = Columns[key].poz.x * w1 + Columns[key].size.w * w1 - curicosize * 2;
					var y2 = (Number(Columns[key].poz.y) * h1);
					group1.attr('x', String(x2));
					group1.attr('cx', String(x2));
					group1.attr('y', String(y2));
					//group1.attr('cy',String(y2));
					group1.attr('fill', Sheet.toolcol);
					//Прозрачный квадрат для катания по кнопке
					var rec1 = group1.rect(curicosize, curicosize);
					rec1.attr('opacity', '0.0');

					group1.mouseover(function () {
						this.attr('fill', getRandomColor());
					})

					group1.mouseout(function () {
						this.attr('fill', Sheet.toolcol);
					})

					group1.click(function () {
						//console.log(this.attr('id'));
						colPan(this.attr('id'));
					})


					//Кнопка Добавить
					var group1 = draw.nested();
					group1.svg(rawsvg3);
					group1.id(key)
					group1.style({ cursor: 'pointer' });

					//Коррекция размера
					var curicosize = 0;
					if (Sheet.icosize * w1 > height_colmn1_p1 || Sheet.icosize * w1 > steep_col4) {
						if (steep_col4 > height_colmn1_p1) {
							curicosize = height_colmn1_p1;
						}
						else {
							curicosize = steep_col4;
						}
					} else {
						curicosize = Sheet.icosize * w1;
					}
					group1.size(curicosize, curicosize);
					var x2 = Columns[key].poz.x * w1 + Columns[key].size.w * w1 - curicosize * 3;
					var y2 = (Number(Columns[key].poz.y) * h1);
					group1.attr('x', String(x2));
					group1.attr('cx', String(x2));
					group1.attr('y', String(y2));
					//group1.attr('cy',String(y2));
					group1.attr('fill', Sheet.pluscol);
					//Прозрачный квадрат для катания по кнопке
					var rec1 = group1.rect(curicosize, curicosize);
					rec1.attr('opacity', '0.0');

					group1.mouseover(function () {
						this.attr('fill', getRandomColor());
					})

					group1.mouseout(function () {
						this.attr('fill', Sheet.pluscol);
					})

					group1.click(function () {
						//Добавить см. settings.js
						colPan1(this.attr('id'));
					})

					/*
					var x2 =(Number(Columns[key].poz.x)*w1+steep_col4/2);
					var y2 = (Number(Columns[key].poz.y)*h1+ height_colmn1_p1*(Sheet.numbs_colmn1-1)+height_colmn1_p1/2);
					var text_name_p2 = draw.text('Добавить')
						.font({ family: Sheet.fnt, size:calcsize})
						.move(x2, y2)
						//.center(x2,y2)
						.cy(y2)
						.fill({ color: '#000000'});
					*/


				}
			}
		}








		//Маркер перемещения столбца
		/////////////////////
		for (key in Columns) {
			if (key != "col" + String(Sheet.numbs_colmns - 1)) {

				//Sheet.markheight = height_colmn1_p1/h1;

				//var colmn3 = draw.polygon(Number(Columns[key].poz.x+Number(Columns[key].size.w)-Sheet.markwidth)*w1+','+Number(Columns[key].poz.y+Number(Columns[key].size.h)-Sheet.markheight)*h1+' '+Number(Columns[key].poz.x+Number(Columns[key].size.w))*w1+','+Number(Columns[key].poz.y+Number(Columns[key].size.h)-Sheet.markheight)*h1+' '+Number(Columns[key].poz.x+Number(Columns[key].size.w))*w1+','+Number(Columns[key].poz.y+Number(Columns[key].size.h))*h1+' '+Number(Columns[key].poz.x+Number(Columns[key].size.w)-Sheet.markwidth)*w1+','+(Number(Columns[key].poz.y)*h1+Number(Columns[key].size.h)*h1) )
				//var colmn3 = draw.circle(Sheet.markheight*h1).move((Columns[key].poz.x+Columns[key].size.w)*w1, (Columns[key].poz.y+Columns[key].size.h)*h1)
				var colmn3 = draw.circle(Sheet.markheight * h1).move((Columns[key].poz.x + Columns[key].size.w) * w1, (Columns[key].poz.y + Columns[key].size.h) * h1)
					.fill({ color: Sheet.markcol })
					.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor })
					.id(key)
					.opacity(0.6)
					.center((Columns[key].poz.x + Columns[key].size.w) * w1, (Columns[key].poz.y + Columns[key].size.h) * h1)
					.style({ cursor: 'pointer' });

				var ex = 0;
				var ey = 0;
				//Драг!!!
				colmn3.draggable().on('dragmove', function (e) {
					e.preventDefault()
					ex = e.detail.p.x;
					ey = e.detail.p.y;
					//Перемещение в текущие координаты
					this.move(e.detail.p.x, e.detail.p.y)

				}
				)
				//Конец Драга? Да ДРОПП!!
				colmn3.draggable().on('dragend', function (e) {
					e.preventDefault();
					//Пересчет (текущий столбец) ширина
					//Обрезка col(Номер столбца)
					var strNcol = Number(this.attr('id').toString().substr(3));
					strNcol = strNcol + 1;
					var testx = e.detail.p.x / w1;
					//Если по ширине сдвиг не больше ширины соседней колонки
					if (testx < (Columns[String('col' + strNcol)].poz.x + Columns[String('col' + strNcol)].size.w) && testx > Columns[this.attr('id')].poz.x) {
						Columns[this.attr('id')].size.w = Columns[this.attr('id')].size.w + (e.detail.p.x / w1 - (Columns[this.attr('id')].poz.x + Columns[this.attr('id')].size.w));
						//Пересчет (все столбцы) высота
						for (colcur in Columns) {
							Columns[colcur].size.h = Columns[this.attr('id')].size.h + (e.detail.p.y / h1 - (Columns[this.attr('id')].poz.y + Columns[this.attr('id')].size.h));
							disp_up = Columns.col0.size.h;
							Sheet.disp_up = Columns.col0.size.h;
						}


						//console.log(this.attr('id'));
						//Пересчет (следующий соседний столбец) ширина
						var backnextcolweight = Columns[String('col' + strNcol)].poz.x;
						Columns[String('col' + strNcol)].poz.x = Columns[this.attr('id')].poz.x + Columns[this.attr('id')].size.w;
						Columns[String('col' + strNcol)].size.w = Columns[String('col' + strNcol)].size.w - (Columns[String('col' + strNcol)].poz.x - backnextcolweight);
					}
					//Очистка холста и перерисовка
					repaint();
				})
			}
		}

		//Управляшки Ключевая Колонка!!!!
		//Полоса меню с градиентом в ключевой колонке
		var gradient = draw.gradient('linear', function (stop) {
			stop.at(0, Sheet.grcol1)
			stop.at(1, Sheet.grcol2)
		})
		gradient.from(0, 0).to(0, 1);
		//Коррекция размера
		var key = 'col0';
		var curicosizem = 0;
		if (Sheet.icosize * w1 < height_colmn1_p1) {
			curicosizem = Sheet.icosize * w1;
		} else { curicosizem = height_colmn1_p1; }
		var colmn1 = draw.polygon(Number(Columns[key].poz.x) * w1 + ',' + Number(Columns[key].poz.y) * h1 + ' ' + (Number(Columns[key].poz.x) * w1 + Number(Columns[key].size.w) * w1) + ',' + Number(Columns[key].poz.y) * h1 + ' ' + (Number(Columns[key].poz.x) * w1 + Number(Columns[key].size.w) * w1) + ',' + (Number(Columns[key].poz.y) * h1 + curicosizem) + ' ' + Number(Columns[key].poz.x) * w1 + ',' + (Number(Columns[key].poz.y) * h1 + curicosizem))
			.fill({ color: gradient })
			.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor });

		//Кнопка Настройки Ключевая колонка
		/*
		var text_name_p2 = draw.text('Настройки')
			.font({ family: Sheet.fnt, size:calcsize})
			.move(x2, y2)
			.center(x2,y2)
			.fill({ color: '#000000'});
		*/
		var group1 = draw.nested();
		group1.svg(rawsvg2);
		group1.id(key)
		group1.style({ cursor: 'pointer' });

		//Коррекция размера
		var curicosize = 0;
		if (Sheet.icosize * w1 > height_colmn1_p1 || Sheet.icosize * w1 > steep_col4) {
			if (steep_col4 > height_colmn1_p1) {
				curicosize = height_colmn1_p1;
			}
			else {
				curicosize = steep_col4;
			}
		} else {
			curicosize = Sheet.icosize * w1;
		}
		group1.size(curicosize, curicosize);
		var x2 = Columns[key].poz.x * w1 + Columns[key].size.w * w1 - curicosize * 1;
		var y2 = (Number(Columns[key].poz.y) * h1);
		group1.attr('x', String(x2));
		group1.attr('cx', String(x2));
		group1.attr('y', String(y2));
		//group1.attr('cy',String(y2));
		group1.attr('fill', Sheet.toolcol);
		//Прозрачный квадрат для катания по кнопке
		var rec1 = group1.rect(curicosize, curicosize);
		rec1.attr('opacity', '0.0');

		group1.mouseover(function () {
			this.attr('fill', getRandomColor());
		})

		group1.mouseout(function () {
			this.attr('fill', Sheet.toolcol);
		})
		//Настройки формы
		group1.click(function () {

			colPan5();//см. settings.js
		})

		//Кнопка Добавить
		var group1 = draw.nested();
		group1.svg(rawsvg3);
		group1.id(key)
		group1.style({ cursor: 'pointer' });

		//Коррекция размера
		var curicosize = 0;
		if (Sheet.icosize * w1 > height_colmn1_p1 || Sheet.icosize * w1 > steep_col4) {
			if (steep_col4 > height_colmn1_p1) {
				curicosize = height_colmn1_p1;
			}
			else {
				curicosize = steep_col4;
			}
		} else {
			curicosize = Sheet.icosize * w1;
		}
		group1.size(curicosize, curicosize);
		var x2 = Columns[key].poz.x * w1 + Columns[key].size.w * w1 - curicosize * 2;
		var y2 = (Number(Columns[key].poz.y) * h1);
		group1.attr('x', String(x2));
		group1.attr('cx', String(x2));
		group1.attr('y', String(y2));
		//group1.attr('cy',String(y2));
		group1.attr('fill', Sheet.pluscol);
		//Прозрачный квадрат для катания по кнопке
		var rec1 = group1.rect(curicosize, curicosize);
		rec1.attr('opacity', '0.0');
		group1.mouseover(function () {
			this.attr('fill', getRandomColor());
		})
		group1.mouseout(function () {
			this.attr('fill', Sheet.pluscol);
		})


		//Добавление столбца
		group1.click(function () {

			addcoll();//см. settings.js
		})
	} else {

		//Управляшки Ключевая Колонка!!!!
		//Полоса меню с градиентом в ключевой колонке
		var gradient = draw.gradient('linear', function (stop) {
			stop.at(0, Sheet.grcol1)
			stop.at(1, Sheet.grcol2)
		})
		gradient.from(0, 0).to(0, 1);
		//Коррекция размера
		var key = 'col0';
		var curicosizem = 0;
		if (Sheet.icosize * w1 < height_colmn1_p1) {
			curicosizem = Sheet.icosize * w1;
		} else { curicosizem = height_colmn1_p1; }
		var colmn1 = draw.polygon(Number(Columns[key].poz.x) * w1 + ',' + Number(Columns[key].poz.y) * h1 + ' ' + (Number(Columns[key].poz.x) * w1 + Number(Columns[key].size.w) * w1) + ',' + Number(Columns[key].poz.y) * h1 + ' ' + (Number(Columns[key].poz.x) * w1 + Number(Columns[key].size.w) * w1) + ',' + (Number(Columns[key].poz.y) * h1 + curicosizem) + ' ' + Number(Columns[key].poz.x) * w1 + ',' + (Number(Columns[key].poz.y) * h1 + curicosizem))
			.fill({ color: gradient })
			.stroke({ width: Sheet.width_line_p, color: Sheet.syscolor });
	}
	//Первый параметр
	/*
	Wkp=-100.0
	Wdol=-100.0
	Mpot=-100.0
	Npot=-100.0
	Pbx=-100.0
	Qbx=-100.0
	Talblok=-100.0
	C1C5=-100.0
	C1=-100.0
	Xn1=-100.0
	Xn2=-100.0
	Potok=-100.0
	Tbix=-100.0
	V1=-100.0
	V2=-100.0
	V3=-100.0
	V4=-100.0
	Vdol=-100.0
	Vobj=-100.0
	Zaboj=-100.0
	Instr=-100.0
	Vrema=-100
	*/



	/* } catch(e){} */
	//Убрать загрузка

	/* var parentElement = SVG.parentElement
	var emptySvg = SVG.cloneNode(false);
	parentElement.removeChild(SVG);
	parentElement.appendChild(emptySvg); */


	try {
		$('#progress').remove();
	}
	catch (e) { }

}


function touch_value() {
	var point = path.point(e.screenX, e.screenY)
	alert("MEGA");
	alert("x: " + point + " y:");
}