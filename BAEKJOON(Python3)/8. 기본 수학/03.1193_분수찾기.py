# 무한히 큰 배열에 다음과 같이 분수들이 적혀있다.
# 1/1	1/2	1/3	1/4	1/5	…
# 2/1	2/2	2/3	2/4	…	…
# 3/1	3/2	3/3	…	…	…
# 4/1	4/2	…	…	…	…
# 5/1	…	…	…	…	…
# …	…	…	…	…	…
# 이와 같이 나열된 분수들을 1/1 → 1/2 → 2/1 → 3/1 → 2/2 → … 과 같은 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.
# X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.

# 입력 조건: 첫째 줄에 X(1 ≤ X ≤ 10,000,000)가 주어진다.
# 출력 조건: 첫째 줄에 분수를 출력한다.

# 풀이
# 지그재그 순서는 1/1 => 1/2 => 2/1 => 3/1 => 2/2 => 1/3 => 1/4 => 2/3 => 3/2 => 4/1 ... 인 것 같다
# 대각선 모양의 배열에 든 원소라고 가정하고 나눠 보면
# [1/1]
# [1/2, 2/1]
# [3/1, 2/2, 1/3]
# [1/4, 2/3, 3/2, 4/1]
# [5/1, 4/2, 3/3, 2/4, 1/5]
# [1/6, 2/5, 3/4, 4/3, 5/2, 6/1]...
# 이런 모양의 이차원 배열이 된다.

x = int(input())

max_denominator = 1
index_of_array = 0
result = ""
while x > 0:
    if x - max_denominator > 0:
        x -= max_denominator
        max_denominator += 1
        index_of_array += 1
    else:
        # 여기부터 배열 조사
        # x는 분모/분자 중 큰 수가 되고, 작은 수는 max_denominators에서 x - 1을 뺀 값
        # index_of_array가 짝수면 큰 수가 분모
        denominator = 0
        numerator = 0
        if index_of_array % 2 == 0:
            denominator = x
            numerator = max_denominator - (x - 1)
        else:
            denominator = max_denominator - (x - 1)
            numerator = x
        result = str(numerator) + "/" + str(denominator)
        break
print(result)
