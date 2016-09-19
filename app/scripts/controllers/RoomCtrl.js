(function() {
	function RoomCtrl(Fixtures) {
		this.roomData = Fixtures.getRoom();
		this.msgViewer = msgViewer;


	}

	angular
		.module('chit')
		.controller('RoomCtrl', ['Fixtures', RoomCtrl]);
})();
