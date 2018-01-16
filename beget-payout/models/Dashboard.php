<?php


class Dashboard {

    public static function getReferals() {
        $result = DB::select("
            SELECT
                u.id,
                u.username,
                IFNULL(sum(l.sum), 0) AS full_sum,
                IFNULL(sum(case when MONTH(l.date)=MONTH(now()) then l.sum else 0 end), 0) AS month_sum,
                IFNULL(sum(case when WEEK(l.date)=WEEK(now()) then l.sum else 0 end), 0) AS week_sum
            FROM users u
                LEFT JOIN log l ON u.id=l.user_id
                LEFT JOIN users pu ON pu.promoter_id=u.id
            WHERE u.promoter_id=:promoter_id
            GROUP BY u.id
        ", array(
            'promoter_id' => $_COOKIE['USERID']
        ));
        return $result;
    }

    public static function getIncome() {
        $result = DB::select("
            SELECT 
                u.id,
                u.username,
                IFNULL(sum(case when u.promoter_id=:id then (l.sum / 100 * u.fraction) else (l.sum / 100 * (100 - u.fraction)) end), 0) AS full_sum,
                IFNULL(sum(case when MONTH(l.date)=MONTH(now()) then (case when u.promoter_id=:id then (l.sum / 100 * u.fraction) else (l.sum / 100 * (100 - u.fraction)) end) else 0 end), 0) AS month_sum,
                IFNULL(sum(case when WEEK(l.date)=WEEK(now()) then (case when u.promoter_id=:id then (l.sum / 100 * u.fraction) else (l.sum / 100 * (100 - u.fraction)) end) else 0 end), 0) AS week_sum,
                IFNULL(sum(case when DATE(l.date)=DATE(now()) then (case when u.promoter_id=:id then (l.sum / 100 * u.fraction) else (l.sum / 100 * (100 - u.fraction)) end) else 0 end), 0) AS day_sum
            FROM users u
                LEFT JOIN log l ON u.id=l.user_id
            WHERE u.id=:id OR u.promoter_id=:id
            GROUP BY u.id or u.promoter_id
        ", array(
            'id' => $_COOKIE['USERID']
        ));
        return $result[0];
    }

}