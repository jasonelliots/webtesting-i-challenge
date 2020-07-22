module.exports = {
  success,
  fail,
  repair,
  get,
};


// - The item's enhancement increases by 1.
// - If the item enhancement level is 20, the enhancement level is not changed.
// - The durability of the item is not changed.

function success(item) {
  if(item.enhancement < 20){
    item.enhancement = item.enhancement + 1
    return { ...item };
  } else {
  return { ...item };
  }
}

// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

function fail(item) {
  if(item.enhancement < 15){
    item.durability = item.durability - 5 
    return { ...item}
  } else if (item.enhancement >= 15 ){
    item.durability = item.durability - 10
      if(item.enhancement > 16){
        item.enhancement = item.enhancement - 1
        return { ...item}
      } else {
        return { ...item}
      }}
 
}

function repair(item) {
  item.durability = 100 
  return { ...item}
}

// - Add a `get()` method to the `enhancer` object that takes an `item` and **returns a new item** with the `name` property modified according to the following rules:
//   - if the enhancement level is 0, the the name is not modified.
//   - if the enhancement level is greater than 0, change the name to include the enhancement level, preceded by a plus sign ( + ), between square brackets before the item's name. Example: the name of a "Iron Sword" enhanced to 7 would be "[+7] Iron Sword".

function get(item) {
  if(item.enhancement > 0){
    // item[`+${item.enhancement}${item.name}`] = item.name
    // delete item.name 
    item.name = `[+${item.enhancement}]${item.name}`
    return {... item}; 
  } else {
    return { ...item };
  }
 
}
