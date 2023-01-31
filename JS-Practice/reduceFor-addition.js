const a = [45, 65, 89, 99, 78, 46, -1, 0];
const sum = a.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue;
}, 0);
console.log(sum);
//accumulator is initialised to zero
//currentvalue is added to accumulator

/* 
----Working Explanation-----------

acc=0,curr=45--- acc=45
acc=45,curr=65---acc=110
acc=110,curr=89---acc=199
acc=199,curr=99---acc=298
acc=298,curr=78---acc=376
acc=376,curr=46---acc=422
acc=422,curr=-1---acc=421
acc=421,curr=0---acc=421


 */