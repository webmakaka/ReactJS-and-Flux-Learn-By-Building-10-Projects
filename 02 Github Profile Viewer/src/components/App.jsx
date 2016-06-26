import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: 'marley-react',
            userData: [],
            userRepos: [],
            perPage: 10
        };
    }

    // Get user data from github
    getUserData(){
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({userData: data});
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({
                    username: null
                });
                alert(err);
            }.bind(this)
        });
    }


    // Get user repos
    getUserRepos(){
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page=' + this.state.perPage + '&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret + '&sort=created',
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({userRepos : data});
                console.log(data);
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({
                    username: null
                });
                alert(err);
            }.bind(this)
        });
    }

    handleFormSubmit(username){
        this.setState({username: username}, function(){
            this.getUserData();
            this.getUserRepos();
        });
    }

    componentDidMount(){
        this.getUserData();
        this.getUserRepos();
    }

    render(){
        return(
            <div>
                <Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
                <Profile {...this.state} />
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
