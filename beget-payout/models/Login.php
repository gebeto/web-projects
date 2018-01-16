<?php


class Login {

    public static function loginUser($login, $password) {
        $result = DB::select('select * from users where username=:login and password=:password', array(
            'login' => $login,
            'password' => $password
        ));
        return $result;
    }

}