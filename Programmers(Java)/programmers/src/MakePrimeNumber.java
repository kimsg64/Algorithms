import java.util.ArrayList;
import java.util.List;

/*
<�Ҽ� �����>
�־��� ���� �� 3���� ���� ������ �� �Ҽ��� �Ǵ� ����� ������ ���Ϸ��� �մϴ�.
���ڵ��� ����ִ� �迭 nums�� �Ű������� �־��� ��, nums�� �ִ� ���ڵ� �� ���� �ٸ� 3���� ��� ������ �� �Ҽ��� �Ǵ� ����� ������ return �ϵ��� solution �Լ��� �ϼ����ּ���.

���ѻ���
nums�� ����ִ� ������ ������ 3�� �̻� 50�� �����Դϴ�.
nums�� �� ���Ҵ� 1 �̻� 1,000 ������ �ڿ����̸�, �ߺ��� ���ڰ� ������� �ʽ��ϴ�.



<Ǯ��>
1. �� ���� ���ڸ� ���ϴ� ����� �� ���ϱ�
2. �ش� ������� �Ҽ��� ���� üũ�ϱ�

������ ��������Ͽ�... �Ҽ��� �ߺ��Ǿ� �ִ� ��쵵 ī�����ؾ� �Ѵ�. ���� set�� �� �ʿ䰡 ����!

*/

public class MakePrimeNumber {
	
	public static void main(String[] args) {
		int[] nums = {1,2,3,4};
		solution(nums);
	}
	
    public static int solution(int[] nums) {
    	
    	List<Integer> plusList = new ArrayList<Integer>();
    	for(int i=0; i<nums.length; i++) {
    		for(int j=i+1; j<nums.length; j++) {
    			for(int k=j+1; k<nums.length; k++) {
    				System.out.println("nums[i]: " + nums[i] + ", nums[j]: " + nums[j] + ", nums[k]: " + nums[k]);
    				if((nums[i] + nums[j] + nums[k]) % 2 != 0) {
    					plusList.add(nums[i] + nums[j] + nums[k]);
    					System.out.println("��: " + (nums[i] + nums[j] + nums[k]));
    				}
    			}
    		}
    	}
    	for(Integer plus : plusList) { System.out.println("Plus Result : " + plus); }

        // �Ҽ� �˻� => 1�� �ڱ� �ڽ� �ܿ� ����� �ִ°��� üũ(3���� ��Ʈn������)
        List<Integer> primeNums = new ArrayList<Integer>();
        for(int i=0; i<plusList.size(); i++) {
        	for(int j=2; j<=Math.sqrt(plusList.get(i)); j++) {
        		if(plusList.get(i) % j == 0) {
        			break;
        		} else {
        			if(j == (int)Math.sqrt(plusList.get(i))) {
        				primeNums.add(plusList.get(i));
        			}
        			continue;
        		}
        	}
        }
        for(Integer prime : primeNums) { System.out.println("is Prime Number? : " + prime); }
        
        int answer = primeNums.size();
        return answer;
    }
}
