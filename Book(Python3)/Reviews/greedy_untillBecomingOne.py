import sys
N, K = map(int, sys.stdin.readline().split())
# N이 K로 나누어 떨어지는가?
# Y => 나눔
# N => 1 뺌
# N = 1이 되는 시점 계산 몇 번?
count = 0
while True:
    print("N", N)
    if N == 1:
        break
    else:
        if N % K == 0:
            N //= K
        else:
            N -= 1
        count += 1
    print("K", K)
    print("count", count)
print("answer", count)
