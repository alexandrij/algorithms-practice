const selectionSort = function (arr) {
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        let min = i;

        for (let j = i; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }

        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
};
export { selectionSort }
