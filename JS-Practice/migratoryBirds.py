import array
array1 = [1, 1, 2, 2, 4, 5, 5, 5]




arr = sorted(array1)
obj = {};
max = 0
for i in range(len(arr)):
    temp = 0
    for j in range(i+1, len(arr)):
        if (arr[i] == arr[j]):
            if (arr[i] not in obj):
                obj[arr[i]] = 1
                temp = 1
            else:
                obj[arr[i]] += 1;
                temp = obj[arr[i]]
    if (temp > max):
        max = arr[i]
print(obj)
print(max)
