class LearnJest {
  add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be number');
    }
    return a + b;
  }
}

module.exports = LearnJest;