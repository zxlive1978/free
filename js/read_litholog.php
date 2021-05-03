<?php

/* Отладка ошибок */
	ini_set('display_errors',1);
	error_reporting(E_ALL ^E_NOTICE);
	
	$dbc= mysqli_connect('127.0.0.1', 'goodman', 'NRywfHcXEmzenn7S') or
		die(mysqli_sqlstate($dbc));
	
	$code_page="SET NAMES 'utf8';";
	mysqli_query($dbc,$code_page) or
		die(mysqli_sqlstate($dbc));

	$name_base="pozitron";
	$xy_value110d=array();
	
	$table=$_POST['table'];
	$whatdo=$_POST['whatdo'];
	$start_time=$_POST['start_time'];
	$end_time=$_POST['end_time'];
	$x_id_top="top";
	$x_id_bot="bot";
	// $p000 = $_POST['p000'];
	// $skvjson = $_POST['skvsjson'];
	$nu = "ok";
	
	// //create
	// if ($table == 'skvs' && $whatdo == 'create'){
	// 	$query="INSERT INTO ".$name_base.".".$table." VALUES ( NULL, '".$p000."' , '".$skvjson."' ); ";
	// 	$result=mysqli_query($dbc,$query) or die(mysqli_sqlstate($dbc));
	// 	echo $result;}
	
	//read all
	if ( $whatdo == 'read'){
		$query="SELECT * FROM ".$name_base.".".$table." WHERE (".$x_id_top."<=".(int)$start_time." AND ".$x_id_bot.">=".(int)$start_time.") OR (".$x_id_top."<=".(int)$end_time." AND ".$x_id_bot.">=".(int)$end_time.") OR (".$x_id_top."<=".(int)$start_time." AND ".$x_id_bot.">=".(int)$end_time.") OR (".$x_id_top.">=".(int)$start_time." AND ".$x_id_bot."<=".(int)$end_time.") ORDER BY type, top, numb;";
		$result=mysqli_query($dbc,$query) or die(mysqli_sqlstate($dbc));
		$comment = array();
		while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
			//echo $row[$x_id]." - ".$row[$y_id]."<br />";
			//$cur_rec['Wkp'] = $row['Wkp'];

			$cur_rec= array('type' => $row['type'],'top' => $row['top'],
							'bot' => $row['bot'],'code' => $row['code'],
							'proc' => $row['proc'],'numb' => $row['numb']);
			array_push($comment, $cur_rec);
			}
		mysqli_free_result($result);
		
		echo json_encode($comment);}


	//read all
	if ( $whatdo == 'read_last'){
		$query="SELECT * FROM ".$name_base.".".$table." WHERE ".$x_id.">".(int)$start_time." AND ".$x_id."< SELECT MAX('Zaboj') FROM ".$name_base.";";
		$result=mysqli_query($dbc,$query) or die(mysqli_sqlstate($dbc));
		$comment = array();
		while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
			//echo $row[$x_id]." - ".$row[$y_id]."<br />";
			$cur_rec= array('p000'=>'par'.$row['id'], 'skvjson'=> $row['skvjson']);
			//$cur_rec['Wkp'] = $row['Wkp'];

			$cur_rec= array('Vrema' => $row['Vrema'],'Wkp' => $row['Wkp'],'Wdol' => $row['Wdol'],'Mpot' => $row['Mpot'],
			'Npot' => $row['Npot'],'Pbx' => $row['Pbx'],'Qbx' => $row['Qbx'],'Talblok' => $row['Talblok'],
			'Zaboj' => $row['Zaboj'],'Instr' => $row['Instr'],'C1C5' => $row['C1C5'],'C1' => $row['C1'],
			'Xn1' => $row['Xn1'],'Xn2' => $row['Xn2'],'Potok' => $row['Potok'],'Tbix' => $row['Tbix'],
			'V1' => $row['V1'],'V2' => $row['V2'],'V3' => $row['V3'],'V4' => $row['V4'],
			'Dmk' => $row['Dmk'],'Vbur' => $row['Vbur'],'Xn3' => $row['Xn3'],'V5' => $row['V5'],
			'V6' => $row['V6'],'C2' => $row['C2'],'C3' => $row['C3'],'C4' => $row['C4'],
			'C5' => $row['C5'],'Kalcid' => $row['Kalcid'],'Dolomit' => $row['Dolomit'],'C1sh' => $row['C1sh'],
			'C2sh' => $row['C2sh'],'C3sh' => $row['C3sh'],'C4sh' => $row['C4sh'],'C5sh' => $row['C5sh'],
			'C1C5sh' => $row['C1C5sh'],'Minbx' => $row['Minbx'],'Minbix' => $row['Minbix'],
			'Vdol' => $row['Vdol'],'Vobj' => $row['Vobj'],'Vinstr' => $row['Vinstr']);
			array_push($comment, $cur_rec);
			}
		mysqli_free_result($result);
		
		echo json_encode($comment);}

	
    mysqli_close($dbc);
		
?>