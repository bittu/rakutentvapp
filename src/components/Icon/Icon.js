import React from 'react'
import { oneOf, string } from 'prop-types'
import cn from 'classnames'

import classes from './icon.module.scss'

export const Icons = {
  ARROW_LEFT: 'arrowLeft',
  ARROW_RIGHT: 'arrowRight',
  PLAY: 'play',
  WISHLIST: 'wishlist',
  PARENTAL: 'parental',
  CALENDAR: 'calendar',
  COUNTRY: 'country',
  INFO: 'info',
  LANGUAGES: 'languages',
  CLAPPER: 'clapper',
  STAR: 'star',
  GENRES: 'genres',
  LEFT_ARROW: 'leftArrow'
}

const IconClasses = {
  [Icons.ARROW_LEFT]: classes.arrowLeft,
  [Icons.ARROW_RIGHT]: classes.arrowRight,
  [Icons.PLAY]: classes.play,
  [Icons.WISHLIST]: classes.wishlist,
  [Icons.PARENTAL]: classes.parental,
  [Icons.CALENDAR]: classes.calendar,
  [Icons.COUNTRY]: classes.country,
  [Icons.INFO]: classes.info,
  [Icons.LANGUAGES]: classes.languages,
  [Icons.CLAPPER]: classes.clapper,
  [Icons.STAR]: classes.star,
  [Icons.GENRES]: classes.genres,
  [Icons.LEFT_ARROW]: classes.leftArrow
}

const Icon = ({ use, className }) => {
  return (
    <span className={cn(classes.icon, IconClasses[use], className)} data-testid="icon"></span>
  )
}

Icon.propTypes = {
  use: oneOf(Object.values(Icons)).isRequired,
  className: string
}

Icon.displayName = 'Icon'
export default Icon