const bubbleSort = function (arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0, temp; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};
