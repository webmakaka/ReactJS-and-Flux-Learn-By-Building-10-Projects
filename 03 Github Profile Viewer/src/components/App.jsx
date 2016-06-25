import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: 'marley-react',
            userData: [],
            userRepos: [],
            perPage: 5
        };
    }

    render(){
        return(
            <div>
                {this.props.clientId}
            </div>
        )
    }
}


App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};

App.defaultProps = {
    clientId: 'myClientId',
    clientSecret: 'myClientSecret'
}

export default App
