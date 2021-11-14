# 아래 룰에 따라 여러 숫자 카드 중 가장 높은 숫자가 쓰인 카드 한 장을 뽑는 게임이다.
# 1. 숫자가 쓰인 카드들이 N행 * M열 형태로 놓여 있다.
# 2. 먼저, 뽑고자 하는 카드가 포함된 행을 선택한다.
# 3. 다음, 선택된 행에 포함된 카드 중 가장 숫자가 낮은 카드를 뽑는다.
# 게임의 룰에 맞게 가장 큰 숫자가 쓰인 카드를 뽑는 프로그램을 만드시오

# 입력조건
# 첫째 줄에 숫자 카드들이 놓인 행의 개수 N과 열의 개수 M이 공백을 기준으로 하여 각각 자연수로 주어진다(1 <= n, m <= 100)
# 둘째 줄부터 N개의 줄에 걸쳐 각 카드에 적힌 숫자가 주어진다. 각 숫자는 1~10000의 자연수이다.

# 출력 조건
# 첫째 줄에 결과를 출력한다.

# 풀이: 각 행의 최솟값을 비교하여 그 중 가장 큰 값을 선택해야 하므로
# 각 행을 정렬하여 첫 번째 인덱스를 선택한다.
# 이 값들을 모아 새로운 배열을 만들고 이것을 다시 정렬하여 마지막 인덱스를 선택한다.
n, m = map(int, input().split())
# 몇 줄을 받을지 모르기 때문에 한 줄씩 입력받아 확인해야 한다.
min_list = []
for i in range(n):
    line = list(map(int, input().split()))
    line.sort()
    min_list.append(line[0])
min_list.sort()
result = min_list[-1]
print("나의 답: ", result)

# Answer Example => min(), max() 함수를 이용해서 쉽게 나타내도 된다.
result = 0
for i in range(n):
    data = list(map(int, input().split()))
    min_value = min(data)
    result = max(result, min_value)
print("예시답안1: ", result)

# 2중 반복문을 이용할 수도 있다.
reulst = 0
for i in range(n):
    data = list(map(int, input().split()))
    min_value = 10001
    for j in data:
        min_value = min(min_value, j)
    result = max(result, min_value)
print("예시답안2: ", result)
