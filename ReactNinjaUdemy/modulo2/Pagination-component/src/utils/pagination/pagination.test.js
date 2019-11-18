'use strict'

import { expect } from 'chai'
import pagination from './index'

global.pagination = pagination

const deepEqual = (before, after) => {
  test(`${before} should return ${after}`, ()=> {
    expect(eval(before)).to.be.deep.equal(eval(after))
  })
}

const errorEqual = (before, after) => {
  test(`${before} should return "${after}"`, ()=> {
    try {
      eval(before)
    } catch(e) {
      expect(e.message).to.be.equal(after)
    }
  })
}

let before,
    after

test('pagination should be a function', ()=> {
  expect(pagination).to.be.a('function')
})

before = 'pagination({total: 1, activePage: 1})',
after = '[1]'
deepEqual(before, after)

before = 'pagination({total: 2, activePage: 1})',
after = '[1,2]'
deepEqual(before, after)


before = 'pagination({total: 5, activePage: 1})',
after = '[1,2,3,4,5]'
deepEqual(before, after)

before = 'pagination({total: 6, activePage: 1})',
after = '[1,2,3,"...",6]'
deepEqual(before, after)

before = 'pagination({total: 6, activePage: 3})',
after = '[1,2,3,4,5,6]'
deepEqual(before, after)

before = 'pagination({total: 6, activePage: 4})',
after = '[1,2,3,4,5,6]'
deepEqual(before, after)

before = 'pagination({total: 7, activePage: 1})',
after = '[1,2,3,"...",7]'
deepEqual(before, after)

before = 'pagination({total: 7, activePage: 4})',
after = '[1,2,3,4,5,6,7]'
deepEqual(before, after)

before = 'pagination({total: 7, activePage: 5})',
after = '[1,"...",4,5,6,7]'
deepEqual(before, after)

before = 'pagination({total: 7, activePage: 6})',
after = '[1,"...",5,6,7]'
deepEqual(before, after)

before = 'pagination({total: 7, activePage: 7})',
after = '[1,"...",5,6,7]'
deepEqual(before, after)

before = 'pagination({total: 15, activePage: 8})',
after = '[1,"...",7,8,9,"...",15]'
deepEqual(before, after)

before = 'pagination({total: 1, activePage: 1, visiblePages: 5})',
after = '[1]'
deepEqual(before, after)

before = 'pagination({total: 7, activePage: 1, visiblePages: 5})',
after = '[1,2,3,4,5,6,7]'
deepEqual(before, after)

before = 'pagination({total: 8, activePage: 1, visiblePages: 5})',
after = '[1,2,3,4,5,"...",8]'
deepEqual(before, after)

before = 'pagination({total: 8, activePage: 8, visiblePages: 5})',
after = '[1,"...",4,5,6,7,8]'
deepEqual(before, after)

before = 'pagination({total: 8, activePage: 4, visiblePages: 5})',
after = '[1,2,3,4,5,6,7,8]'
deepEqual(before, after)

before = 'pagination({total: 15, activePage: 8, visiblePages: 5})',
after = '[1,"...",6,7,8,9,10,"...",15]'
deepEqual(before, after)

before = 'pagination({})',
after = '[1]'
deepEqual(before, after)

before = 'pagination()',
after = '[1]'
deepEqual(before, after)

before = 'pagination({total: "abc", activePage:1})',
after = 'total should be a number'
errorEqual(before, after)

before = 'pagination({total: 1, activePage: "abc"})',
after = 'activePage should be a number'
errorEqual(before, after)

before = 'pagination({total: 1, activePage: 1, visiblePages: "abc"})',
after = 'visiblePages should be a number'
errorEqual(before, after)
