/*
<�ڿ��� ������ �迭�� �����>

�ڿ��� n�� ������ �� �ڸ� ���ڸ� ���ҷ� ������ �迭 ���·� �������ּ���. ������� n�� 12345�̸� [5,4,3,2,1]�� �����մϴ�.
���� ����
n�� 10,000,000,000������ �ڿ����Դϴ�.


 */
public class ReverseNumber {
    public int[] solution(long n) {
    	String strN = Long.toString(n);
    	int[] answer = new int[strN.length()];
    	for(int i=0; i<strN.length(); i++) {
    		answer[strN.length()-1-i] = Integer.parseInt(strN.substring(i, i+1));
    	}
        return answer;
    }
}
