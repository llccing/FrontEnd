angular.module('phonecatApp', []).config(['$routerProvider'], function ($routerProvider) {
    $routerProvider.when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: PhoneListCtrl
    }).when('/phones/:phoneId', {
        templateUrl: 'partials/phone-details.html',
        controller: PhoneDetailCtrl
    }).otherWise({redirectTo: '/phones'})
});

angular.module('phonecat', ['phonecatFilters']);