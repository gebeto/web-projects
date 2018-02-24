<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fonts</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <div class="col-md-12">
            <div class="row">
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Preview</th>
                            <th>Font .ttf</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach (glob('*.ttf') as $font): ?>
                            <tr>
                                <td>
                                    <a target="_blank" href="..?font=<?=$font?>">
                                        <img width="200" src="..?font=<?=$font?>" alt="<?=$font?>">
                                        <?=$font?>
                                    </a>
                                </td>
                                <td>
                                    <a target="_blank" href="<?=$font?>"><?=$font?></a>
                                </td>
                            </tr>
                        <?php endforeach?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>
</html>