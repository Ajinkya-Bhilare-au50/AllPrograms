// / JavaScript program to find first and last occurrences of
// a number in a given sorted array
 
 
/* if x is present in arr then returns the index of
   FIRST occurrence of x in arr[0..n-1], otherwise
   returns -1 */
 function first(arr,low,high,x,n)
{
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2);
        if ((mid == 0 || x > arr[mid - 1]) && arr[mid] == x)
            return mid;
        else if (x > arr[mid])
            return first(arr, (mid + 1), high, x, n);
        else
            return first(arr, low, (mid - 1), x, n);
    }
    return -1;
}
 
/* if x is present in arr then returns the index of
   LAST occurrence of x in arr[0..n-1], otherwise
   returns -1 */
function last(arr, low, high, x, n)
{
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2);
        if ((mid == n - 1 || x < arr[mid + 1]) && arr[mid] == x)
            return mid;
        else if (x < arr[mid])
            return last(arr, low, (mid - 1), x, n);
        else
            return last(arr, (mid + 1), high, x, n);
    }
    return -1;
}
 
// 
 
    let arr = [ 1, 2, 2, 2, 2, 3, 4, 7, 8, 8 ];
    let n = arr.length;
 
    let x = 8;
    document.write("First Occurrence = " + first(arr, 0, n - 1, x, n),"</br>");
    console.log("Last Occurrence = " + last(arr, 0, n - 1, x, n),"</br>");
 