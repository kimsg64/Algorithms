import java.util.Arrays;

/* 
<���ڿ� �� ������� �����ϱ�>

���ڿ��� ������ ����Ʈ strings��, ���� n�� �־����� ��, �� ���ڿ��� �ε��� n��° ���ڸ� �������� �������� �����Ϸ� �մϴ�.
���� ��� strings�� ["sun", "bed", "car"]�̰� n�� 1�̸� �� �ܾ��� �ε��� 1�� ���� "u", "e", "a"�� strings�� �����մϴ�.

strings�� ���� 1 �̻�, 50������ �迭�Դϴ�.
strings�� ���Ҵ� �ҹ��� ���ĺ����� �̷���� �ֽ��ϴ�.
strings�� ���Ҵ� ���� 1 �̻�, 100������ ���ڿ��Դϴ�.
��� strings�� ������ ���̴� n���� Ů�ϴ�.
�ε��� 1�� ���ڰ� ���� ���ڿ��� ���� �� ���, ���������� �ռ� ���ڿ��� ���ʿ� ��ġ�մϴ�.



<���� Ǯ��>
���ڿ��� �ε��� n�� �������� �����ؾ� �ϰ�, ���� ���� ���������� �����ؾ� �ϹǷ�
��� ���ڿ��� ���� �տ� �ӽ÷� �ε��� n�� ���ڿ��� �� �� �����ϸ� �� ��

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
