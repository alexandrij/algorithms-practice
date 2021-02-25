export const integerCompression = arr => arr
    .reduceRight((res, el) => {
        if (res.length > 0 && (res[0][0] - el) === 1) {
            res[0].unshift(el);
        } else {
            res.unshift([el]);
        }
        return res;
    }, [])
    .map(arr => (arr.length > 1 ? arr[0] + '-' : '') + arr.pop())
    .join(',');

