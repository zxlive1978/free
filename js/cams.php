<?php

/* Отладка ошибок */
	ini_set('display_errors',1);
	error_reporting(E_ALL ^E_NOTICE);
	
    // $host= $_POST['host'];
	// $cmd = '/usr/bin/python /var/www/html/free/js/getstatcams.py '.$host;
	// $output = shell_exec($cmd);
    // echo $output;
    $namecams=$_POST['namecams'];
	$whatdo=$_POST['whatdo'];
    if ($whatdo == 'ckeck'){
        $ch = curl_init('https://hydrofalll.ddns.net:5443/LiveApp/rest/broadcast/getList/0/50');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_HEADER, false);
        $html = curl_exec($ch);
        curl_close($ch);
        echo $html;
    }

    if ($whatdo == 'create'){
        
    }
    	
?>