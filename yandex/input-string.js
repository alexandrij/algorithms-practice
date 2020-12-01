module.exports = getCountInputString = (str1, str2) => {
    if (typeof str1 !== 'string')
        throw new TypeError(`${str1} is not string`);
    if (typeof str2 !== 'string')
        throw new TypeError(`${str2} is not string`);

    let arrStr2 = str2.split('');
    return str1.split('').filter(s => arrStr2.indexOf(s) > -1);
}

console.log(getCountInputString('камни', 'драгоценности'));
