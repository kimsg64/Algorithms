import sys
N = int(sys.stdin.readline())

# N시 59분 59초까지 3이 하나라도 포함되는 case
# 1 초에서 포함 => 일정(3, 13, 23, 30~39, 43, 53) => 15가지(분당 15가지가 있음)
# 2 분에서 => 일정(3, 13, 23, 30~39, 43, 53) => 원래 분당 15가지인데, 이 15가지 케이스는 60개임 => 시간당 (60 * 15) + (15 * 45)
#         => 즉, 60개 중 분당 기본 15가지가 있으며, 60개 중 15개는 분당 45개가 더 있음
# 3 시에서 => N에 따라 바뀜
#           => 시간당 기본 (60 * 15) + (15 * 45)
#           => 3시, 13시, 23시는 시간당 60 * 60가지
not_three_hour = 15 * 105
three_hour = 3600
answer = 0
for i in range(N+1):
    if i == 3 or i == 13 or i == 23:
        answer += three_hour
    else:
        answer += not_three_hour
print(answer)

# 다른 풀이
count = 0
for h in range(N+1):
    for m in range(60):
        for s in range(60):
            time_str = str(h) + str(m) + str(s)
            if time_str.find("3") > -1:
                count += 1
print(count)
