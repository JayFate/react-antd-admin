import ReactDOM from 'react-dom';
import './styles/index.less';
import store from './stores';
// react-redux 的使用
// https://juejin.cn/post/7096780506976485383
// https://juejin.cn/post/6844903885090324487
import { Provider } from 'react-redux';
import App from './App';
import './mock';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
