import java.util.ArrayList;
import java.util.List;

/*

<���� ���� �� �����ϱ�>

������ ������ �迭, arr ���� ���� ���� ���� ������ �迭�� �����ϴ� �Լ�, solution�� �ϼ����ּ���.
��, �����Ϸ��� �迭�� �� �迭�� ��쿣 �迭�� -1�� ä�� �����ϼ���.
������� arr�� [4,3,2,1]�� ���� [4,3,2]�� ���� �ϰ�, [10]�� [-1]�� ���� �մϴ�.

���� ����
arr�� ���� 1 �̻��� �迭�Դϴ�.
�ε��� i, j�� ���� i �� j�̸� arr[i] �� arr[j] �Դϴ�.

���� Ǯ��: �ּڰ� ����(�迭�̶� �����ϸ� �� ��) ���̰� 0�� ���� -1 �ֱ�

 */
public class RemoveMin {
	
	// �׽�Ʈ���̽�
	public static void main(String[] args) {
		
		int[] arr1 = {4,3,2,1};
		int[] arr2 = {10};		
		
		solution(arr1);
		solution(arr2);
	}
	
    public static int[] solution(int[] arr) {
    	List<Integer> answerList = new ArrayList<Integer>();
    	if(arr.length == 1) {
    		// �迭�� ���̰� 1�̸� -1
    		answerList.add(-1);
    	} else {
    		// 1�� �ƴ� �ֵ��� �Ʒ� �۾� ����
	    	
	    	// �ּڰ� ���ϱ�
    		int min = arr[0];
	        for(int i=0; i<arr.length; i++) {
	        	min = arr[i] < min ? arr[i] : min;
	        }
	        
	        // ����Ʈ�� ���� min ���� �ֱ�
        	for(int i=0; i<arr.length; i++) {
        		if(arr[i] != min) {
        			answerList.add(arr[i]);
        		}
        	}
        }
    	int[] answer = answerList.stream().mapToInt(i -> i).toArray();
    	return answer;
    }
}
