# 원소의 개수 n, 구하려는 수 target, 수열 array
n, target = list(map(int, input().split()))
array = list(map(int, input().split()))

times = 0
def binary(start, end, target, array):
    print(start, end, target, array)
    global times
    times += 1
    mid = (start + end) // 2
    if array[mid] == target:
        return print(times, "번 수행해서 답 구함:", array[mid])
    elif array[mid] > target:
        return binary(0, mid, target, array[:mid+1])
    elif array[mid] < target:
        return binary(0, mid, target, array[mid:])

binary(0, n-1, target, array)
