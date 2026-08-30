var RandomizedSet = function () {
  this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.get(val)) {
    return false;
  }
  this.map.set(val, true);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.map.get(val)) {
    this.map.delete(val);
    return true;
  }
  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  console.log(this.map.size);
  let rand_index = Math.floor(Math.random() * 10000) % this.map.size;
  return Array.from(this.map.entries())[rand_index][0];
};

const obj = new RandomizedSet();
const param_1 = obj.insert(1);
const param = obj.insert(4);
const param1 = obj.insert(5);
// const param_2 = obj.remove(1);
const param_3 = obj.getRandom();
/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
