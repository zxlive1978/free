<?php

/* Отладка ошибок */
	ini_set('display_errors',1);
	error_reporting(E_ALL ^E_NOTICE);
	
    $host= $_POST['host'];
	$cmd = '/usr/bin/python /var/www/html/free/js/getstatcams.py '.$host;
	$output = shell_exec($cmd);
    echo $output;
    	
?>