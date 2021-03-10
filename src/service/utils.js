export function debounce(func, wait, immediate) {
	let timeout;
	return function() {
		const context = this, args = arguments;
		const later = () => {
			timeout = null;
			if (!immediate) { func.apply(context, args); }
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) { func.apply(context, args); }
	}
}

const frameRateMilli = Number(1000 / 60)
const raf = (cb) => window.requestAnimationFrame(cb) || window.setTimeout(cb, frameRateMilli)
// const caf = (id) => window.cancelAnimationFrame(id) || window.clearTimeout(id)

export function easeInOutQuad(time, start, change, duration) {
  let timeDMilli = time
  timeDMilli /= duration / 2
  if (timeDMilli < 1) {
    return change / 2 * timeDMilli * timeDMilli + start
  }
  timeDMilli--
  return -change / 2 * (timeDMilli * (timeDMilli - 2) - 1) + start
}

export function scrollTo(element, to, duration = 300, direction = 'scrollLeft', callback) {
  const start = element[direction]
  const change = to - start
  const frameRate = frameRateMilli
  const framesLength = Math.ceil(duration / frameRate)
  const frames = [...Array(framesLength)].map((_, index) =>
    easeInOutQuad(frameRate * index, start, change, duration))
  let currentTimeMilli = 0

  const animateScroll = () => {
    currentTimeMilli += frameRate
    if (duration === 0) {
      element[direction] = to
      callback && callback()
    } else if (currentTimeMilli < duration) {
      element[direction] = frames.shift()
      raf(animateScroll)
    } else {
      callback && callback()
    }
  }
  animateScroll()
}