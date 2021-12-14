# 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다.
# N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오.

# 입력조건: 첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.
# 출력조건: 첫째 줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다.

# 풀이: 각 자리 숫자를 나눠서 비교 => 110의 한수가 99개인 것을 보면, 100~110은 모두 한수가 아니므로 1~99는 한수
# 즉, 공차가 0인 경우도 한수이며 한 자리 수도 한수이다.
# 따라서, 두 자리 수(1~99)는 그냥 n을 반환하면 계산을 줄일 수 있을 듯, 1000도 한수가 아니므로, 한수 체크는 세 자리 수만 하면 될 것

n = int(input())

def underHundred(n, array):
    for i in range(1, n+1):
        array.append(i)
    return array

def checkHanNum(n):
    hanNum = []
    # 2자리 수까지는 전부 한수
    if n < 100:
        underHundred(n, hanNum)
    # 3자리 수만 확인, 1000도 한수가 아님
    else:
        underHundred(99, hanNum)
        for i in range(100, n+1):
            first = i // 100
            second = (i - first*100) // 10
            third = i - first*100 - second*10
            if (first - second) == (second - third):
                hanNum.append(i)
    return hanNum

print(len(checkHanNum(n)))
