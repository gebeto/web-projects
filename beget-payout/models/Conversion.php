<?php


class Conversion {

    public static function getConversion() {
        $result = DB::select("
            SELECT 
                l.*,
                u.username as cid,
                (case when u.promoter_id=:id then (l.sum / 100 * u.fraction) else (l.sum / 100 * (100 - u.fraction)) end) as sum
            FROM log l
            LEFT JOIN users u
                ON l.user_id=u.id
            WHERE 
                l.user_id=:id
                OR
                u.promoter_id=:id
            ORDER BY l.date DESC
            ;", array(
            'id' => $_COOKIE['USERID']
        ));
        return $result;
    }

    public static function getFractionPercent() {
        $result = DB::select("SELECT fraction FROM users WHERE id=:id;", array(
            'id' => $_COOKIE['USERID']
        ));
        return ($result ? $result[0]['fraction'] : false);
    }

    public static function setFraction($fraction) {
        $result = DB::exec("UPDATE users set fraction=:fraction WHERE id=:id;", array(
            'id' => $_COOKIE['USERID'],
            'fraction' => $fraction
        ));
        return true;        
    }

}