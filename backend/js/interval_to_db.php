<?php
	/* Отладка ошибок */
	ini_set('display_errors',1);
	error_reporting(E_ALL ^E_NOTICE);
	// python dtcis_read_random.py Time_024.dep s401 14:28:00-07/07/2021 15:40:00-07/07/2021
	$arch = $_POST['arch'];
	$table= $_POST['table'];
	$start_int = $_POST['start_int'];
	$stop_int= $_POST['stop_int'];
	$whatdo= $_POST['whatdo'];
		
	$cmd = '/usr/bin/python /var/www/html/mon/poz/dtcis_read_random.py '.$arch.' '.$table.' '.$start_int.' '.$stop_int.' '.$whatdo;
	$output = shell_exec($cmd);
	echo $output;
?>