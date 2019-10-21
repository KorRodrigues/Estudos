'use strict'

import { expect } from 'chai'
import every from './every'


it('every should be a function', () => {
    expect(every).to.be.a('function')
})

it('every() should return true', () => {
    expect(every()).to.be.ok
})

it('every([]) should return true', () => {
    expect(every([])).to.be.ok
})

it('every([1]) should return true', () => {
    expect(every([1])).to.be.ok
})

it('every([], (item) => item) should return true', () => {
    expect(every([], (item) => item)).to.be.ok
})

it('every([1, 2], (item) => item > 2) should return false', () => {
    expect(every([1, 2], (item) => item > 2)).to.not.be.ok
})

it('every([1, 2], (item) => item <=2 ) should return true', () => {
    expect(every([1, 2], (item) => item <= 2)).to.be.ok
})

it('every([1, 2], (item) => item > 1) should return false', () => {
    expect(every([1, 2], (item) => item > 1)).to.not.be.ok
})

it('every([1, 2], (item) => item < 2) should return false', () => {
    expect(every([1, 2], (item) => item < 2)).to.not.be.ok
})

it('every([1, 2], (item, index) => item === index) should return false', () => {
    expect(every([1, 2], (item, index) => item === index)).to.not.be.ok
})

it('every([1, 2], (item, index) => item === index+1) should return true', () => {
    expect(every([1, 2], (item, index) => item === index+1)).to.be.ok
})

it('every([4, 5, 6], (item, index, arr) => item > arr.length) should return true', () => {
    expect(every([4, 5, 6], (item, index, arr) => item > arr.length)).to.be.ok
})

it('every([4, 5, 6, 5, 7], (item, index, arr) => item > arr.length) should return false', () => {
    expect(every([4, 5, 6, 5, 7], (item, index, arr) => item > arr.length)).to.not.be.ok
})