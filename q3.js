//Q3. Create a functional iterator, with a next function.
var iterable = {
    i: 0,
    [Symbol.iterator]() {
      var that = this;
      return {
        next() {
          if (that.i < 5) {
            return { value: that.i++, done: false }
          } else {
            return { value: undefined, done: true }
          }
        }
      }
    }
  }
    
  for(let value of iterable){
    console.log(value)
}
