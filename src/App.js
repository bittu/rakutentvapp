import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Loading from './components/Loading/Loading';
import Header from './components/Header/Header';
import { DataContext, useData } from './contexts/DataContext';
import RouterConfig from './RouterConfig';
import { initApp } from './service/api';

class App extends Component {

  state = {
    loading: true
  }

  componentDidMount() {
    initApp()
      .then(data => {
        this.context.setData(data)
        this.setState({
          loading: false
        })
      })
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    const {
      loading,
      hasError
    } = this.state

    return (
      loading ? (
        <Loading />
      ) : hasError ? (
        <div className="error">
          <span>Oops! Something went wrong!</span>
          <span>Damn gerbils have stopped running again! Someone has been dispatched to poke them with a sharp stick.</span>
        </div>
      ) : (
        <Router>
          <Header />
          <RouterConfig />
        </Router>
      )
    );
  }
}

App.contextType = DataContext
export default App;