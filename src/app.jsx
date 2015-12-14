import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, History } from 'react-router';
import DefaultLayout from './layouts/Default';
import Cabins from './pages/Cabins';
import Cabin from './pages/Cabin';
import AltContainer from 'alt-container';
import About from './pages/About';
import { createHistory, useBasename } from 'history';
import AuthenticationStore from './stores/AuthenticationStore';
import historyHash from 'history/lib/createHashHistory';
import Home from './pages/Home';

var requireAuth = function(nextState, replaceState){
    console.log("requireAuth isLoggedIn: " + AuthenticationStore.getState().isLoggedIn);
    if (!AuthenticationStore.getState().isLoggedIn)
        replaceState({ nextPathname: nextState.location.pathname }, '/')
}

ReactDOM.render(
           <Router history={historyHash({queryKey:false})} >
                 <Route path="/" component={DefaultLayout}>
                    <IndexRoute component={Home} />
                    <Route path="/cabins" component={Cabins} onEnter={requireAuth} />
                    <Route  path="/cabins/:cabinId" component={Cabin} onEnter={requireAuth} /> 
                    <Route path="/about" component={About} />
                    <Route path="*" component={Home} />
                 </Route>
            </Router>   
, document.getElementById('myComponent')
);