import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './containers/App';
import configureStore from './store/configure-store'
import './index.css';

const store = configureStore()

export default class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
