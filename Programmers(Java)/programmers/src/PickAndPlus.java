import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


/*
<�� �� �̾Ƽ� ���ϱ�>
���� �迭 numbers�� �־����ϴ�. numbers���� ���� �ٸ� �ε����� �ִ� �� ���� ���� �̾� ���ؼ� ���� �� �ִ� ��� ���� �迭�� ������������ ��� return �ϵ��� solution �Լ��� �ϼ����ּ���.
���ѻ���
numbers�� ���̴� 2 �̻� 100 �����Դϴ�.
numbers�� ��� ���� 0 �̻� 100 �����Դϴ�.

Ǯ��: numbers�� ���� �ٸ� �ε����� �ִ� �� ���� ��� ���� > set���� �ߺ� ���� > ������������ ����

 */
public class PickAndPlus {
    public int[] solution(int[] numbers) {
    	Set<Integer> answerSet = new HashSet<Integer>();
    	for(int i=0; i<numbers.length; i++) {
    		for(int j=i+1; j<numbers.length; j++) {
    			answerSet.add(numbers[i] + numbers[j]);
    		}
    	}
    	List<Integer> answerList = new ArrayList<Integer>(answerSet);
    	Collections.sort(answerList);
    	int[] answer = answerList.stream().mapToInt(i -> i).toArray();
        return answer;
    }
}
