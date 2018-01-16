<?php
$isadm = DB::select('SELECT administrator from users where id=:id limit 1', array('id' => $_COOKIE['USERID']));
if (count($isadm) && $isadm[0]['administrator']): 
?>

<div class="row">
    <div class="col-lg-12">
        <h1 class="page-header">Доля</h1>
    </div>
        
    <div class="col-md-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                <i class="fa fa-bar-chart-o fa-fw"></i> Доля
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
                            <th class="text-center">Username</th>
                            <th class="text-center">Fraction</th>
                        </tr>
                    </thead>
                    <tbody class="fractions-list">
                        <?php foreach ($fractions as $fraction): ?>
                            <tr>
                                <td><a href="/profile/<?=$fraction['id']?>"><?=$fraction['username']?></td>
                                <td>
                                    <form>
                                        <input value="<?=$fraction['id']?>" type="hidden" name="id">
                                        <input value="<?=$fraction['fraction']?>" type="number" name="fraction">
                                        <input class="btn btn-xs btn-primary" type="submit" name="submit" value="Сохранить">
                                    </form>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
            <!-- /.panel-body -->
        </div>
    </div>
    <script type="text/javascript">
        jQuery('.fractions-list form').on('submit', function(e) {
            e.preventDefault();
            var btn = e.target.querySelector('input[name="submit"]');
            var fraction = e.target.querySelector('input[name="fraction"]');
            var id = e.target.querySelector('input[name="id"]');
            btn.className = 'btn btn-xs btn-info';
            $.ajax({
                url: 'fractions/update',
                method: 'POST',
                data: {
                    id: id.value,
                    fraction: fraction.value,
                },
                success: function(resp) {
                    console.log(resp);
                    btn.className = 'btn btn-xs btn-success';
                },
                error: function(err) {
                    console.log(err);
                    btn.className = 'btn btn-xs btn-error';
                }
            });
        });
    </script>
</div>

<?php endif ?>