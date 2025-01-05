'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const walk = require('walk')
const path = require('path')

test('No Empty', async (t) => {
  await new Promise((resolve, reject) => {
    const walker = walk.walk(
      path.join(__dirname, '..', 'data'),
      { followLinks: false }
    )
    let emptyGenera = []
    
    walker.on("file", (root, fileStat, next) => {
      let file = require(path.resolve(root, fileStat.name))
      if(file.length <= 0){
        emptyGenera.push(fileStat.name)
        console.log(path.join(root, fileStat.name))
      }
      next()
    })

    walker.on("errors", (root, nodeStatsArray) => {
      reject(nodeStatsArray)
    })

    walker.on("end", () => {
      assert.equal(emptyGenera.length, 0)
      resolve()
    })
  })
})
