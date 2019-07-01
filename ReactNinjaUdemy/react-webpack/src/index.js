'use strict'

var React = require('react')
var ReactDom = require('react-dom')
var Title = require('./app')

ReactDom.render(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)