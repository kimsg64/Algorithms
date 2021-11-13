import java.util.ArrayList;
import java.util.List;

/*
<���� ���ڴ� �Ⱦ�>
�迭 arr�� �־����ϴ�. �迭 arr�� �� ���Ҵ� ���� 0���� 9������ �̷���� �ֽ��ϴ�.
�̶�, �迭 arr���� ���������� ��Ÿ���� ���ڴ� �ϳ��� ����� ���� �����Ϸ��� �մϴ�.
��, ���ŵ� �� ���� ������ ��ȯ�� ���� �迭 arr�� ���ҵ��� ������ �����ؾ� �մϴ�.
�迭 arr���� ���������� ��Ÿ���� ���ڴ� �����ϰ� ���� ������ return �ϴ� solution �Լ��� �ϼ��� �ּ���.
*/

public class AvoidSameNumber {
    public int[] solution(int []arr) {
    	List<Integer> answerList = new ArrayList<Integer>();
    	answerList.add(arr[0]);
        for(int i=1; i<arr.length; i++) {
        	if(arr[i] == arr[i-1]) {
        		continue;                                                                                                                                                            
        	} else {
        		answerList.add(arr[i]);
        	}
        }
        int[] answer = answerList.stream().mapToInt(i -> i).toArray();
        return answer;
    }
}
