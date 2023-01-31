arr = [1, 3, 2, 6, 1, 2]
# arr = [1, 2, 3, 4, 5]

for i in range(len(arr)):
    for j in range(i + 1, len(arr)):
        #print(arr[i], arr[j])
        if ((arr[i] < arr[j]) and ((arr[i] + arr[j]) % 5 == 0)):
            print(arr[i], arr[j])
            