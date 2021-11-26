/*
<�ִ������� �ּҰ����>
�� ���� �Է¹޾� �� ���� �ִ������� �ּҰ������ ��ȯ�ϴ� �Լ�, solution�� �ϼ��� ������.
�迭�� �� �տ� �ִ�����, �״��� �ּҰ������ �־� ��ȯ�ϸ� �˴ϴ�.
���� ��� �� �� 3, 12�� �ִ������� 3, �ּҰ������ 12�̹Ƿ� solution(3, 12)�� [3, 12]�� ��ȯ�ؾ� �մϴ�.

���� ����
�� ���� 1�̻� 1000000������ �ڿ����Դϴ�.

���� Ǯ��
�ִ�����: a<b��� �ϸ� �ִ������� a���� �۰ų� ����, 1~a �� a, b�� �������� �� ������ �������� ���� ū ���� �ݺ������� ���ϱ�
�ּҰ����: a * b �� �ִ������� ������ ��
*/
public class CommonMultipleAndDivisor {
    public int[] solution(int n, int m) {
    	int less = n > m ? m : n;
    	int greater = n >= m ? n : m;
    	int greatestCommonDivisor = 0;
    	for(int i=1; i<=less; i++) {
    		greatestCommonDivisor = (greater % i == 0 && less % i == 0) ? i : greatestCommonDivisor; 
    	}
    	int leastCommonMultiple = n * m / greatestCommonDivisor;
    	int[] answer = {greatestCommonDivisor, leastCommonMultiple};
        return answer;
    }
}
