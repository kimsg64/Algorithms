# 길이가 일정하지 않은 떡볶이 떡을 만든다. (총 길이는 H로 같다.)
# 높이가 H보다 긴 떡을 H만큼의 절단기로 잘라낸 나머지 부분을 손님이 가져가는 시스템이다.
# 요청한 총 길이가 M일 때 적어도 M만큼의 떡을 얻기 위해 절단기에 설정할 수 있는 H의 최댓값은?

# 입력 조건
# 첫째 줄에 떡의 개수 N과 요청한 떡의 길이 M이 주어진다. 1 <= N <= 1,000,000 / 1 <= M <= 2,000,000,000
# 둘째 줄에 떡의 개별 높이가 주어진다. 떡 높이의 총합은 항상 M 이상이므로 손님은 필요한 양만큼 사갈 수 있다. 높이는 10억보다 작거나 같은 양의 정수 또는 0이다.

# 출력 조건
# 적어도 M만큼의 떡을 집에 가져가기 위한 H의 최댓값을 출력한다.

# 풀이
# n은 왜 필요한거지...?
# 떡 배열에서 가장 큰 수부터 시작해서 1씩 줄여가며 H를 정하고,
# 떡 배열의 각각의 요소 - H >= M이 되는 경우의 H를 구하면 된다.

# 이걸 이진 탐색이랑 결합시키면, 1씩 줄이지 말고
# '0 ~ 가장 긴 떡의 길이' 범위 내에서 [떡-H]의 합이 M보다 크거나 같아지는 H를 찾으면 됨
import sys

n, m = map(int, sys.stdin.readline().split())
ttoeks = list(map(int, sys.stdin.readline().split()))

start = 0
end = max(ttoeks)
h = 0
print("손님의 목표", m)
while start<=end:
    mid = (start + end) // 2
    can_get = 0 # 손님이 가져갈 떡의 길이
    print(start, end, mid, m, ttoeks)
    for i in ttoeks:
        # 갖고 있는 떡에서 h만큼 뺀 나머지(0보다 큰 경우만)
        if i - mid > 0:
            can_get += (i - mid) # h가 클수록 can_get이 작아짐
    if can_get < m:
        end = mid - 1
        # 여기선 h를 갱신하지 않으므로...
    elif can_get >= m:
        h = mid
        start = mid + 1
        print("h가", h, "일 때")
        print("가져가기 가능", can_get)
