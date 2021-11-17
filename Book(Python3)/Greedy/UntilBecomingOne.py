# 어떤 수 N이 1이 될 떄까지 두 과정 중 하나를 선택하여 반복적으로 수행한다.
# 1. N에서 1을 뺀다.
# 2. N을 K로 나눈다. (N이 K로 나누어 떨어질 때만 선택할 수 있음)
# 이 때 N이 1이 될 때까지 두 과정 중 하나를 수행해야 하는 최소 횟수는?

# 입력조건
# 첫째 줄에 N(2 <= N <= 100,000), K(2 <= K <= 100,000)가 공백으로 구분되며 각각 자연수로 주어진다. N은 항상 K보다 크다.

# 출력 조건
# 첫째 줄에 N이 1이 될 때까지 수행해야 하는 과정의 최소 횟수를 출력

# 풀이: N을 K로 나누어 보고, 나누어 떨어질 때까지 반복 => 나누어 떨어지면 몫이 1이 될 때까지 나누기 반복
# 그런데 생각해 보면 어차피 나머지는 일일이 더할 필요 없이 어딘가에 저장해 뒀다가 한 번에 더해도 될 것 같다.
# 다만 이렇게 할 경우, n이 0 이하의 수가 될 수 있으므로, 해답과 같이 다른 조건이 추가적으로 필요하다
n, k = map(int, input().split())
count = 0
while(n != 1):
    if (n % k == 0):
        n //= k
    else :
        n -= 1
    count += 1
print("나의 답: ", count)

# Answer Exapmle
n, k = map(int, input().split())
result = 0
while True:
    # 나머지를 저장해 뒀다가 한 번에 빼기
    target = (n // k) * k
    result += (n - target)
    n = target
    # n이 더 작으면 탈출
    if n < k:
        break
    result += 1
    n //= k
result += (n - 1)
print("예시답안: ", result)
