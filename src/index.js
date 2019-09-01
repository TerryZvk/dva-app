import dva from 'dva';
import './index.css';
import { createBrowserHistory } from 'history';
import createLoading from 'dva-loading';
import { message } from 'antd'
import RouterConfig from './router'
// 1. Initialize
const app = dva({
  history: createBrowserHistory(),
  onError(err) {
    message.error(err.message)
  },
});

// 2. Plugins
app.use(createLoading());

// 3. Model
// app.model(appModels);

// 4. Router
app.router(RouterConfig);

// 5. Start
app.start('#root');
