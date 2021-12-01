print("1. Selection Sort: 모든 요소를 확인하면서 작은 애와 큰 애의 위치를 바꾸기")
array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]
for i in range(len(array)):
    for j in range(i+1, len(array)):
        if array[i] > array[j]:
            array[i], array[j] = array[j], array[i]
            print(array)
################################################################################
print("2. Insertion Sort: 두 번째 요소부터 확인하면서 뒤의 요소가 앞의 요소보다 작으면 자리 바꾸기")
array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]
for i in range(1, len(array)):
    # [7, 5]에서 뒤에 있는 애가 앞에 있는 애보다 작으면 자리 바꾸기 => [5, 7]
    # [5, 7, 9]에서 똑같이 반복 => [5, 7, 9]
    # [5, 7, 9, 0]에서 반복 => [5, 7, 0, 9] => [5, 0, 7, 9] => [0, 5, 7, 9]
    # ...
    for j in range(i, 0, -1):
        if array[j] < array[j-1]:
            array[j], array[j-1] = array[j-1], array[j]
            print(array)
            # 맨 마지막 수였던 것 외에는 이미 정렬된 상태이므로, 앞 수가 자기보다 작으면 계속할 필요 없이 break
        else:
            break
################################################################################
print("3-1. Quick Sort: 반으로 나눠서 작은 애들은 왼쪽, 큰 애들은 오른쪽으로 나누기를 반복")
array = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8]
def quick_sort(array, start, end):
    if start >= end:
        return
    pivot = start
    left = start + 1
    right = end
    while left <= right:
        while left <=end and array[left] <= array[pivot]:
            left += 1
        while right > start and array[right] >= array[pivot]:
            right -= 1
        if left > right:
            array[right], array[pivot] = array[pivot], array[right]
        else:
            array[left], array[right] = array[right], array[left]
    quick_sort(array, start, right - 1)
    quick_sort(array, right + 1, end)
quick_sort(array, 0, len(array) - 1)
print(array)

print("3-2. Pythonic Quick Sort")
array = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8]
def quick_sort(array):
    if len(array) <= 1:
        return array
    # 첫 번째 수는 피벗
    pivot = array[0]
    # 피벗 뒤의 리스트
    tail = array[1:]
    # 피벗 뒤의 리스트 중, 피벗보다 작거나 같은 x는 왼쪽
    left_side = [x for x in tail if x <= pivot]
    # 피벗 뒤의 리스트 중, 피벗보다 큰 x는 오른쪽
    right_side = [x for x in tail if x > pivot]
    # 왼쪽 + 피벗 + 오른쪽
    return quick_sort(left_side) + [pivot] + quick_sort(right_side)
print(quick_sort(array))
################################################################################
print("4. Count Sort: 범위가 제한된 정수 데이터일 때만, 최댓값+1 크기의 리스트를 만들고, 인덱스+1과 일치하는 값을 삽입, 출력")
array = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2]
count = [0] * (max(array) + 1)
for i in range(len(array)):
    count[array[i]] += 1
for i in range(len(count)):
    for j in range(count[i]):
        print(i, end=" ")
################################################################################
print()
print("5-1. Library: sorted")
array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]
result = sorted(array)
print(result)

print("5-2. Library: sort")
array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]
array.sort()
print(array)

print("5-3. Library: sorted with key")
array = [("바나나", 2), ("사과", 5), ("당근", 3)]
def setting(data):
    return data[1]
result = sorted(array, key=setting)
print(result)
################################################################################

# 위에서 아래로
# 하나의 수열에 크기에 상관없이 수가 나열되어 있다. 이를 큰 수부터 작은 수의 순서대로 내림차순으로 정렬해라

# 입력조건
# 첫째 줄에 수열에 속한 수의 개수 N이 주어진다. (1 <= N <= 500)
# 둘째 줄부터 N+1번째 줄까지 N개의 수가 입력된다. (1 <= N <= 100,000)

# 출력조건
# 입력으로 주어진 수열이 내림차순으로 정렬된 결과를 공백으로 구분하여 출력한다.

n = int(input())
array_selection = []
array_insertion = []
array_quick = []
array_count = []
array_library = []
for i in range(n):
    nums = int(input())
    array_selection.append(nums)
    array_insertion.append(nums)
    array_quick.append(nums)
    array_count.append(nums)
    array_library.append(nums)

print("1. 선택 정렬")
for i in range(len(array_selection)):
    for j in range(i+1, len(array_selection)):
        if array_selection[i] < array_selection[j]:
            array_selection[i], array_selection[j] = array_selection[j], array_selection[i]
print("정답: ", array_selection)
################################################################################
print("2. 삽입 정렬")
for i in range(1, len(array_insertion)):
    for j in range(i, 0, -1):
        if array_insertion[j-1] < array_insertion[j]:
            array_insertion[j-1], array_insertion[j] = array_insertion[j], array_insertion[j-1]
        else:
            break;
print("정답: ", array_insertion)
################################################################################
print("3. Pythonic 퀵 정렬")
def quick(array):
    if len(array) <= 1:
        return array
    pivot = array[0]
    tail = array[1:]
    left_side = [x for x in tail if x >= pivot]
    right_side = [x for x in tail if x < pivot]
    return quick(left_side) + [pivot] + quick(right_side)
print("정답: ", quick(array_quick))
################################################################################
print("4. 계수 정렬")
count = [0] * (max(array_count) + 1)
for i in range(len(array_count)):
    count[array_count[i]] = array_count[i]
count.reverse()
sorted_list = []
for i in range(len(count)):
    if count[i] != 0:
        sorted_list.append(count[i])
print("정답: ", sorted_list)
################################################################################
print("5. 정렬 라이브러리")
sorted_lsit = sorted(array_library)
print("정답: ", sorted_lsit)
print("아직 오답: ", array_library)
array_library.sort()
print("정답: ", array_library)
