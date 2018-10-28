function selectionSort(arr){
    var min;
    for (var i=0;i<=arr.length;i++){
        for(j=1;j<=arr.length;j++){
            if(arr[i] > arr[j]){
                var temp = arr[j]
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
}

var arr = [2,3,5,7,1,6,9];
selectionSort(arr);
console.log(arr);