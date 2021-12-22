import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/*
<실패율>
슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 요즘 신규 사용자의 수가 급감한 것이다.
원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.
이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다.
역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다. 오렐리를 위해 실패율을 구하는 코드를 완성하라.

실패율은 다음과 같이 정의한다.
스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

제한사항
스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
stages의 길이는 1 이상 200,000 이하이다.
stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.


<풀이>
스테이지 N에 도전한 사람의 수는 stages.length - (스테이지 1 ~ N-1에 도전한 사람의 수)
스테이지 N에 머물러 있는 사람의 수는 stages에 있는 N의 개수
이 둘을 계산하면 실패율이 나오므로... 
map을 만들어서 key = n-1, value = 실패율 로 저장한 뒤 value를 기준으로 내림차순 정렬
이후 key 반환해서 answer

다 깬 애들인 N+1은 고려할 필요 없다. 실패율이므로 집계에 영향 x

*/
public class FailureRate {
	
	public static void main(String[] args) {
		int[] arr = {2, 1, 2, 6, 2, 4, 3, 3};
		solution(5, arr);
	}

    public static int[] solution(int N, int[] stages) {
    	Map<Integer, Float> failureRate = new HashMap<Integer, Float>();
    	// 단계별 도전자 수, 단계별 루저 수 구하기
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
    		System.out.println(i + "단계에 머물러 있는 사람들 수: " + losersOfThisStage);
    		int challengersOfNthStage = stages.length - willBeSubtracted;
    		System.out.println(i + "단계 도전자 수: " + challengersOfNthStage);
    		
    		if(challengersOfNthStage == 0) {
    			failureRate.put(i, (float)0);
    		} else {
    			failureRate.put(i, (float)losersOfThisStage/challengersOfNthStage);    			
    		}
    		System.out.println(i + "단계의 실패율: " + failureRate.get(i));
		}

    	// 정렬
        List<Integer> keySet = new ArrayList<>(failureRate.keySet());
        Collections.sort(keySet, (value1, value2) -> (failureRate.get(value2).compareTo(failureRate.get(value1))));
        for(Integer key : keySet) { System.out.println("key : " + key + " , " + "value : " + failureRate.get(key)); }
        int[] answer = keySet.stream().mapToInt(Integer::intValue).toArray();

        // 확인
        for(int i=0; i<answer.length; i++) {
        	System.out.println(answer[i]);
        }
        
        return answer;
    }
}
