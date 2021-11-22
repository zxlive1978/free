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
        $ch = curl_init('https://monitoring.agg.gazpromnedra.ru:5443/LiveApp/rest/broadcast/getList/0/50');
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
        //$cams = mysqli_fetch_assoc($result); //преобразуем ответ из БД в нормальный массив PHP
        // $obj = json_decode($cams['skvjson'], true);
        $xy_value110d = array();
        while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
            //echo $row[$x_id]." - ".$row[$y_id]."<br />";
            $cur_rec= array('id' => $row['id'],'skvjson' => $row['skvjson']);
            //$cur_rec['Wkp'] = $row['Wkp'];
            array_push($xy_value110d, $cur_rec);
            }
        mysqli_free_result($result);
        
        echo json_encode($xy_value110d);
	    // $userrights = array ();
	    // $userrights[]=base64_encode($obj['name']);
	    // $userrights[]=base64_encode($obj['dolgnost']);
	    // $userrights[]=base64_encode($obj['tel']);
	    // $userrights[]=base64_encode($obj['email']);
        
        
        
        mysqli_close($dbc);

    }

    if ($whatdo == 'create2'){
        $rtsp = $_POST['rtsp'];

        $array = array(
            'type'  => 'streamSource',
            'name'   => $namecams,
            
            'streamUrl' => $rtsp
        );		
         
        $ch = curl_init('https://monitoring.agg.gazpromnedra.ru:5443/LiveApp/rest/streamSource/addStreamSource');
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS,  json_encode($array)); 
         
        // https://monitoring.agg.gazpromnedra.ru:5443/LiveApp/rest/streamSource/addStreamSource
        // curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($array, '', '&'));
        curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_HEADER, false);
        $html = curl_exec($ch);
        curl_close($ch);	
         
        echo $html;
    }
        
    if ($whatdo == 'delete'){

        $array = array(
            
        );		
         
        $ch = curl_init('https://monitoring.agg.gazpromnedra.ru:5443/LiveApp/rest/broadcast/delete/'.$namecams);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS,  json_encode($array)); 
         
        // https://monitoring.agg.gazpromnedra.ru:5443/LiveApp/rest/streamSource/addStreamSource
        // curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($array, '', '&'));
        curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_HEADER, false);
        $html = curl_exec($ch);
        curl_close($ch);	
         
        echo $html;
        
    }

    if ($whatdo == 'createforcamsdb'){
        $dbc= mysqli_connect('127.0.0.1', 'goodman', 'NRywfHcXEmzenn7S') or die(mysqli_sqlstate($dbc));
        $code_page="SET NAMES 'utf8';";
        mysqli_query($dbc,$code_page) or die(mysqli_sqlstate($dbc));
        $name_base="pozitron";
        $table="cams";
        $query = "SELECT * FROM ".$name_base.".".$table.";";

        $result=mysqli_query($dbc,$query) or die(mysqli_sqlstate($dbc)); //ответ базы запишем в переменную $result. 
        //$cams = mysqli_fetch_assoc($result); //преобразуем ответ из БД в нормальный массив PHP
        //echo $cams;
        $obj = json_decode($cams['skvjson'], true);
        $xy_value110d = array();
        while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
            //echo $row[$x_id]." - ".$row[$y_id]."<br />";
            $cur_rec= array('id' => $row['id'],'skvjson' => $row['skvjson']);
            //$cur_rec['Wkp'] = $row['Wkp'];
            array_push($xy_value110d, $cur_rec);
            }
        mysqli_free_result($result);
        
        echo json_encode($xy_value110d);
	    // $userrights = array ();
	    // $userrights[]=base64_encode($obj['name']);
	    // $userrights[]=base64_encode($obj['dolgnost']);
	    // $userrights[]=base64_encode($obj['tel']);
	    // $userrights[]=base64_encode($obj['email']);
        
        
        
        mysqli_close($dbc);

    }



?>