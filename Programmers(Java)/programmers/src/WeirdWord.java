/*
<�̻��� ���� �����>
���ڿ� s�� �� �� �̻��� �ܾ�� �����Ǿ� �ֽ��ϴ�.
�� �ܾ�� �ϳ� �̻��� ���鹮�ڷ� ���еǾ� �ֽ��ϴ�.
�� �ܾ��� ¦����° ���ĺ��� �빮�ڷ�, Ȧ����° ���ĺ��� �ҹ��ڷ� �ٲ� ���ڿ��� �����ϴ� �Լ�, solution�� �ϼ��ϼ���.

���� ����
���ڿ� ��ü�� ¦/Ȧ�� �ε����� �ƴ϶�, �ܾ�(������ ����)���� ¦/Ȧ�� �ε����� �Ǵ��ؾ��մϴ�.
ù ��° ���ڴ� 0��° �ε����� ���� ¦����° ���ĺ����� ó���ؾ� �մϴ�. 


<Ǯ��>
������ �� �� �̻� ���ӵǴ� ���̽��� �� �����ؼ� Ǯ��� ��... 

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
