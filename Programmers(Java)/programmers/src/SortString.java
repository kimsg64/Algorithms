import java.util.Arrays;

/* 
<문자열 내 마음대로 정렬하기>

문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

strings는 길이 1 이상, 50이하인 배열입니다.
strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
모든 strings의 원소의 길이는 n보다 큽니다.
인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.



<나의 풀이>
문자열의 인덱스 n을 기준으로 정렬해야 하고, 같은 경우는 사전순으로 정렬해야 하므로
모든 문자열의 가장 앞에 임시로 인덱스 n의 문자열을 준 뒤 정렬하면 될 듯

*/
public class SortString {
	
    public String[] solution(String[] strings, int n) {
    	for(int i=0; i<strings.length; i++) {
    		strings[i] = strings[i].substring(n, n+1) + strings[i];
    	}
    	Arrays.sort(strings);
    	for(int i=0; i<strings.length; i++) {
    		strings[i] = strings[i].substring(1);
    	}
    	String[] answer = strings;
        return answer;
    }
}
