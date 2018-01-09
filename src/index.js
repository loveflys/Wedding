import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import demo from './demo/demo';
import happy from './photos/happy';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker';
const customHistory = createBrowserHistory()


ReactDOM.render((
<Router history={customHistory}>
  <Route path="/">
    
    <Route path="/us" component={happy}/>
  </Route>
</Router>), document.getElementById('root'));
registerServiceWorker();
