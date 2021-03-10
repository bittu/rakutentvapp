import React from 'react'

import classes from './loading.module.scss'

const Loading = () => {
  return (
    <div className={classes.loading} data-testid="loading"></div>
  )
}

Loading.displayName = 'Loading'
export default Loading