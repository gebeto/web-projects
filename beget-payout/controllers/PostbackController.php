<?php

// $myfile = fopen("log.txt", "w") or die("Unable to open file!");
// $txt = json_encode($_REQUEST);
// fwrite($myfile, $txt);
// fclose($myfile);

class PostbackController {

    public function actionPostback() {
        if (isset($_GET['sum']) && isset($_GET['cid'])) {
            $res = DB::exec('INSERT INTO `log`
                (`cid`, `sum`, `user_id`)
              VALUES
                (:cid, :sum, :user_id);'
            , array(
                'cid' => $_GET['cid'],
                'sum' => $_GET['sum'],
                'user_id' => $_GET['cid']
            ));
        }
        return true;
    }

}

