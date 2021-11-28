/*
<����� ������ ����>
�� ���� left�� right�� �Ű������� �־����ϴ�.
left���� right������ ��� ���� �߿���, ����� ������ ¦���� ���� ���ϰ�, ����� ������ Ȧ���� ���� �� ���� return �ϵ��� solution �Լ��� �ϼ����ּ���.

���ѻ���
1 �� left �� right �� 1,000

Ǯ��: ����� ������ 1~n���� ������ ī��Ʈ�ϰ� Ȧ���� ��� n * -1

�ٸ� ��� Ǯ��: �������� ��츸 ����� ������ Ȧ���� ���� �̿��ϸ� ��.

*/

public class NumberOfDivisor {
    public int solution(int left, int right) {
    	int answer = 0;
    	for(int i=left; i<=right; i++) {
    		int count = 0;
    		for(int j=1; j<=i; j++) {
    			count = i % j == 0 ? count + 1 : count;
    		}
    		answer = count % 2 == 0 ? answer + i : answer - i;
    	}
        return answer;
    }
}
