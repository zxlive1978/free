<?php
	$dbc= mysqli_connect('127.0.0.1', 'goodman', 'NRywfHcXEmzenn7S') or
		die(mysqli_sqlstate($dbc));
	
	$code_page="SET NAMES 'utf8';";
	mysqli_query($dbc,$code_page) or
		die(mysqli_sqlstate($dbc));

	$name_base="pozitron";
	$xy_value110d=array();
	
	$table="skvs";
	$p000 = $_GET['p000'];
	$skvjson = $_GET['skvsjson'];
	$nu = "ok";
	


	$query="SELECT * FROM ".$name_base.".".$table." WHERE ".$x_id.">".(int)$start_time." AND ".$x_id."<".(int)$end_time.";";
	#echo $table;
	$result=mysqli_query($dbc,$query) or die(mysqli_sqlstate($dbc));
	//echo mysqli_sqlstate($dbc);
	// echo $_POST['email'];
	//echo $result;
	
	$xy_value110d = array();
	
	echo json_encode($nu);
    mysqli_close($dbc);
		
?>