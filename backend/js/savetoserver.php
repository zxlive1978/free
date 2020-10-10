<?php
	/* Отладка ошибок */
	ini_set('display_errors',1);
	error_reporting(E_ALL ^E_NOTICE);
	
	$table=$_POST['well_Name'];
	$jsondata = $_POST['fileData'];
	$myFile ='../scr/'.$_POST['fileName'];
	$x_id="Vrema";
	/*echo $jsondata;
	echo getcwd();
	echo $myFile;
	file_put_contents($myFile, $jsondata); */
	
	if (file_put_contents($myFile, json_encode($jsondata))) {
		echo 'Сохранено';}
	else 
	    echo "Ошибка";
	/* $myfile = fopen("../scr/testfile.txt", "w"); */
?>