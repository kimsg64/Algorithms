/*
<�ڵ��� ��ȣ ������>
���α׷��ӽ� ������� �������� ��ȣ�� ���� �������� ���� �� ������ ��ȭ��ȣ�� �Ϻθ� �����ϴ�.
��ȭ��ȣ�� ���ڿ� phone_number�� �־����� ��, ��ȭ��ȣ�� �� 4�ڸ��� ������ ������ ���ڸ� ���� *���� ���� ���ڿ��� �����ϴ� �Լ�, solution�� �ϼ����ּ���.

���� ����
s�� ���� 4 �̻�, 20������ ���ڿ��Դϴ�.

  */
public class HidePhoneNumber {
    public String solution(String phone_number) {
        String answer = "";
        for(int i=0; i<phone_number.length(); i++) {
        	if(i < phone_number.length() - 4) {
        		answer += "*";        		
        	} else {
        		answer += String.valueOf(phone_number.charAt(i));
        	}
        }
        return answer;
    }
}
