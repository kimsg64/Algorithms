import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/*

	<체육복>
	점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
	예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
	전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요. 
	
	제한사항
	전체 학생의 수는 2명 이상 30명 이하입니다.
	체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
	여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
	여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
	여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
	
	
	<나의 풀이>
	전체 학생 수에서 나오지 못하는 학생 수를 뺄 것이므로,	학생들의 상태를 아래와 같이 나눈다.
		1. 도난 x => 이미 수업 들으러 나감. happy!
		2. 도난 o, 여벌 o => 그냥 수업 들으러 가면 됨(lost, reserve에서 제거) happy!
		3. 도난 o, 앞뒤친구 여벌 o => saved!
		4. 도난 o, 앞뒤친구 여벌 x => abandoned...
	(전체 학생 - 4 상태인 학생)을 구하면 되므로, 4의 상태를 찾으면 된다.
	
	헷갈렸던 점은, 예를 들면 lost = [4, 6, 8]이고 reserve = [5, 7]인 경우,
	6이 어느 체육복을 빌리느냐에 따라 4나 8 중 하나가 체육복을 빌리지 못한다는 점 때문에, 앞선 선택이 이후의 선택에 영향을 준다고 생각하였으나
	결국 체육복을 입고 나갈 수 있는 것은 최대 체육복의 수와 같은 2명이므로 최적해를 구할 때 앞선 선택이 이후의 선택에 영향을 주지 않는다.
	따라서 탐욕법을 따라, 체육복이 없는 친구는 그냥 앞뒤 친구에게 여벌이 있으면 빌려서 나가면 된다.
	
*/


public class Uniform {

	public static void main(String[] args) {
		
		int n4 = 30;
		int[] lost4 = {1, 2, 4, 7, 8, 10, 11, 15, 16, 17, 18, 19, 21, 29, 30};
		int[] reserve4 = {1, 3, 5, 7, 9, 12, 14, 18, 20, 22, 23, 25, 28, 30};
		
		solution(n4, lost4, reserve4);
	}

    public static int solution(int n, int[] lost, int[] reserve) {
        int answer = n;
        
        // 다양한 메소드를 이용하고 원 배열의 불변성을 유지하기 위해 ArrayList로 변경
        List<Integer> reserveList = new ArrayList<Integer>();
        for(int i=0; i<reserve.length; i++) {
        	reserveList.add(reserve[i]);
        }

        // 상태 2인 친구들을 찾아서 수업 보내고, 상태 3,4인 친구들을 찾기 위해 ArrayList를 세팅
        List<Integer> lostList = new ArrayList<Integer>();
        // 체육복 도둑맞은 친구들 중(2, 3, 4)
        for(int i=0; i<lost.length; i++) {
        	// 여벌 옷을 가져온 애들 리스트에 없으면 리스트에 세팅(3, 4)
        	if(!reserveList.contains(lost[i])) {
        		lostList.add(lost[i]);
    		// 여벌 옷 가져온 애들 리스트에 있으면 수업 보냄(2)
        	} else {
        		reserveList.remove(reserveList.indexOf(lost[i]));
        	}
        }
        
        // 겹치는 애들을 찾기 위해 정렬
        Collections.sort(lostList);
        Collections.sort(reserveList);
        
        // 상태 3,4인 친구들을 체크해서 3인 애들 수업 보내기(-1)
        for(int i=0; i<lostList.size(); i++) {
        	// 혹시 -1인 친구들이 있으면 넘기기
        	if(lostList.get(i) == -1) {
        		continue;
        	}

        	if(reserveList.contains(lostList.get(i)-1)) {
        		// 3, 4번 애들 중, -1번 친구가 여벌을 가지고 있음 => saved 받고 나감(나간 애들은 -1로 값을 바꿈)
        		reserveList.set(reserveList.indexOf(lostList.get(i)-1), -1);
        		lostList.set(i, -1);
        	} else if(reserveList.contains(lostList.get(i)+1)) {
        		reserveList.set(reserveList.indexOf(lostList.get(i)+1), -1);        		
        		lostList.set(i, -1);
        	} else {
        		// 여벌 없음 => abandoned
        		answer -= 1;
        	}
        }
        System.out.println("제출답안: " + answer);
        return answer;
    }
}



