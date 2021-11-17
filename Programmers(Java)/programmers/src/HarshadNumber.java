/*
<�ϻ��� ��>
���� ���� x�� �ϻ��� ���̷��� x�� �ڸ����� ������ x�� ���������� �մϴ�.
���� ��� 18�� �ڸ��� ���� 1+8=9�̰�, 18�� 9�� ������ �������Ƿ� 18�� �ϻ��� ���Դϴ�.
�ڿ��� x�� �Է¹޾� x�� �ϻ��� ������ �ƴ��� �˻��ϴ� �Լ�, solution�� �ϼ����ּ���. 

���� ����
x�� 1 �̻�, 10000 ������ �����Դϴ�.

<���� Ǯ��>
���� ���� ������� x�� �� �ڸ����� ���� x�� ����� ������ ���������� Ȯ���ϸ� �ȴ�.
	- ���� Ǯ��: ���ڸ� ���ڿ��� �ٲ㼭 �ɰ� �� ���� ���Ѵ�.
	- �̹� Ǯ��: �� �ڸ��� ���ڸ� ���ϴ� ���� ���� ���Ѵ�.
*/


public class HarshadNumber {
	
	public static void main(String[] args) {
		solution(11);
	}
	
    public static boolean solution(int x) {
        int sum = 0;
        int temp = x;
        int divisor = 1000;
        while(divisor >= 1) {
        	sum += temp/divisor;
        	temp -= (temp/divisor)*divisor;
        	divisor /= 10;
        }
        boolean answer = (x == 10000) ? true : (x % sum == 0) ? true : false; 
        return answer;
    }
}
