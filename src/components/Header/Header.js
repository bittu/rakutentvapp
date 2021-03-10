import React from 'react'
import { Link } from 'react-router-dom'
import RakutenTVLogo from '../RakutenTVLogo/RakutenTVLogo'

import classes from './header.module.scss'

const Header = () => {
  return (
    <div className={classes.header}>
      <Link to="/" className={classes.navLogo}>
        <RakutenTVLogo fillColor="#fff" />
      </Link>
    </div>
  )
}

export default Header