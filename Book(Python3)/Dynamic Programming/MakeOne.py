# 정수 X가 주어질 때, 정수 X에 사용할 수 있는 연산이 다음과 같이 4가지 있다.
# X가 5로 나누어 떨어지면 5로 나눈다.
# X가 3으로 나누어 떨어지면 3으로 나눈다.
# X가 2로 나누어 떨어지면 2로 나눈다.
# X에서 1을 뺀다.
# 정수 X가 주어졌을 때, 연산 4개를 적절히 사용해 1을 만들려고 한다. 연산 횟수의 최솟값을 구하시오

# 입력 조건: 첫째 줄에 정수 X가 주어진다(1 <= X <= 30000)
# 출력 조건: 첫째 줄에 연산을 하는 횟수의 최솟값을 출력한다.

# 풀이 => 연산 횟수를 최소화해야 하므로, 큰 수부터 체크해 본다.
# 5, 3, 2로 더이상 나눠지지 않는 상태가 되면 이후로는 배제한다.
# 전부 안 되는 경우 1을 빼고 다시 돌린다.

x = int(input())
can_divide_by_five = True
can_divide_by_three = True
can_divide_by_two = True
count = 0
while x > 1:
    if x % 5 == 0 & can_divide_by_five:
        x /= 5
    elif x % 3 == 0 & can_divide_by_three:
        can_divide_by_five = False
        x /= 3
    elif x % 2 == 0 & can_divide_by_two:
        can_divide_by_three = False
        x /= 2
    else:
        x -= 1
        can_divide_by_five = True
        can_divide_by_three = True
        can_divide_by_two = True
    count += 1
    print(count, "회차 계산 결과:", x)
print(count)

# 라고 생각했더니? 1을 먼저 빼는게 최소인 경우도 있으므로
# 1을 뺀 숫자도 같이 체크해 봐야 된다.
# 정답 예시는, bottom-up 방식으로 점화식을 만드는 것이다.
# 포인트는 실제 주어진 x를 나누는 것이 아니라, 길이가 x의 최댓값(30000) + 1인 배열을 만들어서 값이 있는 경우에만 1을 더해 나가는 것이다.
x = int(input())
d = [0] * 30001
for i in range(2, x+1):
    d[i] = d[i-1] + 1
    if i % 2 == 0:
        d[i] = min(d[i], d[i//2] + 1)
    if i % 3 == 0:
        d[i] = min(d[i], d[i//3] + 1)
    if i % 5 == 0:
        d[i] = min(d[i], d[i//5] + 1)
print(d)
print(d[x])
