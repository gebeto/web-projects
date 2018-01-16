<?php


class Fractions {

    public static function getFractions() {
        $result = DB::select("SELECT * FROM users;", array());
        return $result;
    }

    public static function setFraction($id, $fraction) {
        $result = DB::exec("UPDATE users set fraction=:fraction WHERE id=:id;", array(
            'id' => $id,
            'fraction' => $fraction
        ));
        return true;        
    }

}