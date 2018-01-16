<div class="row">
    <div class="col-lg-12">
        <h1 class="page-header">Регистрация</h1>
    </div>
    <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
            <div class="panel-heading">
                Регистрация
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <form role="form" method="POST">
                            <div class="form-group input-group">
                                <span class="input-group-addon"></span>
                                <input type="text" name="login" class="form-control" placeholder="Логин" autocomplete="off">
                            </div>
                            <div class="form-group input-group">
                                <span class="input-group-addon"></span>
                                <input type="password" name="password" class="form-control" placeholder="Пароль" autocomplete="off">
                            </div>
                            <div class="form-group input-group">
                                <span class="input-group-addon"></span>
                                <input type="text" name="promoter" class="form-control" placeholder="Пригласивший" autocomplete="off">
                            </div>
                            <?php if ($error_message): ?>
                                <div class="has-error"><label class="control-label" for=""><?=$error_message?></label></div>
                            <?php endif; ?>
                            <button type="submit" name="submit" class="btn btn-primary">Зарегестрироватся</button>
                            <a class="pull-right" href="/login">Авторизация</a>
                        </form>
                    </div>
                    <!-- /.col-lg-6 (nested) -->
                </div>
                <!-- /.row (nested) -->
            </div>
            <!-- /.panel-body -->
        </div>
        <!-- /.panel -->
    </div>
</div>

