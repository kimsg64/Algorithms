print("1. Selection Sort")
array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]
for i in range(len(array)):
    for j in range(i+1, len(array)):
        if array[i] > array[j]:
            array[i], array[j] = array[j], array[i]
            print(array)
################################################################################
print("2. Insertion Sort")
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
print("3. Quick Sort")
################################################################################
print("4. 계수 정렬 시범 코드")
################################################################################
print("5. 정렬 라이브러리 시범 코드")
################################################################################

# 위에서 아래로
# 하나의 수열에 크기에 상관없이 수가 나열되어 있다. 이를 큰 수부터 작은 수의 순서대로 내림차순으로 정렬해라

# 입력조건
# 첫째 줄에 수열에 속한 수의 개수 N이 주어진다. (1 <= N <= 500)
# 둘째 줄부터 N+1번째 줄까지 N개의 수가 입력된다. (1 <= N <= 100,000)

# 출력조건
# 입력으로 주어진 수열이 내림차순으로 정렬된 결과를 공백으로 구분하여 출력한다.
print("1. 선택 정렬")
n = int(input())
array_selection = []
array_insertion = []
for i in range(n):
    nums = int(input())
    array_selection.append(nums)
    array_insertion.append(nums)

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
print("3. 퀵 정렬")

print("정답: ")
################################################################################
print("4. 계수 정렬")

print("정답: ")
################################################################################
print("5. 정렬 라이브러")

print("정답: ")
