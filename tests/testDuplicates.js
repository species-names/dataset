'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const walk = require('walk')
const path = require('path')

test('Duplicates', async (t) => {
  let scientific_names = []
  let duplicates = []
  
  await new Promise((resolve, reject) => {
    const walker = walk.walk(
      path.join(__dirname, '..', 'data'),
      { followLinks: false }
    )

    walker.on("file", (root, fileStat, next) => {
      let file = require(path.resolve(root, fileStat.name))
      file.forEach((species) => {
        if(scientific_names.indexOf(species.scientific_name) > -1){
          duplicates.push(species.scientific_name)
        }
        else {
          scientific_names.push(species.scientific_name)
        }
      })
      next()
    })

    walker.on("errors", (root, nodeStatsArray) => {
      reject(nodeStatsArray)
    })

    walker.on("end", () => {
      assert.equal(duplicates.length, 0)
      assert.notEqual(scientific_names.length, 0)
      console.log(scientific_names.length + ' species in dataset')
      resolve()
    })
  })
})
