import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/*
<������>
���� ���� ������ �������� ū ��ο� ������. �׳డ ���� ������ ��õ���� �뼺���� �ŵ�����, ���� �ű� ������� ���� �ް��� ���̴�.
������ �ű� ����ڿ� ���� ����� ���̿� �������� ���̰� �ʹ� ū ���� ��������.
�� ������ ��� �ұ� ��� �� �׳�� �������� ���� �ð��� �÷��� ���̵��� �����ϱ�� �ߴ�.
���� ���� �����ڶ� ��κ��� ������ ���� ����������, �������� ���ϴ� �κп��� ���⿡ ������ ���Ҵ�. �������� ���� �������� ���ϴ� �ڵ带 �ϼ��϶�.

�������� ������ ���� �����Ѵ�.
���������� ���������� ���� Ŭ�������� ���� �÷��̾��� �� / ���������� ������ �÷��̾� ��
��ü ���������� ���� N, ������ �̿��ϴ� ����ڰ� ���� �����ִ� ���������� ��ȣ�� ��� �迭 stages�� �Ű������� �־��� ��, �������� ���� ������������ ������������ ���������� ��ȣ�� ����ִ� �迭�� return �ϵ��� solution �Լ��� �ϼ��϶�.

���ѻ���
���������� ���� N�� 1 �̻� 500 ������ �ڿ����̴�.
stages�� ���̴� 1 �̻� 200,000 �����̴�.
stages���� 1 �̻� N + 1 ������ �ڿ����� ����ִ�.
�� �ڿ����� ����ڰ� ���� ���� ���� ���������� ��ȣ�� ��Ÿ����.
��, N + 1 �� ������ ��������(N ��° ��������) ���� Ŭ���� �� ����ڸ� ��Ÿ����.
���� �������� ���� ���������� �ִٸ� ���� ��ȣ�� ���������� ���� ������ �ϸ� �ȴ�.
���������� ������ ������ ���� ��� �ش� ���������� �������� 0 ���� �����Ѵ�.


<Ǯ��>
�������� N�� ������ ����� ���� stages.length - (�������� 1 ~ N-1�� ������ ����� ��)
�������� N�� �ӹ��� �ִ� ����� ���� stages�� �ִ� N�� ����
�� ���� ����ϸ� �������� �����Ƿ�... 
map�� ���� key = n-1, value = ������ �� ������ �� value�� �������� �������� ����
���� key ��ȯ�ؼ� answer

�� �� �ֵ��� N+1�� ����� �ʿ� ����. �������̹Ƿ� ���迡 ���� x

*/
public class FailureRate {
	
	public static void main(String[] args) {
		int[] arr = {2, 1, 2, 6, 2, 4, 3, 3};
		solution(5, arr);
	}

    public static int[] solution(int N, int[] stages) {
    	Map<Integer, Float> failureRate = new HashMap<Integer, Float>();
    	// �ܰ躰 ������ ��, �ܰ躰 ���� �� ���ϱ�
    	int willBeSubtracted = 0;
    	for(int i=1; i<=N; i++) {
    		int losersOfThisStage = 0;
    		for(int j=0; j<stages.length; j++) {
    			if(stages[j] == i-1) {
    				willBeSubtracted++;
    			} else if(stages[j] == i) {
    				losersOfThisStage++;
    			}
    		}
    		System.out.println(i + "�ܰ迡 �ӹ��� �ִ� ����� ��: " + losersOfThisStage);
    		int challengersOfNthStage = stages.length - willBeSubtracted;
    		System.out.println(i + "�ܰ� ������ ��: " + challengersOfNthStage);
    		
    		if(challengersOfNthStage == 0) {
    			failureRate.put(i, (float)0);
    		} else {
    			failureRate.put(i, (float)losersOfThisStage/challengersOfNthStage);    			
    		}
    		System.out.println(i + "�ܰ��� ������: " + failureRate.get(i));
		}

    	// ����
        List<Integer> keySet = new ArrayList<>(failureRate.keySet());
        Collections.sort(keySet, (value1, value2) -> (failureRate.get(value2).compareTo(failureRate.get(value1))));
        for(Integer key : keySet) { System.out.println("key : " + key + " , " + "value : " + failureRate.get(key)); }
        int[] answer = keySet.stream().mapToInt(Integer::intValue).toArray();

        // Ȯ��
        for(int i=0; i<answer.length; i++) {
        	System.out.println(answer[i]);
        }
        
        return answer;
    }
}
