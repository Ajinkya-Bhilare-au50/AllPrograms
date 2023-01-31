function objectDemo(arr) {
    var count={ };
    for (i = 0; i < arr.length; i++){
        console.log("arr[i] : " + arr[i]);
        var num = arr[i];
        count[num] = count[num] ? count[num] + 1 : 1
        console.log("count[num] : " + count[num]);
    }
    console.log(count)
}
arr = ["ajinkya", "ajinkya", "mahesh", "soham", "sunil", "ajinkya", "sunil", "sunil","sumit"];
objectDemo(arr);