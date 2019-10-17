'use strict'

const every = (arr = [], func = (item, index, array) => item===item) => {
    let match = true

    for(let i=0; i < arr.length; i++) {
        if(!func(arr[i], i, arr)) {
            match = false
        }
    }

    return match
}

export default every