<?php


class Settings {

    public static function setPassword($old, $new) {
        $result = DB::exec('UPDATE users set password=:new where password=:old and id=:id;', array(
            'old' => $old,
            'new' => $new,
            'id' => $_COOKIE['USERID']
        ));
        return $result;
    }

}