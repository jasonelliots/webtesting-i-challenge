const enhancer = require('./enhancer.js');

describe("repair()", function () {
    it("should repair item's durability to 100", function () {
      //set up - arrange
      const item = {
          name: "hammer",
          durability: 50,
          enhancement: 5, 
      }
      //execute code under test - act
      const updatedItem = enhancer.repair(item);
      // assert
      expect(updatedItem.durability).toBe(100);
    });
});


describe("success()", function () {
    it("should add +1 enhancement", function () {
      //set up - arrange
      const item = {
          name: "hammer",
          durability: 50,
          enhancement: 5, 
      }
      //execute code under test - act
      const updatedItem = enhancer.success(item);
      // assert
      expect(updatedItem.enhancement).toBe(6);
    });

    it("should not add +1 if enhancement is already 20", function() {
        const item = {
            name: "hammer",
            durability: 50,
            enhancement: 20, 
        }
        //execute code under test - act
        const updatedItem = enhancer.success(item);
        // assert
        expect(updatedItem.enhancement).toBe(20);
    })

});



// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

describe("fail()", function () {
    it("item's enhancment less than 15, should decrease durability by 5", function () {
      //set up - arrange
      const item = {
          name: "hammer",
          durability: 50,
          enhancement: 10, 
      }
      //execute code under test - act
      const updatedItem = enhancer.fail(item);
      // assert
      expect(updatedItem.durability).toBe(45);
    });

    it("item's enhancement more than 14 but less than 17, should decrease durability by 10 and leave enhancement unchanged", function () {
        //set up - arrange
        const item = {
            name: "hammer",
            durability: 40,
            enhancement: 16, 
        }
        //execute code under test - act
        const updatedItem = enhancer.fail(item);
        // assert
        expect(updatedItem.durability).toBe(30);
        expect(updatedItem.enhancement).toBe(16);
      });

    it("item's enhancement is 17 or greater, should decrease durability by 10 AND decrease enhancement by 1", function () {
        //set up - arrange
        const item = {
            name: "hammer",
            durability: 40,
            enhancement: 18, 
        }
        //execute code under test - act
        const updatedItem = enhancer.fail(item);
        // assert
        expect(updatedItem.durability).toBe(30);
        expect(updatedItem.enhancement).toBe(17);
      });

});

describe('get()', function() {
    it('should upate items name to include enhancement', function() {
        const item = {
            name: "hammer",
            durability: 40,
            enhancement: 18, 
        }
        const updatedItem = enhancer.get(item);
        expect(updatedItem.name).toBe('[+18]hammer')
    })
})

