const zigZagConversion = (s, numRows) => {
    let row = 0;
    let cur = 0;
    return s.split('').reduce((res, s) => {
        if (!res[row]) {
            res[row] = [];
        }
        if (row === numRows) {
            cur = numRows - 1;
        }
        if (cur > 0) {
            res.push(new Array(numRows));
            res[row][cur] = s;
            cur--;
        } else {
            res[row].push(s);
            row = row >= numRows - 1 ? 0 : row + 1;
        }
        return res;
    }, []).map((arr) => {
        return arr.join(' ');
    }).join('\n');
};

console.log(zigZagConversion("PAYPALISHIRING", 3));
// P   A   H   N
// A P L S I I G
// Y   I   R

console.log(zigZagConversion("PAYPALISHIRING", 4));
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

console.log(zigZagConversion("A", 1));
// A
