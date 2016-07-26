angular.module('starterapp', ['ui.router','ngMaterial'])

.config(function($stateProvider, $urlRouterProvider, $mdIconProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'modules/home/home.html'
    });
    /* Add New States Above */
    
    $mdIconProvider.defaultFontSet( 'fa' );

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');
})

.run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
