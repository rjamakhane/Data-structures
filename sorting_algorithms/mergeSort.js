function merge(arrA,arrB){
    let i = 0; j =0;
    let result = [];
    while(i< arrA.length && j < arrB.length){
      if(arrA[i] < arrB[j]){
        result.push(arrA[i++])
      }
      else{
        result.push(arrB[j++]);
      }
    }
    return result.concat(arrA.slice(i),arrB.slice(j))
  }
  
  
  function mergeSort(arr){
    if(arr.length < 2)
        return arr;
    let middle = Math.floor(arr.length/2);
    
    return merge(mergeSort(arr.slice(0,middle)),mergeSort(arr.slice(middle)) )
  }
  
  console.log(mergeSort([5,6,7,1,2,7,2]))