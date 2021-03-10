import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import cn from 'classnames'

import RakutenTVLogo from '../RakutenTVLogo/RakutenTVLogo'

import classes from './header.module.scss'

const Header = () => {
  const location = useLocation()

  const isTrailerPage = location.pathname.indexOf('/trailer') !== -1
  return (
    <div className={cn(classes.header, {[classes.hide]: isTrailerPage})}>
      <Link to="/" className={classes.navLogo}>
        <RakutenTVLogo fillColor="#fff" />
      </Link>
    </div>
  )
}

export default Header