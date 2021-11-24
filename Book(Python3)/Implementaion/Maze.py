# N x M 크기의 직사각형 형태의 미로에서 괴물을 피해 탈출
# 현재 위치는 (1, 1)이고, 출구는 (N, M)에 존재하며, 한 번에 한 칸씩 이동 가능
# 괴물이 있는 부분은 0, 없는 부분은 1일 때, 탈출하기 위해 움직여야 하는 최소 칸의 개수는?

# 입력 조건: 첫째 줄에 정수 N, M(4 <= N, M <= 200)이 주어진다. N개의 줄에 M개의 정수(1 or 0) 형태로 미로 정보가 주어진다.
# 각 수는 공백 없이 붙어서 입력되며, (1,1)과 (N,M)은 항상 1이다.
# 출력 조건: 첫째 줄에 최소 이동 칸의 개수를 출력한다.

# 나의 풀이: 너비 우선 탐색인데...
# 출구가 항상 N, M이니까 오른쪽, 아래쪽이 1이면 거기로 가고, 아니면 왼쪽, 위쪽 탐색해서 가보기
# 우, 하, 좌, 상 순으로 탐색하면 될 것 같고, 지나간 자리는 0으로 변경

n, m = map(int, input().split())
graph = []
for i in range(n):
    graph.append(list(map(int, input())))

dx = 0
dy = 0
distance = 0
def escapeMaze():
    global dx
    global dy
    global distance
    graph[dx][dy] = 0
    #########################
    print("다음")
    for i in range(n):
        print(graph[i])
    #########################
    distance += 1
    if dx == n-1 and dy == m-1:
        return True
    else:
        if graph[dx+1][dy] == 1:
            dx = dx + 1
        elif graph[dx][dy+1] == 1:
            dy = dy + 1
        elif graph[dx-1][dy] == 1:
            dx = dx - 1
        elif graph[dx][dy-1] == 1:
            dy = dy - 1

while True:
    if escapeMaze() == True:
        print(distance)
        break


# 풀이: 내가 생각한대로 풀면 길을 잘못 들었을 때 답이 나오지 않으므로 큐에 저장해야 한다
from collections import deque
# n, m는 초기화 완료

# 이동할 방향
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def bfs(x, y):
    queue = deque()
    queue.append((x, y))
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx < 0 or ny < 0 or nx >= n or ny >= m:
                continue
            if graph[nx][ny] == 0:
                continue
            if graph[nx][ny] == 1:
                graph[nx][ny] = graph[x][y] + 1
                queue.append((nx, ny))
    return graph[n-1][m-1]
print(bfs(0, 0))
