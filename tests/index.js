const { test } = require('tap')

const falseyJson = require('./sampleJSON/falseyJson.json')
const truthyJson = require('./sampleJSON/truthyJson.json')

test('Gs216', (t) => {
  var falseyResults = require('../')(falseyJson)
  var truthyResults = require('../')(truthyJson)
  t.same(falseyResults, false, 'should return false')
  t.same(truthyResults, true, 'should return true')
  t.end()
})
