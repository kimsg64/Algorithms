import sys
current = sys.stdin.readline()

count = 0
moveTo = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]]
for move in moveTo:
    currentX = ord(current[0]) - 96
    currentY = int(current[1])
    currentX += move[0]
    currentY += move[1]
    print("currentX:", currentX, "currentY", currentY)
    if currentX < 1 or currentX > 8 or currentY < 1 or currentY > 8:
        continue
    else:
        count += 1
print(count)
