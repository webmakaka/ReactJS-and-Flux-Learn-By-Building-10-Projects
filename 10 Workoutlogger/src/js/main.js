var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
var AppAPI = require('./utils/AppAPI.js');
var StartData = require('./startData.js');

if(localStorage.getItem('workouts') == null){
    StartData.init();
}

AppAPI.getWorkouts();

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
