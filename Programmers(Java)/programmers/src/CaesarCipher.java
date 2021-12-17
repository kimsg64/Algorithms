/*
<시저 암호>
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 
자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

제한 조건
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.

<풀이>
문자열의 모든 요소의 아스키 코드 검사 > 공백/대문자(65~90)/소문자(97~122) 케이스로 나눠서 검사
각 범위를 넘어가면 26을 빼면 된다.

 */
public class CaesarCipher {
    public String solution(String s, int n) {
    	char[] answerArray = new char[s.length()];
    	for(int i=0; i<s.length(); i++) {
    		char target = s.charAt(i);
    		if(target == ' ') {
    			answerArray[i] = ' ';
    		} else if(65 <= target && target <= 90) {
    			answerArray[i] = target + n > 90 ? (char)(target + n - 26) : (char)(target + n);
    		} else if(97 <= target && target <= 122) {
    			answerArray[i] = target + n > 122 ? (char)(target + n - 26) : (char)(target + n);
    		}
    	}
    	String answer = new String(answerArray);
        return answer;
    }
}
