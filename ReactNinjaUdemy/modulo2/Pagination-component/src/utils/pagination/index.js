'use strict'

const pagination = ({total = 1, activePage = 1, visiblePages = 3} = {}) => {
  if (typeof total !== 'number') {
    throw new TypeError('total should be a number')
  }
  if (typeof activePage !== 'number') {
    throw new TypeError('activePage should be a number')
  }
  if (typeof visiblePages !== 'number') {
    throw new TypeError('visiblePages should be a number')
  }

  const halfVisiblePages = Math.floor(visiblePages / 2)
    // get the minimum and maximum values
  const startHalfVisible = activePage - halfVisiblePages
  const endHalfVisible = activePage + halfVisiblePages
    // get the amounts in start which are less than 1
  const startVisibleResidual = startHalfVisible < 1
                        ? (startHalfVisible * -1) + 1
                        : 0
    // get the amounts in end who passes the total
  const endVisibleResidual = endHalfVisible > total
                        ? endHalfVisible - total
                        : 0
    // get the start of values in middle
  const startVisible = startHalfVisible - endVisibleResidual > 0
                    ? startHalfVisible - endVisibleResidual
                    : 1
    // get the end of values in middle
  const endVisible = endHalfVisible + startVisibleResidual <= total
                    ? endHalfVisible + startVisibleResidual
                    : total

  let pages = []

  // iterate to create the middle points of pages
  for (let index = startVisible; index <= endVisible; index++) {
    pages.push(index)
  }

  // Add the fist page if does't have
  if (startVisible !== 1) {
    // Add dots or 2º index
    if (startVisible > 3) {
      pages.unshift('...')
    } else if (startVisible > 2) {
      pages.unshift(2)
    }
    pages.unshift(1)
  }

  // Add the last page if does't have
  if (endVisible !== total) {
    // Add dots or the penultimate
    if (endVisible < total - 2) {
      pages.push('...')
    } else if (endVisible < total - 1) {
      pages.push(total - 1)
    }
    pages.push(total)
  }

  return pages
}

export default pagination
