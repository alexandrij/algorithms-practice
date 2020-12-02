module.exports = getCountInputSymbol = (a, b) => {
    const aSet = new Set(a);
    return b.split('').filter(s => aSet.has(s)).length;
}

console.log(getCountInputSymbol('драгоценности', 'камни'))
