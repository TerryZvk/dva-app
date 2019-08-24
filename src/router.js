import React from 'react';
import { Router, Route, Switch } from 'dva/router'
import App from './routes/App'
import Topic from './routes/Topic'
import Topics from './routes/Topics'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <App>
        <Switch>
          <Route path="/" exact component={Topics} />
          <Route path="/topic/:id" exact component={Topic} />
        </Switch>
      </App>
    </Router>
  );
}

export default RouterConfig
