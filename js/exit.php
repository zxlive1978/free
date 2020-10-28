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
	$p000 = $_POST['p000'];

	
	$login_ = $_SESSION['login'];
	
	//create
	if ($table == 'skvs' && $whatdo == 'create'){
		$query="INSERT INTO ".$name_base.".".$table." VALUES ( NULL, '".$p000."' , '".$skvjson."' ); ";
		$result=mysqli_query($dbc,$query) or die(mysqli_sqlstate($dbc));
		echo $result;}
	

	//read all
	if ($table == 'skvs' && $whatdo == 'read'){
		$query="SELECT * FROM ".$name_base.".".$table.";";
		$result=mysqli_query($dbc,$query) or die(mysqli_sqlstate($dbc));
		$comment = array();
		while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
			//echo $row[$x_id]." - ".$row[$y_id]."<br />";
			$cur_rec= array('p000'=>'par'.$row['id'], 'skvjson'=> $row['skvjson']);
			//$cur_rec['Wkp'] = $row['Wkp'];
			array_push($comment, $cur_rec);
			}
		mysqli_free_result($result);
		
		echo json_encode($comment);}

	
	//update
	if ($table == 'skvs' && $whatdo == 'update'){
		$query="UPDATE ".$name_base.".".$table." SET p000='par".$p000."', skvjson='".$skvjson."' WHERE id=".$p000.";";
		$result=mysqli_query($dbc,$query) or die(mysqli_sqlstate($dbc));
		echo $result;}
	
	//delete 
	if ($table == 'skvs' && $whatdo == 'delete'){
		$query="DELETE  FROM  ".$name_base.".".$table." WHERE id=".$p000.";";
		$result=mysqli_query($dbc,$query) or die(mysqli_sqlstate($dbc));
		echo $result;}

    //session out
    if ($table == 'exit' && $whatdo == 'exit'){
		echo $table;
    session_unset(); 
	session_destroy();
	$retexit=1;
	echo $retexit;
	}
	//echo json_encode($nu);
    mysqli_close($dbc);
		
?>