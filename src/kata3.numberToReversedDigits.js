const numberToReversedDigits = number => {
  return number.toString().split('').reverse().map(n => Number(n));
};

module.exports = numberToReversedDigits;
