import React from 'react';
import { Router, Route, Switch } from 'dva/router'
import App from './routes/App'
import Topic from './routes/Topic'
import Topics from './routes/Topics'
import Login from './routes/Login'
function RouterConfig({ history }) {
  console.log(history)
  
  return (
    <Router history={history}>
      {
        history.location.pathname === '/login' ? <Route path="/login" exact component={Login} /> :
        <App>
          <Switch>
            <Route path="/" exact component={Topics} />
            <Route path="/topic/:id" exact component={Topic} />
          </Switch>
        </App> 
      }
    </Router>
  );
}

export default RouterConfig
