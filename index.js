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

    map: function(collection, callback) {
      let newArray = !(collection instanceof Array) ? Object.values(collection) :  collection.slice()
       Alternative
      let newArrayResult = []
      for (let i = 0; i < newArray.length; i++) {
        newArrayResult.push(callback(newArray[i]))    
      }
      return newArrayResult

    },

    reduce: function(collection, callback, accumulator) {
      let newArray = collection.slice()
        if (!accumulator) {
          accumulator = collection[0]
          newArray = collection.slice(1)
        }
      for (let i = 0; i < newArray.length; i++) {
      }
      return accumulator

    },

    functions: function(collection, predicate) {
      let newArray = (collection instanceof Array) ? collection.slice() : Object.values(collection) 

    },


  }
})()

fi.libraryMethod()
