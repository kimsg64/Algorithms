/*
<최대공약수와 최소공배수>
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

제한 사항
두 수는 1이상 1000000이하의 자연수입니다.

나의 풀이
최대공약수: a<b라고 하면 최대공약수는 a보다 작거나 같음, 1~a 중 a, b를 나누었을 때 나누어 떨어지는 가장 큰 수를 반복문으로 구하기
최소공배수: a * b 를 최대공약수로 나누면 됨
*/
public class CommonMultipleAndDivisor {
    public int[] solution(int n, int m) {
    	int less = n > m ? m : n;
    	int greater = n >= m ? n : m;
    	int greatestCommonDivisor = 0;
    	for(int i=1; i<=less; i++) {
    		greatestCommonDivisor = (greater % i == 0 && less % i == 0) ? i : greatestCommonDivisor; 
    	}
    	int leastCommonMultiple = n * m / greatestCommonDivisor;
    	int[] answer = {greatestCommonDivisor, leastCommonMultiple};
        return answer;
    }
}
