(function() {
    function Fixtures() {
        var Fixtures = {};

        var room1 = {
		    roomName: 'Room 1',
		    messages: [
		    	{ userName: 'Walter White', msgText: "What's my name?", timeStamp: '2:38 pm', roomId: 'room1'},
		    	{ userName: 'Jesse Pinkman', msgText: "Yo, Mr. White!", timeStamp: '4:13 pm', roomId: 'room1'},
		    	{ userName: 'Saul Goodman', msgText: "Better call Saul.", timeStamp: '1:49 am', roomId: 'room1'}
		    ]
		};

		var room2 = {
		    roomName: 'Room 2',
		    messages: [
		    	{ userName: 'Chief Hopper', msgText: "Let's make a deal.", timeStamp: '11:58 pm', roomId: 'room2'},
		    	{ userName: 'Martin Brenner', msgText: "Going down?", timeStamp: '11:59 pm', roomId: 'room2'},
		    	{ userName: 'Jane Ives', msgText: "It isn't safe.", timeStamp: '10:40 am', roomId: 'room2'}
		    ]
		};


		Fixtures.getRoom = function() {
        	return room1;
    	};

    	Fixtures.getCommunity = function(numberOfRooms) {
    		var rooms = [];
    		for (var i = 0; i < numberOfRooms; i++) {
    			rooms.push(this.getRoom());
    		}
    		return rooms;
    	};

        return Fixtures;
    }
 
    angular
        .module('chit')
        .factory('Fixtures', Fixtures);
})();
