/*
<���� ������ �Ǻ�>
������ ���� ���� n�� ����, n�� � ���� ���� x�� �������� �ƴ��� �Ǵ��Ϸ� �մϴ�.
n�� ���� ���� x�� �����̶�� x+1�� ������ �����ϰ�, n�� ���� ���� x�� ������ �ƴ϶�� -1�� �����ϴ� �Լ��� �ϼ��ϼ���.

���� ����
n�� 1�̻�, 50000000000000 ������ ���� �����Դϴ�.

<Ǯ��>
n�� ����� ������ Ȧ�� ���̸� x�� �����̴�.
�ݺ����� ������ Ǯ� �ǰ�����... n�� 50000000000000�� ��쿡�� �ִ� 25000000000000���� Ȯ���ؾ� �ؼ� ��ȿ������...?

=> �غôµ� ���� �ȵ�(�ð� �ʰ�) => �׳� Math�� ������

*/

public class SquareRoot {
	
    public long badSolution(long n) {
        long divisors = 0;
        long squareRoot = 0;
        for(long i=2; i<=n/2; i++) {
        	if(n % i == 0) {
        		divisors++;
        		if(i * i == n) {
        			squareRoot = i;        			
        		} 
        	}
        }
        long answer = 0;
        answer = divisors % 2 == 0 ? -1 : (squareRoot+1) * (squareRoot+1);
        return answer;
    }
    
    public long solution(long n) {
    	double squareRoot = Math.abs(Math.sqrt(n));
    	long x = (long)squareRoot;
    	long answer = squareRoot - x == 0 ? (x + 1) * (x + 1) : -1;
    	return answer;
    }
}
