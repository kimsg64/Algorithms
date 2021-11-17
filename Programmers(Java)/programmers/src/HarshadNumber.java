/*
<하샤드 수>
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요. 

제한 조건
x는 1 이상, 10000 이하인 정수입니다.

<나의 풀이>
문제 조건 순서대로 x의 각 자릿수의 합을 x로 나누어서 나누어 떨어지는지 확인하면 된다.
	- 이전 풀이: 숫자를 문자열로 바꿔서 쪼갠 뒤 합을 구한다.
	- 이번 풀이: 각 자리의 숫자를 구하는 식을 세워 더한다.
*/


public class HarshadNumber {
	
	public static void main(String[] args) {
		solution(11);
	}
	
    public static boolean solution(int x) {
        int sum = 0;
        int temp = x;
        int divisor = 1000;
        while(divisor >= 1) {
        	sum += temp/divisor;
        	temp -= (temp/divisor)*divisor;
        	divisor /= 10;
        }
        boolean answer = (x == 10000) ? true : (x % sum == 0) ? true : false; 
        return answer;
    }
}
