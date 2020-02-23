import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import Reports from './components/Reports';
import Progression from './components/Progression';
import register from './components/register';
const routing = (
    <Router>
        <div>
            <Route exact path='/' component={App}/>
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={SignIn} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/analytics' component={Reports} />
            <Route path='/progress' component={Progression}/>
            <Route path='/register' component={register} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
