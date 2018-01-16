<?php if(isset($_COOKIE['AUTHORIZED']) && DB::checkAuth()): ?>

<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
  <div class="navbar-header">
      <a class="navbar-brand" href="#">Arrste Panel</a>
  </div>

  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
  </button>

  <!-- Top Navigation: Left Menu -->
  <ul class="nav navbar-nav navbar-left navbar-top-links">
      <li><a href="http://secondtruth.github.io/startmin/pages/index.html" target="_blank"><i class="fa fa-home fa-fw"></i> Website</a></li>
  </ul>

  <!-- Top Navigation: Right Menu -->
  <ul class="nav navbar-right navbar-top-links">
      <!-- <li class="dropdown navbar-inverse">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
            <i class="fa fa-bell fa-fw"></i> <b class="caret"></b>
        </a>
        <ul class="dropdown-menu dropdown-alerts">
            <li><a href="#">
              <div>
                <i class="fa fa-comment fa-fw"></i> New Comment
                <span class="pull-right text-muted small">4 minutes ago</span>
              </div>
            </a></li>
            <li class="divider"></li>
            <li><a class="text-center" href="#"><strong>See All Alerts</strong><i class="fa fa-angle-right"></i></a></li>
        </ul>
      </li> -->
      <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
            <i class="fa fa-user fa-fw"></i> <?=$_COOKIE['USERNAME']?> <b class="caret"></b>
        </a>
        <ul class="dropdown-menu dropdown-user">
            <li><a href="/"><i class="fa fa-user fa-fw"></i> User Profile</a></li>
            <!-- <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a></li> -->
            <li class="divider"></li>
            <li><a href="/logout"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
            </li>
        </ul>
      </li>
  </ul>

  <!-- Sidebar -->
  <?php include 'sidebar.php' ?>
</nav>

<?php endif; ?>