<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$response = null;
$ids = null;

class Stickers
{
    public $pack_id;
    public $sticker_ids;
    public $response;
    
    public function __construct()
    {
        if (isset($_GET['id'])) {
            $this->pack_id = $_GET['id'];
            return true;
        }
        $this->pack_id = fread(fopen('id.txt', 'r'), filesize('id.txt'));
        if ($this->fetch_stickers($this->pack_id + 1)) {
            fwrite(fopen('id.txt', 'w'), $this->pack_id + 1);
        } else {
            $this->fetch_stickers($this->pack_id);
        }
    }
    
    public function draw_stickers() {
        foreach ($this->sticker_ids as $id) {
            echo "<a target=\"_blank\" href=\"http://vk.com/images/stickers/{$id}/512.png\"><img src=\"http://vk.com/images/stickers/{$id}/64.png\"></a>";
        }
    }
    
    function fetch_stickers($pid) {
        $token = 'ACCESS_TOKEN';
        $url = "https://api.vk.com/method/store.getStockItems?product_ids={$pid}&type=stickers&v=5.64&access_token={$token}";
        $this->response = json_decode(file_get_contents($url))->response;
        if ($this->response->count > 0) {
            $this->sticker_ids = $this->response->items[0]->product->stickers->sticker_ids;
            // draw_stickers_by_ids($response->response->items[0]->product->stickers->sticker_ids);
            // echo json_encode($response);
            return true;
        } else {
            return false;
        }
    }
    
}

$sticker_pack = new Stickers();
// print_r($sticker_pack->sticker_ids);

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?=$sticker_pack->response->items[0]->product->title?></title>
</head>
<body>
    
    <?="<h1>{$sticker_pack->response->items[0]->product->title}</h1>"?>
    <?="<h1>ID {$sticker_pack->response->items[0]->product->id}</h1>"?>
    <? $sticker_pack->draw_stickers(); ?>
    
</body>
</html>