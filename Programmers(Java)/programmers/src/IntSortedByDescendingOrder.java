import java.util.Arrays;

/*
<정수 내림차순으로 배치하기>

함수 solution은 정수 n을 매개변수로 입력받습니다.
n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
예를들어 n이 118372면 873211을 리턴하면 됩니다.

제한 조건
n은 1이상 8,000,000,000 이하인 자연수입니다.

<풀이>
정수를 문자열로 만들고
문자열을 내림차순으로 정렬한 뒤
정렬된 문자열을 다시 정수로

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
