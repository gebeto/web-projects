<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

class DB {
	
	public static $connection;
	public static function connect() {
		$host = 'localhost';
		$user = 'username';
		$pass = 'password';
		$dbname = 'dbname';
		try {
			DB::$connection = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);	
		}	
		catch(PDOException $e) {	
			echo $e->getMessage();
			return;
		}
	}

	public static function select($query, $data = array()) {
		$STH = DB::$connection->prepare($query);
		$STH->setFetchMode(PDO::FETCH_ASSOC);
		$STH->execute($data);
		$res = $STH->fetchAll();
		return $res;
	}
	
	public static function exec($query, $data = array()) {
		$STH = DB::$connection->prepare($query);
		$res = $STH->execute($data);
		return $res;
	}
	
	public static function insert($table_name, $data = array()) {
		$table_keys = array();
		$prepare_keys = array();
		$sql = 'INSERT INTO `';
		$sql .= $table_name . '` (';
		foreach ($data as $key => $value) {
			$table_keys[] = '`' . $key . '`';
			$prepare_keys[] = ':' . $key;
		}
		$sql .= implode(', ', $table_keys);
		$sql .= ') VALUES (';
		$sql .= implode(', ', $prepare_keys);
		$sql .= ');';
		
		DB::exec($sql, $data);
		return '';
	}

	public static function create_table($table_name, $cols=array()) {
		$sql = 'CREATE TABLE `';
		$sql .= $table_name;
		$sql .= '` (';
		$sql .= implode(', ', $cols);
		$sql .= ') ENGINE=InnoDB DEFAULT CHARSET=utf8;';
		DB::exec($sql);
	}

	public static function alter_table($table_name, $action) {
		$sql = 'ALTER TABLE `' . $table_name . '` ' . $action . ';';
		DB::exec($res);
	}

	public static function drop_table($table_name) {
		$sql = 'DROP TABLE `' . $table_name . '`;';
		DB::exec($sql);
	}

}
DB::connect();