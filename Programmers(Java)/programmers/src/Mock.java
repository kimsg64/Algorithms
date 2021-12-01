import java.util.ArrayList;
import java.util.List;

/*
<���ǰ��>
�����ڴ� ������ ������ ����� �ظ��Դϴ�. ������ ���ι��� ���ǰ�翡 ���� ������ ���� ������ �մϴ�. �����ڴ� 1�� �������� ������ �������� ������ ���� ����ϴ�.

1�� �����ڰ� ��� ���: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2�� �����ڰ� ��� ���: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3�� �����ڰ� ��� ���: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1�� �������� ������ ���������� ������ ������� ���� �迭 answers�� �־����� ��, ���� ���� ������ ���� ����� �������� �迭�� ��� return �ϵ��� solution �Լ��� �ۼ����ּ���.

���� ����
������ �ִ� 10,000 ������ �����Ǿ��ֽ��ϴ�.
������ ������ 1, 2, 3, 4, 5�� �ϳ��Դϴ�.
���� ���� ������ ���� ����� ������ ���, return�ϴ� ���� �������� �������ּ���.


<���� Ǯ��>
������1: 12345 �ݺ�
������2: 21232425 �ݺ�
������3: 3311224455 �ݺ�
�̹Ƿ�... ���� ���� �迭�ϰ� ���ؼ� �� ���� ��ġ�ϴ��� Ȯ���ϸ� �ȴ�.

���� ������ �����µ� �ڹٿ��� maxValue�� ã�� �޼��尡 ��� �򰥷ȴ�.
�⺻�� �� ������ ���� ����

 */
public class Mock {
	
	public static void main(String[] args) {
		int[] answers = {1, 2, 3, 4, 5,
				1, 2, 1, 2, 3,
				5, 5, 5, 5, 5, 
				4, 4, 3, 4, 1}; // �ε��� 0~6�� ����(7��)
		solution(answers);
	}
	
	
    public static int[] solution(int[] answers) {
    	int[] giveup_man1 = {1, 2, 3, 4, 5};
    	int hope1 = 0;
    	int[] giveup_man2 = {2, 1, 2, 3, 2, 4, 2, 5};
    	int hope2 = 0;
    	int[] giveup_man3 = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
    	int hope3 = 0;
   	
    	for(int i=0; i<giveup_man1.length; i++) {
    		for(int j=0; j<answers.length; j++) {
    			if(j % 5 == i) {
    				hope1 = answers[j] == giveup_man1[i] ? hope1 + 1 : hope1;
    			}
    		}
    	}
    	for(int i=0; i<giveup_man2.length; i++) {
    		for(int j=0; j<answers.length; j++) {
    			if(j % 8 == i) {
    				hope2 = answers[j] == giveup_man2[i] ? hope2 + 1 : hope2;
    			}
    		}
    	}
    	for(int i=0; i<giveup_man3.length; i++) {
    		for(int j=0; j<answers.length; j++) {
    			if(j % 10 == i) {
    				hope3 = answers[j] == giveup_man3[i] ? hope3 + 1 : hope3;
    			}
    		}
    	}

    	int[] hopes = { hope1, hope2, hope3 };
    	int greatest = hope1 >= hope2 && hope1 >= hope3 ? hope1
    				 : hope2 >= hope3 ? hope2
    				 : hope3;
    	// �����ڴ� ��� ���� ���·� ��·�� ���� ū ���� greatest�� ��� ����
    	// ������ ������ �迭�� ���Ӱ� ����� �ȴ�.
		List<Integer> answerList = new ArrayList<Integer>();
		for(int i=0; i<hopes.length; i++) {
			if(hopes[i] == greatest) {
				answerList.add(i+1);
			}
		}
		int[] answer = answerList.stream().mapToInt(i -> i).toArray();
        return answer;
    }
}
