import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router'
import App from './routes/App'
import dynamic from 'dva/dynamic'
import routes from './utils/routes'
const {ConnectedRouter} = routerRedux
function RouterConfig({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      {
        <App>
          <Switch>
            {
              routes.map(({path, name, ...dynamics}) => 
                <Route path={path} key={name} exact component={dynamic({app, ...dynamics})} />
              )
            }
          </Switch>
        </App> 
      }
    </ConnectedRouter>
  );
}

export default RouterConfig
