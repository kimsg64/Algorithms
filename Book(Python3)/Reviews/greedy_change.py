N = int(input())
coins = [500, 100, 50, 10]
answer = 0
for coin in coins:
    answer += N // coin
    print(coin, ":", N // coin, "개")
    N = N % coin
print(answer)
