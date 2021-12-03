/*
<이상한 문자 만들기>
문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

제한 사항
문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다. 


<풀이>
공백이 두 번 이상 연속되는 케이스를 잘 생각해서 풀어야 함... 

*/
public class WeirdWord {
    public String solution(String s) {
    	String answer = "";
    	String[] words = s.split(" ");  
    	for(int i=0; i<words.length; i++) {
    		for(int j=0; j<words[i].length(); j++) {
    			String character = words[i].substring(j, j+1);
    			character = j % 2 == 0 ? character.toUpperCase() : character.toLowerCase();
    			answer += character;
    		}
            if(i != words.length - 1) {
    		    answer += " ";                
            }
    	}
        while(s.substring(s.length() - 1, s.length()).equals(" ")) {
            s = s.substring(0, s.length() - 1);
            answer += " ";
        }
        return answer;
    }
}
