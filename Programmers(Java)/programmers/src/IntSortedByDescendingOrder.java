import java.util.Arrays;

/*
<���� ������������ ��ġ�ϱ�>

�Լ� solution�� ���� n�� �Ű������� �Է¹޽��ϴ�.
n�� �� �ڸ����� ū�ͺ��� ���� ������ ������ ���ο� ������ �������ּ���.
������� n�� 118372�� 873211�� �����ϸ� �˴ϴ�.

���� ����
n�� 1�̻� 8,000,000,000 ������ �ڿ����Դϴ�.

<Ǯ��>
������ ���ڿ��� �����
���ڿ��� ������������ ������ ��
���ĵ� ���ڿ��� �ٽ� ������

*/
public class IntSortedByDescendingOrder {
    public long solution(long n) {
    	String str = Long.toString(n);
    	int[] nums = new int[str.length()];
    	for(int i=0; i<str.length(); i++) {
    		nums[i] = Integer.parseInt(str.substring(i, i+1));
    	}
    	Arrays.sort(nums);
    	String sortedStr = "";
    	for(int i=nums.length-1; i>=0; i--) {
    		sortedStr += Integer.toString(nums[i]);
    	}
        long answer = Long.parseLong(sortedStr);
        return answer;
    }
}
