<div class="row">
    <div class="col-lg-12">
        <h1 class="page-header">Зароботок</h1>
    </div>

    <div class="col-lg-3 col-md-6">
        <div class="panel panel-green">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-3">
                        <i class="fa fa-money fa-2x"></i>
                    </div>
                    <div class="col-xs-9 text-right">
                        <div class="huge"><?=round($income['full_sum'], 2)?>$</div>
                        <div>Все время</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-3">
                        <i class="fa fa-money fa-2x"></i>
                    </div>
                    <div class="col-xs-9 text-right">
                        <div class="huge"><?=round($income['month_sum'], 2)?>$</div>
                        <div>Этот месяц</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6">
        <div class="panel panel-yellow">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-3">
                        <i class="fa fa-money fa-2x"></i>
                    </div>
                    <div class="col-xs-9 text-right">
                        <div class="huge"><?=round($income['week_sum'], 2)?>$</div>
                        <div>Эта неделя</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6">
        <div class="panel panel-red">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-3">
                        <i class="fa fa-money fa-2x"></i>
                    </div>
                    <div class="col-xs-9 text-right">
                        <div class="huge"><?=round($income['day_sum'], 2)?>$</div>
                        <div>Этот день</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    <div class="col-md-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                <i class="fa fa-bar-chart-o fa-fw"></i> Рефералы (<?=count($referals)?>)
                <div class="pull-right">
                    <!-- <div class="btn-group">
                        <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">Actions<span class="caret"></span></button>
                        <ul class="dropdown-menu pull-right" role="menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div> -->
                </div>
            </div>
            <!-- /.panel-heading -->
            <div class="panel-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Пользователь</th>
                            <th>Все время</th>
                            <th>Месяц</th>
                            <th>Неделя</th>
                            <!-- <th>Привели</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <!-- <tr>
                            <td><a href="/profile/2">child</a></td>
                            <td>1000.20₽</td>
                            <td>100.99₽</td>
                            <td>25.06₽</td>
                        </tr> -->
                    <?php foreach ($referals as $referal): ?>
                        <tr>
                            <td><a href="/profile/<?=$referal['id']?>"><?=$referal['username']?></a></td>
                            <td><?=round($referal['full_sum'], 2)?>$</td>
                            <td><?=round($referal['month_sum'], 2)?>$</td>
                            <td><?=round($referal['week_sum'], 2)?>$</td>
                            <!-- <td>👤</td> -->
                        </tr>
                    <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
            <!-- /.panel-body -->
        </div>
    </div>

</div>

