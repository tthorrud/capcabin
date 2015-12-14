import React from 'react';
import { Router, Route, Link, IndexRoute, History } from 'react-router';
import DefaultLayout from '../layouts/Default';
import historyHash from 'history/lib/createHashHistory';
import CabinPage from '../pages/CabinPage';
import About from '../pages/About';
import { createHistory, useBasename } from 'history';
import Home from '../pages/Home';

class AppRouter extends React.Component {
    render() {

        var self = this;
        var requireAuth = function(nextState, replaceState){
            console.log("Inni function: "+self.props.isLoggedIn);
            if (!self.props.isLoggedIn)
                replaceState({ nextPathname: nextState.location.pathname }, '/')
            
        }

        console.log("AppRouter sin: "+this.props.isLoggedIn);
        var history = createHistory();

        return (
            <Router history={historyHash({queryKey:false})} >
                <Route path="/" component={DefaultLayout}>
                <IndexRoute component={Home} />
                <Route path="/cabins" component={CabinPage} onEnter={requireAuth} />
                <Route path="/about" component={About} />
                <Route path="*" component={Home} />
            </Route>
            </Router>
    );
                }
}

export default AppRouter;
