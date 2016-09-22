(function() {
	function Room($firebaseArray) {
		var ref = firebase.database().ref();
	}

	angular
		.module('chit')
		.factory('Room', ['$firebaseArray', Room]);
})();
