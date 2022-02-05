import sys
N = int(sys.stdin.readline())
plans = sys.stdin.readline().split()

# plans 순서대로 읽어서 +-1
# 단, 좌표(x, y)가 1보다 작거나 N보다 큰 경우는 무시
x, y = 1, 1
def move(direction):
    global x, y
    if direction == 'R':
        if x < N:
            x += 1
    elif direction == 'L':
        if x > 1:
            x -= 1
    elif direction == 'U':
        if y > 1:
            y -= 1
    elif direction == 'D':
        if y < N:
            y += 1
for step in plans:
    move(step)
print("1st", x, y)

# 다른 풀이
x, y = 1, 1
moveX = [1, -1, 0, 0]
moveY = [0, 0, -1, 1]
direction = ['R', 'L', 'U', 'D']
for step in plans:
    idx = direction.index(step)
    x += moveX[idx]
    y += moveY[idx]
    if x == 0: x = 1
    if x == N + 1: x = N
    if y == 0: y = 1
    if y == N + 1: y = N
print("2nd", x, y)
