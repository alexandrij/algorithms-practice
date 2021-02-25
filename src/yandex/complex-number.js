module.exports = complexNumber = (k) => {
    if (typeof k !== 'string')
        throw new TypeError(`Value ${k} is not string`);

    const sumK = k.split('').reduce((sum, item) => sum += +item, 0);
    return (3 * k) / Math.pow(sumK, 2);
}

