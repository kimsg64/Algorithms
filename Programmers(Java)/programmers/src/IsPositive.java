/*
<���� ���ϱ�>
� �������� �ֽ��ϴ�.
�� �������� ������ ���ʴ�� ���� ���� �迭 absolutes�� �� �������� ��ȣ�� ���ʴ�� ���� �Ҹ��� �迭 signs�� �Ű������� �־����ϴ�.
���� �������� ���� ���Ͽ� return �ϵ��� solution �Լ��� �ϼ����ּ���.

���ѻ���
absolutes�� ���̴� 1 �̻� 1,000 �����Դϴ�.
absolutes�� ��� ���� ���� 1 �̻� 1,000 �����Դϴ�.
signs�� ���̴� absolutes�� ���̿� �����ϴ�.
signs[i] �� ���̸� absolutes[i] �� ���� ������ �������, �׷��� ������ �������� �ǹ��մϴ�.

*/
public class IsPositive {
    public int solution(int[] absolutes, boolean[] signs) {
    	int answer = 0;
    	for(int i=0; i<signs.length; i++) {
    		absolutes[i] = signs[i] ? absolutes[i] : -1 * absolutes[i];
    		answer += absolutes[i]; 
    	}
        return answer;
    }
}
