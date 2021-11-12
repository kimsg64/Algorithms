# 거스름돈으로 사용할 500원, 100원, 50원, 10원 동전이 무한히 존재한다.
# 손님에게 거슬러 줘야 할 돈이 N원일 때 거슬러 줘야 할 동전의 최소 개수는? (N은 10의 배수)

# Mine
def changeCoin(N):
    answer = N // 500 + (N % 500 // 100) + (N % 500 % 100 // 50) + (N % 500 % 100 % 50 // 10)
    return print(answer)

# Answer Example
def returnCoin(N):
    count = 0
    coin_types = [500, 100, 50, 10]
    for coin in coin_types:
        count += N // coin
        N %= coin
    return print(count)

changeCoin(1260)
returnCoin(1260)


# Greedy 알고리즘: 현재 상황에서 당장 좋은 것만을 고르는 방법으로, 현재 선택이 나중에 미칠 영향에 대해서는 고려하지 않음
# 그러나 이 알고리즘이 항상 최적해를 보장해 주지는 않으므로, 이를 이용하기 전에 검증할 필요가 있다.
# 위 문제의 경우, 큰 단위의 동전이 작은 단위의 동전의 배수이므로 탐욕법으로 해결이 가능하지만
# 이를테면 동전의 종류가 500, 400, 100, 50, 10원과 같이 배수 관계가 없다면 탐욕법으로 최적해를 구할 수 없다. (예: N=800)
