function locate(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    } else {
      if (Array.isArray(array[i])) {
        // put within if statement to only return true on backside if found a match up top
        if (locate(array[i], target) === true) {
          return true;
        }
      }
    }
  }
  // if make it through recursive loop without finding target then return false
  return false;
}

module.exports = locate;
