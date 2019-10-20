'use strict'

const reduce = (arr, func, start) => {
    const hasStart = start !== undefined,
          [startCopy, ...arrCopy] = hasStart ? [start, ...arr] : arr,
          startingIndex = hasStart ? 0 : 1
    return (function internalReduce(accumulated, nArr, index) {
        const [head, ...tail] = nArr
        return head === undefined
            ? accumulated
            : internalReduce(
                func(accumulated, head, index, arr),
                tail,
                ++index)
    }(startCopy, arrCopy, startingIndex))
}

export default reduce