import React from 'react';
import AuthenticationStore from '../stores/AuthenticationStore';
import AltContainer from 'alt-container';
import { Router, Route, Link, IndexRoute } from 'react-router';
import Navbar from '../components/Navbar';


class DefaultLayout extends React.Component{
    render() {
        return (
          <div id="container">
             <AltContainer store={AuthenticationStore}>
                     <Navbar />
             </AltContainer>

                     <section id="content" className="page-wrap">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 col-xs-12 mainContent">
                        {this.props.children}
                    </div> 
                    <div className="col-md-2"></div>
                     </section>
          </div>
    );
    }

}

export default DefaultLayout;