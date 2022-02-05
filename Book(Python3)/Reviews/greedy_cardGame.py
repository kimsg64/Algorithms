import sys
N, M = map(int, sys.stdin.readline().split())
data = []
for i in range(N):
    data.append(list(map(int, sys.stdin.readline().split())))

# 각 행에서 가장 작은 수를 뽑아 만든 리스트 중 가장 큰 수
min_list = []
for line in data:
    min_list.append(min(line))
answer = max(min_list)
print(answer)
