/* 
<�ڸ��� ���ϱ�>
�ڿ��� N�� �־�����, N�� �� �ڸ����� ���� ���ؼ� return �ϴ� solution �Լ��� ����� �ּ���.
������� N = 123�̸� 1 + 2 + 3 = 6�� return �ϸ� �˴ϴ�.

���ѻ���
N�� ���� : 100,000,000 ������ �ڿ���

Ǯ��
1. String���� �ٲ㼭 substring
2. 10���� ���� �������� ���ϱ�

*/
public class AddPlaceValues {
    public int solution(int n) {
        int answer = 0;
        while(n >= 10) {
        	answer += (n % 10);
        	n = n/10;
        }
        answer += n;
        return answer;
    }
}
