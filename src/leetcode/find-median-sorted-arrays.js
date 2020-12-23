const findMedianSortedArrays = (nums1, nums2) => {
    let end = Math.floor((nums1.length + nums2.length) / 2);
    let start = end - ((nums1.length + nums2.length) % 2 ? 0 : 1);
    let res = [];
    let i = 0;
    let j = 0;
    let minValue = -Math.pow(10, 6);
    while (i + j <= end) {
        let best = Math.max((nums1[i] !== undefined ? nums1[i] : minValue) , (nums2[j] !== undefined ? nums2[j] : minValue));
        while (nums1[i] !== undefined && nums1[i] < best && (i + j) <= end) {
            res.push(nums1[i]);
            i++;
        }
        while (nums2[j] !== undefined && nums2[j] < best && (i + j) <= end) {
            res.push(nums2[j]);
            j++;
        }
        if (nums1[i] !== undefined && nums1[i] === best && (i + j) <= end) {
            res.push(best);
            i++;
        }
        if (nums2[j] !== undefined && nums2[j] === best && (i + j) <= end) {
            res.push(best);
            j++;
        }
    }
    res = res.slice(start, end + 1);
    return res.reduce((prev, el) => prev + el) / res.length;
}

console.log(findMedianSortedArrays([], [2, 3])) // 2.5, merged array = [2,3] and median is 2.5.
console.log(findMedianSortedArrays([1, 3], [2])) // 2, merged array = [1,2,3] and median is 2.
console.log(findMedianSortedArrays([1, 2], [3, 4])) // 2.5,  merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
console.log(findMedianSortedArrays([0, 0], [0, 0])) // 0
console.log(findMedianSortedArrays([], [1])) // 1
console.log(findMedianSortedArrays([2], [])) // 2
console.log(findMedianSortedArrays([1, 2, 5, 6, 7, 8, 9], [1, 2, 3, 4])) // 2
console.log(findMedianSortedArrays([0], [])) // 0
