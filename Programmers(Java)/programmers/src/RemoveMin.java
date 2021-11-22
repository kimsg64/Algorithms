import java.util.ArrayList;
import java.util.List;

/*

<제일 작은 수 제거하기>

정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

제한 조건
arr은 길이 1 이상인 배열입니다.
인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

나의 풀이: 최솟값 빼고(배열이라 정렬하면 안 됨) 길이가 0일 때는 -1 넣기

 */
public class RemoveMin {
	
	// 테스트케이스
	public static void main(String[] args) {
		
		int[] arr1 = {4,3,2,1};
		int[] arr2 = {10};		
		
		solution(arr1);
		solution(arr2);
	}
	
    public static int[] solution(int[] arr) {
    	List<Integer> answerList = new ArrayList<Integer>();
    	if(arr.length == 1) {
    		// 배열의 길이가 1이면 -1
    		answerList.add(-1);
    	} else {
    		// 1이 아닌 애들은 아래 작업 수행
	    	
	    	// 최솟값 구하기
    		int min = arr[0];
	        for(int i=0; i<arr.length; i++) {
	        	min = arr[i] < min ? arr[i] : min;
	        }
	        
	        // 리스트로 만들어서 min 빼고 넣기
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
