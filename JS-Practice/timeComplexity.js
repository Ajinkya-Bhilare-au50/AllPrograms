//Week8 – Day3: Coding Challenge
// AttainU Id: #46
// What will be the Time Complexity of these code snippet?
// Q-1 )Below are nested “K” for loops
// n= Number(prompt(“Enter the limit”))
// for(let i=0;i<n;i++){
//  for(let j=0;j<n;i++) {
// for(let m=0;m<n;i++) {
// //… … … K loops in total …
// for(let z=0;z<n;i++) {
// console.log(“Hello World”);
// }
// }
// }
// }

// ==========================================================================
/* Q.1-Answer
for k nested loops, Time Complexity will be 
order of N raised to K
O(N^K)

Explanation: As first loop will run N times ,second loop will also run N times
as we have K loops ,time complexity depends on N and K both.


*/
// ==========================================================================
// Q-2)
// N= Number(prompt(“Enter the limit”))
// M= Number(prompt(“Enter the limit”))
// a = b = 0
// for(let i=0;i<N;i++){
// a = a + 1
// }
// for(let j=0;j<M;j++)
// b = b + 1

// ==========================================================================
/* Q.2 Answer
As there is no nested for loops Time Complexity for above Code will be 

Order of (N+M)
O(N+M)

Assumed N an M is Very High inputs

*/