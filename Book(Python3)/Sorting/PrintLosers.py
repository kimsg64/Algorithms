# N명의 학생 정보가 이름, 성적으로 구성되어 있다. 성적이 낮은 순서대로 이름을 출력하자

# 입력 조건
# 첫 번째 줄에 학생의 수 N이 입력된다(1 <= N <= 100,000)
# 두 번째 줄부터 N+1번째 줄에는 학생의 이름을 나타내는 문자열 A와 성적을 나타내는 정수 B가 공백으로 구분되어 입력된다. A의 길이와 B는 100 이하의 자연수이다.

# 출력 조건
# 모든 학생의 이름을 성적이 낮은 순서대로 출력한다. 성적이 동일한 학생들의 순서는 자유롭게 출력한다.
import sys
n = int(input())
data_quick = []
data_count = {}
data_lib = []
for i in range(n):
    input_data = sys.stdin.readline().split()
    a, b = input_data[0], int(input_data[1])
    data_quick.append([a, b])
    data_count[a] = b
    data_lib.append((a, b))
################################################################################
print("퀵 정렬")
def quick_sort(array):
    if len(array) <= 1:
        return array
    pivot = array[0]
    tail = array[1:]
    left_side = [x for x in tail if x[1] <= pivot[1]]
    right_side = [x for x in tail if x[1] > pivot[1]]
    return quick_sort(left_side) + [pivot] + quick_sort(right_side)
sorted_data = quick_sort(data_quick)
print(sorted_data)
print([x[0] for x in sorted_data])
for x in sorted_data:
    print(x[0])
################################################################################
print("계수 정렬")
print(data_count)
count_list = [0] * (max(data_count.values()) + 1)
for i in range(len(data_count.values())):
    count_list[list(data_count.values())[i]] = list(data_count.values())[i]
print(count_list)
reversed = {v:k for k, v in data_count.items()}
for i in range(len(count_list)):
    if count_list[i] != 0:
        print(reversed[i])
################################################################################
print("라이브러리")
print(data_lib)
def setting(data):
    return data[1]
sorted_by_lib = sorted(data_lib, key=lambda student: student[1])
for student in sorted_by_lib:
    print(student[0], end=" ")
