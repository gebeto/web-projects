<?php

include_once ROOT.'/models/Settings.php';

class SettingsController {

    public function actionIndex() {
        if (isset($_POST['pass_old'], $_POST['pass_new'])) {
            Settings::setPassword($_POST['pass_old'], $_POST['pass_new']);
        }
        $content = '/views/settings.php';
        require_once ROOT.'/views/main.php';
        return true;
    }

}