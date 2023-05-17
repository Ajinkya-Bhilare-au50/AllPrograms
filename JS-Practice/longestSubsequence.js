// let N = 8;
// let A = [1, 2, 1, 3, 2, 7, 4, 2];

// let maxLength = 0;
// let start = 0;
// let end = 0;
// let seen = new Set();

// while (end < N) {
//   if (!seen.has(A[end])) {
//     seen.add(A[end]);
//     end++;
//     maxLength = Math.max(maxLength, end - start);
//   } else {
//     seen.delete(A[start]);
//     start++;
//   }
// }
// console.log(maxLength);

    // JavaScript program to find longest
        // contiguous subsequence
  
        // Returns length of the longest
       var arr=[]


        function findLongestConseqSubseq(arr, n) {
            let ans = 0, count = 0;
  
            // sort the array
            arr.sort(function (a, b) { return a - b; })
  
            var v = [];
            v.push(arr[0]);
  
            //insert repeated elements only once in the vector
            for (let i = 1; i < n; i++) {
                if (arr[i] != arr[i - 1])
                    v.push(arr[i]);
            }
            // find the maximum length
            // by traversing the array
            for (let i = 0; i < v.length; i++) {
  
                // Check if the current element is equal
                // to previous element +1
                if (i > 0 && v[i] == v[i - 1] + 1)
                    count++;
                // reset the count
                else
                    count = 1;
  
                // update the maximum
                ans = Math.max(ans, count);
            }
            return ans;
        }
