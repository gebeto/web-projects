<?php

include_once ROOT.'/models/Profile.php';


class ProfileController
{

    public function actionIndex() {
        $res = DB::checkAuth();
        if (!$res) {
            header('Location: /login');
            return true;
        }
        $content = '/views/profile.php';
        require_once ROOT.'/views/main.php';
        return true;
    }

    public function actionUser($user_id) {
        // echo 'USER PROFILE ' . $user_id;
        $referals = Profile::getReferals($user_id);
        $income = Profile::getIncome($user_id);

        $content = '/views/profile.php';
        require_once ROOT.'/views/main.php';
        return true;
    }
    
}