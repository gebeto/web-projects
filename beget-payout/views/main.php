<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Admin</title>

    <!-- Bootstrap Core CSS -->
    <link href="/static/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="/static/css/metisMenu.min.css" rel="stylesheet">

    <!-- Timeline CSS -->
    <link href="/static/css/timeline.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="/static/css/startmin.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="/static/css/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="/static/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- jQuery -->
    <script src="/static/js/jquery.min.js"></script>
</head>
<body>

<div id="wrapper">

    <!-- Navigation -->
    <?php include_once ROOT.'/views/nav.php'; ?>

    <!-- Page Content -->
    <div id="page-wrapper">
        <div class="container-fluid">
            <?php include ROOT . $content; ?>
        </div>
    </div>

</div>

<!-- Bootstrap Core JavaScript -->
<script src="/static/js/bootstrap.min.js"></script>

<!-- Metis Menu Plugin JavaScript -->
<script src="/static/js/metisMenu.min.js"></script>

<!-- Custom Theme JavaScript -->
<script src="/static/js/startmin.js"></script>

</body>
</html>
