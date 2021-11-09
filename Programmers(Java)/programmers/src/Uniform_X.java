import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/*
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요. 

제한사항
전체 학생의 수는 2명 이상 30명 이하입니다.
체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.



학생의 상태
	1. 도난 x => happy
	2. 도난 o, 여벌 o => happy (lost, reserve에서 제거)
	3. 도난 o, +1||-1 여벌 o => saved 
	4. 도난 o, +1||-1 여벌 x => abandoned

answer = n - abandoned

*/


public class Uniform_X {


    public int solution(int n, int[] lost, int[] reserve) {
        int answer = n;
        
        // 다른 메소드를 이용하기 위해 ArrayList로 변경
        List<Integer> reserveList = new ArrayList<Integer>();
        for(int i=0; i<reserve.length; i++) {
        	reserveList.add(reserve[i]);
        }

        // happy하지 않은 3, 4번 애들을 lostList로 이동 
        List<Integer> lostList = new ArrayList<Integer>();
        for(int i=0; i<lost.length; i++) {
        	if(!reserveList.contains(lost[i])) {
        		lostList.add(lost[i]);
        	}
        }
        
        // 겹치는 애들을 찾기 위해 정렬
        Collections.sort(lostList);
        Collections.sort(reserveList);
        
        for(int i=0; i<lostList.size(); i++) {
        	if(lostList.get(i)-1 == reserveList.get(i) || lostList.get(i)+1 == reserveList.get(i)) {
        		// 3, 4번 애들 중, -1번 친구가 여벌을 가지고 있음 => saved
        		lostList.set(i, -1);
        		reserveList.set(i, -1);
        		break;
        	} else {
        		// 여벌 없음 => abandoned
        		answer -= 1;
        	}
        }
        return answer;
    }
}



