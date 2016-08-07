var AppDispatcher =  require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {

    saveVideo: function(video){
        // console.log(video);

        AppDispatcher.handleViewAction({
            actionType: AppConstants.SAVE_VIDEO,
            video: video
        });
    }

};


module.exports = AppActions;
