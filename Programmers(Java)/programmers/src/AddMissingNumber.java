/*
<���� ���� ���ϱ�>
0���� 9������ ���� �� �Ϻΰ� ����ִ� �迭 numbers�� �Ű������� �־����ϴ�.
numbers���� ã�� �� ���� 0���� 9������ ���ڸ� ��� ã�� ���� ���� return �ϵ��� solution �Լ��� �ϼ����ּ���.

���ѻ���
1 �� numbers�� ���� �� 9
0 �� numbers�� ��� �� �� 9
numbers�� ��� ���� ���� �ٸ��ϴ�.

Ǯ��:
0~9�� ���� 45�̹Ƿ� 45���� numbers�� ��� ���� ���� ���� ��
*/
public class AddMissingNumber {
    public int solution(int[] numbers) {
    	int answer = 45;
    	for(int i=0; i<numbers.length; i++) {
    		answer -= numbers[i];
    	}
        return answer;
    }
}
