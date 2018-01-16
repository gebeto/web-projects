<div class="row">
    <div class="col-lg-12">
        <h1 class="page-header">Конверсия</h1>
    </div>

    <!-- <p class="col-md-12">
        <label for="postbackurl">Ваша Postback ссылка</label>
        <input id="postbackurl" class="form-control" value="http://<?=$_SERVER['HTTP_HOST']?>/postback/<?=$_COOKIE['USERID']?>?cid={cid}&sum={sum}" />
    </p> -->

    <!-- <div class="col-md-4">
        <label for="postbackurl">Процент доли с рефералов</label>
        <form method="POST">
            <div class="form-group input-group">
                <input type="text" class="form-control" name="fraction" value="<?=$fraction?>">
                <span class="input-group-addon">%</span>
                <span class="input-group-btn">
                    <button class="btn btn-default" type="submit"><i class="fa fa-save"></i> Сохранить</button>
                </span>
            </div>
        </form>
    </div> -->

    <!-- <div class="col-lg-4 col-md-4">
        <div class="panel panel-green">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-3">
                        <i class="fa fa-money fa-5x"></i>
                    </div>
                    <div class="col-xs-9 text-right">
                        <div class="huge">10000</div>
                        <div>Все время</div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
        
    <div class="col-md-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                <i class="fa fa-bar-chart-o fa-fw"></i> Конверсия
            </div>
            <!-- /.panel-heading -->
            <div class="panel-body">
                <style type="text/css">
                    table > tbody > tr > td,
                    table > thead > tr > th {
                        text-align: center;
                    }
                </style>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th class="text-center">CID</th>
                            <th class="text-center">SUM</th>
                            <th class="text-center">Дата</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($conversions as $conversion): ?>
                            <tr>
                                <td><?=$conversion['cid']?></td>
                                <td><?=$conversion['sum']?>$</td>
                                <td><?=$conversion['date']?></td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
            <!-- /.panel-body -->
        </div>
    </div>

</div>

