function PhoneListCtrl($scope,$http){
    // $http.get('phones.json').success(function(data){
    //     $scope.phones = data;
    // });
    $scope.phones = [
 {
  "age": 11,
  "id": "motorola-defy-with-qwe",
  "name": "678567 DEFY\u2122 with MOTOBLUR\u2122",
  "snippet": "Are you ready for everything life throws your way?"
 },
{
  "age":12,
  "id": "motorola-defy-with-11",
  "name": "1123 DEFY\u2122 with MOTOBLUR\u2122",
  "snippet": "Are you ready for everything life throws your way?"
 },{
  "age": 13,
  "id": "motorola-defy-with-434",
  "name": "9089098 DEFY\u2122 with MOTOBLUR\u2122",
  "snippet": "Are you ready for everything life throws your way?"
 }
];
    $scope.orderProp = 'age';
}

var app = angular.module('phonecatApp',[]);
app.controller('PhoneListController',PhoneListCtrl);