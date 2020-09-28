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
    $table="USERS";
    $query = "SELECT * FROM ".$name_base.".".$table."  WHERE login='".$login."' AND password='".$pass."';";
    //echo $query;
    //echo $pass;
		$result=mysqli_query($dbc,$query) or die(mysqli_sqlstate($dbc)); //ответ базы запишем в переменную $result. 
    $user = mysqli_fetch_assoc($result); //преобразуем ответ из БД в нормальный массив PHP
    //echo $result;
    //echo $query;
    mysqli_close($dbc);

		//Если база данных вернула не пустой ответ - значит пара логин-пароль правильная
		if (!empty($user)) {

			//Стартуем сессию:
			session_start(); 

			//Пишем в сессию информацию о том, что мы авторизовались:
			$_SESSION['auth'] = true; 

			//Пишем в сессию логин и id пользователя (их мы берем из переменной $user!):
			$_SESSION['id'] = $user['id']; 
      $_SESSION['login'] = $user['login']; 
      echo 'Привет, '.$_SESSION['login'];
      include './noindex.html';
      //include './noindex.php';
		} else {
      //Пользователь неверно ввел логин или пароль, выполним какой-то код.
      echo 'Привет,fdsf'.$_SESSION['login'];
      
      //include './index.html';
    }
    
	}
?>