/*
 
���̰� n�̰�, "���ڼ��ڼ��ڼ�...."�� ���� ������ �����ϴ� ���ڿ��� �����ϴ� �Լ�, solution�� �ϼ��ϼ���. ������� n�� 4�̸� "���ڼ���"�� �����ϰ� 3�̶�� "���ڼ�"�� �����ϸ� �˴ϴ�.
 
*/

public class Watermelon {
	public String solution(int n) {
		String answer = "";
		if(n%2 == 0) {
			for(int i=0; i<=n/2; i++) {
				answer += "����";
			}
		} else {
			for(int i=0; i<=n/2; i++) {
				answer += "����";
			}
			answer += "��";
		}
		return answer;
	}
}
