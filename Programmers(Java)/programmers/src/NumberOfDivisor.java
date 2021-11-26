/*
<약수의 개수와 덧셈>
두 정수 left와 right가 매개변수로 주어집니다.
left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ left ≤ right ≤ 1,000

풀이: 약수의 개수는 1~n으로 나눠서 카운트하고 홀수인 경우 n * -1

다른 사람 풀이: 제곱수인 경우만 약수의 개수가 홀수인 점을 이용하면 됨.

*/

public class NumberOfDivisor {
    public int solution(int left, int right) {
    	int answer = 0;
    	for(int i=left; i<=right; i++) {
    		int count = 0;
    		for(int j=1; j<=i; j++) {
    			count = i % j == 0 ? count + 1 : count;
    		}
    		answer = count % 2 == 0 ? answer + i : answer - i;
    	}
        return answer;
    }
}
