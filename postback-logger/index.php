<?php
include 'db.php';

$offset = '';
if (isset($_GET['page'])) {
	$offset = ' offset ' . (($_GET['page'] - 1) * 100);
}

$data = DB_select('select * from `log` order by `id` desc limit 100' . $offset . ';', array());

function nextPage() {
	if (isset($_GET['page'])) {
		return $_GET['page'] + 1;
	}
	return 2;
}

function prevPage() {
	if (isset($_GET['page'])) {
		return $_GET['page'] - 1;
	}
	return '';
}

function currPage() {
	if (isset($_GET['page'])) {
		return $_GET['page'];
	}
	return '1';
}
?>


<!DOCTYPE html>
<html>
<head>
	<title>Log</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap-theme.min.css">
</head>
<body>

<div class="container">
	<div class="row">
		<div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3">
			<h1 class="text-center">LOG</h1>
			<table class="table table-striped">
				<thead>
					<tr>
						<th class="text-center">CID</th>
						<th class="text-center">Sum</th>
						<th class="text-center">Дата</th>
					</tr>
				</thead>
				<tbody>
					<?php
						foreach ($data as $key => $dat) {
							echo '<tr>';
							echo '<td class="text-center">' . $dat['cid'] . '</td>';
							echo '<td class="text-center">' . round($dat['sum'] / 3 * 2, 2) . '</td>';
							echo '<td class="text-center">' . $dat['time'] . '</td>';
							echo '</tr>';
						}
					?>
				</tbody>
			</table>
			<div style="text-align: center;">
				<?php
					$pp = prevPage();
					if ($pp > 0) {
						echo '<a href="?page=' . $pp . '"> &lt; ' . $pp . ' </a>';
					}
				?>
				|
				<span><?=currPage()?></span>
				|
				<a href="?page=<?=nextPage()?>"> <?=nextPage()?> &gt; </a>
			</div>
		</div>
	</div>
</div>

</body>
</html>