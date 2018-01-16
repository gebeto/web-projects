<?php

include_once ROOT.'/models/Login.php';

class LoginController {

    public function actionIndex() {
        if (isset($_POST['submit'])) {
            $res = DB::select("SELECT id, username, MD5(MD5(CONCAT(username, password))) as cookie FROM users WHERE username=:login AND password=:password LIMIT 1;", array(
                'login' => $_POST['login'],
                'password' => $_POST['password']
            ));
            if ($res) {
                setcookie('AUTHORIZED', $res[0]['cookie']);
                setcookie('USERNAME', $res[0]['username']);
                setcookie('USERID', $res[0]['id']);
                header('Location: /');
                return true;
            }
        }

        $content = '/views/login.php';
        require_once ROOT.'/views/main.php';
        return true;
    }

    public function actionLogin($user, $pass='') {
        Login::loginUser($user, $pass);
        return true;
    }

    public function actionLogout() {
        setcookie('AUTHORIZED', null, -1);
        setcookie('USERNAME', null, -1);
        setcookie('USERID', null, -1);
        header('Location: /');
        return true;
    }

}

