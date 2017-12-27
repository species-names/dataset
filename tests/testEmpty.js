'use strict'

const assert = require('assert')
const walk = require('walk')
const path = require('path')
// const fs = require('fs');

describe('No Empty', function () {
  this.timeout(17000)
  it('should not have empty genera', function (done) {
      const walker = walk.walk(
        path.join(__dirname, '..', 'data'),
        { followLinks: false }
      )
      let emptyGenera = [];
      walker.on("file", (root, fileStat, next) => {
          let file = require(path.resolve(root, fileStat.name))
          if(file.length <= 0){
            emptyGenera.push(fileStat.name)
            console.log(path.join(root, fileStat.name));
            // fs.unlinkSync(path.join(root’, fileStat.name));
          }
          next()
      })
      walker.on("errors", (root, nodeStatsArray, next) => {
        done(nodeStatsArray)
      }); // plural
      walker.on("end", () => {
        assert.equal(0, emptyGenera.length)
        done()
      })
  })
})
