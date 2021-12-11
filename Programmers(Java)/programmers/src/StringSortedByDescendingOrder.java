/*
<문자열 내림차순으로 정렬하기>
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.
str은 길이 1 이상인 문자열입니다.

<풀이>
대문자가 소문자보다 작으므로 char의 크기를 비교해서 정렬하면 됨
연습용... 삽입 정렬로 풀어보기
삽입 정렬: 배열의 길이를 하나씩 늘려 가면서 앞의 숫자들이랑 비교해서 자리 바꾸기
이중 for문을 쓰는건 똑같지만 한 번 반복될 때마다 앞의 배열은 정렬되므로 조금 더 효율적

문자 크기 비교할 때 그냥 하면 안 된다고 함... 왜?

*/
public class StringSortedByDescendingOrder {
	
	public static void main(String args[]) {
		solution("Zbcdefg");
	}
	
    public static String solution(String s) {
    	char[] chars = s.toCharArray();
    	for(int i=1; i<chars.length; i++) {
    		for(int j=i; j>=1; j--) {
                System.out.println("비교: " + chars[j-1] + chars[j]);
                System.out.println(Character.compare(chars[j-1], chars[j]));
                if(Character.compare(chars[j-1], chars[j]) < 0) {
    				char temp = chars[j];
    				chars[j] = chars[j-1];
    				chars[j-1] = temp;
                    System.out.println("결과: " + chars[j-1] + chars[j]);
    			}
    		}
        }
        String answer = new String(chars);
        System.out.println(answer);
        return answer;
    }
}
