/*
<���ڿ� ������������ �����ϱ�>
���ڿ� s�� ��Ÿ���� ���ڸ� ū�ͺ��� ���� ������ ������ ���ο� ���ڿ��� �����ϴ� �Լ�, solution�� �ϼ����ּ���.
s�� ���� ��ҹ��ڷθ� �����Ǿ� ������, �빮�ڴ� �ҹ��ں��� ���� ������ �����մϴ�.
str�� ���� 1 �̻��� ���ڿ��Դϴ�.

<Ǯ��>
�빮�ڰ� �ҹ��ں��� �����Ƿ� char�� ũ�⸦ ���ؼ� �����ϸ� ��
������... ���� ���ķ� Ǯ���
���� ����: �迭�� ���̸� �ϳ��� �÷� ���鼭 ���� ���ڵ��̶� ���ؼ� �ڸ� �ٲٱ�
���� for���� ���°� �Ȱ����� �� �� �ݺ��� ������ ���� �迭�� ���ĵǹǷ� ���� �� ȿ����

���� ũ�� ���� �� �׳� �ϸ� �� �ȴٰ� ��... ��?

*/
public class StringSortedByDescendingOrder {
	
	public static void main(String args[]) {
		solution("Zbcdefg");
	}
	
    public static String solution(String s) {
    	char[] chars = s.toCharArray();
    	for(int i=1; i<chars.length; i++) {
    		for(int j=i; j>=1; j--) {
                System.out.println("��: " + chars[j-1] + chars[j]);
                System.out.println(Character.compare(chars[j-1], chars[j]));
                if(Character.compare(chars[j-1], chars[j]) < 0) {
    				char temp = chars[j];
    				chars[j] = chars[j-1];
    				chars[j-1] = temp;
                    System.out.println("���: " + chars[j-1] + chars[j]);
    			}
    		}
        }
        String answer = new String(chars);
        System.out.println(answer);
        return answer;
    }
}
