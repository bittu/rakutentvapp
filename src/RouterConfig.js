import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import DetailPage from './pages/DetailPage'
import HomePage from './pages/HomePage'

const RouterConfig = () => {
  return (
    <Switch>
      <Route
        key="indexRoute"
        path="/"
        exact
      >
        <HomePage />
      </Route>
      <Route
        key="detailRoute"
        path="/detail/:id"
        exact
      >
        <DetailPage />
      </Route>
      <Route render={() => <Redirect to='/' />} />
    </Switch>
  )
}

export default RouterConfig