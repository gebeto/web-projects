<?php

include_once ROOT.'/models/Fractions.php';

class FractionsController {
    
    public function actionIndex() {
        if (isset($_POST['fraction'])) {
            Fractions::setFraction($_POST['fraction']);
        }
        $fractions = Fractions::getFractions();
        $content = '/views/fractions.php';
        require_once ROOT.'/views/main.php';
        return true;
    }


    public function actionUpdate() {
        if (isset($_POST['id'], $_POST['fraction'])) {
            Fractions::setFraction($_POST['id'], $_POST['fraction']);
        }
        echo 'HELLO';
        print_r($_POST);
        return true;
    }


}