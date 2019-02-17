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

const a = [2,3,5,3,6,5,6,4,3,4,3,34,5435,3452,3,-34,-234234];

Array.prototype.mySort = function (callback) {
    for (let i = 0; i < this.length; i++) {
      for(let j = 0; j < (this.length - i - 1); j++) {
        if (callback && callback(this[j], this[j + 1]) > 0) {
          let temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = temp
        } else if (!callback && this[j].toString() > this[j+1].toString()) {
          let temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = temp
        }
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

