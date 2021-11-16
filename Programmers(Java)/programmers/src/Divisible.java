import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/*
<������ �������� ���� �迭>
array�� �� element �� divisor�� ������ �������� ���� ������������ ������ �迭�� ��ȯ�ϴ� �Լ�, solution�� �ۼ����ּ���.
divisor�� ������ �������� element�� �ϳ��� ���ٸ� �迭�� -1�� ��� ��ȯ�ϼ���.

���ѻ���
arr�� �ڿ����� ���� �迭�Դϴ�.
���� i, j�� ���� i �� j �̸� arr[i] �� arr[j] �Դϴ�.
divisor�� �ڿ����Դϴ�.
array�� ���� 1 �̻��� �迭�Դϴ�.


<���� Ǯ��>
divisor�� ������ �������� ��, �� divisor�� ����� array���� ã���� �ȴ�.
*/
public class Divisible {
    public int[] solution(int[] arr, int divisor) {
        List<Integer> divisibleList = new ArrayList<Integer>();
        for(int i=0; i<arr.length; i++) {
        	if(arr[i] % divisor == 0) {
        		divisibleList.add(arr[i]);
        	}
        }
        if(divisibleList.size() == 0) {
        	divisibleList.add(-1);
        }
        Collections.sort(divisibleList);
        int[] answer = divisibleList.stream().mapToInt(i -> i).toArray();
        return answer;
    }
}
