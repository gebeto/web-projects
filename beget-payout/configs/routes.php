<?php

return array(
    'index' => 'dashboard/index',

    'profile' => 'profile/index',
    'profile/([0-9]+)' => 'profile/user/$1',

    'conversion' => 'conversion/index',

    'fractions' => 'fractions/index',
    'fractions/update' => 'fractions/update',

    'settings' => 'settings/index',

    'postback/([a-zA-Z0-9]+)' => 'postback/postback',

    'login' => 'login/index',
    'logout' => 'login/logout',

    'registration' => 'registration/index',
);