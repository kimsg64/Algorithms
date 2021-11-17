import java.util.Arrays;

/*
	<�������� ���� ����>
	
	������ ������ �������� �����濡 �����Ͽ����ϴ�. �� �� ���� ������ �����ϰ�� ��� ������ �������� �����Ͽ����ϴ�.
	
	�����濡 ������ �������� �̸��� ��� �迭 participant�� ������ �������� �̸��� ��� �迭 completion�� �־��� ��, �������� ���� ������ �̸��� return �ϵ��� solution �Լ��� �ۼ����ּ���.
	
	���ѻ���
	������ ��⿡ ������ ������ ���� 1�� �̻� 100,000�� �����Դϴ�.
	completion�� ���̴� participant�� ���̺��� 1 �۽��ϴ�.
	�������� �̸��� 1�� �̻� 20�� ������ ���ĺ� �ҹ��ڷ� �̷���� �ֽ��ϴ�.
	������ �߿��� ���������� ���� �� �ֽ��ϴ�.
*/
public class Loser {
	public static String solution(String[] participant, String[] completion) {
		String answer = "";
	    Arrays.sort(participant);
	    Arrays.sort(completion);
		// ��� �����ڿ� ���� ���ؼ�
		// "���� �� ������ != ���� �� ������"�� �Ǵ� ���������� participant[i]�� �������� ���� ����
		// "���� �� ������ != ���� �� ������"�� �Ǵ� ������ ���ٸ� participant�� ������ ��Ұ� �������� ���� ����
		for(int i=0; i<completion.length; i++) {
			if(!completion[i].equals(participant[i])) {
				answer = participant[i];
                break;
			}
		}
		if(answer.equals("")) {
			answer = participant[participant.length - 1];
		}
	    return answer;
	}
}


/*

�ڡڡڡڡ�
==�� ���װ� ������ �ּҰ��� ���ϴ� �� ������, equals()�� �޼ҵ��� ���� �Ķ������ ������ ���ϴ� �޼ҵ��̹Ƿ�
���� Ÿ���� �ƴ� String�� ���� ��, ���� �����̶� �ٸ� �ּҸ� ���� �� �����Ƿ� ���븸 ���Ϸ��� equals()�� ��� �Ѵ�!

*/