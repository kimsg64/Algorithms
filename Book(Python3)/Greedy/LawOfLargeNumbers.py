# 주어진 배열의 수를 M번 더하여 가장 큰 수를 만드는 법칙이다.
# 단, 배열의 특정한 인덱스에 해당하는 수가 연속해서 K번을 초과하여 더해질 수 없다.
# 서로 다른 인덱스에 해당하는 수가 같은 경우에도 서로 다른 것으로 가정한다.
# 배열의 크기 n, 숫자가 더해지는 횟수 m, 연속해서 더해질 수 있는 최대 횟수 k가 주어질 때 이 법칙에 따른 결과를 출력

# 입력조건
# 첫째 줄에 N(2<= N <=1000), M(1<= M <=10000), K(1<= K <=10000)가 주어지며 공백으로 구분한다.
# 둘째 줄에는 N개의 자연수가 주어지며, 각 자연수는 공백으로 구분한다. 각 자연수는 1~10000이다.
# K는 항상 M보다 작거나 같다.

# 출력조건
# 첫째 줄에 법칙의 결과를 출력한다.

# 풀이: (최댓값 * K + 두번째로 큰 값)이 반복되는 형태로 식을 세울 수 있으므로,
# 먼저 N개의 자연수를 정렬하여 최댓값, 두 번째로 큰 값을 구한다. (두 번째로 큰 값이 최댓값과 크기가 같아도 무관하다.)
n, m, k = map(int, input().split())
numbers = list(map(int, input().split()))
numbers.sort()
max = numbers[-1]
second = numbers[-2]
times = m // (k+1)
rest = m % (k+1)
result = (max * k + second) * times + (max * k * rest)
print("나의 답: ", result)

# Answer Example => M이 100억 이상이 된다면 시간 복잡도에서 실패 => 위의 풀이가 더 좋음
result = 0
while True:
    for i in range(k):
        if m == 0:
            break
        result += max
        m -= 1
    if m == 0:
        break
    result += second
    m -= 1
print("예시답안: ", result)
