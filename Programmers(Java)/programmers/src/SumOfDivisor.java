/*
<����� ��>
���� n�� �Է¹޾� n�� ����� ��� ���� ���� �����ϴ� �Լ�, solution�� �ϼ����ּ���.
n�� 0 �̻� 3000������ �����Դϴ�.



 */

public class SumOfDivisor {
    public int solution(int n) {
    	int answer = 0;
    	for(int i=1; i<=n; i++) {
    		answer = n % i == 0 ? answer + i : answer;  
    	}
        return answer;
    }
}
