var Firebase = require('firebase');

var AppActions = require('../actions/AppActions');

module.exports = {

    saveVideo: function(video){
        // console.log('API Called...');
        this.firebaseRef = new Firebase("https://ytgallery1.firebaseio.com/videos");
        this.firebaseRef.push(video);
    },

    getvideos: function(){
        this.firebaseRef = new Firebase("https://ytgallery1.firebaseio.com/videos");
        this.firebaseRef.once("value", function(snapshot){

            var videos = [];
            snapshot.forEach(function(childSnapshot){
                // console.log(childSnapshot.val());

                var video = {
                    id: childSnapshot.key(),
                    title: childSnapshot.val().title,
                    video_id: childSnapshot.val().video_id,
                    description: childSnapshot.val().description
                };



                videos.push(video);

                AppActions.receiveVideos(videos);

            });

            console.log(snapshot);
        });
    }
};
