import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/*
���ɽð��� ������ ���, �Ϻ� �л��� ü������ �������߽��ϴ�. ������ ���� ü������ �ִ� �л��� �̵鿡�� ü������ �����ַ� �մϴ�. �л����� ��ȣ�� ü�� ������ �Ű��� �־�, �ٷ� �չ�ȣ�� �л��̳� �ٷ� �޹�ȣ�� �л����Ը� ü������ ������ �� �ֽ��ϴ�.
���� ���, 4�� �л��� 3�� �л��̳� 5�� �л����Ը� ü������ ������ �� �ֽ��ϴ�. ü������ ������ ������ ���� �� ���� ������ ü������ ������ ���� �ִ��� ���� �л��� ü�������� ���� �մϴ�.
��ü �л��� �� n, ü������ �������� �л����� ��ȣ�� ��� �迭 lost, ������ ü������ ������ �л����� ��ȣ�� ��� �迭 reserve�� �Ű������� �־��� ��, ü�������� ���� �� �ִ� �л��� �ִ��� return �ϵ��� solution �Լ��� �ۼ����ּ���. 

���ѻ���
��ü �л��� ���� 2�� �̻� 30�� �����Դϴ�.
ü������ �������� �л��� ���� 1�� �̻� n�� �����̰� �ߺ��Ǵ� ��ȣ�� �����ϴ�.
������ ü������ ������ �л��� ���� 1�� �̻� n�� �����̰� �ߺ��Ǵ� ��ȣ�� �����ϴ�.
���� ü������ �ִ� �л��� �ٸ� �л����� ü������ ������ �� �ֽ��ϴ�.
���� ü������ ������ �л��� ü������ ���������� �� �ֽ��ϴ�. �̶� �� �л��� ü������ �ϳ��� �������ߴٰ� �����ϸ�, ���� ü������ �ϳ��̱⿡ �ٸ� �л����Դ� ü������ ������ �� �����ϴ�.



�л��� ����
	1. ���� x => happy
	2. ���� o, ���� o => happy (lost, reserve���� ����)
	3. ���� o, +1||-1 ���� o => saved 
	4. ���� o, +1||-1 ���� x => abandoned

answer = n - abandoned

*/


public class Uniform_X {


    public int solution(int n, int[] lost, int[] reserve) {
        int answer = n;
        
        // �ٸ� �޼ҵ带 �̿��ϱ� ���� ArrayList�� ����
        List<Integer> reserveList = new ArrayList<Integer>();
        for(int i=0; i<reserve.length; i++) {
        	reserveList.add(reserve[i]);
        }

        // happy���� ���� 3, 4�� �ֵ��� lostList�� �̵� 
        List<Integer> lostList = new ArrayList<Integer>();
        for(int i=0; i<lost.length; i++) {
        	if(!reserveList.contains(lost[i])) {
        		lostList.add(lost[i]);
        	}
        }
        
        // ��ġ�� �ֵ��� ã�� ���� ����
        Collections.sort(lostList);
        Collections.sort(reserveList);
        
        for(int i=0; i<lostList.size(); i++) {
        	if(lostList.get(i)-1 == reserveList.get(i) || lostList.get(i)+1 == reserveList.get(i)) {
        		// 3, 4�� �ֵ� ��, -1�� ģ���� ������ ������ ���� => saved
        		lostList.set(i, -1);
        		reserveList.set(i, -1);
        		break;
        	} else {
        		// ���� ���� => abandoned
        		answer -= 1;
        	}
        }
        return answer;
    }
}



