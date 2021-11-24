# N x M 크기의 얼음 틀이 있다.
# 구멍이 뚫린 부분은 0, 칸막이는 1로 표시되며, 구멍이 뚫린 부분끼리 상하좌우로 붙어있는 경우 연결된 것으로 간주한다.
# 얼음틀의 모양이 주어졌을 때 생성되는 아이스크림의 개수를 구하는 프로그램을 작성하자.

# 입력 조건: 첫 번째 줄에 얼음 틀의 세로 길이 N, 가로 길이 M이 주어진다(1 <= N, M <= 1000)
# 두 번째 줄부터 N+1번째 줄까지 얼음 틀의 형태가 주어지며 구멍 뚫린 부분은 0, 틀은 1이다.
# 출력 조건: 한 번에 만들 수 있는 아이스크림의 개수를 출력한다.

# 나의 풀이: 깊이 우선 탐색을 이용한다.
# 0인 지점을 방문하고 상하좌우를 체크하여 이동, 방문장소는 1로 변경
# 더이상 방문할 곳이 없으면 아이스크림의 개수 추가 (+1)
# 이 과정을 모든 노드에 반복
n, m = map(int, input().split())
graph = [[] for _ in range(n)]
for i in range(n):
    graph[i] = list(map(int, input().split()))

# graph[i][j]를 기준으로 graph[i-1][j], graph[i+1][j], graph[i][j-1], graph[i][j+1] 검사해서
# 0이면 그 자리를 스택에 넣어서(?) 방문처리하고, 0인 곳으로 이동해서 다시 자기자신 호출
# i < 0, j < 0, i > n, j > m일 때는 종료(틀을 벗어남)
def checkIce(x, y):
    print("x y 좌표:", x, y)
    if x < 0 or y < 0 or x >= n or y >= m:
        return False
    if graph[x][y] == 0:
        graph[x][y] = 1
        checkIce(x-1, y)
        checkIce(x, y-1)
        checkIce(x+1, y)
        checkIce(x, y+1)
        print("얼음틀 상태: ", graph)
        return True
    else:
        return False

# 모든 위치에 대해서 수행
result = 0
for i in range(n):
    for j in range(m):
        if checkIce(i, j) == True:
            result += 1
            print("답 현상태: ", result)
print(result)
