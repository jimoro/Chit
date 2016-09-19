(function() {
    function HomeCtrl(Fixtures) {
    //	this.rooms = Fixtures.getCommunity(12);
	}

    angular
        .module('chit')
        .controller('HomeCtrl', ['Fixtures', HomeCtrl]);
})();
