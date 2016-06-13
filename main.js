/*global angular */

var app = angular.module("mainMod", []);

app.controller("myController", function ($scope) {
    "use strict";
    $scope.title = "Dormies";
});

