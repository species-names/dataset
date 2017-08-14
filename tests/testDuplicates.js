'use strict'

const assert = require('assert')
const walk = require('walk')
const path = require('path')

describe('Duplicates', function () {
  this.timeout(17000)
  it('should not have duplicates', function (done) {
      let scientific_names = [];
      let duplicates = []
      const walker = walk.walk(
        path.join(__dirname, '..', 'data'),
        { followLinks: false }
      )
      walker.on("file", (root, fileStat, next) => {
          let file = require(path.resolve(root, fileStat.name))
          file.forEach((species) => {
            if(scientific_names.indexOf(species) > 0){
              duplicates.push(species)
            }
            else {
              scientific_names.push(species.scientific_name)
            }
          })
          next()
      })
      walker.on("errors", (root, nodeStatsArray, next) => {
        done(nodeStatsArray)
      }); // plural
      walker.on("end", () => {
        assert.equal(0, duplicates.length)
        assert.notEqual(0, scientific_names.length)
        console.log(scientific_names.length + ' species in dataset')
        done()
      })
  })
})
