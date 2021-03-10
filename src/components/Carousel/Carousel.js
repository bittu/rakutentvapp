import React, { Component } from 'react'
import cn from 'classnames'
import {
  string,
  bool,
  node,
  arrayOf,
} from 'prop-types';

import classes from './Carousel.module.scss';
import Icon, { Icons } from '../Icon/Icon';
import { debounce, scrollTo } from '../../service/utils';

export const CarouselItem = ({children, className}) => (
  <li className={className}>
    {children}
  </li>
)

CarouselItem.propTypes = {
  children: node.isRequired,
  className: string
}

export class Carousel extends Component {
  state = {
    elementWidth: 0,
    carouselWidth: 0,
    visibleWidth: 0,
    minimumPosition: 0,
    maximumPosition: 0,
    showLeftButton: false,
    showRightButton: false
  }

  componentDidMount() {
    // Listening to the resize event, to recalculate scroll positions and widths.
    if (!this.props.disable) {
      window.addEventListener('resize', this.resizeEvent)
    }
    if (!!this.props.children.length && this.carouselElement.firstChild) {
      const calculatedState = this.recalculateState()

      this.setState(
        calculatedState
      )

      this.carouselScrollTo(calculatedState.minimumPosition, 'auto')
    }
  }

  componentWillUnmount() {
    if (!this.props.disable) {
      window.removeEventListener('resize', this.resizeEvent)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.triggerStateUpdate) {
      this.triggerStateUpdate = false
      this.setState(
        this.recalculateState()
      )
    } else {
      const currChildren = prevProps.children || []
      const nextChildren = this.props.children || []
      if (nextChildren.length !== currChildren.length) {
        this.triggerStateUpdate = true
      }
    }
  }

  moveToClickEvent(direction) {
    const {
      visibleWidth
    } = this.state;
    const newPosition = this.carouselElement.scrollLeft + (
      direction === 'left' ? -visibleWidth : visibleWidth
    )
    this.moveTo(newPosition)
  }

  moveTo(newPosition) {
    // Short time-out to deal with the browser needing to recalculate positions
    setTimeout(() => {
      this.carouselScrollTo(newPosition, 'smooth')
    }, 10)
  }

  recalculateState() {
    const elementWidth = this.carouselElement.firstChild.getBoundingClientRect().width,
      visibleWidth = this.carouselElement.offsetWidth,
      carouselWidth = this.props.type === 'menu' ? this.carouselElement.scrollWidth : this.props.children.length * elementWidth,
      lastChildRightEdge = this.carouselElement.lastChild.getBoundingClientRect().right,
      visibleRightEdge = this.carouselElement.getBoundingClientRect().right,
      showLeftButton = !!this.carouselElement.scrollLeft,
      showRightButton = (visibleRightEdge < lastChildRightEdge),
      minimumPosition = 0,
      maximumPosition = this.carouselElement.scrollWidth

    return {
      elementWidth,
      carouselWidth,
      visibleWidth,
      minimumPosition,
      maximumPosition,
      showLeftButton,
      showRightButton
    }
  }

  resizeEvent = debounce(() => {
    this.setState(
      this.recalculateState()
    )
  }, 100)

  carouselScrollTo(position, behavior) {
    if (this.carouselElement) {
      if (typeof this.carouselElement.scrollTo !== 'undefined' &&
          'scrollBehavior' in document.documentElement.style) {
        this.carouselElement.scrollTo({
          left: position,
          behavior
        })
      } else {
        scrollTo(this.carouselElement, position, 300)
      }
    }
  }

  scrollEvent = () => {
    if (!this.props.disable) {
      const {
        maximumPosition,
        minimumPosition,
        visibleWidth
      } = this.state;
      const curPos = this.carouselElement.scrollLeft

      const hideButtonAfter = (maximumPosition - visibleWidth)
      this.setState({
        showLeftButton: (curPos > minimumPosition),
        showRightButton: (curPos < hideButtonAfter)
      })
    }
  }

  render() {
    const {
      disable,
      lightTheme,
      className
    } = this.props;
    const {
      showLeftButton,
      showRightButton
    } = this.state;

    return (
      <div className={cn(classes.carousel, className)} data-testid="carousel">
        {showLeftButton && !disable &&
          <button
            className={cn(classes['left-button'], {
              [classes.light]: lightTheme
            })}
            onClick={this.moveToClickEvent.bind(this, 'left')}
          ><Icon use={Icons.ARROW_LEFT} /></button>
        }
        <ul ref={r => this.carouselElement = r } onScroll={this.scrollEvent}>
          {this.props.children}
        </ul>
        {showRightButton && !disable &&
          <button
            className={cn(classes['right-button'], {
              [classes.light]: lightTheme
            })}
            onClick={this.moveToClickEvent.bind(this, 'right')}
          ><Icon use={Icons.ARROW_RIGHT} /></button>
        }
      </div>
    )
  }
}

Carousel.propTypes = {
  children: arrayOf(CarouselItem).isRequired,
  className: string,
  disable: bool,
  lightTheme: bool
}

Carousel.defaultProps = {
  children: []
}

Carousel.displayName = 'Carousel'