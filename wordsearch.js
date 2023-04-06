const wordSearch = function(letters, word) {
    const horizontalJoin = letters.map(function(ls) {
      return ls.join('');
    });
  
    for (let line of horizontalJoin) {
      if (line.includes(word)) {
        return true;
      }
    }
  
    return false;
  }
  
  module.exports = wordSearch;