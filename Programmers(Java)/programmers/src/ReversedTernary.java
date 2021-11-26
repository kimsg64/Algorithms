/*
<3진법 뒤집기>

자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

<나의 풀이>
순서대로 과정 따라가면 됩니다.
1. n을 3진법으로 변환(ternary)
2. 3진법으로 변환된 n을 string으로 바꾸고 반복문으로 뒤집어서 새 변수에 할당(reversedTernary)
3. 다시 자연수로 변환(answer)

을 하려고 했는데, 3진법을 구하는 과정이 reversedTernary를 먼저 구하는 구조라 1+2를 한 번에 해결 가능

*/
public class ReversedTernary {
    public static int solution(int n) {
    	
    	// reversedTernary 구하기
    	String reversedTernary = "";
    	while(true) {
    		if (n < 3) {
    			reversedTernary += n;
    			break;
    		}
    		reversedTernary += Integer.toString(n % 3);
    		n /= 3;
    	}
    	
    	// 자연수로 바꾸기
    	int answer = 0;
    	int multiplier = 1;
    	for(int i=reversedTernary.length()-1; i>=0; i--) {
    		answer += Integer.parseInt(reversedTernary.substring(i, i+1)) * multiplier;
    		multiplier *= 3;
    	}
        return answer;
    }
}
