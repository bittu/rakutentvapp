import React from 'react'
import { func, string } from 'prop-types'

import Icon from '../Icon/Icon'

import classes from './actionbutton.module.scss'

const ActionButton = ({ text, onClick, icon }) => {
  return (
    <button onClick={onClick} className={classes.actionbutton} data-testid="action-button">
      {icon && (
        <Icon use={icon} className={classes.icon} />
      )}
      <span className={classes.text}>{text}</span>
    </button>
  )
}

ActionButton.propTypes = {
  text: string.isRequired,
  onClick: func.isRequired,
  icon: string
}

ActionButton.displayName = 'ActionButton'
export default ActionButton