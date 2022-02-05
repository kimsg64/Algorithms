import sys

# 맵 크기 정의
n, m = map(int, sys.stdin.readline().split())

# 크기에 맞는 맵 만들기
# d = [[0] * m for _ in range(n)]

# 현재 위치 및 방향 입력받기 (direction은 북0 동1 남2 서3인데, 왼쪽으로 돌기 때문에 북0>서3>남2>동1>북0 순으로 돈다.)
x, y, direction = map(int, sys.stdin.readline().split())

# 현재 좌표 방문(1) 처리
# d[x][y] = 1

# 전체 맵 입력받기
map_data = []
for i in range(n):
    map_data.append(list(map(int, sys.stdin.readline().split())))

# 북, 동, 남, 서를 바라볼 때, 현재 위치 기준 상대 위치는 어디인가
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

# 왼쪽으로 회전하는 함수
def turn_left():
    global direction
    if direction == 0:
        direction = 3
    else:
        direction -= 1

# 시뮬레이션 start
# 방문 칸 수
visited = 1
# 4번 돌면 뒤로 한 칸 가야 하므로 카운팅
turn_count = 0
# 현재 좌표 방문 처리
map_data[x][y] = 1
# 반복문
while True:
    # 1. 현재 위치에서 왼쪽으로 돈다
    turn_left()
    # check
    print('현재 위치', map_data[x][y], 'x', x, 'y', y, 'x 이동', dx[direction], 'y 이동', dy[direction])

    # 2. 왼쪽에 가보지 않은 칸이 존재한다면 전진한다.
    if map_data[x + dx[direction]][y + dy[direction]] == 0:
        print('안 가본 칸이 있네!')
        x += dx[direction]
        y += dy[direction]
        map_data[x][y] = 1
        visited += 1
        turn_count = 0
    # 가보지 않은 칸이 없다면 그냥 넘어간다.
    else:
        print('안 가본 칸이 없네...')
        turn_count += 1
        # 네 방향 모두 1이라면 현재 방향 기준 한 칸 뒤로 가고 다음 반복으로 넘어간다.
        if turn_count == 4:
            print('네 방향 다 가 봤네!')
            if map_data[x - dx[direction]][y - dy[direction]] == 0:
                print('뒤로 돌 수 있네!')
                x -= dx[direction]
                y -= dy[direction]
            else:
                print('뒤로 돌 수도 없네... 끝')
                break
            turn_count = 0
    for i in range(n):
        print(map_data[i])

print(visited)
