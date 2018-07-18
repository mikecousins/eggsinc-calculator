const convertNumberToDisplayString = (value) => {
  const trillion = 1000000000000;
  const billion = 1000000000;
  const million = 1000000;
  if (value / trillion > 1) {
    return `${value / trillion}T`;
  } else if (value / billion > 1) {
    return `${value / billion}B`;
  } else if (value / million > 1) {
    return `${value / million}M`;
  } else {
    return value;
  }
}

const convertNumberToRaw = (number, unit) => {
  const float = parseFloat(number);
  switch (unit) {
    default:
    case '':
      return float;
    case 'k':
      return float * 1000;
    case 'M':
      return float * 1000000;
    case 'B':
      return float * 1000000000;
    case 'T':
      return float * 1000000000000;
  }
}

export { convertNumberToDisplayString, convertNumberToRaw };
