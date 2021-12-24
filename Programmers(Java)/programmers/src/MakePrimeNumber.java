import java.util.ArrayList;
import java.util.List;

/*
<소수 만들기>
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

제한사항
nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.



<풀이>
1. 세 개의 숫자를 더하는 경우의 수 구하기
2. 해당 결과에서 소수의 개수 체크하기

문제가 괴상망측하여... 소수가 중복되어 있는 경우도 카운팅해야 한다. 따라서 set을 쓸 필요가 없음!

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
    					System.out.println("합: " + (nums[i] + nums[j] + nums[k]));
    				}
    			}
    		}
    	}
    	for(Integer plus : plusList) { System.out.println("Plus Result : " + plus); }

        // 소수 검사 => 1과 자기 자신 외에 약수가 있는가를 체크(3부터 루트n까지만)
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
