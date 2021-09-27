process.stdin.on('data', data => {
    const res = shortestPalindrom(data.toString());
    process.stdout.write(res);
    process.exit();
});

function expandAroundCenter(str, left, right) {
    let res = '';
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        res = left !== right ? str.charAt(left) + res + str.charAt(right) : str.charAt(left) + res;
        left--;
        right++;
    }
    return res;
}

function shortestPalindrom(str) {
    let shortest = '';
    let cur;
    for (let i = 0; i < str.length; i++) {
        cur = expandAroundCenter(str, i, i);
        if (cur.length > 1)
            shortest = shortest.length < 2 ? cur : cur.length > shortest.length ? cur : shortest;
        if (shortest.length === 2)
            break;

        cur = expandAroundCenter(str, i, i + 1);
        if (cur.length > 1)
            shortest = shortest.length < 2 ? cur : cur.length > shortest.length ? cur : shortest;
        if (shortest.length === 2)
            break;
    }
    return shortest.length > 2 ? shortest : -1;
}

// console.log(shortestPalindrom('bddb')); // bab or aba
// console.log(shortestPalindrom('bdddb')); // bab or aba
// console.log(shortestPalindrom('babad')); // bab or aba
// console.log(shortestPalindrom('babab')); // bab or aba
// console.log(shortestPalindrom('cbbd')); // bb
// console.log(shortestPalindrom('a')); // a
// console.log(shortestPalindrom('ac')); // a

