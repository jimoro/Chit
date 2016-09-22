(function() {
    function HomeCtrl(Fixtures, $firebaseArray, $uibModal) {  // removed "Fixtures, "
    	// this.rooms = Fixtures.getCommunity();
    	var $ctrl = this;


		var ref = firebase.database().ref().child("rooms");
		  // create a synchronized array
		  // click on `index.html` above to see it used in the DOM!
		this.rooms = $firebaseArray(ref);


//		this.rooms.$add({roomName: "TRMS"}); // functional test for adding a room


		window.foo = this.rooms;

		$ctrl.open = function () {
			console.log("Open was clicked")
			var modalInstance = $uibModal.open({
			  templateUrl: 'myModalContent.html',
			});
		};

	}

    angular
        .module('chit')
        .controller('HomeCtrl', ['Fixtures', '$firebaseArray', '$uibModal', HomeCtrl]);  // Removed "'Fixtures',"
})();
