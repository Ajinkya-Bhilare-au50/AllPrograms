function getSubArrays(arr) {
  var len = arr.length,
    subs = Array(Math.pow(2, len)).fill();
  return subs
    .map((_, i) => {
      var j = -1,
        k = i,
        res = [];
      while (++j < len) {
        k & 1 && res.push(arr[j]);
        k = k >> 1;
      }
      return res;
    })
    .slice(1);
}

console.log(JSON.stringify(getSubArrays([1, 2, 3, 4, 5, 6])));

















/* 
      if(year == 1918) return "26.09." + year;
        if(year < 1918 && year % 4 == 0) return "12.09." + year;
        if(year < 1918 && year % 4 != 0) return "13.09." + year;
        if(year > 1918 && ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)){
            return "12.09." + year;
        } else return "13.09." + year;
    */