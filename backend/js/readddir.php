<?php
	/* Отладка ошибок */
	ini_set('display_errors',1);
	error_reporting(E_ALL ^E_NOTICE);
	
	$table=$_POST['well_Name'];
	$myFile = $_POST['fileName'];
	$x_id="Vrema";
	/* echo $jsondata;
	echo getcwd();
	echo $myFile;
	file_put_contents($myFile, $jsondata); */
	
	/* if(file_put_contents($myFile, $jsondata)) {
		echo 'Сохранено';}
	else 
	    echo "Ошибка"; */
	$dir= '../scr/';
	$files = array_slice(scandir($dir), 2);
	echo json_encode($files);
	/* $str = file_get_contents('../scr/scr11.scr');
	echo json_decode($str); */
	
	/* $myfile = fopen("../scr/testfile.txt", "w"); */
?>