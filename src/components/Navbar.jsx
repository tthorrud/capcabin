import React from 'react';
import {Link} from 'react-router';
import AuthenticationButton from './AuthenticationButton';

class Navbar extends React.Component {

    render() {
        return(
         <nav className="navbar navbar-default">
      <div className="container-fluid">
          <div className="navbar-header ">
              <button type="button" className="navbar-toggle collapsed btn btn-primary " data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span>menu</span>
              </button>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <div className="col-md-2"></div>
              <ul className="nav navbar-nav col-md-8 col-sm-12">
                  <li><Link to={"/"}>Home</Link></li>
                  <li><Link to={"/about"}> About </Link></li>
                  {this.props.isLoggedIn ? <li key="1"><Link to={"/cabins"}> Cabins </Link></li> : null}
                  <li><AuthenticationButton loggedIn={this.props.isLoggedIn} /></li>
              </ul>
                      <div className="col-md-2"></div>
          </div>
      </div>
         </nav>
            );
                  }
}

export default Navbar;

