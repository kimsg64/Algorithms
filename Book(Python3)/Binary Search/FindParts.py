# N개의 부품에는 각각 고유한 정수 번호가 있다.
# M가지 종류의 부품에 대한 견적서를 작성할 때, 가게 안에 부품이 모두 있는지를 확인하는 프로그램을 작성하려 한다.
# 손님이 요청한 부품을 순서대로 확인해 있으면 yes, 없으면 no를 출력하라

# 입력조건
# 첫째 줄에 정수 N (1<= N <= 1000000)
# 둘째 줄에 N개의 정수 (1<= 정수 <= 1000000)
# 셋째 줄에 정수 M (1<= M <= 1000000)
# 넷째 줄에 M개의 정수 (1<= 정수 <= 1000000)

# 출력조건
# 첫째 줄에 공백으로 구분하여 yes or no를 출력

# 나의 풀이
# m은 순서대로 찾아야 하므로 정렬하면 안되고
# n은 m에서 요구하는 것이 있는지만 확인하면 되니까 정렬해서 모든 m에 대해 binary search하면 된다.
import sys
n = int(sys.stdin.readline())
n_stock = list(map(int, sys.stdin.readline().split()))
n_stock.sort()
m = int(sys.stdin.readline())
m_ordered = list(map(int, sys.stdin.readline().split()))

print(n_stock)
print(m_ordered)

answers = []
def binary_search(start, end, target, array):
    if len(array) == 0:
        return answers.append('no')
    mid = (start + end) // 2
    print(start, end, mid, "target:" ,target, array)
    if array[mid] == target:
        return answers.append('yes')
    elif array[mid] > target:
        binary_search(0, len(array[:mid]), target, array[:mid])
    elif array[mid] < target:
        binary_search(0, len(array[mid+1:]), target, array[mid+1:])

for part in m_ordered:
    binary_search(0, n-1, part, n_stock)

for answer in answers:
    print(answer, end=' ')

print()
print("============================================================================")
print(n_stock)
print(m_ordered)
# 해답
# 이진 탐색 반복문: 발상은 같은데 반복문으로도 해 보자.
answers2 = []
def binary_search_while(start, end, target, array):
    while True:
        mid = (start + end) // 2
        if array[mid] == target:
            answers2.append('yes')
            break
        elif array[mid] > target:
            array = array[:mid]
        elif array[mid] < target:
            array = array[mid+1:]
        end = len(array)
        if len(array) == 0:
            answers2.append('no')
            break

for part in m_ordered:
    binary_search_while(0, -1, part, n_stock)
for answer in answers2:
    print(answer, end=' ')

print()
print("============================================================================")
print(n_stock)
print(m_ordered)
# 계수 정렬 : n_stock의 최댓값을 구하고, m_ordered의 각 요소가 포함되는지 확인
answers3 = []
counting_list = [0] * (max(n_stock) + 1)
for num in n_stock:
    counting_list[num] = 1
for part in m_ordered:
    if counting_list[part] == 1:
        answers3.append('yes')
    else:
        answers3.append('no')
for answer in answers3:
    print(answer, end=' ')

print()
print("============================================================================")
# set 자료형
n_stock_set = set(n_stock)
print(n_stock)
print(m_ordered)
for i in m_ordered:
    if i in n_stock_set:
        print('yes', end=' ')
    else:
        print('no', end=' ')
