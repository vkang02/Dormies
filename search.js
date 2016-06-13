/*global angular */

var mySearch = angular.module('searchBar', []);
    
mySearch.controller('search', function ($scope) {
    "use strict";
    $scope.widget = {title: 'What would you like to search?'};
});