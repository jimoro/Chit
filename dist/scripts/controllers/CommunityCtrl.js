(function() {
	function CommunityCtrl(Fixtures) {
		this.rooms = Fixtures.getCommunity(12);
	}

	angular
		.module('chit')
		.controller('CommunityCtrl', ['Fixtures', CommunityCtrl]);
})();
