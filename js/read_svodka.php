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
		$dir= '...//mon/poz/svodka';//.$myFile;
		// $dirandfile =array_filter(scandir($dir), function($item) {return !is_dir($dir . $item);});
		$files = scandir($dir); 
		$forms = array();
		foreach($files as $file)
		{
    		if(is_file($dir.$file)){
				array_push($forms, $dir.$file);
			}
		}
		echo json_encode($forms);
		// $files = array_slice($dirandfile, 0);
		// echo json_encode($files);
?>