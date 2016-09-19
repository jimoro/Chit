(function() {
    function HomeCtrl(Fixtures, $firebaseArray) {
    	// this.rooms = Fixtures.getCommunity();


		var ref = firebase.database().ref().child("rooms");
		  // create a synchronized array
		  // click on `index.html` above to see it used in the DOM!
		this.rooms = $firebaseArray(ref);


		window.foo = this.rooms
	}

    angular
        .module('chit')
        .controller('HomeCtrl', ['Fixtures','$firebaseArray', HomeCtrl]);
})();
