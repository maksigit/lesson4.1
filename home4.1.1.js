Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
};

Array.prototype.myMap = function (callback) {
  newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr[i] = callback(this[i], i, this)
  }

  return newArr
};

Array.prototype.mySort = function (callback) {
  if (callback === undefined) {
    for (let i = 0; i < this.length; i++) {
      for(let j = i; j < this.length -1; j++) {
        if (this[i] < this[j + 1]) {

        } else {
          let temp = this[i];
          this[i] = this[j + 1];
          this[j + 1] = temp
        }
      }
    }
  } else {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], this[i + 1])
    }
  }

  return this
};

Array.prototype.myFilter = function (callback) {
  newArr = [];
  let count = 0;
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr[count] = this[i];
      count++
    }
  }

  return newArr
};

