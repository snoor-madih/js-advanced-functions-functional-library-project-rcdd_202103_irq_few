const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
let arrayCopy = (collection instanceof Array) ? collection.slice() : Object.values(collection)
        for (let i = 0; i < arrayCopy.length; i++) {
          callback(arrayCopy[i]) }
           console.log("collection", collection)
      return collection
    },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
