(function() {
	function Room($firebaseArray) {
		// var ref = firebase.database().ref()
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);

		return {
			all: rooms
		};
	}

	angular
		.module('chit')
		.factory('Room', ['$firebaseArray', Room]);
})();
