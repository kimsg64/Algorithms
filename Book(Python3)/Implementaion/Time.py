# 정수 N이 입력되면 00시 00분 00초부터 N시 59분 59초까지의 모든 시각 중에서 3이 하나라도 포함되는 모든 경우의 수를 구하는 프로그램을 작성하시오
# 입력 조건: 첫째 줄에 정수 N이 입력된다(0 <= N =< 23)
# 출력 조건: 00시 00분 00초부터 N시 59분 59초까지의 모든 시각 중에서 3이 하나라도 포함되는 모든 경우의 수를 출력한다.

# 풀이
# 3이 들어가는 경우의 수를 완전 탐색하면 된다.
# n을 입력받으면 n시 59분 59초까지를 카운팅하고 문자열을 체크

n = input()

max = (int(n) + 1) * 3600
count = 0
result = 0

while(count <= max):
    hour = str(count // 3600)
    min = str((count % 3600) // 60)
    sec = str((count % 3600) % 60)
    if hour.find("3") != -1:
        result += 1
    elif min.find("3") != -1:
        result += 1
    elif sec.find("3") != -1:
        result += 1
    count += 1
print(result)

# Example Answer: 삼중 반복문 이용
n = int(input())

count = 0
for i in range(n + 1):
    for j in range(60):
        for k in range(60):
            if '3' in str(i) + str(j) + str(k):
                count += 1
print(count)
