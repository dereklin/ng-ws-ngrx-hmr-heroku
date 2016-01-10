angular.module('learn', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('learn').config(function($stateProvider) {

    $stateProvider.state('shopping-bag', {
        url: '/learn/shopping-bag',
        templateUrl: 'learn/partial/shopping-bag/shopping-bag.html'
    });
    
    $stateProvider.state('scrollable-table', {
        url: '/scrollable-table',
        templateUrl: 'learn/partial/scrollable-table/scrollable-table.html'
    });
    $stateProvider.state('learn-filter', {
        url: '/learn/filter',
        templateUrl: 'learn/partial/learn-filter/learn-filter.html'
    });
    /* Add New States Above */

});

