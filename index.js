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
      // set newArray to collection if an array use .slice on collection : else use Object.values
      let newArray = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      // set save in variable
      let truthResults = []

      // console.log("newArray", newArray)
      // newArray [
      //   6, 11, 5, 12, 17,
      // 100,  9, 1, -8
      // ]

      // iterate over the newArray
      for (let i = 0; i < newArray.length; i++) {            
        if (predicate(newArray[i])) {
          // saves all elements that return truthy 
          truthResults.push(newArray[i])
        }
      }
      return truthResults
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length

      // ALTERNATIVE
      // let newArray = (collection instanceof Array) ? collection.length : Object.keys(collection).length
      //     return newArray
    },

    // first: function(array, [n]) {
    // Change [n] to stop variable set to false/no value
    first: function(array, stop = false) {
      // Conditional for stop
      if (stop) {
          // slice(begin, end)
          return array.slice(0, stop)
      } else {
          // Array within Array
          return array[0]
          // return array.slice(0) Does NOT work
          // return array.slice() Does NOT work
      }
    },

    // last: function(array, [n])
    last: function(array, stop = false) {
      if (stop) {
        // returns the last n elements of the collection when the second optional argument (n) is provided
        // return array.slice(Math.max(array.length - n, 0));  
        return array.slice(Math.max(array.length -stop, 0))
      } else {
          // returns the last element of the collection
          return array[array.length - 1];
      }
    },

    compact: function(array) {
      // returns a copy of the **array** with all falsy values removed. 
        // In JavaScript, _false_, _null_, _0_, _""_, _undefined_ and _NaN_ are all falsy.
        // does not modify the original array
        let filterArray = array.filter(Boolean);
          return filterArray
      },

    sortBy: function(array, callback) {
    // does not modify the original arrays
      let newArray = [...array]
        return newArray.sort(function(a, b) {
        // correctly sorts arrays of integers and arrays of strings
        // correctly sorts arrays of integers with non-standard sort
          return callback(a) - callback(b)
        })
    },

      // flatten: function(array, [shallow]) {
    flatten: function(array, shallow, newArray = []) { 
    // console.log("array", array)   
    // console.log("shallow", shallow)
    // array [ 1, [ 2, 3 ], [ [ 4, 5 ], 6, [ 7, [Array] ] ] ]
      // shallow undefined
    // 1) correctly flattens a ludicrously nested array
    // array [ 1, [ 2, 3 ], [ [ 4, 5 ], 6, [ 7, [Array] ] ] ]
      // console.log("newArray", newArray)
    // newArray [ [ 1, [ 2, 3 ], [ [Array], 6, [Array] ] ] ]
    // newArray [ [ 1, [ 2, 3 ], [ [Array], 6, [Array] ] ] ]

    if (shallow === true) {
      for (let i = 0; i < array.length; i++) {  
        // console.log("I am on the first level")
        if (Array.isArray(array[i])) {
          for (let j = 0; j < array[i].length; j++) { 
          // console.log("I am on the second level")
          newArray.push(array[i][j])
          }
        } else {
          newArray.push(array[i])
        }
        }
    } else {
      for (let i = 0; i < array.length; i++) {  
      // console.log("I am on the first level")
          if (Array.isArray(array[i])) {
            this.flatten(array[i], false, newArray)
          } else {
            newArray.push(array[i])
          }
      }
    }
      return newArray
    },

    // HELPER
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

    // keys: function(Object) {
    keys: function(object) {
        // console.log("object", object) 
      // object { one: 1, two: 2, three: 3, four: 4 }
      // console.log("Object.getOwnPropertyNames(object)", Object.getOwnPropertyNames(object))
      // Object.getOwnPropertyNames(object) [ 'one', 'two', 'three', 'four' ]
      return (Object.getOwnPropertyNames(object))
    },
        
    // values: function(Object) {
    values: function(object) {
      // console.log("object", object) 
      // object { one: 1, two: 2, three: 3, four: 4 }
      // console.log("Object.values(object)", Object.values(object)); 
      // Object.values(object) [ 1, 2, 3, 4 ]
      return (Object.values(object));
    },

    functions: function(object) {
    // console.log("object", object) 
    // object { a: '', z: [Function: z], p: '', c: [Function: c], k: [Function: k] }
    // console.log(Object.getOwnPropertyNames(object))
    // [ 'a', 'z', 'p', 'c', 'k' ]
    // for (const property in object) {
    //   console.log(`${property}: ${object[property]}`);
    // a:
    // z: () => null
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
