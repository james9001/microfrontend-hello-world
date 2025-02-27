import React from 'react';
import HelloReactApp from './components/HelloReactApp';
import { Route, Switch, Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import HelloVueApp from './components/HelloVueApp';
import HelloAngularIonicApp from './components/HelloAngularIonicApp';

const history = createBrowserHistory();

const Header = () => (
    <div>
        <Link to='/'>home</Link><br />
        <Link to='/react'>use react</Link><br />
        <Link to='/vue'>use vue</Link><br />
        <Link to='/angularionic'>use angularionic</Link>
    </div >
)

export default () => {
    return (
        <Router history={history}>
            <Header />
            <hr />
            <Switch>
                <Route path='/angularionic' component={HelloAngularIonicApp} />
                <Route path='/vue' component={HelloVueApp} />
                <Route path='/' component={HelloReactApp} />
            </Switch>
        </Router>
    )
}