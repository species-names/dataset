var chai = require('chai')
var expect = require('chai').expect
chai.use(require('chai-json-schema'))

const schema = require('../json-schema.json')
// const schemaSchema = require('./json-schema.v4.json')

const file = require('../Vertebrata/Aves/Acanthisitta')

// expect(schema).to.be.jsonSchema(schemaSchema)
describe('Valid json', function () {
  it('should have valid json', function (done) {
      expect(file).to.be.jsonSchema(schema)
      done()
  });
})
