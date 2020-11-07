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
    if ($whatdo == 'check'){
        $ch = curl_init('https://hydrofalll.ddns.net:5443/LiveApp/rest/broadcast/getList/0/50');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_HEADER, false);
        $html = curl_exec($ch);
        curl_close($ch);
        echo $html;
    }

    if ($whatdo == 'create'){
        $dbc= mysqli_connect('127.0.0.1', 'goodman', 'NRywfHcXEmzenn7S') or die(mysqli_sqlstate($dbc));
        $code_page="SET NAMES 'utf8';";
        mysqli_query($dbc,$code_page) or die(mysqli_sqlstate($dbc));
        $name_base="pozitron";
        $table="cams";
        $query = "SELECT * FROM ".$name_base.".".$table.";";

        $result=mysqli_query($dbc,$query) or die(mysqli_sqlstate($dbc)); //ответ базы запишем в переменную $result. 
        $cams = mysqli_fetch_assoc($result); //преобразуем ответ из БД в нормальный массив PHP
        $obj = json_decode($cams['skvjson'], true);
	    echo $cams;
	    // $userrights = array ();
	    // $userrights[]=base64_encode($obj['name']);
	    // $userrights[]=base64_encode($obj['dolgnost']);
	    // $userrights[]=base64_encode($obj['tel']);
	    // $userrights[]=base64_encode($obj['email']);
        
        
        
        mysqli_close($dbc);

    }
    	
?>