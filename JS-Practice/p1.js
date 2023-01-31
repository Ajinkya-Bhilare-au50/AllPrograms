/* 
(Maximum marks - 15)
AttainU Id: #48
week8-Day3 Coding Challenge

What will be the Time Complexity of these code snippet?
Q-1)
n= Number(prompt(“Enter the limit”))
i = 1
while(i^2<=n) {
console.log(“Time complexity”)
i += 1
}
----------Answer 1--------------------------------------------
--in the above problem for loop runs square root of n times
==>Order Of Complexity will be
==>Square root of n

---------------------------------------------------------------
Q-2)
n= Number(prompt(“Enter the limit”))
for(let i = 0;i<n;i++){
    for(let j = 0;j<i;j++){
        for(let k = 0;k<100;k++) {
            console.log(“Time complexity”)
        }
    }
}
----------Answer 2---------------------------------

---in the above problem order of complexity will be
==>order of n raised to 2
==>O(n^2)

---------------------------------------------------
*/
