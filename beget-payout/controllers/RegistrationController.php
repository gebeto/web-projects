<?php

include_once ROOT.'/models/Registration.php';

class RegistrationController
{
    
    public function actionIndex() {
        $error_message = false;
        if (isset($_POST['submit'], $_POST['promoter'], $_POST['login'], $_POST['password'])) {
            // $username = DB::select('SELECT id FROM users WHERE username=LOWER(:username);', array(
            //     'username' => $_POST['login'],
            // ));
            // $username = (count($username) ? $username[0] : false);
            $username = Registration::getUsername($_POST['login']);
            if ($username) {
                $error_message = 'Пользователь с таким именем уже зарегестрирован!';
            } else {
                $promoter_id = Registration::getPromoter($_POST['promoter']);
                if (isset($promoter_id)) {
                    Registration::registerUser($_POST['login'], $_POST['password'], $promoter_id);
                    header('Location: /login');
                } else {
                    $error_message = 'Некорректное имя пригласившего!';
                }
            }
        }
        $content = '/views/registration.php';
        require_once ROOT.'/views/main.php';
        return true;
    }
    
}