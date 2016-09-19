(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
            .state('room', {
                url: '/room',
                controller: 'RoomCtrl as room',
                templateUrl: '/templates/room.html'
            })
            .state('community', {
                url: '/community',
                controller: 'CommunityCtrl as community',
                templateUrl: '/templates/community.html'
            });
        
    }

    var app = angular.module("chit", ["firebase"]);

    app.controller("chit", function($scope, $firebaseObject) {
        var ref = firebase.database().ref();
        // download the data into a local object
        $scope.data = $firebaseObject(ref);
    });

    angular
        .module('chit', ['ui.router']) //Removed , 'firebase' after ui.router
        .config(config);
})();
