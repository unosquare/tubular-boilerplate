angular.module('app', ['ngRoute', 'tubular'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', { templateUrl: 'partials/grid.html', })
            .when('/grideditor', { templateUrl: 'partials/grideditor.html', })
            .when('/form', { templateUrl: 'partials/form.html', })
            .otherwise({ redirectTo: '/' });
}]);