function insertSort(arr){
    var len = arr.length;
    var preIndex, current;
    for(var i=0; i<len; i++){
        preIndex = i-1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current){
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}

var arr = [62,221,2,45,17,6,28,70,56,111];
console.log(insertSort(arr).join(','));