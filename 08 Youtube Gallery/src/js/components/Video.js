var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Video = React.createClass ({

    render: function(){

        var link = "https://www.youtube.com/embed/" + this.props.video.video_id;

        return(
            <div className="c4">
                <h5>{this.props.video.title} <span clssName="delete"><a onClick={this.onDelete.bind(this, this.props.video.id)} href="#">X</a></span></h5>
                <iframe width="360" height="285" src={link} frameborder="0" allowfullscreen></iframe>
                <p>{this.props.video.description}</p>
            </div>
        );
    },

    onDelete: function(i, j){
        AppActions.removeVideo(i);
    }

});

module.exports = Video;
