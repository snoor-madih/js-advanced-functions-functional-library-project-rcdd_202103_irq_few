const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

   each: function(collection, callback) {
                      
      let arrayCopy = (collection instanceof Array) ? collection.slice() : Object.values(collection) 
        for (let i = 0; i < arrayCopy.length; i++) {
          callback(arrayCopy[i]) 
        } 
      console.log("collection", collection)
      return collection
    },

    map: function(collection, callback) {
      let newArray = !(collection instanceof Array) ? Object.values(collection) :  collection.slice()
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
        accumulator = callback(accumulator, newArray[i], newArray)
      }
      return accumulator
    },

    find: function(collection, predicate) {
      let newArray = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let i = 0; i < newArray.length; i++) {
        if (predicate(newArray[i])) {
          return (newArray[i])
        }
      }
        return undefined
    },

    filter: function(collection, predicate) {
      let newArray = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let truthResults = []
      for (let i = 0; i < newArray.length; i++) {         
        if (predicate(newArray[i])) {
          truthResults.push(newArray[i])
        }
      }
      return truthResults
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(array, stop = false) {
      if (stop) {
          return array.slice(0, stop)
      } else {
          return array[0]
      }
    },

    last: function(array, stop = false) {
      if (stop) {
        return array.slice(Math.max(array.length -stop, 0))
      } else {
          return array[array.length - 1];
      }
    },

    compact: function(array) {
        let filterArray = array.filter(Boolean);
          return filterArray
      },

    sortBy: function(array, callback) {
      let newArray = [...array]
        return newArray.sort(function(a, b) {
          return callback(a) - callback(b)
        })
    },

    flatten: function(array, shallow, newArray = []) { 
    if (shallow === true) {
      for (let i = 0; i < array.length; i++) {  
        if (Array.isArray(array[i])) {
          for (let j = 0; j < array[i].length; j++) { 
          newArray.push(array[i][j])
          }
        }
        else {
          newArray.push(array[i])
        }
        }
    } 
    else {
      for (let i = 0; i < array.length; i++) {  
          if (Array.isArray(array[i])) {
            this.flatten(array[i], false, newArray)
          } else {
            newArray.push(array[i])
          }
      }
    }
      return newArray
    },

    uniqueSorted: function(array, interatee) {
    const sorted = [array[0]]
    for (let i = 1; i < array.length; i++) {
      if (sorted[i -1] !== array[i]) {
        sorted.push(array[i])
      }
       return sorted
    }
    },

    uniq: function(array, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(array, iteratee)
      } else if (!iteratee) {
         return Array.from(new Set(array))
       } else {
         const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of array) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
           }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(object) {
      return (Object.getOwnPropertyNames(object))
    },
        
    values: function(object) {
      return (Object.values(object));
    },

    functions: function(object) {

    // p:
    // c: () => null
    // k: () => null
    // }
    
      // set variable to empty array
      let functionNames = []
      // iterate over object key
      for (const key in object) {
        // check typeof object[key] has the text function
        if (typeof object[key] === "function") {
          // shovel key to functionNames array
          functionNames.push(key)
        }
      }
      return functionNames.sort()
   },
  }
})()

fi.libraryMethod()
