const findMedianSortedArrays = (nums1, nums2) => {
    let center = Math.floor((nums1.length + nums2.length) / 2);
    let i = 0;
    let j = 0;
    let res = [];
    while (res.length <= center) {
        if (nums1[i] !== undefined && (nums2[j] === undefined || nums1[i] < nums2[j])) {
            res.push(nums1[i]);
            i++;
        } else if (nums2[j] !== undefined) {
            res.push(nums2[j]);
            j++;
        }
    }
    return res.length > 1 && res.length%2 ? (res.pop() + res.pop()) / 2 : res.pop();
}

console.log(findMedianSortedArrays([],[2,3])) // 2, merged array = [1,2,3] and median is 2.
console.log(findMedianSortedArrays([1,3],[2])) // 2, merged array = [1,2,3] and median is 2.
console.log(findMedianSortedArrays([1,2],[3,4])) // 2.5,  merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
console.log(findMedianSortedArrays([0,0],[0,0])) // 0
console.log(findMedianSortedArrays([],[1])) // 1
console.log(findMedianSortedArrays([2],[])) // 2
console.log(findMedianSortedArrays([1,2,5,6,7,8,9],[1,2,3,4])) // 2
