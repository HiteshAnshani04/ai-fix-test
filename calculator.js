function subtract(a, b) {
    // BUG: This should be a - b
    return a + b;
}

module.exports = subtract;