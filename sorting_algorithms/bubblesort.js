function bubblesort(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if(arr[j-1] > arr[j]){
                var temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
var arr = [2,3,5,7,1,6,9];
bubblesort(arr);
console.log(arr);