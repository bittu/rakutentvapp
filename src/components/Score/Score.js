import { number, string } from 'prop-types'
import React, { Fragment } from 'react'

import classes from './score.module.scss'

const Score = ({ percentage, link, label, title }) => {

  function wrapContainer(children) {
    if (link) {
      return (
        <a href={link} target="_blank" rel="noreferrer" className={classes.score}>
          {children}
        </a>
      )
    }
    return (
      <div className={classes.score}>
        {children}
      </div>
    )
  }

  const appliedRadius = 50;
  const appliedStroke = 8;

  const normalizedRadius = appliedRadius - appliedStroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    wrapContainer(
      <Fragment>
        <svg height={appliedRadius * 2} width={appliedRadius * 2} data-testid="score-svg">
          <circle
            className={classes.circleBg}
            strokeWidth={appliedStroke}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={appliedRadius}
            cy={appliedRadius}
          />
          <circle
            className={classes.circle}
            strokeWidth={appliedStroke}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={appliedRadius}
            cy={appliedRadius}
          />
          <text x="50%" y="50%" textAnchor="middle" dy=".3em" className={classes.label}>{label || percentage}</text>
        </svg>
        <div className={classes.title}>{title}</div>
      </Fragment>
    )
  )
}

Score.propTypes = {
  percentage: number.isRequired,
  link: string,
  label: string,
  title: string
}

Score.displayName = 'Score'
export default Score