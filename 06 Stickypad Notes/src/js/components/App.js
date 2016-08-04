var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddNoteForm = require('./AddNoteForm.js');


function getAppState(){
    return {
        notes: AppStore.getNotes()
    };
}


var App = React.createClass ({


    getInitialState: function(){
        return getAppState();
    },

    componentDidMount: function(){
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function(){
        AppStore.removeChangeListener(this._onChange);
    },

    render: function(){
        console.log(this.state.notes);
        return(
            <div className="off-canvas-wrapper">
              <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
                <div className="off-canvas position-left reveal-for-large" data-off-canvas data-position="left">
                  <div className="row column">
                    <br />
                    <AddNoteForm />
                  </div>
                </div>
                <div className="off-canvas-content" data-off-canvas-content>
                  // NOTELIST
                </div>
              </div>
            </div>
        )
    },

    _onChange: function(){
        this.setState(getAppState());
    }
});

module.exports = App;
