var Firebase = require('firebase');

var AppActions = require('../actions/AppActions');

module.exports = {

    saveVideo: function(video){
        console.log('API Called...');
        this.firebaseRef = new Firebase("https://ytgallery1.firebaseio.com/videos");
        this.firebaseRef.push(video);
    }
};
