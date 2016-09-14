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
            });
        /*    .state('album', {
                url: '/album',
                controller: 'AlbumCtrl as album',
                templateUrl: '/templates/album.html'
            })
            .state('collection', {
                url: '/collection',
                controller: 'CollectionCtrl as collection',
                templateUrl: '/templates/collection.html'
            });
        */
    }

    var app = angular.module("chit", ["firebase"]);
/*
    app.controller("chit", function($scope, $firebaseObject) {
        var ref = firebase.database().ref();
        // download the data into a local object
        $scope.data = $firebaseObject(ref);
    });
*/
    angular
        .module('chit', ['ui.router', 'firebase'])
        .config(config);
})();
