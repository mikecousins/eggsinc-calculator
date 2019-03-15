const convertNumberToDisplayString = (value) => {
  const quadrillion = 1000000000000000;
  const trillion = 1000000000000;
  const billion = 1000000000;
  const million = 1000000;
  const thousand = 1000;
  if (value / quadrillion >= 1) {
    return `${(value / quadrillion).toFixed(1)}Q`;
  } else if (value / trillion >= 1) {
    return `${(value / trillion).toFixed(1)}T`;
  } else if (value / billion >= 1) {
    return `${(value / billion).toFixed(1)}B`;
  } else if (value / million >= 1) {
    return `${(value / million).toFixed(1)}M`;
  } else if (value / thousand >= 1) {
    return `${(value / thousand).toFixed(1)}k`;
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
    case 'q':
      return float * 1000000000000000;
  }
}

export { convertNumberToDisplayString, convertNumberToRaw };
