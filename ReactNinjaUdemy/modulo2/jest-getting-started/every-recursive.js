'use strict'

const every = (arr = [], func = (item, index, array) => item===item) => {
    return (function recursiveEvery(element, i) {
        if(!element)
            return true
        return func(element, i, arr) 
            ? recursiveEvery(arr[i+1], i+1) 
            : false
    })(arr[0], 0)
}

export default every