/*
<자연수 뒤집어 배열로 만들기>

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
제한 조건
n은 10,000,000,000이하인 자연수입니다.


 */
public class ReverseNumber {
    public int[] solution(long n) {
    	String strN = Long.toString(n);
    	int[] answer = new int[strN.length()];
    	for(int i=0; i<strN.length(); i++) {
    		answer[strN.length()-1-i] = Integer.parseInt(strN.substring(i, i+1));
    	}
        return answer;
    }
}
