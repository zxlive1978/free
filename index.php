<?php
  //Отладка ошибок
	ini_set('display_errors',1);
	error_reporting(E_ALL ^E_NOTICE);
	//Если форма авторизации отправлена...
	if ( !empty($_POST['password']) and !empty($_POST['login']) ) {
		//Пишем логин и пароль из формы в переменные (для удобства работы):
		$login = $_POST['login']; 
		$pass = $_POST['password']; 

		/*
			Формируем и отсылаем SQL запрос:
			ВЫБРАТЬ ИЗ таблицы_users ГДЕ поле_логин = $login И поле_пароль = $password.
    */
    //Устанавливаем доступы к базе данных:
		$host = 'localhost'; //имя хоста, на локальном компьютере это localhost
		$user = 'root'; //имя пользователя, по умолчанию это root
		$password = ''; //пароль, по умолчанию пустой
		$db_name = 'test'; //имя базы данных

	  //Соединяемся с базой данных используя наши доступы:
    //$link = mysqli_connect($host, $user, $password, $db_name);
    $dbc= mysqli_connect('127.0.0.1', 'goodman', 'NRywfHcXEmzenn7S') or die(mysqli_sqlstate($dbc));
    $code_page="SET NAMES 'utf8';";
    mysqli_query($dbc,$code_page) or die(mysqli_sqlstate($dbc));
    $name_base="pozitron";
    $table="users_rights";
    $query = "SELECT * FROM ".$name_base.".".$table."  WHERE login='".$login."' AND password='".$pass."';";
    //echo $query;
    //echo $pass;
		$result=mysqli_query($dbc,$query) or die(mysqli_sqlstate($dbc)); //ответ базы запишем в переменную $result. 
    $user = mysqli_fetch_assoc($result); //преобразуем ответ из БД в нормальный массив PHP
    //echo $result;
	//echo $query;
	
	
    

		//Если база данных вернула не пустой ответ - значит пара логин-пароль правильная
		if (!empty($user)) {
			//Имя сессии

			//session_name($user['login']);
			//Стартуем сессию:
			session_start(); 

			//Пишем в сессию информацию о том, что мы авторизовались:
			$_SESSION['auth'] = true; 
			

			//Пишем в сессию логин и id пользователя (их мы берем из переменной $user!):
			//$_SESSION['id'] = $user['id']; 
	  $_SESSION['login'] = $user['login'];
	  //$userjson=json_encode($user['skvjson'], JSON_UNESCAPED_UNICODE);
	  //user_right
	  $obj = json_decode($user['skvjson'], true);
	  //print_r($obj['name']);
	  $userrights = array ();
	  $userrights[]=base64_encode($obj['name']);
	  $userrights[]=base64_encode($obj['dolgnost']);
	  $userrights[]=base64_encode($obj['tel']);
	  $userrights[]=base64_encode($obj['email']);
	  $userrights[]=base64_encode($obj['forms']);
	  $userrights[]=base64_encode($obj['time']);
	  $userrights[]=base64_encode($obj['video']);
	  $userrights[]=base64_encode($obj['karotag']);
	  $userrights[]=base64_encode($obj['comments']);
	  $userrights[]=base64_encode($obj['geolog']);
	  $userrights[]=base64_encode($obj['depth']);
	  $userrights[]=base64_encode($obj['svodka']);
	  $userrights[]=base64_encode($obj['chat']);
	  //print_r(json_encode($userrights, JSON_UNESCAPED_UNICODE,  JSON_FORCE_OBJECT ));
	  $_SESSION['skvjson'] = json_encode($userrights, JSON_UNESCAPED_UNICODE,  JSON_FORCE_OBJECT );
		
	  //cams
	  $table="cams";
    $query = "SELECT * FROM ".$name_base.".".$table.";";//"  WHERE login='".$login."' AND password='".$pass."';";
    //echo $query;
    //echo $pass;
		$result=mysqli_query($dbc,$query) or die(mysqli_sqlstate($dbc)); //ответ базы запишем в переменную $result. 
	$cams = mysqli_fetch_assoc($result);
	
	  $obj1 = json_decode($cams['skvjson'], true);
	  //print_r($obj['name']);
	  $camsrights = array ();
	  $camsrights[]=base64_encode($obj1['name']);
	  $camsrights[]=base64_encode($obj1['txt']);
	  $camsrights[]=base64_encode($obj1['rtsp']);
	  
	  //print_r(json_encode($userrights, JSON_UNESCAPED_UNICODE,  JSON_FORCE_OBJECT ));
	  $_SESSION['skvjsoncams'] = json_encode($camsrights, JSON_UNESCAPED_UNICODE,  JSON_FORCE_OBJECT );

	  //delete
	  $query="DELETE  FROM  ".$name_base.".active WHERE username='".$user['login']."';";
	  //echo $query;
	  $result=mysqli_query($dbc,$query) or die(mysqli_sqlstate($dbc));
	  //insert
	  $id_session = session_id();
	  
	  $curtime=time();
	  $_SESSION['time']= $curtime;
	  
	  $query="INSERT INTO ".$name_base.".active VALUES ( NULL, '".$id_session."' , '".$user['login']."' , ".$curtime." ); ";
	  //echo $query;
	  $result=mysqli_query($dbc,$query) or die(mysqli_sqlstate($dbc));
	  mysqli_close($dbc);
	
      include './noindex.php';
      
      //include './noindex.php';
		} else {
	  //Пользователь неверно ввел логин или пароль, выполним какой-то код.
	  //echo "<script>alert(\"Неверный пароль или логин\");</script>"; 
      //echo 'Неверный пароль или логин'.$_SESSION['login'];
      mysqli_close($dbc);
      header("Location: index.html");
    }
    
	} else {
		header("Location: index.html");

	}
?>