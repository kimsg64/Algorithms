/*

<���￡�� �輭�� ã��>
 
String�� �迭 seoul�� element�� "Kim"�� ��ġ x�� ã��, "�輭���� x�� �ִ�"�� String�� ��ȯ�ϴ� �Լ�, solution�� �ϼ��ϼ���.
seoul�� "Kim"�� ���� �� ���� ��Ÿ���� �߸��� ���� �ԷµǴ� ���� �����ϴ�.

���� ����
seoul�� ���� 1 �̻�, 1000 ������ �迭�Դϴ�.
seoul�� ���Ҵ� ���� 1 �̻�, 20 ������ ���ڿ��Դϴ�.
"Kim"�� �ݵ�� seoul �ȿ� ���ԵǾ� �ֽ��ϴ�.

<Ǯ��> for������ ã���� ��

*/


public class FindKimInSeoul {
    public String solution(String[] seoul) {
        String answer = "";
        for(int i=0; i<seoul.length; i++) {
        	if(seoul[i].equals("Kim")) {
        		answer = "�輭���� " + i + "�� �ִ�";
        		break;
        	} 
        }
        return answer;
    }
}
