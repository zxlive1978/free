<?php
	/* Отладка ошибок */
	ini_set('display_errors',1);
	error_reporting(E_ALL ^E_NOTICE);
	
	$table=$_GET['well_Name'];
	$myFile = $_GET['fileName'];
	$x_id="Vrema";
	/* echo $jsondata;
	echo getcwd();
	echo $myFile;
	file_put_contents($myFile, $jsondata); */
	
	/* if(file_put_contents($myFile, $jsondata)) {
		echo 'Сохранено';}
	else 
	    echo "Ошибка"; */
	$dir ='../scr/'.$myFile;
	$str = file_get_contents($dir);
	echo json_decode($str);
	/* $myfile = fopen("../scr/testfile.txt", "w"); */
?>