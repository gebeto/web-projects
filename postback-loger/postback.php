<?php

include 'db.php';

if (isset($_GET['sum']) && isset($_GET['cid'])) {

	DB_exec('INSERT INTO `log`
	    (`id`, `cid`, `sum`, `time`) 
	  VALUES
	    (NULL, :cid, :sum, CURRENT_TIMESTAMP);'
	, array(
		'cid' => $_GET['cid'],
		'sum' => $_GET['sum']
	));

}