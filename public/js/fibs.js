var nums = [0, 1];
var index = 1;

Array.prototype.peek = function() {
  return this[this.length -1];
}

while (nums.peek() < 4000000) {
  nums.push(nums[index] + nums[index] - 1);
}
console.log(nums);