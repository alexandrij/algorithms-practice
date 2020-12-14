const arraySum = (arr) => {
    return arr.reduce((res, el) => res += Array.isArray(el) ? arraySum(el) : parseInt(el, 10) || 0, 0);
}

console.log(arraySum([1,2,[5,'df',[true, '3n']], undefined, ['0x6']]))
