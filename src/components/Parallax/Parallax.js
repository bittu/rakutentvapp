import React, { useEffect, useRef } from 'react'
import { node, number, string } from 'prop-types'

import classes from './parallax.module.scss'

const Parallax = ({ src, children, threshold = .2 }) => {
  const ref = useRef()
  function parallax() {
    if (ref && ref.current) {
      const yOffset = window.pageYOffset
      const range = yOffset * threshold;
      if (range > 0 && yOffset > 0) {
        const bgPos = 'center ' + range + 'px';
        ref.current.style.backgroundPosition = bgPos
      } else {
        ref.current.style.backgroundPosition = 'center top'
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", parallax)
    return () => {
      window.removeEventListener('scroll', parallax)
    }
  // eslint-disable-next-line react-app/react-hooks/exhaustive-deps
  }, [])

  return (
    <div ref={ref} style={{backgroundImage: `url(${src})`}} className={classes.parallax} data-testid="parallax">
      {children}
    </div>
  )
}

Parallax.propTypes = {
  src: string.isRequired,
  children: node,
  threshold: number
}

export default Parallax