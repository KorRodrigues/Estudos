'use strict'

import { expect } from 'chai'
import reduce from './reduce-recursivo'


it('reduce should be a function', () => {
    expect(reduce).to.be.a('function')
})

it('reduce([1]) should return 1', () => {
    expect(reduce([1])).to.be.equal(1)
})

it('reduce([], () =>{}, 10) should return 10', () => {
    expect(reduce([], () =>{}, 10)).to.be.equal(10)
})

it('reduce([], () =>{}, 0) should return 0', () => {
    expect(reduce([], () =>{}, 0)).to.be.equal(0)
})

it('reduce([1], (ac, item) => ac + item, 1) should return 2', () => {
    expect(reduce([1], (ac, item) => ac + item, 1)).to.be.equal(2)
})

it('reduce([1, 2], (ac, item) => ac + item) should return 3', () => {
    expect(reduce([1, 2], (ac, item) => ac + item)).to.be.equal(3)
})

it('reduce([1, 2, 5], (ac, item) => ac + item) should return 8', () => {
    expect(reduce([1, 2, 5], (ac, item) => ac + item)).to.be.equal(8)
})

it('reduce([3, 4, 6], (ac, item) => {ac.push({item}); return ac }) should return [{3}, {4}, {6}]', () => {
    expect(reduce([3, 4, 6], (ac, item) => { ac.push({item}); return ac }, [])).to.be.deep.equal([{'item':3}, {'item': 4}, {'item': 6}])
})

it('reduce([1, 2, 5], (ac, item, index) => ac + index) should return 4', () => {
    expect(reduce([1, 2, 5], (ac, item, index) => ac + index)).to.be.equal(4)
})

it('reduce([1, 2, 5], (ac, item, index) => ac + index, 0) should return 3', () => {
    expect(reduce([1, 2, 5], (ac, item, index) => ac + index, 0)).to.be.equal(3)
})

it('reduce([1, 2, 5], (ac, item, index) => {ac.push(index); return ac}, []) should return [0,1,2]', () => {
    expect(reduce([1, 2, 5], (ac, item, index) => {ac.push(index); return ac}, [])).to.be.deep.equal([0,1,2])
})

it('reduce([1, 2], (ac, item, index, array) => ac + array[index], 0) should return 3', () => {
    expect(reduce([1, 2], (ac, item, index, array) => ac + array[index], 0)).to.be.equal(3)
})

it('reduce([1, 2], (ac, item, index, array) => ac + array[index], 0) should return 3', () => {
    let arr = [1,2]
    expect(reduce(arr, (ac, item, index, array) => ac + array[index], 0)).to.be.equal(3)
    expect(reduce(arr, (ac, item, index, array) => ac + array[index], 0)).to.be.equal(3)
    expect(arr).to.be.deep.equal([1,2])
})