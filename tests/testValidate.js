'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const validator = require('json-schema-remote')
const walk = require('walk')
const path = require('path')

const schema = require('../json-schema.json')

test('JSON Schema validation', async (t) => {
  // Validate the schema itself
  await t.test('should have valid json-schema', async () => {
    await validator.validate(schema, 'http://json-schema.org/draft-04/schema')
  })

  // Validate all files against the schema
  await t.test('all files should have valid json', async () => {
    await new Promise((resolve, reject) => {
      const walker = walk.walk(
        path.join(__dirname, '..', 'data'),
        { followLinks: false }
      )

      walker.on("file", (root, fileStat, next) => {
        let file = require(path.resolve(root, fileStat.name))
        try {
          validator.validate(file, schema)
          next()
        } catch (error) {
          reject(new Error(`Invalid JSON in ${fileStat.name}: ${error.message}`))
        }
      })

      walker.on("errors", (root, nodeStatsArray) => {
        reject(nodeStatsArray)
      })

      walker.on("end", resolve)
    })
  })
})
