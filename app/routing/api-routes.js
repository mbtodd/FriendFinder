// A GET route with the url /api/friends. 
// 	This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. 
// 	This will be used to handle incoming survey results. 
// 	This route will also be used to handle the compatibility logic.

//These routes for our data. Help determine data user sees and data can post



var friendsData = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    });


    app.post('/api/friends', function (req, res) {
        // if(friendsData.length<5) {
        friendsData.push(req.body);
        res.json(true);
        // }
    });

}





//  var friends = require("../data/friends.js");

// module.exports = function (app) {

//     app.get("/api/friends", function (req, res) {
//         res.json(friends);
//     });

//     app.post("/api/friends", function (req, res) {

//         var bestMatch = {
//             name: "",
//             photo: "",
//             friendDifference: 1000
//         };

//         console.log(req.body);

//         var userData = req.body;
//         var userScores = userData.scores;

//         console.log(userScores);

//         var totalDifference = 0;

//         for (var i = 0; i < friends.length; i++) {
//             console.log(friends[i]);
//             totalDifference = 0;

//             for (var i = 0; i < friends[i].scores[i]; i++) {
//                 totalDifference += Math.abs(parseInt(userScores[i]) - parseInt(friends[i].scores[i]));
//                 if (totalDifference <= bestMatch.friendDifference) {
//                     bestMatch.name = friends[i].name;
//                     bestMatch.photo = friends[i].photo;
//                     bestMatch.friendDifference = friends[i].totalDifference;
//                 }

//             }

//         }

//         friends.push(userData);
//         res.json(bestMatch);
//     });

// } 