var bubbleSort = (arr) => {
    const { length } = arr;
    for (i = 0; i < length; i++) {
        for (j = 0; j < length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; //swap
            }
        }
    }
    return arr;
}
bubbleSort([5, 4, 3, 2, 1, 6, 9, 1, 5, 7]);

