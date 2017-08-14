'use strict'
const validator = require('json-schema-remote')
const chai = require('chai')
const expect = require('chai').expect
chai.use(require('chai-json-schema'))
const walk = require('walk')
const path = require('path')

const schema = require('../json-schema.json')

describe('Valid json', function () {
  this.timeout(17000)
  it('should have valid json-schema', function (done) {
    validator.validate(schema, 'http://json-schema.org/draft-04/schema')
    .then(() => {
      done()
    })
    .catch((error) => {
      done(error)
    })
  })
  it('all files should have valid json', function (done) {
    const walker = walk.walk(
      path.join(__dirname, '..', 'data'),
      { followLinks: false }
    )
    walker.on("file", (root, fileStat, next) => {
        let file = require(path.resolve(root, fileStat.name))
        expect(file).to.be.jsonSchema(schema)
        next()
    })
    walker.on("errors", (root, nodeStatsArray, next) => {
      done(nodeStatsArray)
    }); // plural
    walker.on("end", done)
  })
})
