# 게임 캐릭터가 맵 안에서 움직이는 시스템 개발
# 캐릭터가 위치한 장소는 1 x 1의 정사각형으로 이루어진 N x M 크기의 직사각형(육지 or 바다)
# 맵의 각 칸은 (A, B)이며 A는 북쪽으로부터 떨어진 칸의 개수, B는 서쪽으로부터 떨어진 칸의 개수
# 캐릭터는 동서남북 중 한 곳을 바라보며, 상하좌우로 움직일 수 있으나 바다로는 갈 수 없다.

# 이동 매뉴얼
# 1. 현재 위치에서 현재 방향을 기준으로 왼쪽 방향(반시계 방향으로 90도)부터 차례대로 갈 곳을 정한다.
# 2. 캐릭터의 바로 왼쪽 방향에 가보지 않은 칸이 존재한다면 왼쪽 방향으로 회전한 후 한 칸 전진한다. 왼쪽 방향에 가보지 않은 칸이 없다면 회전만 하고 1단계로 돌아간다.
# 3. 네 방향 모두 이미 가본 칸이거나 바다로 되어 있다면 바라보는 방향을 유지한 채 한 칸 뒤로 가고 1로 돌아간다. 이 때, 뒤쪽 방향이 바다라 갈 수 없다면 움직임을 멈춘다.
# 매뉴얼에 따라 캐릭터를 이동시킨 후 방문한 칸의 수를 출력하는 프로그램을 만들자

# 입력 조건
# 1. 첫째 줄에 맵의 세로 크기 N과 가로 크기 M을 공백으로 구분하여 입력(3 <= N, M <= 50)
# 2. 둘째 줄에 좌표(A, B)와 바라보는 방향 d가 공백으로 구분하여 주어지며, d의 값은 (0: 북, 1: 동, 2: 남, 3: 서)
# 3. 셋째 줄부터 맵이 육지인지 바다인지에 대한 정보가 주어진다. N개의 줄에 맵의 상태가 북~남 순으로, 각 줄의 데이터는 서~동 순으로 주어진다.맵의 외곽은 항상 바다이다.(0: 육지, 1: 바다)
# 4. 처음에 캐릭터가 위치한 칸은 항상 육지이다.
# 출력 조건
# 첫째 줄에 이동을 마친 후 캐릭터가 방문한 칸의 수를 출력한다.


# 나의 풀이
# 주어진 조건을 순서대로 풀어 나가면 될 듯
# 가보지 않은 칸만 갈 수 있으므로 캐릭터가 가 본 곳은 0 => 1로 전환하면 될 것이고 그 때마다 count +1
n, m = map(int, input().split())
a, b, d = map(int, input().split())
mapData = []
for i in range(n):
    line = list(map(int, input().split()))
    mapData.append(line)

# 캐릭터 이동 시작한 좌표(a, b)를 1로 전환
mapData[a][b] = 1
count = 1

# ★현위치 a, b를 기준으로
# 북쪽으로 이동하는 경우: mapData[a-1][b]
# 동쪽으로 이동하는 경우: mapData[a][b+1]
# 남쪽으로 이동하는 경우: mapData[a+1][b]
# 서쪽으로 이동하는 경우: mapData[a][b-1]
# 현 방향이 북(0)쪽을 바라보고 있으면 방향 체크는 3>2>1>0
# 현 방향이 동(1)쪽을 바라보고 있으면 방향 체크는 0>3>2>1
# 현 방향이 남(2)쪽을 바라보고 있으면 방향 체크는 1>0>3>2
# 현 방향이 서(3)쪽을 바라보고 있으면 방향 체크는 2>1>0>3
time = 0
while True:
    #####################
    time += 1
    print("맵 체킹:" + str(time) + "회 이동")
    for i in mapData:
        print(i)
    #####################
    if d == 0:
        if mapData[a][b-1] == 0:
            b -= 1
            count += 1
            mapData[a][b] = 1
            d = 3
        elif mapData[a+1][b] == 0:
            a += 1
            count += 1
            mapData[a][b] = 1
            d = 2
        elif mapData[a][b+1] == 0:
            b += 1
            count += 1
            mapData[a][b] = 1
            d = 1
        elif mapData[a-1][b] == 0:
            a -= 1
            count += 1
            mapData[a][b] = 1
            d = 0
        else:
            break
    elif d == 1:
        if mapData[a-1][b] == 0:
            a -= 1
            count += 1
            mapData[a][b] = 1
            d = 0
        elif mapData[a][b-1] == 0:
            b -= 1
            count += 1
            mapData[a][b] = 1
            d = 3
        elif mapData[a+1][b] == 0:
            a += 1
            count += 1
            mapData[a][b] = 1
            d = 2
        elif mapData[a][b+1] == 0:
            b += 1
            count += 1
            mapData[a][b] = 1
            d = 1
        else:
            break
    elif d == 2:
        if mapData[a][b+1] == 0:
            b += 1
            count += 1
            mapData[a][b] = 1
            d = 1
        elif mapData[a-1][b] == 0:
            a -= 1
            count += 1
            mapData[a][b] = 1
            d = 0
        elif mapData[a][b-1] == 0:
            b -= 1
            count += 1
            mapData[a][b] = 1
            d = 3
        elif mapData[a+1][b] == 0:
            a += 1
            count += 1
            mapData[a][b] = 1
            d = 2
        else:
            break
    elif d == 3:
        if mapData[a+1][b] == 0:
            a += 1
            count += 1
            mapData[a][b] = 1
            d = 2
        elif mapData[a][b+1] == 0:
            b += 1
            count += 1
            mapData[a][b] = 1
            d = 1
        elif mapData[a-1][b] == 0:
            a -= 1
            count += 1
            mapData[a][b] = 1
            d = 0
        elif mapData[a][b-1] == 0:
            b -= 1
            count += 1
            mapData[a][b] = 1
            d = 3
        else:
            break
print(count)
