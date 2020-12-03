const integersCompression = (integers) => {
    return Array.from(new Set(integers))
        .sort((a, b) => a - b)
        .reduceRight((res, n) => {
            return (res.length > 0 ? ((res[0][0] - n) === 1 ? res[0].unshift(n) : res.unshift([n])) : res.unshift([n])) && res;
        }, [])
        .map(arr => arr.length > 1 ? [arr[0],arr.pop()] : arr)
        .map(arr => arr.join('-'))
        .join(',');
}
module.exports = integersCompression;

console.log(integersCompression([3, 2, 2, 1, 5, 6, 7, -1, 10]))
