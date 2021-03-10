import React from 'react'
import { bool, string } from 'prop-types'
import cn from 'classnames'

import classes from './cast.module.scss'

const Cast = ({ src, name, isDirector, className }) => {
  return (
    <div className={cn(classes.cast, className)} data-testid="cast">
      <img className={classes.castImage} alt={name} src={src} />
      <div className={classes.castName}>{name}</div>
      {isDirector && (
        <div className={classes.director}>Director</div>
      )}
    </div>
  )
}

Cast.propTypes = {
  src: string.isRequired,
  name: string.isRequired,
  isDirector: bool,
  className: string
}

Cast.displayName = "Cast"
export default Cast