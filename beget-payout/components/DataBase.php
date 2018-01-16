<?php

class DB {
  
  public static $connection;

  public static function connect() {
// U2FsdGVkX180aZnFsrbPB2rW+SVgofL+ydKl7QEr2awxpEjX4+km1XR1wdVDqJzr
// LWT9hFJA1HW7tkMR8dmF+KKeQVFathM+ahYgjsbqwjn9KaU/k2cpZwko0A9/SfbY
// M0RX3v5YIe0ShLXVQzHLJ9OWkstKsX2qHfUxKdu7BLc=

    $host = 'admin';
    $user = 'admin';
    $pass = 'admin';
    $dbname = 'admin';

    try {
      DB::$connection = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);  
    }  
    catch(PDOException $e) {  
        echo $e->getMessage();
        exit();
    }
  }

  public static function select($query, $data) {
    $STH = DB::$connection->prepare($query);
    $STH->setFetchMode(PDO::FETCH_ASSOC);
    $STH->execute($data);
    $res = $STH->fetchAll();
    return $res;
  }

  public static function exec($query, $data) {
    $STH = DB::$connection->prepare($query);
    $res = $STH->execute($data);
    return $res;
  }

  public static function checkAuth() {
    $res = DB::select("SELECT username FROM users WHERE MD5(MD5(CONCAT(username, password)))=:cookie LIMIT 1;", array(
        'cookie' => (isset($_COOKIE['AUTHORIZED']) ? $_COOKIE['AUTHORIZED'] : ''),
    ));
    if ($res) {
      return $res[0];
    }
    return false;
  }

}