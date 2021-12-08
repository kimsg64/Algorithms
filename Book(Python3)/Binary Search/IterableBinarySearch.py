# 원소의 개수 n, 구하려는 수 target, 수열 array
n, target = list(map(int, input().split()))
array = list(map(int, input().split()))

times = 0
start = 0
end = n-1
while True:
    times += 1
    print(start, end, target, array)
    mid = (start + end) // 2
    if array[mid] == target:
        print(times, "번째 수행하여 성공", array[mid])
        break
    elif array[mid] > target:
        end = mid
    elif array[mid] < target:
        start = mid
