import React, { Fragment } from 'react'
import { string } from 'prop-types'
import { Link } from 'react-router-dom'

import classes from './artwork.module.scss'

const Artwork = ({ src, title, link }) => {

  function wrapContainer(children) {
    if (link) {
      return <Link className={classes.artwork} to={link} data-testid="artwork-link">{children}</Link>
    }
    return (
      <div className={classes.artwork}>
        {children}
      </div>
    )
  }

  return (
    wrapContainer((
      <Fragment>
        <img
          alt={title}
          className={classes.artwork}
          src={src}
          title={title}
        />
        <span className={classes.title}>{title}</span>
      </Fragment>
    ))
  )
}

Artwork.propTypes = {
  src: string.isRequired,
  title: string.isRequired,
  link: string
}

Artwork.displayName = 'Artwork'
export default Artwork