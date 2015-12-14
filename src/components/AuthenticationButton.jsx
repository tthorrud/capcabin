import React from 'react';
import AuthenticationActions from '../actions/AuthenticationActions';

class AuthenticationButton extends React.Component{
    render(){
        var loggedIn = this.props.loggedIn;
        console.log("AAuthbutton sin: "+ loggedIn);

        if(!loggedIn){
            return(
                   <a className="loginbutton" onClick={this.logIn} >Login</a>
                );
        }
        else{
            return(
                   <a className="loginbutton" onClick={this.logOut} >Log out</a>
                );
        }
        }

        logIn(){
            AuthenticationActions.logIn();
        }

        logOut(){
            AuthenticationActions.logOut();
        }
}

export default AuthenticationButton;