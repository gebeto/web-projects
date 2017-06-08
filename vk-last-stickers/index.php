<?php

// error_reporting(E_ALL);
// ini_set('display_errors', 1);

$response = null;
$ids = null;

class Stickers
{
	public $pack_id;
	public $sticker_ids;
	public $response;
	
	public function __construct($pack_id)
	{
		if ($pack_id <= 0) {
			$this->pack_id = fread(fopen('id.txt', 'r'), filesize('id.txt'));
			if ($this->fetch_stickers($this->pack_id + 1)) {
					fwrite(fopen('id.txt', 'w'), $this->pack_id + 1);
			} else {
					$this->fetch_stickers($this->pack_id);
			}
		} else {
			$this->pack_id = $pack_id;
			if ($this->fetch_stickers($this->pack_id)) {
				
			} else {
				$this->pack_id = 1;
				$this->fetch_stickers($this->pack_id);
			}
		}
	}
	
	public function draw_stickers() {
		foreach ($this->sticker_ids as $id) {
			if ($this->pack_id == 103) {
				echo "<a onclick=\"download(this)\" class=\"col-md-1 col-sm-2 col-xs-3\" target=\"_blank\" href=\"http://vk.com/images/stickers/{$id}/512.png\"><img src=\"http://vk.com/images/stickers/{$id}/64.png\"></a>";
			} else {
				echo "<a onclick=\"download(this)\" class=\"col-md-1 col-sm-2 col-xs-3\" target=\"_blank\" href=\"http://vk.com/images/stickers/{$id}/512.png\"><img src=\"http://vk.com/images/stickers/{$id}/64b.png\"></a>";
			}
		}
	}
	
	function fetch_stickers($pid) {
		$token = 'ff21c2380cb1a11e0d12810112fa73409089dc8d07edc3a15857634ab490d7e6f7ab5ef6b8af6dd39c347';
		$url = "https://api.vk.com/method/store.getStockItems?product_ids={$pid}&type=stickers&v=5.64&access_token={$token}";
		$this->response = json_decode(file_get_contents($url))->response;
		if ($this->response->count > 0) {
				$this->sticker_ids = $this->response->items[0]->product->stickers->sticker_ids;
				return true;
		} else {
				return false;
		}
	}
		
}

$pack_id = 0;
if (isset($_GET['id'])) {
	$pack_id = $_GET['id'];
}

$sticker_pack = new Stickers($pack_id);

?>

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title><?=$sticker_pack->response->items[0]->product->title?></title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
	<style type="text/css">
		body {
			background: url("<?=$sticker_pack->response->items[0]->background?>");
			/*background-size: cover;*/
		}
		a.navbar-brand {
			padding: 5px;
		}
	</style>
</head>
<body>

	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<a class="navbar-brand" href="#">
					<img width="40" src="<?=$sticker_pack->response->items[0]->photo_70?>">
				</a>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li class="active">
						<a href="#"><?=$sticker_pack->response->items[0]->product->title ?></a>
					</li>
				</ul>
				<form class="navbar-form navbar-left">
					<div class="form-group">
						<input name="id" type="number" class="form-control" placeholder="ID" value="<?=$sticker_pack->response->items[0]->product->id ?>">
					</div>
					<button type="submit" class="btn btn-default">Submit</button>
				</form>
			</div><!-- /.navbar-collapse -->
		</div><!-- /.container-fluid -->
	</nav>

	<div class="container">
			<div class="row">
					<? $sticker_pack->draw_stickers(); ?>
			</div>
	</div>

	<script type="text/javascript">
		function download() {
			console.log(this);
			return false;
		}
	</script>
		
</body>
</html>