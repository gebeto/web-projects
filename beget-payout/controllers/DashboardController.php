<?php

include_once ROOT.'/models/Dashboard.php';

class DashboardController {
    
    public function actionIndex() {
        $referals = Dashboard::getReferals();
        $income = Dashboard::getIncome();
        $content = '/views/dashboard.php';
        require_once ROOT.'/views/main.php';
        return true;
    }

}