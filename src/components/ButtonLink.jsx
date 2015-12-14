import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';

class ButtonLink extends React.Component{
    render(){
        return(
            <Link className="mdl-button mdl-js-button mdl-js-ripple-effect btn btn-primary" to={this.props.link}>{this.props.text}</Link>
            );
            }
}

export default ButtonLink;