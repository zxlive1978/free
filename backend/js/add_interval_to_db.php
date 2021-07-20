<?php
	/* Отладка ошибок */
	ini_set('display_errors',1);
	error_reporting(E_ALL ^E_NOTICE);
	

	$registration = $_POST['registration'];
	$host= $_POST['host'];
		
	$cmd = '/usr/bin/python /var/www/html/mon/poz/ubireboot.py '.$host;
	$output = shell_exec($cmd);
	echo $output;
?>