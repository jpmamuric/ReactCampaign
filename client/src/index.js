import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { Provider }                     from 'react-redux';
import { composeWithDevTools }          from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import Thunk                            from 'redux-thunk';
import reducers                         from './redux/reducers';

import './index.css';
import App from './react/components/App';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(Thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root')
);

// registerServiceWorker();
