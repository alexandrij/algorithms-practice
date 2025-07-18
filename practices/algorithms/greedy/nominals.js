export const atm = (sum, limits, nominals) => {
  const result = {};
  const curLimits = { ...limits };

  if (sum % nominals[nominals.length - 1]) {
    return 'Incorrect value';
  }

  for (const nominal of nominals) {
    if (limits[nominal] && sum >= nominal) {
      const countNominal = Math.min(Math.floor(sum / nominal), limits[nominal]);
      const sumNominal = countNominal * nominal;

      curLimits[nominal] -= countNominal;
      result[nominal] = countNominal;
      sum -= sumNominal;
    }
  }

  if (sum > 0) {
    return 'Not enough money';
  }

  Object.assign(limits, curLimits);

  return result;
};

const limits = { 5000: 6, 1000: 6, 500: 6, 100: 6, 50: 6 };
const nominals = [5000, 1000, 500, 100, 50];

console.debug(atm(1250, limits, nominals));
console.debug(atm(3000, limits, nominals));
console.debug(atm(2334, limits, nominals));
console.debug(atm(1000, limits, nominals));
console.debug(atm(100000, limits, nominals));
console.debug(atm(10000, limits, nominals));
console.debug(atm(100, limits, nominals));

console.debug(limits);
