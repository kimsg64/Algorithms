/*
<���� ���ڿ��� ���ܾ�>

�׿��� ���ε��� ���ڳ��̸� �ϰ� �ֽ��ϴ�. �׿��� ���ε����� ���ڸ� �ǳ� �� �Ϻ� �ڸ����� ���ܾ�� �ٲ� ī�带 �ǳ��ָ� ���ε��� ���� ���ڸ� ã�� �����Դϴ�.
������ ������ �Ϻ� �ڸ����� ���ܾ�� �ٲٴ� �����Դϴ�.
1478 �� "one4seveneight"
234567 �� "23four5six7"
10203 �� "1zerotwozero3"
�̷��� ������ �Ϻ� �ڸ����� ���ܾ�� �ٲ�����ų�, Ȥ�� �ٲ��� �ʰ� �״���� ���ڿ� s�� �Ű������� �־����ϴ�. s�� �ǹ��ϴ� ���� ���ڸ� return �ϵ��� solution �Լ��� �ϼ����ּ���.
����� �� ���ڿ� �����Ǵ� ���ܾ�� ���� ǥ�� �����ϴ�.
����	���ܾ�
0	zero
1	one
2	two
3	three
4	four
5	five
6	six
7	seven
8	eight
9	nine

���ѻ���
1 �� s�� ���� �� 50
s�� "zero" �Ǵ� "0"���� �����ϴ� ���� �־����� �ʽ��ϴ�.
return ���� 1 �̻� 2,000,000,000 ������ ������ �Ǵ� �ùٸ� �Է¸� s�� �־����ϴ�.


Ǯ��: replaceAll�� ���� ������ ��

 */
public class English {
    public int solution(String s) {
    	String[] english = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
    	String[] number = {"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"};
    	for(int i=0; i<english.length; i++) {
    		s = s.replaceAll(english[i], number[i]);
    	}
        int answer = Integer.parseInt(s); 
        return answer;
    }
}
