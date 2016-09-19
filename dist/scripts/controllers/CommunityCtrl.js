(function() {
	function CommunityCtrl(Fixtures) {
		this.rooms = Fixtures.getCommunity();
	}

	angular
		.module('chit')
		.controller('CommunityCtrl', ['Fixtures', CommunityCtrl]);
})();
