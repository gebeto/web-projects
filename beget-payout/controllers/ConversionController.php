<?php

include_once ROOT.'/models/Conversion.php';

class ConversionController {
    
    public function actionIndex() {
        if (isset($_POST['fraction'])) {
            Conversion::setFraction($_POST['fraction']);
        }
        $conversions = Conversion::getConversion();
        $fraction = Conversion::getFractionPercent();
        $content = '/views/conversion.php';
        require_once ROOT.'/views/main.php';
        return true;
    }

}