(function() {
    function HomeCtrl(Fixtures) {
    	this.rooms = Fixtures.getCommunity();
	}

    angular
        .module('chit')
        .controller('HomeCtrl', ['Fixtures', HomeCtrl]);
})();
