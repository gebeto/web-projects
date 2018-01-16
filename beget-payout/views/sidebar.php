<div class="navbar-default sidebar" role="navigation">
  <div class="sidebar-nav navbar-collapse">

    <ul class="nav" id="side-menu">
      <!-- <li><a href="/" class="active"><i class="fa fa-user fa-fw"></i> Профиль</a></li> -->
      <li><a href="/" class="active"><i class="fa fa-dashboard fa-fw"></i> Главная</a></li>
      <li><a href="/conversion" class="active"><i class="fa fa-table fa-fw"></i> Конверсия</a></li>
      <?php
      $isadm = DB::select('SELECT administrator from users where id=:id limit 1', array('id' => $_COOKIE['USERID']));
      if (count($isadm) && $isadm[0]['administrator']): 
      ?>
        <li><a href="/fractions" class="active"><i class="fa fa-percent fa-fw"></i> Доля</a></li>
      <?php endif ?>
      <li><a href="/settings" class="active"><i class="fa fa-cog fa-fw"></i> Настройки</a></li>
      <!-- <li>
        <a href="#"><i class="fa fa-sitemap fa-fw"></i> Multi-Level Dropdown<span class="fa arrow"></span></a>
        <ul class="nav nav-second-level">
          <li><a href="#">Second Level Item</a></li>
          <li><a href="#">Third Level</a></li>
        </ul>
      </li> -->
    </ul>

  </div>
</div>