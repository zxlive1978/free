<?php
	/* Отладка ошибок */
	ini_set('display_errors',1);
	error_reporting(E_ALL ^E_NOTICE);
	set_time_limit(0);
	// python dtcis_read_random.py Time_024.dep s401 14:28:00-07/07/2021 15:40:00-07/07/2021
	$arch = $_POST['arch'];
	$table= $_POST['table'];
	$start_int = $_POST['start_int'];
	$stop_int= $_POST['stop_int'];
	$whatdo= $_POST['whatdo'];
	$ret_code=123;
	$output="";
		
	$cmd = "/usr/bin/python /var/www/html/mon/poz/readrandom/start.py ".$arch." ".$table." ".$start_int." ".$stop_int." ".$whatdo;
	// ." > /dev/null 2>/dev/null &";
	// exec('python blibble.py', $output, $ret_code);
	// $output=shell_exec($cmd);
	// exec($cmd, $output, $ret_code);
	$output = shell_exec($cmd);
	// $out = array_values($output);
	// echo ($arch.' '.$table.' '.$start_int.' '.$stop_int.' '.$whatdo);
	// echo json_encode($out);
	echo json_encode($output);
	// echo ini_get('max_execution_time');
?>