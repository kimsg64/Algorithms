/*
<���ڿ� �ٷ�� �⺻>
���ڿ� s�� ���̰� 4 Ȥ�� 6�̰�, ���ڷθ� �������ִ��� Ȯ�����ִ� �Լ�, solution�� �ϼ��ϼ���. ���� ��� s�� "a234"�̸� False�� �����ϰ� "1234"��� True�� �����ϸ� �˴ϴ�.

���� ����
s�� ���� 1 �̻�, ���� 8 ������ ���ڿ��Դϴ�.


Ǯ��: ����ǥ�������� 0-9 �������� üũ

*/
public class HandleString {
    public boolean solution(String s) {
        boolean answer = (s.length() == 4 || s.length() == 6 ) && (s.matches("[0-9]+")) ? true : false;
        return answer;
    }
}
