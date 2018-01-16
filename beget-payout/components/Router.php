<?php

class Router {
    private $routes;

    public function __construct() {
        $this->routes = include(ROOT.'/configs/routes.php');
    }

    private function getURI() {
        if (!empty($_SERVER['REDIRECT_URL'])) {
            return trim($_SERVER['REDIRECT_URL'], '/');
        } elseif (isset($_COOKIE['AUTHORIZED'])) {
            return 'index';
        } else {
            // header('Location: /login');
            return 'login';
            // exit();
        }
    }

    public function run() {
        $url = $this->getURI();

        if (!DB::checkAuth() && $url != 'login' && $url != 'registration') {
            header('Location: /login');
        }

        foreach ($this->routes as $pattern => $path) {
            if (preg_match("~^$pattern$~", $url)) {
                $internalRoute = preg_replace("~^$pattern~", $path, $url);

                $segments = explode('/', $internalRoute);
                $controllerName = ucfirst(array_shift($segments).'Controller');
                $actionName = 'action'.ucfirst(array_shift($segments));

                $controllerFile = ROOT.'/controllers/'.$controllerName.'.php';
                if (file_exists($controllerFile)) {
                    include_once $controllerFile;
                }

                $controllerObject = new $controllerName();
                $result = call_user_func_array(array($controllerObject, $actionName), $segments);
                // $result = $controllerObject->$actionName($segments);
                if ($result != null) {
                    break;
                }
            }
        }
    }
}