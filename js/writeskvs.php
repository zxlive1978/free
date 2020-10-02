<?php

/* Отладка ошибок */
	ini_set('display_errors',1);
	error_reporting(E_ALL ^E_NOTICE);
	
	$dbc= mysqli_connect('127.0.0.1', 'goodman', 'NRywfHcXEmzenn7S') or
		die(mysqli_sqlstate($dbc));
	
	$code_page="SET NAMES 'utf8';";
	mysqli_query($dbc,$code_page) or
		die(mysqli_sqlstate($dbc));

	$name_base="pozitron";
	$xy_value110d=array();
	
	$table=$_POST['table'];
	$p000 = $_POST['p000'];
	$skvjson = $_POST['skvsjson'];
	$nu = "ok";
	


	$query="INSERT INTO ".$name_base.".".$table." VALUES ( ".$p000.", ".$skvjson." );";
	echo $table;
	$result=mysqli_query($dbc,$query) or die(mysqli_sqlstate($dbc));
	//echo mysqli_sqlstate($dbc);
	// echo $_POST['email'];
	echo $result;
	
	//echo json_encode($nu);
    mysqli_close($dbc);
		
?>