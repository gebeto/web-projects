<?php
include_once 'components/DataBase.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);
DB::connect();


if (isset($_GET['sum']) && isset($_GET['cid'])) {
    $res = DB::exec('
    INSERT INTO `log`
        (`sum`, `user_id`)
      VALUES
        (:sum, (select id from users where users.username=:cid));'
    , array(
        'cid' => $_GET['cid'],
        'sum' => $_GET['sum']
    ));
}

echo 'OK';


