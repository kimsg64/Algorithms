/*
<�������� 1�� �Ǵ� �� ã��>
�ڿ��� n�� �Ű������� �־����ϴ�.
n�� x�� ���� �������� 1�� �ǵ��� �ϴ� ���� ���� �ڿ��� x�� return �ϵ��� solution �Լ��� �ϼ����ּ���.
���� �׻� �������� ����� �� �ֽ��ϴ�.

���ѻ���
3 �� n �� 1,000,000

���� Ǯ��: ���� ������ �������� 1���� Ȯ�� 
*/
public class Remainder {
    public int solution(int n) {
        int answer = 0;
        for(int i=2; i<n; i++) {
        	if(n % i == 1) {
        		answer = i;
        		break;
        	}
        }
        return answer;
    }
}
