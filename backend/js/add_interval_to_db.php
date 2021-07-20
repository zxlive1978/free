<?php
	/* Отладка ошибок */
	ini_set('display_errors',1);
	error_reporting(E_ALL ^E_NOTICE);
	
	$table=$_POST['well_Name'];
	$myFile = $_POST['fileName'];
	$x_id="Vrema";
	
	    echo "Ошибка"; */
		$dir= '../../../mon/poz/readrandom/';//.$myFile;
		// $dirandfile =array_filter(scandir($dir), function($item) {return !is_dir($dir . $item);});
		$files = scandir($dir); 
		$forms = array();
		foreach($files as $file)
		{
    		if(is_file($dir.$file)){
				array_push($forms, $dir.$file);
			}
		}
		echo json_encode($forms);
		$registration = $_POST['registration'];
		$host= $_POST['host'];
		/* echo $registration; */
		/* $output = shell_exec('ls -lart');
		echo "<pre>$output</pre>"; */
		/* $cmd = 'python /var/www/html/mon/poz/assareset.py '.$host;
		$output = passthru($cmd);
		echo $cmd; */
		if ($registration == "suck"){
		 // some action goes here under php
			$cmd = '/usr/bin/python /var/www/html/mon/poz/ubireboot.py '.$host;
			$output = shell_exec($cmd);
			echo $output;
			/* echo var_dump($cmd; */
			/* $output = shell_exec('ls -lart');
			echo "<pre>$output</pre>"; */
		 //echo json_encode(array("abc"=>'successfuly registered'));
		} else{
			echo 'Неверный пароль!';
		}
?>