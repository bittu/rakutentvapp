import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import MoviePage from './pages/MoviePage'
import HomePage from './pages/HomePage'
import TrailerPage from './pages/TrailerPage'

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
        key="trailerRoute"
        path="/movie/:id/trailer"
        exact
      >
        <TrailerPage />
      </Route>
      <Route
        key="movieRoute"
        path="/movie/:id"
        exact
      >
        <MoviePage />
      </Route>
      <Route render={() => <Redirect to='/' />} />
    </Switch>
  )
}

export default RouterConfig