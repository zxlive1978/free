<?php
//session_start();
// if (!isset($_SESSION)){
//   session_start();
// }
if (!$_SESSION['auth']) {
	header("Location: index.html");
	exit;
}

?>
<html>
<title>
</title>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta charset="UTF-8">
<script>const _uz=<?php echo $_SESSION['skvjson']; ?>;</script>
<script>const _ut=<?php echo $_SESSION['time']; ?>;</script>
<link rel="stylesheet" type="text/css" href="css/jschart5.css">
<link rel="stylesheet" href="css/iziModal.min.css">

<!-- Bootstrap -->
<link href="css/bootstrap.min.css" rel="stylesheet">
<!-- Jquery -->
<link rel="stylesheet" href="css/jquery-ui.min.css">
<!-- <link rel="stylesheet" href="css/style.css"> -->
<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="js/jquery-ui.min.js"></script>


    
  <script>
  //JQUERY tabЫ
  $( function() {
    $( "#tabs" ).tabs();
    $('#tabs').hide();
  } );
  $('#tabs').hide();
 
  //dropdownMenu2
  </script>
  <script>
//Окно видео
  $( function() {
    $( "#dialogvideo" ).dialog(
      {
        position: { my: "right  top", at: "right center", of:"#drawing" },
        width: 170,
        height: 140,
        //appendTo: "fullscreen",
        //modal: true
      }
    );
  } );
  </script>



<!-- Bootstrap --> 
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>


<script type="text/javascript" src="js/svg.min.js"></script>
<script type="text/javascript" src="js/svg.draggable.min.js"></script>
<script type="text/javascript" src="js/svg.easing.min.js"></script>

<script type="text/javascript" src="js/loadsave.js"></script>
<script type="text/javascript" src="js/cams.js"></script>
<script type="text/javascript" src="js/writeskvs.js"></script>
<script type="text/javascript" src="js/exit.js"></script>


<script type="text/javascript" src="js/settings.js"></script>


<script type="text/javascript" src="js/pong.js"></script>
<script type="text/javascript" src="js/sutki.js"></script>
<script type="text/javascript" src="js/read_comment.js"></script>




</head>
<body  class=" bg-dark">

<!-- Brand -->
<!-- 	<a class="navbar-brand align-middle" href="#">
    <img src="css/logo.svg" width="60" height="30" class="d-inline-block align-middle" alt="">
    ПФ "Астраханьгазгеофизика"
  </a> -->
<!-- Bootstrap -->


<!-- Navbar -->

 

<!-- <nav class="navbar navbar-expand-md navbar-light  py-0 navbar-fixed-top" id="bigpan">
    
</nav> -->

<nav class="navbar  navbar-primary bg-dark py-0 navbar-fixed-top" id="bigpan">
<div class="text-left">

<div class="dropdown">
<!-- <a class='btn btn-outline-light '  data-toggle="tooltip" data-placement="bottom" title="Основное меню регистрируемых данных станции ЭГТИ" onClick="$('#myModal11').modal('show');"><img src='css/menu.png'  width="20" height="20"></a> -->
<button class='btn btn-outline-light  dropdown-toggle'  id='dropdownMenu1' data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" data-placement="bottom" title="Основное меню" style=" padding-top:3; padding-bottom:3; font-size: 18px;" ><img src='css/burg.svg'  width="27" height="27"></button>
<div class="dropdown-menu dropdown-menu-left bg-dark" aria-labelledby="dropdownMenu1" style=" width: 300px !important;">

    <button class='btn  btn-dark btn-block text-left'  onClick="adm3();" ><img src='css/time.svg'  width="30" height="30">  Данные "По времени"</button>
    <button class='btn  btn-dark btn-block text-left'  onClick="adm();" ><img src='css/cam.svg'  width="30" height="30">  Видеокамеры</button>
    <div class="dropdown-divider"></div>
    <button class='btn  btn-dark btn-block text-left'  onClick="colPan3();" ><img src='css/lupa.svg'  width="30" height="30">  Выбор даты и интервала</button>
    <button class='btn  btn-dark btn-block text-left'  onClick="colPan9();" ><img src='css/form.svg'  width="30" height="30">  Загр./Сохр.(Создать) форму</button>
    <button class='btn  btn-dark btn-block text-left'  onClick="colok14();" ><img src='css/wave.svg'  width="30" height="30">  Старт/Стоп прием данных</button>
    
    <button class='btn btn-dark  btn-block text-left '  onClick="colOK11();"  ><img src='css/lock.svg'  width="30" height="30">  Редактирование формы</button>
    <button class='btn btn-dark  btn-block text-left '  onClick="colOK15();"  ><img src='css/roll.svg'  width="30" height="30">  Свернуть/Развернуть шапку</button>
    
  </div>
  </div>
  <div class="dropdown">
<!-- <a class='btn btn-outline-light '  data-toggle="tooltip" data-placement="bottom" title="Основное меню регистрируемых данных станции ЭГТИ" onClick="$('#myModal11').modal('show');"><img src='css/menu.png'  width="20" height="20"></a> -->
<button class='btn btn-outline-light  dropdown-toggle'  id='dropdownMenu2'  data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" data-placement="bottom" title="Основное меню" style=" display:none; padding-top:3; padding-bottom:3; font-size: 18px;" ><img src='css/burg.svg'  width="27" height="27"></button>
<div class="dropdown-menu dropdown-menu-left bg-dark" aria-labelledby="dropdownMenu2" style=" width: 300px !important;">

    <button class='btn  btn-dark btn-block text-left'  onClick="adm3();" ><img src='css/time.svg'  width="30" height="30">  Данные "По времени"</button>
    <button class='btn  btn-dark btn-block text-left'  onClick="adm();" ><img src='css/cam.svg'  width="30" height="30">  Видеокамеры</button>
    
  </div>
  </div>
</div>


<!-- <button type="button" class="btn btn-sm text-light "  >
  <span id="skvnamelab" style="font-weight: bold; font-size: 22px;" onClick="colPan10()" >Скважина</span>
</button> -->
<div class="text-center">
<button type="button"  id="skvnamelab"  data-toggle="tooltip" data-placement="bottom" title="Выбор текущей скважины" class="btn btn-outline-light " style="font-weight: bold; padding-top:0; padding-bottom:0; font-size: 22px;" onClick="colPan10();"><img src='css/well.svg'  width="30" height="30" style="font-weight: bold; padding-top:0; padding-bottom:3px; font-size: 22px;"><a id="skvnamelabt">Скважина ?</a></button>
</div>
<div class="text-right">
<a class='btn btn-outline-light' data-toggle="tooltip" data-placement="bottom" title="Выход из приложения" style=" padding-top:3; padding-bottom:3; font-size: 18px;" onClick="exit('exit','exit','exit');"><img src='css/exit.svg'  width="27" height="27"></a>
</div>
</nav>

<!-- Табы -->
<div id="tabs" style="margin-bottom: 0;" >
  <ul id="ul1" class="nav nav-tabs bg-dark">
    <li><a href="#tabs-1" > <span id="tabsn-1" >     </span></a></li>
    <li><a href="#tabs-2"> <span id="tabsn-2" >     </span></a></li>
    <!-- <li><a href="#tabs-3"> <span id="tabsn-3" >     </span></a></li>
    <li><a href="#tabs-4"> <span id="tabsn-4" >     </span></a></li> -->
  </ul>
  <div id="taabs-1" class="bg-dark" style="display: block;  margin: 0 auto; background-color:black;"></div>
  <div id="taabs-2" class="bg-dark" style="display: block;  margin: 0 auto; background-color:black;"></div>
  
  <!-- <div id="tabs-2">
  </div>
  <div id="tabs-3">
  </div>
  <div id="tabs-4">
  </div> -->
</div>

<!-- style="touch-action: none;" -->
<div id="drawing" class="bg-dark"  ></div> 
<div id="tabvideo" width="100%" height="100%"  class="bg-dark" style = "background-color:black;" ></div>
<script type="text/javascript">
function getStart() {
  $('#dropdownMenu2').hide();
      //alert('ok');
	  pongpong();
	 /*  $("#wells").iziModal();
	  //$("#modal").iziModal();
	  $("#kalendar").iziModal();
	  $("#lupa").iziModal();
	  $("#lupa").iziModal();
	  $("#addgraf").iziModal();
	  $("#nastrstolb").iziModal();
	  $("#nastrgraf").iziModal();
	  $("#nastrtxtpar").iziModal();
	  $("#nastrtxtlabel").iziModal();
	  $("#openfile").iziModal();
    $("#savefile").iziModal(); */
    window.onresize = function(event) {
    repaint();
    //console.log('ресайз');
    };
	  
	  
}
window.onload = getStart;

</script>
<!-- //Модальный iframe -->
<div class="modal fade modal-fullscreen " id="myModal1">
    <div class="modal-dialog modal-dialog-scrollable-dark">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Настройки формы</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">

  <label for="hcolcolor">Цвет линий:</label><input type="color" class="form-control input-lg bg-dark text-light" id="syscolor" name="syscolor" value="#e66465"/>

  <label for="hcolcolor">Толщина линий оформления:</label><input type="text"  class="form-control input-lg bg-dark text-light"  id="width_line_p" name="width_line_p" value="0"/>

  <label for="hcolcolor">Толщина линий графиков:</label><input type="text" class="form-control input-lg bg-dark text-light" id="width_gxf_line" name="width_gxf_line" value="0"/>

  <label for="hcolcolor">Шрифт:</label><select id="font"  class="form-control input-lg bg-dark text-light" name="font" /></select>

  <label for="hcolcolor">Обратный коэфф. максимального размера шрифта:</label><input class="form-control input-lg bg-dark text-light" type="text" id="K_size_txt" name="K_size_txt" value="0"/>
  
  
  <label for="hcolcolor">Обратный коэфф. максимального размера шрифта(моб):</label><input class="form-control input-lg  bg-dark text-light"type="text" id="K_size_txt_mobile" name="K_size_txt_mobile" value="0"/>
  
  
  <label for="hcolcolor">Радиус круга полож. столбца:</label><input class="form-control input-lg  bg-dark text-light"type="text" id="markheight" name="markheight" value="0"/>
  
   
  <label for="hcolcolor">Цвет круга полож. столбца:</label><input class="form-control input-lg bg-dark text-light"type="color" id="markcol" name="markcol" value="#e66465"/>
  
  
  <label for="hcolcolor">Цвет ключевого столбца:</label><input class="form-control input-lg bg-dark text-light"type="color" id="marktime" name="marktime" value="#e66465"/>
  
  
  <label for="hcolcolor">Размер шрифта комментариев:</label><input class="form-control input-lg bg-dark text-light"type="text" id="cmtsize" name="cmtsize" value="0"/>
  
  
  <label for="hcolcolor">Цвет комментариев:</label><input class="form-control input-lg bg-dark text-light"type="color" id="cmtcolor" name="cmtcolor" value="#e66465"/>
  
  
  <label for="hcolcolor">Высота панели инструментов:</label><input class="form-control input-lg bg-dark text-light"type="text" id="icosize" name="icosize" value="0"/>
  
   
  <label for="hcolcolor">Высота панели инструментов (моб):</label><input class="form-control input-lg bg-dark text-light"type="text" id="icosizem" name="icosizem" value="0"/>
  
  
  <label for="hcolcolor">Цвет 1 панели инструментов:</label><input class="form-control input-lg bg-dark text-light"type="color" id="grcol1" name="grcol1" value="#e66465"/>
  
  
  <label for="hcolcolor">Цвет 2 панели инструментов:</label><input class="form-control input-lg bg-dark text-light"type="color" id="grcol2" name="grcol2" value="#e66465"/>
  	
  
  <label for="hcolcolor">Пунктирная линия:</label><input class="form-control input-lg"type="text bg-dark text-light" id="dasharray" name="dasharray" value="0"/>
  
  
  <label for="hcolcolor">Цвет пунктирной линии:</label><input class="form-control input-lg bg-dark text-light"type="color" id="dashcol1" name="dashcol1" value="#e66465"/>
  	
  
  <label for="hcolcolor">Цвет области пропуска значений:</label><input class="form-control input-lg bg-dark text-light"type="color" id="holcol" name="holcol" value="#e66465"/>
  
   
  <label for="hcolcolor">Прозрачность обл. пропуска значений:</label><input class="form-control input-lg bg-dark text-light"type="text" id="holhide" name="holhide" value="0"/>
  
  
  <label for="hcolcolor">Ширина области текущ. значений:</label><input class="form-control input-lg bg-dark text-light"type="text" id="width_value" name="width_value" value="0"/>
  
  
  <label for="hcolcolor">Высота области текущ. значений:</label><input class="form-control input-lg bg-dark text-light"type="text" id="height_value" name="height_value" value="0"/>
  
  
  <label for="hcolcolor">Цвет области текущ. значений:</label><input class="form-control input-lg bg-dark text-light"type="color" id="curcolorval" name="curcolorval" value="#e66465"/>
  
  
  <label for="hcolcolor">Прозрачность области текущ. значений:</label><input class="form-control input-lg bg-dark text-light"type="text" id="faderr" name="faderr" value="0"/>
  
  
  <label for="hcolcolor">Кнопка "Удалить":</label><input class="form-control input-lg bg-dark text-light"type="color" id="delcol" name="delcol" value="#e66465"/>
  
  
  <label for="hcolcolor">Кнопка "Настройки":</label><input class="form-control input-lg bg-dark text-light"type="color" id="toolcol" name="toolcol" value="#e66465"/>
  
  
  <label for="hcolcolor">Кнопка "Добавить":</label><input class="form-control input-lg bg-dark text-light"type="color" id="pluscol" name="pluscol" value="#e66465"/>
  
  
  <label for="hcolcolor">Кнопка "Замок":</label><input class="form-control input-lg bg-dark text-light"type="color" id="rawsvg0" name="rawsvg0" value="#e66465"/>
  
  
  <label for="hcolcolor">Редактирование экрана:</label><input class="form-control input-lg bg-dark text-light"type="checkbox" id="editscrn" name="editscrn"/>
  
  
  <label for="hcolcolor">Кнопка "Лупа":</label><input class="form-control input-lg bg-dark text-light"type="color" id="rawsvg1" name="rawsvg1" value="#e66465"/>
  
  
  <label for="hcolcolor">Кнопка "Форма":</label><input class="form-control input-lg bg-dark text-light"type="color" id="rawsvg2" name="rawsvg2" value="#e66465"/>
  
   
  <label for="hcolcolor">Кнопка "Прием данных":</label><input class="form-control input-lg bg-dark text-light"type="color" id="rawsvg3" name="rawsvg3" value="#e66465"/>
  
   
  <label class="d-none" for="hcolcolor">Кнопка "Форма":</label><input class="d-none form-control input-lg bg-dark text-light"type="color" id="rawsvg4" name="rawsvg4" value="#e66465"/>
  
  
  <label for="hcolcolor">Фон кнопок (белый/ черный):</label><input class="form-control input-lg bg-dark text-light"type="checkbox" id="fonbut" name="fonbut"/>
         </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='colOK5()'>Применить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>



<div class="modal fade" id="myModal2">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Выбор даты</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
        <label for="hcolcolor">Выбор даты(<10 дней):</label>
<input type='date' class="form-control input-lg bg-dark text-light" id='localdate1' name='date1' value="<?php echo date('Y-m-d');?>" max=<?php echo date('Y-m-d');?> min=<?php $date = new DateTime(); $date->modify('-9 day'); echo $date->format('Y-m-d'); ?>>

<label for="hcolcolor">Ширина интервала:</label>

<select id="zooom1" class="form-control input-lg bg-dark text-light" name="zooom1" value="3">

<option value="3">3 часа</option>
 <option value="1">1 час</option>
<option value="8">8 часов</option>
<option value="24">1 день</option>
</select>

</div>        
        <!-- Modal footer -->
        <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='colOK3()'>Применить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>

<div class="modal fade" id="myModal3">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Видеокамера</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
<label for="hcolcolor" class="control-label">Скважина:</label><select class="form-control input-lg bg-dark text-light" name="zzm1" id="zzm1"  size="1" ></select>

<label for="hcolcolor"class="control-label">Камера:</label><select id="zzzooom1" class="form-control input-lg bg-dark text-light" name="zzzooom1" value="3">
<option value="18">Стол ротора</option>
   <option value="17">Приемный мост</option>
  <option value="19">Шахта, ПВО</option>
  <option value="20">Емкости бурового раствора</option>
 </select>

 <label for="hcolcolor"class="control-label">Тип потока:</label><select id="zzzzooom1" class="form-control input-lg bg-dark text-light" name="zzzzooom1" value="3">
<option value="01">Основной</option>
   <option value="1">Дополнительный</option>
  
 </select>

 <div class="md-form">
 <label for="form7">Прогресс подключения:</label>
  <textarea id="form7" class="md-textarea form-control bg-dark text-light" rows="4"></textarea>
  
  </div>

</div>        
        <!-- Modal footer -->
        <div class="modal-footer"> 
			<button type="button" class="btn btn-success" id ="govideo" onclick='colOK4()'>Проверка</button>
      <button type="button" class="btn btn-success" id ="gogo" onclick='gocams()' disabled >Просмотр</button>
      <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>


<div class="modal fade" id="myModal4">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Выбор скважины</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
        <label for="hcolcolor">Название скважины:</label><select class="form-control input-lg bg-dark text-light" name="wellN" id="wellN"  size="1" ></select>
  
  
  <label for="hcolcolor" class="control-label">Тип работ:</label><label class="form-control bg-dark text-light" for="namePar" name="wellNwork1" id="wellNwork1"></label>
  
  
  <label for="hcolcolor" class="control-label">Тип станции:</label><label class="form-control bg-dark text-light" for="namePar" name="wellNwork2" id="wellNwork2"></label>
  
  
  <label for="hcolcolor" class="control-label">Нач. партии:</label><label class="form-control bg-dark text-light" for="namePar" name="wellNwork3" id="wellNwork3"></label>
  
  
  <label for="hcolcolor" class="control-label">Телефон:</label><label class="form-control bg-dark text-light" for="namePar" name="wellNwork4" id="wellNwork4"></label>
  
  
  <label for="hcolcolor" class="control-label">E-mail:</label><label class="form-control bg-dark text-light" for="namePar" name="wellNwork5" id="wellNwork5"></label>
  
</div>        
        <!-- Modal footer -->
        <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='colOK10()'>Применить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>

<div class="modal fade" id="myModal5">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Добавить параметр</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
<label for="hcolcolor" class="control-label">Тип параметра:</label><select class="form-control input-lg bg-dark text-light" name="colitems7" id="colitems7"  size="1"></select>
<label for="hcolcolor" class="control-label" name="colitems22" id="colitems22">Параметр:</label></td><td><select class="form-control input-lg bg-dark text-light" name="colitems2" id="colitems2"  size="1" ></select>
</div>        
        <!-- Modal footer -->
        <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='colOK2()'>Применить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>


<div class="modal fade" id="myModal6">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Настройки колонки</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
<label for="hcolcolor">Область легенд:</label><input class="form-control input-lg bg-dark text-light"  type="color" id="colcolor1" name="colcolor1" value="#e66465"/>

<label for="hcolcolor">Область графиков:</label><input class="form-control input-lg bg-dark text-light"  type="color" id="colcolor2" name="colcolor2" value="#e66465"/>

<label for="hcolcolor">Шаг сетки:</label><input class="form-control input-lg bg-dark text-light"  type="text" id="gridnum" name="gridnum" value="0"/>

</div>        
        <!-- Modal footer -->
        <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='colOK()'>Применить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>


<div class="modal fade" id="myModal7">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Настройки параметра</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
<label for="name" class="control-label">Параметр:  </label><label class="form-control input-lg bg-dark text-light" for="namePar" name="namePar" id="namePar"></label>
<label for="name" class="control-label">Начало:</label><input  class="form-control input-lg bg-dark text-light" type="text" name="begedge" id="begedge" value="0">
<label for="address" class="control-label">Конец:</label><input  class="form-control input-lg bg-dark text-light" type="text" name="endedge" id="endedge" value="0">
<label for="ncolor" class="control-label">Цвет:</label><input  class="form-control input-lg bg-dark text-light" type="color" id="parcolor" name="parcolor" value="#e66465"/><br>
<div class="form-check"><input  class="form-check-input bg-dark text-light"  type="checkbox" id="parlog" name="parlog" value="#e66465"/><label class="form-check-label bg-dark text-light" for="ncolor">Логарифметическая шкала:</label></div><br>
<label for="ncolor" >Единицы измерения:</label><input  class="form-control input-lg" type="text" name="nameUnit" id="nameUnit" value="0"><br>
<div class="form-check bg-dark text-light"><input class="form-check-input bg-dark text-light" type="checkbox" id="pardel" name="pardel"/> <label class="form-check-label bg-dark text-light" for="ncolor">Удалить параметр?</label></div>
</div>        
        <!-- Modal footer -->
        <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='parOK()'>Применить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>

<div class="modal fade" id="myModal8">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Настройки параметра</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">

<label  class="control-label" for="name">Параметр:  </label><label  class="form-control input-lg bg-dark text-light" for="namePar1" name="namePar1" id="namePar1"></label>
<label  class="control-label" for="name">Позиция (0..1):</label><input class="form-control input-lg bg-dark text-light" type="text" name="txt7" id="txt7" ></input>
<label  class="control-label" for="ncolor">Цвет:</label><input class="form-control input-lg bg-dark text-light" type="color" id="parcolor7" name="parcolor7" value="#e66465"/><br>
<div class="form-check"><input class="form-check-input bg-dark text-light" type="checkbox" id="pardel7" name="pardel7"/> <label class="form-check-label" for="ncolor">Удалить параметр?</label></div>
</div>        
        <!-- Modal footer -->
        <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='colOK7()'>Применить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>


<div class="modal fade" id="myModal9">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Настройки параметра</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">

<label  class="control-label" for="name">Параметр:  </label><label class="form-control input-lg bg-dark text-light" for="namePar2" name="namePar2" id="namePar2"></label>
<label  class="control-label" for="ncolor">Цвет:</label><input class="form-control input-lg bg-dark text-light" type="color" id="parcolor6" name="parcolor6" value="#e66465"/><br>
<div class="form-check"><input class="form-check-input bg-dark text-light" type="checkbox" id="pardel6" name="pardel6"/> <label class="form-check-label" for="ncolor">Удалить параметр?</label></div>
</div>      
        <!-- Modal footer -->
        <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='colOK6()'>Применить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>




<div class="modal fade" id="myModal10">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Загрузить/Сохранить(Создать) форму</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
<label class="control-label" for="hcolcolor">Каталог форм:   </label><select class="form-control input-lg bg-dark text-light" name="colitems9" id="colitems9"  size="5" ></select>
<label class="control-label" for="hcolcolor">Имя формы:      </label><input class="form-control input-lg bg-dark text-light" type="text" id="colitems99" name="colitems99" value=""/>
</div>
        <!-- Modal footer -->
        <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='colOK8()'>Загрузить</button>
			<button type="button" class="btn btn-warning" data-dismiss="modal" onclick='colOK9()'>Сохранить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>
  </div>


  <div class="modal fade" id="myModal11">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Основное меню</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
<!-- <label class="control-label" for="hcolcolor">Каталог форм:   </label><select class="form-control input-lg bg-dark text-light" name="colitems9" id="colitems9"  size="5" ></select>
<label class="control-label" for="hcolcolor">Имя формы:      </label><input class="form-control input-lg bg-dark text-light" type="text" id="colitems99" name="colitems99" value=""/> -->

<br><br><button type="button"  id="datatab"  class="  btn btn-outline-light btn-block text-center bg-dark text-light"  onClick="adm3();" data-toggle="tooltip" data-placement="bottom" title="Отображение регистрируемых параметров по ключевому параметру время">Данные "По времени"</button>
<button type="button"  id="vidotab"  class=" btn btn-outline-light btn-block  text-center bg-dark text-light"   onClick="adm();" data-toggle="tooltip" data-placement="bottom" title="Просмотр онлайн видеоданных с буровой">Видеокамеры</button><br><br><br>

<!-- </div> -->
        <!-- Modal footer -->
        <!-- <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='colOK8()'>Загрузить</button>
			<button type="button" class="btn btn-warning" data-dismiss="modal" onclick='colOK9()'>Сохранить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
         -->
      </div>
    </div>
  </div>
  </div>

 
  <div class="modal fade" id="myModal12">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Выбор скважины</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
        <label for="hcolcolor">Название скважины:</label><select class="form-control input-lg bg-dark text-light" name="videoN" id="videoN"  size="1" ></select>
  
  
</div>        
        <!-- Modal footer -->
        <div class="modal-footer">
			<button type="button" class="btn btn-success" data-dismiss="modal" onclick='colOK10()'>Применить</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
        </div>
        
      </div>
    </div>
  </div>


</main>
</body>
</html>