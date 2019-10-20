'use strict'

const reduce = (arr, func, start) => {
    let accumulated = start !== undefined ? start : arr[0]
    for(let i = start !== undefined ? 0 : 1; i < arr.length; i++) {
        accumulated = func(accumulated, arr[i], i, arr)
    }
    return accumulated
}

export default reduce