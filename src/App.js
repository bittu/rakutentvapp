import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Loading from './components/Loading/Loading';
import Header from './components/Header/Header';
import { useData } from './contexts/DataContext';
import RouterConfig from './RouterConfig';
import { initApp } from './service/api';

const App = () => {
  const [loading, setLoading] = useState(true)
  const { setData } = useData()

  useEffect(() => {
    initApp()
      .then(data => {
        setData(data)
        setLoading(false)
      })
  }, [])

  return (
    loading ? (
      <Loading />
    ) : (
      <Router>
        <Header />
        <RouterConfig />
      </Router>
    )
  );
};

export default App;