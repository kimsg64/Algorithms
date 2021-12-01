/*

<x��ŭ ������ �ִ� n���� ����>
�Լ� solution�� ���� x�� �ڿ��� n�� �Է� �޾�, x���� ������ x�� �����ϴ� ���ڸ� n�� ���ϴ� ����Ʈ�� �����ؾ� �մϴ�. ���� ���� ������ ����, ������ �����ϴ� �Լ�, solution�� �ϼ����ּ���.

���� ����
x�� -10000000 �̻�, 10000000 ������ �����Դϴ�.
n�� 1000 ������ �ڿ����Դϴ�.


<Ǯ��> x * 1, x * 2, ... x * n
�����÷ο찡 �߻��� �� �����Ƿ� long���� ����ȯ�� �� �ؾ� ��

*/
public class NumThatHasXSteps {
    public long[] solution(int x, int n) {
        long[] answer = new long[n];
        for (int i=0; i<n; i++) {
        	answer[i] = (long)x * (i+1);
        }
        return answer;
    }
}
