/*
<3���� ������>

�ڿ��� n�� �Ű������� �־����ϴ�. n�� 3���� �󿡼� �յڷ� ������ ��, �̸� �ٽ� 10�������� ǥ���� ���� return �ϵ��� solution �Լ��� �ϼ����ּ���.

<���� Ǯ��>
������� ���� ���󰡸� �˴ϴ�.
1. n�� 3�������� ��ȯ(ternary)
2. 3�������� ��ȯ�� n�� string���� �ٲٰ� �ݺ������� ����� �� ������ �Ҵ�(reversedTernary)
3. �ٽ� �ڿ����� ��ȯ(answer)

�� �Ϸ��� �ߴµ�, 3������ ���ϴ� ������ reversedTernary�� ���� ���ϴ� ������ 1+2�� �� ���� �ذ� ����

*/
public class ReversedTernary {
    public static int solution(int n) {
    	
    	// reversedTernary ���ϱ�
    	String reversedTernary = "";
    	while(true) {
    		if (n < 3) {
    			reversedTernary += n;
    			break;
    		}
    		reversedTernary += Integer.toString(n % 3);
    		n /= 3;
    	}
    	
    	// �ڿ����� �ٲٱ�
    	int answer = 0;
    	int multiplier = 1;
    	for(int i=reversedTernary.length()-1; i>=0; i--) {
    		answer += Integer.parseInt(reversedTernary.substring(i, i+1)) * multiplier;
    		multiplier *= 3;
    	}
        return answer;
    }
}
