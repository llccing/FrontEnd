// 列表
function PhoneListCtrl($scope, $http) {
    // 1.6版本的angularjs 用then、catch 代替了success error
    $http.get('phones/phones.json').then(function (data) {
        console.log(data);
        $scope.phones = data.data;
    });

    $scope.orderProp = 'age';
}

// 详情
function PhoneDetailCtrl($scope, $routerParams, $http) {
    $http.get('phones/phone' + $routerParams.phoneId + '.json').then(function (data) {
        $scope.phone = data.data;
        $scope.mainImgUrl = data.data.images[0];
    }).catch(function (e) {
        console.log(e);
    });

    $scope.setImage = function (imgUrl) {
        $scope.mainImgUrl = imgUrl;
    }
}


var app = angular.module('phonecatApp', []);
app.controller('PhoneListController', PhoneListCtrl);