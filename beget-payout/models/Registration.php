<?php


class Registration {
    
    public static function registerUser($login, $password, $promoter_id) {
        DB::exec('INSERT INTO users (`username`, `password`, `promoter_id`) VALUES (:username, :password, :promoter)', array(
            'username' => $login,
            'password' => $password,
            'promoter' => $promoter_id
        ));
    }

    public static function getUsername($username) {
        $username = DB::select('SELECT id FROM users WHERE username=LOWER(:username);', array(
            'username' => $username,
        ));
        $username = (count($username) ? $username[0] : false);
        return $username;
    }

    public static function getPromoter($username) {
        $promoter = DB::select('SELECT id FROM users WHERE username=LOWER(:username);', array(
            'username' => $username,
        ));
        $promoter = (count($promoter) ? $promoter[0] : false);
        return $promoter['id'];
    }

}
