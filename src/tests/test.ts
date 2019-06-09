let expect = require('chai').expect;
let addTwoNumbers = require('../addTwoNumbers');

describe('addTwoNumbers()', function () {
  it('should add two numbers', function () {
    // 1. ARRANGE
    let x = 5;
    let y = 1;
    let sum1 = x + y;

    // 2. ACT
    let sum2 = addTwoNumbers(x, y);

    // 3. ASSERT
    expect(sum2).to.be.equal(sum1);
  });
});
