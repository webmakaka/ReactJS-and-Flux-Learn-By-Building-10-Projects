var AppActions = require('../actions/AppActions');



module.exports = {
    addNote: function(note){
        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/stickypad1/collections/notes?apiKey=YOUR_API_KEY",
            data: JSON.stringify(note),
            type: "POST",
            contentType: "application/json"
        });
    },

    getNotes: function(){
        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/stickypad1/collections/notes?apiKey=YOUR_API_KEY",
            dataTye: 'json',
            cache: false,
            success: function(data){
                AppActions.receiveNotes(data);
            }.bind(this),
            error: function(xhr, status, err){
                console.log(err);
            }.bind(this)
        });
    }

};
