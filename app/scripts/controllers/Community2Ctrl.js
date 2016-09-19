(function() {
	function Community2Ctrl(Fixtures2) {
		this.rooms = Fixtures2.getCommunity(12);
	}

	angular
		.module('chit')
		.controller('Community2Ctrl', ['Fixtures2', Community2Ctrl]);
})();
