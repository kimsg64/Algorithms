N, M, K = map(int, input().split())
n_list = list(map(int, input().split()))
# M번 더해서 가장 큰 수... 최대 K번까지 동일한 수 더하기 가능
# (n_list의 최댓값 * K + n_list의 두 번째 큰 값) * (M // K) + (n_list의 최댓값 * M % (K+1))
n_list.sort()
answer = (((n_list[-1] * K) + (n_list[-2])) * (M // K)) + (n_list[-1] * (M % (K + 1)))
print(answer)
