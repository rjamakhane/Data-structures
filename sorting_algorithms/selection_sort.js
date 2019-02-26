var selectionSort = (arr) => {
    const { length } = arr;

    for (i = 0; i < length; i++) {
        let min = i;
        for (j = 0 + i; j < length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]; //swap values
    }

    return arr;
}

selectionSort([5,4,5,2,5,7,1]);

