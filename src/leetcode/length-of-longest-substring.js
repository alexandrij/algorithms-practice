const lengthOfLongestSubstring = (s) => {
    const arr = Array.from(s);
    let cache = new Map();
    let best = 0;
    let start = 0;
    let i = 0;

    for (; i < arr.length; i ++) {
        if (cache.has(arr[i])) {
            best = Math.max((i - start), best);
            start = Math.max(start, cache.get(arr[i]) + 1);
        }
        cache.set(arr[i], i);
    }
    return Math.max((i - start), best);
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3 "abc"
console.log(lengthOfLongestSubstring("bbbbb")); // 1 "b"
console.log(lengthOfLongestSubstring("pwwkew")); // 3 "wke"
console.log(lengthOfLongestSubstring("dvdf")); // 3 ""
console.log(lengthOfLongestSubstring("abba")); // 2 ""
console.log(lengthOfLongestSubstring(" ")); // 1 ""
console.log(lengthOfLongestSubstring("")); // 0 ""
console.log(lengthOfLongestSubstring("ddsafsdfafretrtwt  adfa 445 dhggggg")); // ???
