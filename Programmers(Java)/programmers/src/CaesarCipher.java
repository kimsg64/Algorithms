/*
<���� ��ȣ>
� ������ �� ���ĺ��� ������ �Ÿ���ŭ �о �ٸ� ���ĺ����� �ٲٴ� ��ȣȭ ����� ���� ��ȣ��� �մϴ�.
���� ��� "AB"�� 1��ŭ �и� "BC"�� �ǰ�, 3��ŭ �и� "DE"�� �˴ϴ�. "z"�� 1��ŭ �и� "a"�� �˴ϴ�. 
�ڿ� s�� �Ÿ� n�� �Է¹޾� s�� n��ŭ �� ��ȣ���� ����� �Լ�, solution�� �ϼ��� ������.

���� ����
������ �ƹ��� �о �����Դϴ�.
s�� ���ĺ� �ҹ���, �빮��, �������θ� �̷���� �ֽ��ϴ�.
s�� ���̴� 8000�����Դϴ�.
n�� 1 �̻�, 25������ �ڿ����Դϴ�.

<Ǯ��>
���ڿ��� ��� ����� �ƽ�Ű �ڵ� �˻� > ����/�빮��(65~90)/�ҹ���(97~122) ���̽��� ������ �˻�
�� ������ �Ѿ�� 26�� ���� �ȴ�.

 */
public class CaesarCipher {
    public String solution(String s, int n) {
    	char[] answerArray = new char[s.length()];
    	for(int i=0; i<s.length(); i++) {
    		char target = s.charAt(i);
    		if(target == ' ') {
    			answerArray[i] = ' ';
    		} else if(65 <= target && target <= 90) {
    			answerArray[i] = target + n > 90 ? (char)(target + n - 26) : (char)(target + n);
    		} else if(97 <= target && target <= 122) {
    			answerArray[i] = target + n > 122 ? (char)(target + n - 26) : (char)(target + n);
    		}
    	}
    	String answer = new String(answerArray);
        return answer;
    }
}
