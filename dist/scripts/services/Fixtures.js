(function() {
    function Fixtures() {
        var Fixtures = {};

        var rooms = [
            {
		        roomName: 'Breaking Bad Room',
		        messages: [
		    	    { userName: 'Walter White', msgText: "What's my name?", timeStamp: '2:38 pm'},
		    	    { userName: 'Jesse Pinkman', msgText: "Yo, Mr. White!", timeStamp: '4:13 pm'},
		    	    { userName: 'Saul Goodman', msgText: "Better call Saul.", timeStamp: '1:49 am'}
		        ]
		    },
            
            {
		        roomName: 'Stranger Things Room',
		        messages: [
		    	    { userName: 'Chief Hopper', msgText: "Let's make a deal.", timeStamp: '11:58 pm'},
		    	    { userName: 'Martin Brenner', msgText: "Going down?", timeStamp: '11:59 pm'},
		    	    { userName: 'Jane Ives', msgText: "It isn't safe.", timeStamp: '10:40 am'}
		        ]
		    },

            {
                roomName: 'Horace and Pete Room',
                messages: [
                    { userName: 'Horace Wittel', msgText: "Why do you want to talk about this?", timeStamp: '11:58 pm'},
                    { userName: 'Pete Wittel', msgText: "This one's on the house.", timeStamp: '11:59 pm'},
                    { userName: 'Sylvia Wittel', msgText: "We need to have this conversation.", timeStamp: '10:40 am'}
                ]
            }

        ];

		Fixtures.getRoom = function() {
        	return rooms;
    	};

    	Fixtures.getCommunity = function() {
    		// var rooms = [];
    		//for (var i = 0; i < rooms.length; i++) {
    		//	rooms.push(this.getRoom());
    		// }
    		return rooms;
    	};

        return Fixtures;
    }
 
    angular
        .module('chit')
        .factory('Fixtures', Fixtures);
})();
