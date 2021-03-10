import React from 'react'
import ReactDOM from "react-dom";

import { DataProvider as Provider } from './contexts/DataContext'
import App from "./App";

import './index.scss'

const renderApp = Component => {
  return (
    ReactDOM.render(
      <Provider>
        <Component />
      </Provider>,
      document.getElementById('root')
    )
  )
}

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    renderApp(NextApp);
  });
}

renderApp(App);